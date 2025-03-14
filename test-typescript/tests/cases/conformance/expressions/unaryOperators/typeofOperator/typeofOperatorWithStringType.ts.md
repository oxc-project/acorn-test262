__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    35,
    1314
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
            "name": "ResultIsString1",
            "optional": false,
            "range": [
              285,
              300
            ],
            "loc": {
              "end": {
                "column": 19,
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
                310,
                316
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 18
                },
                "start": {
                  "column": 29,
                  "line": 18
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              303,
              316
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 18
              },
              "start": {
                "column": 22,
                "line": 18
              }
            }
          },
          "range": [
            285,
            316
          ],
          "loc": {
            "end": {
              "column": 35,
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
        317
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "ResultIsString2",
            "optional": false,
            "range": [
              322,
              337
            ],
            "loc": {
              "end": {
                "column": 19,
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
                347,
                354
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 19
                },
                "start": {
                  "column": 29,
                  "line": 19
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              340,
              354
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 22,
                "line": 19
              }
            }
          },
          "range": [
            322,
            354
          ],
          "loc": {
            "end": {
              "column": 36,
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
        318,
        355
      ],
      "loc": {
        "end": {
          "column": 37,
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
            "name": "ResultIsString3",
            "optional": false,
            "range": [
              384,
              399
            ],
            "loc": {
              "end": {
                "column": 19,
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
                409,
                411
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 22
                },
                "start": {
                  "column": 29,
                  "line": 22
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              402,
              411
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
              }
            }
          },
          "range": [
            384,
            411
          ],
          "loc": {
            "end": {
              "column": 31,
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
        380,
        412
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "ResultIsString4",
            "optional": false,
            "range": [
              417,
              432
            ],
            "loc": {
              "end": {
                "column": 19,
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
                      444,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 31,
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
                      447,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 34,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    444,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 23
                    },
                    "start": {
                      "column": 31,
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
                      451,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 23
                      },
                      "start": {
                        "column": 38,
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
                      454,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 23
                      },
                      "start": {
                        "column": 41,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    451,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 23
                    },
                    "start": {
                      "column": 38,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                442,
                458
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 23
                },
                "start": {
                  "column": 29,
                  "line": 23
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              435,
              458
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 23
              },
              "start": {
                "column": 22,
                "line": 23
              }
            }
          },
          "range": [
            417,
            458
          ],
          "loc": {
            "end": {
              "column": 45,
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
        413,
        459
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "ResultIsString5",
            "optional": false,
            "range": [
              464,
              479
            ],
            "loc": {
              "end": {
                "column": 19,
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
                      491,
                      492
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 24
                      },
                      "start": {
                        "column": 31,
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
                      494,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 24
                      },
                      "start": {
                        "column": 34,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    491,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 24
                    },
                    "start": {
                      "column": 31,
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
                      498,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 24
                      },
                      "start": {
                        "column": 38,
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
                              525,
                              526
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 24
                              },
                              "start": {
                                "column": 65,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            518,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 24
                            },
                            "start": {
                              "column": 58,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        516,
                        529
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 24
                        },
                        "start": {
                          "column": 56,
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
                              "column": 51,
                              "line": 24
                            },
                            "start": {
                              "column": 43,
                              "line": 24
                            }
                          },
                          "range": [
                            503,
                            511
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              505,
                              511
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 24
                              },
                              "start": {
                                "column": 45,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          502,
                          511
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 24
                          },
                          "start": {
                            "column": 42,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      501,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 24
                      },
                      "start": {
                        "column": 41,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    498,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 24
                    },
                    "start": {
                      "column": 38,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                489,
                531
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 24
                },
                "start": {
                  "column": 29,
                  "line": 24
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              482,
              531
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "range": [
            464,
            531
          ],
          "loc": {
            "end": {
              "column": 71,
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
        460,
        532
      ],
      "loc": {
        "end": {
          "column": 72,
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
            "name": "ResultIsString6",
            "optional": false,
            "range": [
              565,
              580
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  590,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
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
                  595,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 27
                  },
                  "start": {
                    "column": 34,
                    "line": 27
                  }
                }
              },
              "range": [
                590,
                596
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 27
                },
                "start": {
                  "column": 29,
                  "line": 27
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              583,
              596
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
          "range": [
            565,
            596
          ],
          "loc": {
            "end": {
              "column": 35,
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
        561,
        597
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "ResultIsString7",
            "optional": false,
            "range": [
              602,
              617
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  627,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
                "name": "n",
                "optional": false,
                "range": [
                  629,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 28
                  },
                  "start": {
                    "column": 31,
                    "line": 28
                  }
                }
              },
              "range": [
                627,
                630
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 28
                },
                "start": {
                  "column": 29,
                  "line": 28
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              620,
              630
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 28
              },
              "start": {
                "column": 22,
                "line": 28
              }
            }
          },
          "range": [
            602,
            630
          ],
          "loc": {
            "end": {
              "column": 32,
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
        598,
        631
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "name": "ResultIsString8",
            "optional": false,
            "range": [
              636,
              651
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  661,
                  668
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 29
                  },
                  "start": {
                    "column": 29,
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
                  669,
                  670
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 37,
                    "line": 29
                  }
                }
              },
              "range": [
                661,
                671
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 29
                },
                "start": {
                  "column": 29,
                  "line": 29
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              654,
              671
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            }
          },
          "range": [
            636,
            671
          ],
          "loc": {
            "end": {
              "column": 39,
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
        632,
        672
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "ResultIsString9",
            "optional": false,
            "range": [
              677,
              692
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  702,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 30
                  },
                  "start": {
                    "column": 29,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                702,
                707
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 30
                },
                "start": {
                  "column": 29,
                  "line": 30
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              695,
              707
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 30
              },
              "start": {
                "column": 22,
                "line": 30
              }
            }
          },
          "range": [
            677,
            707
          ],
          "loc": {
            "end": {
              "column": 34,
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
        673,
        708
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "ResultIsString10",
            "optional": false,
            "range": [
              713,
              729
            ],
            "loc": {
              "end": {
                "column": 20,
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
                    739,
                    740
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 31
                    },
                    "start": {
                      "column": 30,
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
                    741,
                    744
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 31
                    },
                    "start": {
                      "column": 32,
                      "line": 31
                    }
                  }
                },
                "range": [
                  739,
                  744
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 31
                  },
                  "start": {
                    "column": 30,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                739,
                746
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 31
                },
                "start": {
                  "column": 30,
                  "line": 31
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              732,
              746
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 31
              },
              "start": {
                "column": 23,
                "line": 31
              }
            }
          },
          "range": [
            713,
            746
          ],
          "loc": {
            "end": {
              "column": 37,
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
        709,
        747
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "name": "ResultIsString11",
            "optional": false,
            "range": [
              752,
              768
            ],
            "loc": {
              "end": {
                "column": 20,
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
                  779,
                  785
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 32
                  },
                  "start": {
                    "column": 31,
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
                  788,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 32
                  },
                  "start": {
                    "column": 40,
                    "line": 32
                  }
                }
              },
              "range": [
                779,
                794
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 32
                },
                "start": {
                  "column": 31,
                  "line": 32
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              771,
              795
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 32
              }
            }
          },
          "range": [
            752,
            795
          ],
          "loc": {
            "end": {
              "column": 47,
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
        748,
        796
      ],
      "loc": {
        "end": {
          "column": 48,
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
            "name": "ResultIsString12",
            "optional": false,
            "range": [
              801,
              817
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
                    841,
                    842
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 33
                    },
                    "start": {
                      "column": 44,
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
                    827,
                    833
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 33
                    },
                    "start": {
                      "column": 30,
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
                    834,
                    840
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 33
                    },
                    "start": {
                      "column": 37,
                      "line": 33
                    }
                  }
                },
                "range": [
                  827,
                  840
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 33
                  },
                  "start": {
                    "column": 30,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                827,
                843
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 33
                },
                "start": {
                  "column": 30,
                  "line": 33
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              820,
              843
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 33
              },
              "start": {
                "column": 23,
                "line": 33
              }
            }
          },
          "range": [
            801,
            843
          ],
          "loc": {
            "end": {
              "column": 46,
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
        797,
        844
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "name": "ResultIsString13",
            "optional": false,
            "range": [
              880,
              896
            ],
            "loc": {
              "end": {
                "column": 20,
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
                  913,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 36
                  },
                  "start": {
                    "column": 37,
                    "line": 36
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                906,
                919
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 36
                },
                "start": {
                  "column": 30,
                  "line": 36
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              899,
              919
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 36
              },
              "start": {
                "column": 23,
                "line": 36
              }
            }
          },
          "range": [
            880,
            919
          ],
          "loc": {
            "end": {
              "column": 43,
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
        876,
        920
      ],
      "loc": {
        "end": {
          "column": 44,
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
            "name": "ResultIsString14",
            "optional": false,
            "range": [
              925,
              941
            ],
            "loc": {
              "end": {
                "column": 20,
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
                      966,
                      972
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 37
                      },
                      "start": {
                        "column": 45,
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
                      975,
                      981
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 37
                      },
                      "start": {
                        "column": 54,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    966,
                    981
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 37
                    },
                    "start": {
                      "column": 45,
                      "line": 37
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  958,
                  982
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 37
                  },
                  "start": {
                    "column": 37,
                    "line": 37
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                951,
                982
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 37
                },
                "start": {
                  "column": 30,
                  "line": 37
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              944,
              982
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 37
              },
              "start": {
                "column": 23,
                "line": 37
              }
            }
          },
          "range": [
            925,
            982
          ],
          "loc": {
            "end": {
              "column": 61,
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
        921,
        983
      ],
      "loc": {
        "end": {
          "column": 62,
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
            1021,
            1023
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
        "operator": "typeof",
        "prefix": true,
        "range": [
          1014,
          1023
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
        1014,
        1024
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
            1032,
            1038
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
        "operator": "typeof",
        "prefix": true,
        "range": [
          1025,
          1038
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
        1025,
        1039
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
            1047,
            1054
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
        "operator": "typeof",
        "prefix": true,
        "range": [
          1040,
          1054
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
        1040,
        1055
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
              1063,
              1066
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
            1063,
            1068
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
        "operator": "typeof",
        "prefix": true,
        "range": [
          1056,
          1068
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
        1056,
        1069
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
                  1077,
                  1081
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
                  1082,
                  1083
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
                1077,
                1083
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
            "operator": "typeof",
            "prefix": true,
            "range": [
              1070,
              1083
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
                1085,
                1086
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 44
                },
                "start": {
                  "column": 15,
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
                1087,
                1088
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 17,
                  "line": 44
                }
              }
            },
            "range": [
              1085,
              1088
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 44
              },
              "start": {
                "column": 15,
                "line": 44
              }
            }
          }
        ],
        "range": [
          1070,
          1088
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
      },
      "range": [
        1070,
        1089
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 5,
                  "line": 47
                }
              },
              "range": [
                1124,
                1132
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1126,
                  1132
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 47
                  },
                  "start": {
                    "column": 7,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1123,
              1132
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "init": null,
          "range": [
            1123,
            1132
          ],
          "loc": {
            "end": {
              "column": 13,
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
        1119,
        1133
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 48
                },
                "start": {
                  "column": 5,
                  "line": 48
                }
              },
              "range": [
                1139,
                1149
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    1141,
                    1147
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 48
                    },
                    "start": {
                      "column": 7,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1141,
                  1149
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 48
                  },
                  "start": {
                    "column": 7,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1138,
              1149
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "init": null,
          "range": [
            1138,
            1149
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1134,
        1150
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 49
                },
                "start": {
                  "column": 5,
                  "line": 49
                }
              },
              "range": [
                1156,
                1170
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  },
                  "range": [
                    1161,
                    1170
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1164,
                      1170
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 49
                      },
                      "start": {
                        "column": 13,
                        "line": 49
                      }
                    }
                  }
                },
                "range": [
                  1158,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 49
                  },
                  "start": {
                    "column": 7,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              1155,
              1170
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          "init": null,
          "range": [
            1155,
            1170
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1151,
        1171
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "range": [
              1182,
              1188
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 50
              },
              "start": {
                "column": 10,
                "line": 50
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            1175,
            1188
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 50
            },
            "start": {
              "column": 3,
              "line": 50
            }
          }
        },
        "range": [
          1175,
          1189
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 50
          },
          "start": {
            "column": 3,
            "line": 50
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          1172,
          1173
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        1172,
        1189
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING1",
            "optional": false,
            "range": [
              1200,
              1207
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 51
              },
              "start": {
                "column": 10,
                "line": 51
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            1193,
            1207
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 51
            },
            "start": {
              "column": 3,
              "line": 51
            }
          }
        },
        "range": [
          1193,
          1208
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 51
          },
          "start": {
            "column": 3,
            "line": 51
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          1190,
          1191
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1190,
        1208
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              1219,
              1222
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 52
              },
              "start": {
                "column": 10,
                "line": 52
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            1212,
            1222
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 52
            },
            "start": {
              "column": 3,
              "line": 52
            }
          }
        },
        "range": [
          1212,
          1223
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 52
          },
          "start": {
            "column": 3,
            "line": 52
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "range": [
          1209,
          1210
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        1209,
        1223
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "name": "y",
            "optional": false,
            "range": [
              1228,
              1229
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1234,
                    1235
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 53
                    },
                    "start": {
                      "column": 10,
                      "line": 53
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
                    1237,
                    1239
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 53
                    },
                    "start": {
                      "column": 13,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1234,
                  1239
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 53
                  },
                  "start": {
                    "column": 10,
                    "line": 53
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1241,
                    1242
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 53
                    },
                    "start": {
                      "column": 17,
                      "line": 53
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
                    1244,
                    1246
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 53
                    },
                    "start": {
                      "column": 20,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1241,
                  1246
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 53
                  },
                  "start": {
                    "column": 17,
                    "line": 53
                  }
                }
              }
            ],
            "range": [
              1232,
              1248
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 53
              },
              "start": {
                "column": 8,
                "line": 53
              }
            }
          },
          "range": [
            1228,
            1248
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1224,
        1249
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                1260,
                1261
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 54
                },
                "start": {
                  "column": 10,
                  "line": 54
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
                1262,
                1263
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 54
                },
                "start": {
                  "column": 12,
                  "line": 54
                }
              }
            },
            "range": [
              1260,
              1263
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
          "operator": "typeof",
          "prefix": true,
          "range": [
            1253,
            1263
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 54
            },
            "start": {
              "column": 3,
              "line": 54
            }
          }
        },
        "range": [
          1253,
          1264
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 54
          },
          "start": {
            "column": 3,
            "line": 54
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          1250,
          1251
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1250,
        1264
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
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
                1275,
                1279
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 55
                },
                "start": {
                  "column": 10,
                  "line": 55
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
                1280,
                1281
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 55
                },
                "start": {
                  "column": 15,
                  "line": 55
                }
              }
            },
            "range": [
              1275,
              1281
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 55
              },
              "start": {
                "column": 10,
                "line": 55
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            1268,
            1281
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 55
            },
            "start": {
              "column": 3,
              "line": 55
            }
          }
        },
        "range": [
          1268,
          1282
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 55
          },
          "start": {
            "column": 3,
            "line": 55
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          1265,
          1266
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        1265,
        1282
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1293,
                1294
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 56
                },
                "start": {
                  "column": 10,
                  "line": 56
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
                1295,
                1298
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 56
                },
                "start": {
                  "column": 12,
                  "line": 56
                }
              }
            },
            "range": [
              1293,
              1298
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 56
              },
              "start": {
                "column": 10,
                "line": 56
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            1286,
            1298
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 56
            },
            "start": {
              "column": 3,
              "line": 56
            }
          }
        },
        "range": [
          1286,
          1299
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 56
          },
          "start": {
            "column": 3,
            "line": 56
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          1283,
          1284
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        1283,
        1299
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
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
                1310,
                1311
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 57
                },
                "start": {
                  "column": 10,
                  "line": 57
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
                1312,
                1313
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 57
                },
                "start": {
                  "column": 12,
                  "line": 57
                }
              }
            },
            "range": [
              1310,
              1313
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 57
              },
              "start": {
                "column": 10,
                "line": 57
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            1303,
            1313
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 57
            },
            "start": {
              "column": 3,
              "line": 57
            }
          }
        },
        "range": [
          1303,
          1314
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 57
          },
          "start": {
            "column": 3,
            "line": 57
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          1300,
          1301
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        1300,
        1314
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 57
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
      "column": 14,
      "line": 57
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
