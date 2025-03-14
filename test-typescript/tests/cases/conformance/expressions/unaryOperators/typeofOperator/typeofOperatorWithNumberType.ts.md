__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    35,
    1254
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
            "name": "NUMBER",
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
                "type": "TSNumberKeyword",
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
            "name": "NUMBER1",
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
                  "type": "TSNumberKeyword",
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
                "raw": "1",
                "value": 1,
                "range": [
                  80,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
                "raw": "2",
                "value": 2,
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              79,
              85
            ],
            "loc": {
              "end": {
                "column": 30,
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
            85
          ],
          "loc": {
            "end": {
              "column": 30,
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
        86
      ],
      "loc": {
        "end": {
          "column": 31,
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
              "raw": "1",
              "value": 1,
              "range": [
                120,
                121
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "range": [
              113,
              122
            ],
            "loc": {
              "end": {
                "column": 34,
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
          111,
          124
        ],
        "loc": {
          "end": {
            "column": 36,
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
          97,
          100
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
          102,
          110
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            104,
            110
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
        88,
        124
      ],
      "loc": {
        "end": {
          "column": 36,
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
          134,
          190
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
                147,
                148
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
                148,
                156
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  150,
                  156
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
              140,
              157
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
                169,
                172
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
                172,
                188
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        184,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      177,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
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
                  175,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              162,
              188
            ],
            "loc": {
              "end": {
                "column": 30,
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
          132,
          133
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
        126,
        190
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
              206,
              227
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
                        218,
                        226
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          220,
                          226
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
                      217,
                      226
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
                    217,
                    226
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
                213,
                227
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
          200,
          229
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
          198,
          199
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
        191,
        229
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
              235,
              239
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
                246,
                247
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
              242,
              249
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
            235,
            249
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
        231,
        250
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
              275,
              290
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
              "name": "NUMBER",
              "optional": false,
              "range": [
                300,
                306
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
              293,
              306
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
            275,
            306
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
        271,
        307
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
              312,
              327
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
              "name": "NUMBER1",
              "optional": false,
              "range": [
                337,
                344
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
              330,
              344
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
            312,
            344
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
        308,
        345
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
              374,
              389
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
              "raw": "1",
              "value": 1,
              "range": [
                399,
                400
              ],
              "loc": {
                "end": {
                  "column": 30,
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
              392,
              400
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
              }
            }
          },
          "range": [
            374,
            400
          ],
          "loc": {
            "end": {
              "column": 30,
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
        370,
        401
      ],
      "loc": {
        "end": {
          "column": 31,
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
              406,
              421
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
                      433,
                      434
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      436,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 23
                      },
                      "start": {
                        "column": 34,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    433,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
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
                      439,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 23
                      },
                      "start": {
                        "column": 37,
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
                    "raw": "2",
                    "value": 2,
                    "range": [
                      442,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 23
                      },
                      "start": {
                        "column": 40,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    439,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 23
                    },
                    "start": {
                      "column": 37,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                431,
                444
              ],
              "loc": {
                "end": {
                  "column": 42,
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
              424,
              444
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 23
              },
              "start": {
                "column": 22,
                "line": 23
              }
            }
          },
          "range": [
            406,
            444
          ],
          "loc": {
            "end": {
              "column": 42,
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
        402,
        445
      ],
      "loc": {
        "end": {
          "column": 43,
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
              450,
              465
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
                      477,
                      478
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      480,
                      481
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 24
                      },
                      "start": {
                        "column": 34,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    477,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
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
                      483,
                      484
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 24
                      },
                      "start": {
                        "column": 37,
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
                            "name": "n",
                            "optional": false,
                            "range": [
                              510,
                              511
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 24
                              },
                              "start": {
                                "column": 64,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            503,
                            512
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 24
                            },
                            "start": {
                              "column": 57,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        501,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 24
                        },
                        "start": {
                          "column": 55,
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 24
                            },
                            "start": {
                              "column": 42,
                              "line": 24
                            }
                          },
                          "range": [
                            488,
                            496
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              490,
                              496
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 24
                              },
                              "start": {
                                "column": 44,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          487,
                          496
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 24
                          },
                          "start": {
                            "column": 41,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      486,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 24
                      },
                      "start": {
                        "column": 40,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    483,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
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
                475,
                516
              ],
              "loc": {
                "end": {
                  "column": 70,
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
              468,
              516
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "range": [
            450,
            516
          ],
          "loc": {
            "end": {
              "column": 70,
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
        446,
        517
      ],
      "loc": {
        "end": {
          "column": 71,
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
              550,
              565
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
                  575,
                  579
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
                  580,
                  581
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
                575,
                581
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
              568,
              581
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
            550,
            581
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
        546,
        582
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
              587,
              602
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
                  612,
                  613
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
                  614,
                  615
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
                612,
                615
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
              605,
              615
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
            587,
            615
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
        583,
        616
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
              621,
              636
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
                "name": "NUMBER1",
                "optional": false,
                "range": [
                  646,
                  653
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
                  654,
                  655
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
                646,
                656
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
              639,
              656
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
            621,
            656
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
        617,
        657
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
              662,
              677
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
                  687,
                  690
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
                687,
                692
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
              680,
              692
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
            662,
            692
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
        658,
        693
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
              698,
              714
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
                    724,
                    725
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
                    726,
                    729
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
                  724,
                  729
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
                724,
                731
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
              717,
              731
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
            698,
            731
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
        694,
        732
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
              737,
              753
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
                "name": "NUMBER",
                "optional": false,
                "range": [
                  764,
                  770
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
                "name": "NUMBER",
                "optional": false,
                "range": [
                  773,
                  779
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
                764,
                779
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
              756,
              780
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
            737,
            780
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
        733,
        781
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
              817,
              833
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                "name": "NUMBER",
                "optional": false,
                "range": [
                  850,
                  856
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 35
                  },
                  "start": {
                    "column": 37,
                    "line": 35
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                843,
                856
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 35
                },
                "start": {
                  "column": 30,
                  "line": 35
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              836,
              856
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 35
              },
              "start": {
                "column": 23,
                "line": 35
              }
            }
          },
          "range": [
            817,
            856
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        813,
        857
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
              862,
              878
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
                "type": "UnaryExpression",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "range": [
                      903,
                      909
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 36
                      },
                      "start": {
                        "column": 45,
                        "line": 36
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "range": [
                      912,
                      918
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 36
                      },
                      "start": {
                        "column": 54,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    903,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 36
                    },
                    "start": {
                      "column": 45,
                      "line": 36
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  895,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 61,
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
                888,
                919
              ],
              "loc": {
                "end": {
                  "column": 61,
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
              881,
              919
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 36
              },
              "start": {
                "column": 23,
                "line": 36
              }
            }
          },
          "range": [
            862,
            919
          ],
          "loc": {
            "end": {
              "column": 61,
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
        858,
        920
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            958,
            959
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 39
            },
            "start": {
              "column": 7,
              "line": 39
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          951,
          959
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        951,
        960
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
          "name": "NUMBER",
          "optional": false,
          "range": [
            968,
            974
          ],
          "loc": {
            "end": {
              "column": 13,
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
          961,
          974
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        961,
        975
      ],
      "loc": {
        "end": {
          "column": 14,
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
          "name": "NUMBER1",
          "optional": false,
          "range": [
            983,
            990
          ],
          "loc": {
            "end": {
              "column": 14,
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
          976,
          990
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
      "range": [
        976,
        991
      ],
      "loc": {
        "end": {
          "column": 15,
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
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              999,
              1002
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 42
              },
              "start": {
                "column": 7,
                "line": 42
              }
            }
          },
          "optional": false,
          "range": [
            999,
            1004
          ],
          "loc": {
            "end": {
              "column": 12,
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
          992,
          1004
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
        992,
        1005
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "range": [
              1013,
              1017
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 43
              },
              "start": {
                "column": 7,
                "line": 43
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
              1018,
              1019
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
            1013,
            1019
          ],
          "loc": {
            "end": {
              "column": 13,
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
          1006,
          1019
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
      "range": [
        1006,
        1020
      ],
      "loc": {
        "end": {
          "column": 14,
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
              1028,
              1029
            ],
            "loc": {
              "end": {
                "column": 8,
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
            "name": "n",
            "optional": false,
            "range": [
              1030,
              1031
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 44
              },
              "start": {
                "column": 9,
                "line": 44
              }
            }
          },
          "range": [
            1028,
            1031
          ],
          "loc": {
            "end": {
              "column": 10,
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
          1021,
          1031
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1021,
        1032
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
                  1040,
                  1044
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 45
                  },
                  "start": {
                    "column": 7,
                    "line": 45
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
                  1045,
                  1046
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 45
                  },
                  "start": {
                    "column": 12,
                    "line": 45
                  }
                }
              },
              "range": [
                1040,
                1046
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 45
                },
                "start": {
                  "column": 7,
                  "line": 45
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              1033,
              1046
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 45
              },
              "start": {
                "column": 0,
                "line": 45
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
                1048,
                1049
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 45
                },
                "start": {
                  "column": 15,
                  "line": 45
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
                1050,
                1051
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 45
                },
                "start": {
                  "column": 17,
                  "line": 45
                }
              }
            },
            "range": [
              1048,
              1051
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 45
              },
              "start": {
                "column": 15,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1033,
          1051
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1033,
        1052
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
                  "line": 48
                },
                "start": {
                  "column": 5,
                  "line": 48
                }
              },
              "range": [
                1087,
                1095
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1089,
                  1095
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
              }
            },
            "range": [
              1086,
              1095
            ],
            "loc": {
              "end": {
                "column": 13,
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
            1086,
            1095
          ],
          "loc": {
            "end": {
              "column": 13,
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
        1082,
        1096
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 5,
                  "line": 49
                }
              },
              "range": [
                1102,
                1112
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1104,
                    1110
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 49
                    },
                    "start": {
                      "column": 7,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1104,
                  1112
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
              1101,
              1112
            ],
            "loc": {
              "end": {
                "column": 15,
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
            1101,
            1112
          ],
          "loc": {
            "end": {
              "column": 15,
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
        1097,
        1113
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "NUMBER",
            "optional": false,
            "range": [
              1124,
              1130
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
            1117,
            1130
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
          1117,
          1131
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
          1114,
          1115
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
        1114,
        1131
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
            "name": "NUMBER1",
            "optional": false,
            "range": [
              1142,
              1149
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
            1135,
            1149
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
          1135,
          1150
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
          1132,
          1133
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
        1132,
        1150
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
              1161,
              1164
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
            1154,
            1164
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
          1154,
          1165
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
          1151,
          1152
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
        1151,
        1165
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
              1170,
              1171
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
                    1176,
                    1177
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
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1179,
                    1180
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 53
                    },
                    "start": {
                      "column": 13,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1176,
                  1180
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
                    1182,
                    1183
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 53
                    },
                    "start": {
                      "column": 16,
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
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1185,
                    1186
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 53
                    },
                    "start": {
                      "column": 19,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1182,
                  1186
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 53
                  },
                  "start": {
                    "column": 16,
                    "line": 53
                  }
                }
              }
            ],
            "range": [
              1174,
              1188
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 53
              },
              "start": {
                "column": 8,
                "line": 53
              }
            }
          },
          "range": [
            1170,
            1188
          ],
          "loc": {
            "end": {
              "column": 22,
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
        1166,
        1189
      ],
      "loc": {
        "end": {
          "column": 23,
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
                1200,
                1201
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
                1202,
                1203
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
              1200,
              1203
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
            1193,
            1203
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
          1193,
          1204
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
          1190,
          1191
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
        1190,
        1204
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
                1215,
                1219
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
                1220,
                1221
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
              1215,
              1221
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
            1208,
            1221
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
          1208,
          1222
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
          1205,
          1206
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
        1205,
        1222
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
                1233,
                1234
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
                1235,
                1238
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
              1233,
              1238
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
            1226,
            1238
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
          1226,
          1239
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
          1223,
          1224
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
        1223,
        1239
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
                1250,
                1251
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
                1252,
                1253
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
              1250,
              1253
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
            1243,
            1253
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
          1243,
          1254
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
          1240,
          1241
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
        1240,
        1254
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
