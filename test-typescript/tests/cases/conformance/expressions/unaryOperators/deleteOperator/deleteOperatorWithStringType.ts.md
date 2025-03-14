__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    35,
    1101
  ],
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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                45,
                53
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  47,
                  53
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
              }
            },
            "range": [
              39,
              53
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            39,
            53
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        35,
        54
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
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
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                66,
                76
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    68,
                    74
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
                },
                "range": [
                  68,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
              59,
              76
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  80,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  84,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              79,
              90
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          },
          "range": [
            59,
            90
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        55,
        91
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "\"abc\"",
              "value": "abc",
              "range": [
                125,
                130
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "range": [
              118,
              131
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 5
              },
              "start": {
                "column": 25,
                "line": 5
              }
            }
          }
        ],
        "range": [
          116,
          133
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 23,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          102,
          105
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        },
        "range": [
          107,
          115
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            109,
            115
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        }
      },
      "range": [
        93,
        133
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          143,
          200
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                156,
                157
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
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              },
              "range": [
                157,
                165
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  159,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              149,
              166
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
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
              "name": "foo",
              "optional": false,
              "range": [
                178,
                181
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
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
                181,
                198
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        193,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      186,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  184,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
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
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              171,
              198
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 8,
            "line": 7
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
          141,
          142
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        135,
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              216,
              237
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      },
                      "range": [
                        228,
                        236
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          230,
                          236
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 18,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      227,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    227,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                223,
                237
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          210,
          239
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          208,
          209
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        201,
        239
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "objA",
            "optional": false,
            "range": [
              245,
              249
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                256,
                257
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "range": [
              252,
              259
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          },
          "range": [
            245,
            259
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        241,
        260
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "range": [
              285,
              301
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "range": [
                311,
                317
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 18
                },
                "start": {
                  "column": 30,
                  "line": 18
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              304,
              317
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 18
              },
              "start": {
                "column": 23,
                "line": 18
              }
            }
          },
          "range": [
            285,
            317
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        281,
        318
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "range": [
              323,
              339
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "range": [
                349,
                356
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 30,
                  "line": 19
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              342,
              356
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 23,
                "line": 19
              }
            }
          },
          "range": [
            323,
            356
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        319,
        357
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "range": [
              386,
              402
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                412,
                414
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 22
                },
                "start": {
                  "column": 30,
                  "line": 22
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              405,
              414
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          "range": [
            386,
            414
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        382,
        415
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "range": [
              420,
              436
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      448,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 23
                      },
                      "start": {
                        "column": 32,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      451,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    448,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 23
                    },
                    "start": {
                      "column": 32,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      455,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 23
                      },
                      "start": {
                        "column": 39,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      458,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 23
                      },
                      "start": {
                        "column": 42,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    455,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 23
                    },
                    "start": {
                      "column": 39,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                446,
                462
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 23
                },
                "start": {
                  "column": 30,
                  "line": 23
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              439,
              462
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          },
          "range": [
            420,
            462
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        416,
        463
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "range": [
              468,
              484
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      496,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 24
                      },
                      "start": {
                        "column": 32,
                        "line": 24
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      499,
                      501
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 24
                      },
                      "start": {
                        "column": 35,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    496,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 24
                    },
                    "start": {
                      "column": 32,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      503,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 24
                      },
                      "start": {
                        "column": 39,
                        "line": 24
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
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              530,
                              531
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 24
                              },
                              "start": {
                                "column": 66,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            523,
                            532
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 24
                            },
                            "start": {
                              "column": 59,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        521,
                        534
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 24
                        },
                        "start": {
                          "column": 57,
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 24
                            },
                            "start": {
                              "column": 44,
                              "line": 24
                            }
                          },
                          "range": [
                            508,
                            516
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              510,
                              516
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 24
                              },
                              "start": {
                                "column": 46,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          507,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 24
                          },
                          "start": {
                            "column": 43,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      506,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 24
                      },
                      "start": {
                        "column": 42,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    503,
                    534
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 24
                    },
                    "start": {
                      "column": 39,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                494,
                536
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 24
                },
                "start": {
                  "column": 30,
                  "line": 24
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              487,
              536
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          "range": [
            468,
            536
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 24
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
        464,
        537
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "range": [
              570,
              586
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  596,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 27
                  },
                  "start": {
                    "column": 30,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  601,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 27
                  },
                  "start": {
                    "column": 35,
                    "line": 27
                  }
                }
              },
              "range": [
                596,
                602
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 27
                },
                "start": {
                  "column": 30,
                  "line": 27
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              589,
              602
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 27
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          "range": [
            570,
            602
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        566,
        603
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "range": [
              608,
              624
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  634,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 30,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  636,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 28
                  },
                  "start": {
                    "column": 32,
                    "line": 28
                  }
                }
              },
              "range": [
                634,
                637
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 28
                },
                "start": {
                  "column": 30,
                  "line": 28
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              627,
              637
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 28
              },
              "start": {
                "column": 23,
                "line": 28
              }
            }
          },
          "range": [
            608,
            637
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        604,
        638
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 28
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "range": [
              643,
              659
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "range": [
                  669,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 29
                  },
                  "start": {
                    "column": 30,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  677,
                  678
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 29
                  },
                  "start": {
                    "column": 38,
                    "line": 29
                  }
                }
              },
              "range": [
                669,
                679
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 29
                },
                "start": {
                  "column": 30,
                  "line": 29
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              662,
              679
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 29
              },
              "start": {
                "column": 23,
                "line": 29
              }
            }
          },
          "range": [
            643,
            679
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        639,
        680
      ],
      "loc": {
        "end": {
          "column": 41,
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "range": [
              685,
              701
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  711,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 30
                  },
                  "start": {
                    "column": 30,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                711,
                716
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 30
                },
                "start": {
                  "column": 30,
                  "line": 30
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              704,
              716
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 30
              },
              "start": {
                "column": 23,
                "line": 30
              }
            }
          },
          "range": [
            685,
            716
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        681,
        717
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 30
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "range": [
              722,
              739
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
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
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
                    749,
                    750
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 31
                    },
                    "start": {
                      "column": 31,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    751,
                    754
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 31
                    },
                    "start": {
                      "column": 33,
                      "line": 31
                    }
                  }
                },
                "range": [
                  749,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 31
                  },
                  "start": {
                    "column": 31,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                749,
                756
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 31
                },
                "start": {
                  "column": 31,
                  "line": 31
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              742,
              756
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 31
              },
              "start": {
                "column": 24,
                "line": 31
              }
            }
          },
          "range": [
            722,
            756
          ],
          "loc": {
            "end": {
              "column": 38,
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
      "kind": "var",
      "range": [
        718,
        757
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "range": [
              762,
              779
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "range": [
                  790,
                  796
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 32
                  },
                  "start": {
                    "column": 32,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "range": [
                  799,
                  805
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 32
                  },
                  "start": {
                    "column": 41,
                    "line": 32
                  }
                }
              },
              "range": [
                790,
                805
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 32
                },
                "start": {
                  "column": 32,
                  "line": 32
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              782,
              806
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 32
              },
              "start": {
                "column": 24,
                "line": 32
              }
            }
          },
          "range": [
            762,
            806
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        758,
        807
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "range": [
              812,
              829
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    853,
                    854
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 33
                    },
                    "start": {
                      "column": 45,
                      "line": 33
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
                  "name": "STRING",
                  "optional": false,
                  "range": [
                    839,
                    845
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 33
                    },
                    "start": {
                      "column": 31,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "range": [
                    846,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 33
                    },
                    "start": {
                      "column": 38,
                      "line": 33
                    }
                  }
                },
                "range": [
                  839,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 33
                  },
                  "start": {
                    "column": 31,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                839,
                855
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 33
                },
                "start": {
                  "column": 31,
                  "line": 33
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              832,
              855
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 33
              }
            }
          },
          "range": [
            812,
            855
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        808,
        856
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "range": [
              891,
              908
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "range": [
                  925,
                  931
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 36
                  },
                  "start": {
                    "column": 38,
                    "line": 36
                  }
                }
              },
              "operator": "delete",
              "prefix": true,
              "range": [
                918,
                931
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 36
                },
                "start": {
                  "column": 31,
                  "line": 36
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              911,
              931
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 36
              },
              "start": {
                "column": 24,
                "line": 36
              }
            }
          },
          "range": [
            891,
            931
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        887,
        932
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 36
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
            "name": "ResultIsBoolean14",
            "optional": false,
            "range": [
              937,
              954
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "range": [
                      979,
                      985
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 37
                      },
                      "start": {
                        "column": 46,
                        "line": 37
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "range": [
                      988,
                      994
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 37
                      },
                      "start": {
                        "column": 55,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    979,
                    994
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 37
                    },
                    "start": {
                      "column": 46,
                      "line": 37
                    }
                  }
                },
                "operator": "delete",
                "prefix": true,
                "range": [
                  971,
                  995
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 37
                  },
                  "start": {
                    "column": 38,
                    "line": 37
                  }
                }
              },
              "operator": "delete",
              "prefix": true,
              "range": [
                964,
                995
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 37
                },
                "start": {
                  "column": 31,
                  "line": 37
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              957,
              995
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 37
              },
              "start": {
                "column": 24,
                "line": 37
              }
            }
          },
          "range": [
            937,
            995
          ],
          "loc": {
            "end": {
              "column": 62,
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
        933,
        996
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "\"\"",
          "value": "",
          "range": [
            1034,
            1036
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 40
            },
            "start": {
              "column": 7,
              "line": 40
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          1027,
          1036
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1027,
        1037
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "range": [
            1045,
            1051
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 41
            },
            "start": {
              "column": 7,
              "line": 41
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          1038,
          1051
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1038,
        1052
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 41
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
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "range": [
            1060,
            1067
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 42
            },
            "start": {
              "column": 7,
              "line": 42
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          1053,
          1067
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        1053,
        1068
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              1076,
              1079
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 43
              },
              "start": {
                "column": 7,
                "line": 43
              }
            }
          },
          "optional": false,
          "range": [
            1076,
            1081
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 43
            },
            "start": {
              "column": 7,
              "line": 43
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          1069,
          1081
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1069,
        1082
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  1090,
                  1094
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 44
                  },
                  "start": {
                    "column": 7,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1095,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 44
                  },
                  "start": {
                    "column": 12,
                    "line": 44
                  }
                }
              },
              "range": [
                1090,
                1096
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 44
                },
                "start": {
                  "column": 7,
                  "line": 44
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              1083,
              1096
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 44
              },
              "start": {
                "column": 0,
                "line": 44
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                1097,
                1098
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
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                1099,
                1100
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 44
                },
                "start": {
                  "column": 16,
                  "line": 44
                }
              }
            },
            "range": [
              1097,
              1100
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          }
        ],
        "range": [
          1083,
          1100
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1083,
        1101
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 18,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
