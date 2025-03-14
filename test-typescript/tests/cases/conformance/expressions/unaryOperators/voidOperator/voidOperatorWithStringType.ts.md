__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    33,
    998
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
                43,
                51
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  45,
                  51
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
              37,
              51
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
            37,
            51
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
        33,
        52
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
                64,
                74
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    66,
                    72
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
                  66,
                  74
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
              57,
              74
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
                  78,
                  80
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
                  82,
                  87
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
              77,
              88
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
            57,
            88
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
        53,
        89
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
                123,
                128
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
              116,
              129
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
          114,
          131
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
          100,
          103
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
          105,
          113
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            107,
            113
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
        91,
        131
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
          141,
          198
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
                154,
                155
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
                155,
                163
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  157,
                  163
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
              147,
              164
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
                176,
                179
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
                179,
                196
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
                        191,
                        193
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
                      184,
                      194
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
                  182,
                  196
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
              169,
              196
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
          139,
          140
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
        133,
        198
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
              214,
              235
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
                        226,
                        234
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          228,
                          234
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
                      225,
                      234
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
                    225,
                    234
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
                221,
                235
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
          208,
          237
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
          206,
          207
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
        199,
        237
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
              243,
              247
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
                254,
                255
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
              250,
              257
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
            243,
            257
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
        239,
        258
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
            "name": "ResultIsAny1",
            "optional": false,
            "range": [
              283,
              295
            ],
            "loc": {
              "end": {
                "column": 16,
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
                303,
                309
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 24,
                  "line": 18
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              298,
              309
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 19,
                "line": 18
              }
            }
          },
          "range": [
            283,
            309
          ],
          "loc": {
            "end": {
              "column": 30,
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
        279,
        310
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "ResultIsAny2",
            "optional": false,
            "range": [
              315,
              327
            ],
            "loc": {
              "end": {
                "column": 16,
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
                335,
                342
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              330,
              342
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 19
              },
              "start": {
                "column": 19,
                "line": 19
              }
            }
          },
          "range": [
            315,
            342
          ],
          "loc": {
            "end": {
              "column": 31,
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
        311,
        343
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "ResultIsAny3",
            "optional": false,
            "range": [
              372,
              384
            ],
            "loc": {
              "end": {
                "column": 16,
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
                392,
                394
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 22
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              387,
              394
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 19,
                "line": 22
              }
            }
          },
          "range": [
            372,
            394
          ],
          "loc": {
            "end": {
              "column": 26,
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
        368,
        395
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "ResultIsAny4",
            "optional": false,
            "range": [
              400,
              412
            ],
            "loc": {
              "end": {
                "column": 16,
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
                      422,
                      423
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      425,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 23
                      },
                      "start": {
                        "column": 29,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    422,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 23
                    },
                    "start": {
                      "column": 26,
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
                      429,
                      430
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 23
                      },
                      "start": {
                        "column": 33,
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
                      432,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 23
                      },
                      "start": {
                        "column": 36,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    429,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 23
                    },
                    "start": {
                      "column": 33,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                420,
                436
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 23
                },
                "start": {
                  "column": 24,
                  "line": 23
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              415,
              436
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 23
              },
              "start": {
                "column": 19,
                "line": 23
              }
            }
          },
          "range": [
            400,
            436
          ],
          "loc": {
            "end": {
              "column": 40,
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
        396,
        437
      ],
      "loc": {
        "end": {
          "column": 41,
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
            "name": "ResultIsAny5",
            "optional": false,
            "range": [
              442,
              454
            ],
            "loc": {
              "end": {
                "column": 16,
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
                      464,
                      465
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 26,
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
                      467,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 24
                      },
                      "start": {
                        "column": 29,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    464,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 24
                    },
                    "start": {
                      "column": 26,
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
                      471,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 33,
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
                              498,
                              499
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 24
                              },
                              "start": {
                                "column": 60,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            491,
                            500
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 24
                            },
                            "start": {
                              "column": 53,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        489,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 24
                        },
                        "start": {
                          "column": 51,
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
                              "column": 46,
                              "line": 24
                            },
                            "start": {
                              "column": 38,
                              "line": 24
                            }
                          },
                          "range": [
                            476,
                            484
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              478,
                              484
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 24
                              },
                              "start": {
                                "column": 40,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          475,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 24
                          },
                          "start": {
                            "column": 37,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      474,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 24
                      },
                      "start": {
                        "column": 36,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    471,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 24
                    },
                    "start": {
                      "column": 33,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                462,
                504
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              457,
              504
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 24
              },
              "start": {
                "column": 19,
                "line": 24
              }
            }
          },
          "range": [
            442,
            504
          ],
          "loc": {
            "end": {
              "column": 66,
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
        438,
        505
      ],
      "loc": {
        "end": {
          "column": 67,
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
            "name": "ResultIsAny6",
            "optional": false,
            "range": [
              538,
              550
            ],
            "loc": {
              "end": {
                "column": 16,
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
                  558,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 27
                  },
                  "start": {
                    "column": 24,
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
                  563,
                  564
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                }
              },
              "range": [
                558,
                564
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 27
                },
                "start": {
                  "column": 24,
                  "line": 27
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              553,
              564
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 27
              },
              "start": {
                "column": 19,
                "line": 27
              }
            }
          },
          "range": [
            538,
            564
          ],
          "loc": {
            "end": {
              "column": 30,
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
        534,
        565
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "ResultIsAny7",
            "optional": false,
            "range": [
              570,
              582
            ],
            "loc": {
              "end": {
                "column": 16,
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
                  590,
                  591
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
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
                  592,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 28
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              },
              "range": [
                590,
                593
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 28
                },
                "start": {
                  "column": 24,
                  "line": 28
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              585,
              593
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          },
          "range": [
            570,
            593
          ],
          "loc": {
            "end": {
              "column": 27,
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
        566,
        594
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "name": "ResultIsAny8",
            "optional": false,
            "range": [
              599,
              611
            ],
            "loc": {
              "end": {
                "column": 16,
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
                  619,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 29
                  },
                  "start": {
                    "column": 24,
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
                  627,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 29
                  },
                  "start": {
                    "column": 32,
                    "line": 29
                  }
                }
              },
              "range": [
                619,
                629
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 29
                },
                "start": {
                  "column": 24,
                  "line": 29
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              614,
              629
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 29
              },
              "start": {
                "column": 19,
                "line": 29
              }
            }
          },
          "range": [
            599,
            629
          ],
          "loc": {
            "end": {
              "column": 34,
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
        595,
        630
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "ResultIsAny9",
            "optional": false,
            "range": [
              635,
              647
            ],
            "loc": {
              "end": {
                "column": 16,
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
                  655,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 30
                  },
                  "start": {
                    "column": 24,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                655,
                660
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 30
                },
                "start": {
                  "column": 24,
                  "line": 30
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              650,
              660
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 30
              },
              "start": {
                "column": 19,
                "line": 30
              }
            }
          },
          "range": [
            635,
            660
          ],
          "loc": {
            "end": {
              "column": 29,
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
        631,
        661
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "ResultIsAny10",
            "optional": false,
            "range": [
              666,
              679
            ],
            "loc": {
              "end": {
                "column": 17,
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
                    687,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 31
                    },
                    "start": {
                      "column": 25,
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
                    689,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 31
                    },
                    "start": {
                      "column": 27,
                      "line": 31
                    }
                  }
                },
                "range": [
                  687,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 31
                  },
                  "start": {
                    "column": 25,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                687,
                694
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 25,
                  "line": 31
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              682,
              694
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 20,
                "line": 31
              }
            }
          },
          "range": [
            666,
            694
          ],
          "loc": {
            "end": {
              "column": 32,
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
        662,
        695
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "name": "ResultIsAny11",
            "optional": false,
            "range": [
              700,
              713
            ],
            "loc": {
              "end": {
                "column": 17,
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
                  722,
                  728
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 32
                  },
                  "start": {
                    "column": 26,
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
                  731,
                  737
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 32
                  },
                  "start": {
                    "column": 35,
                    "line": 32
                  }
                }
              },
              "range": [
                722,
                737
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 32
                },
                "start": {
                  "column": 26,
                  "line": 32
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              716,
              738
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 32
              },
              "start": {
                "column": 20,
                "line": 32
              }
            }
          },
          "range": [
            700,
            738
          ],
          "loc": {
            "end": {
              "column": 42,
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
        696,
        739
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "ResultIsAny12",
            "optional": false,
            "range": [
              744,
              757
            ],
            "loc": {
              "end": {
                "column": 17,
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
                    779,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 33
                    },
                    "start": {
                      "column": 39,
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
                    765,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 33
                    },
                    "start": {
                      "column": 25,
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
                    772,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 33
                    },
                    "start": {
                      "column": 32,
                      "line": 33
                    }
                  }
                },
                "range": [
                  765,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 33
                  },
                  "start": {
                    "column": 25,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                765,
                781
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 33
                },
                "start": {
                  "column": 25,
                  "line": 33
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              760,
              781
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 33
              },
              "start": {
                "column": 20,
                "line": 33
              }
            }
          },
          "range": [
            744,
            781
          ],
          "loc": {
            "end": {
              "column": 41,
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
        740,
        782
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "ResultIsAny13",
            "optional": false,
            "range": [
              816,
              829
            ],
            "loc": {
              "end": {
                "column": 17,
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
                  842,
                  848
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 36
                  },
                  "start": {
                    "column": 30,
                    "line": 36
                  }
                }
              },
              "operator": "void",
              "prefix": true,
              "range": [
                837,
                848
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 36
                },
                "start": {
                  "column": 25,
                  "line": 36
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              832,
              848
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 36
              },
              "start": {
                "column": 20,
                "line": 36
              }
            }
          },
          "range": [
            816,
            848
          ],
          "loc": {
            "end": {
              "column": 36,
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
        812,
        849
      ],
      "loc": {
        "end": {
          "column": 37,
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
            "name": "ResultIsAny14",
            "optional": false,
            "range": [
              854,
              867
            ],
            "loc": {
              "end": {
                "column": 17,
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
                      886,
                      892
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 37
                      },
                      "start": {
                        "column": 36,
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
                      895,
                      901
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
                  "range": [
                    886,
                    901
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 37
                    },
                    "start": {
                      "column": 36,
                      "line": 37
                    }
                  }
                },
                "operator": "void",
                "prefix": true,
                "range": [
                  880,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 37
                  },
                  "start": {
                    "column": 30,
                    "line": 37
                  }
                }
              },
              "operator": "void",
              "prefix": true,
              "range": [
                875,
                902
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 37
                },
                "start": {
                  "column": 25,
                  "line": 37
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              870,
              902
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 37
              },
              "start": {
                "column": 20,
                "line": 37
              }
            }
          },
          "range": [
            854,
            902
          ],
          "loc": {
            "end": {
              "column": 52,
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
        850,
        903
      ],
      "loc": {
        "end": {
          "column": 53,
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
            939,
            941
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 40
            },
            "start": {
              "column": 5,
              "line": 40
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          934,
          941
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        934,
        942
      ],
      "loc": {
        "end": {
          "column": 8,
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
            948,
            954
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 41
            },
            "start": {
              "column": 5,
              "line": 41
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          943,
          954
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        943,
        955
      ],
      "loc": {
        "end": {
          "column": 12,
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
            961,
            968
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 42
            },
            "start": {
              "column": 5,
              "line": 42
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          956,
          968
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        956,
        969
      ],
      "loc": {
        "end": {
          "column": 13,
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
              975,
              978
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 43
              },
              "start": {
                "column": 5,
                "line": 43
              }
            }
          },
          "optional": false,
          "range": [
            975,
            980
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 43
            },
            "start": {
              "column": 5,
              "line": 43
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          970,
          980
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        970,
        981
      ],
      "loc": {
        "end": {
          "column": 11,
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
                  987,
                  991
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 44
                  },
                  "start": {
                    "column": 5,
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
                  992,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 44
                  }
                }
              },
              "range": [
                987,
                993
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 44
                },
                "start": {
                  "column": 5,
                  "line": 44
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              982,
              993
            ],
            "loc": {
              "end": {
                "column": 11,
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
                994,
                995
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
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                996,
                997
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
              994,
              997
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 44
              },
              "start": {
                "column": 12,
                "line": 44
              }
            }
          }
        ],
        "range": [
          982,
          997
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        982,
        998
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 16,
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
