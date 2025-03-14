__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    35,
    1064
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "range": [
              275,
              291
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
              "name": "NUMBER",
              "optional": false,
              "range": [
                301,
                307
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
              294,
              307
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
            275,
            307
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
        271,
        308
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
              313,
              329
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
              "name": "NUMBER1",
              "optional": false,
              "range": [
                339,
                346
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
              332,
              346
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
            313,
            346
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
        309,
        347
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
              376,
              392
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
              "raw": "1",
              "value": 1,
              "range": [
                402,
                403
              ],
              "loc": {
                "end": {
                  "column": 31,
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
              395,
              403
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          "range": [
            376,
            403
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
        372,
        404
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "range": [
              409,
              425
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
                      437,
                      438
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      440,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    437,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
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
                      443,
                      444
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
                    "raw": "2",
                    "value": 2,
                    "range": [
                      446,
                      447
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
                    443,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
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
                435,
                448
              ],
              "loc": {
                "end": {
                  "column": 43,
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
              428,
              448
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          },
          "range": [
            409,
            448
          ],
          "loc": {
            "end": {
              "column": 43,
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
        405,
        449
      ],
      "loc": {
        "end": {
          "column": 44,
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
              454,
              470
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
                      482,
                      483
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      485,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 24
                      },
                      "start": {
                        "column": 35,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    482,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
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
                      488,
                      489
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
                            "name": "n",
                            "optional": false,
                            "range": [
                              515,
                              516
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
                            508,
                            517
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
                        506,
                        519
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
                        "name": "n",
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
                            493,
                            501
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              495,
                              501
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
                          492,
                          501
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
                      491,
                      519
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
                    488,
                    519
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
                480,
                521
              ],
              "loc": {
                "end": {
                  "column": 71,
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
              473,
              521
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          "range": [
            454,
            521
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
        450,
        522
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "range": [
              555,
              571
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
                  581,
                  585
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
                  586,
                  587
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
                581,
                587
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
              574,
              587
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
            555,
            587
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
        551,
        588
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
              593,
              609
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
                  619,
                  620
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
                  621,
                  622
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
                619,
                622
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
              612,
              622
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
            593,
            622
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
        589,
        623
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
              628,
              644
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
                "name": "NUMBER1",
                "optional": false,
                "range": [
                  654,
                  661
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
                  662,
                  663
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
                654,
                664
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
              647,
              664
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
            628,
            664
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
        624,
        665
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
              670,
              686
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
                  696,
                  699
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
                696,
                701
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
              689,
              701
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
            670,
            701
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
        666,
        702
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
              707,
              724
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
                    734,
                    735
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
                    736,
                    739
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
                  734,
                  739
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
                734,
                741
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
              727,
              741
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
            707,
            741
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
        703,
        742
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
              747,
              764
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
                "name": "NUMBER",
                "optional": false,
                "range": [
                  775,
                  781
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
                "name": "NUMBER",
                "optional": false,
                "range": [
                  784,
                  790
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
                775,
                790
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
              767,
              791
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
            747,
            791
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
        743,
        792
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
              827,
              844
            ],
            "loc": {
              "end": {
                "column": 21,
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
                  861,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 35
                  },
                  "start": {
                    "column": 38,
                    "line": 35
                  }
                }
              },
              "operator": "delete",
              "prefix": true,
              "range": [
                854,
                867
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 35
                },
                "start": {
                  "column": 31,
                  "line": 35
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              847,
              867
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 35
              },
              "start": {
                "column": 24,
                "line": 35
              }
            }
          },
          "range": [
            827,
            867
          ],
          "loc": {
            "end": {
              "column": 44,
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
        823,
        868
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "range": [
              873,
              890
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
                      915,
                      921
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 36
                      },
                      "start": {
                        "column": 46,
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
                      924,
                      930
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 36
                      },
                      "start": {
                        "column": 55,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    915,
                    930
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 36
                    },
                    "start": {
                      "column": 46,
                      "line": 36
                    }
                  }
                },
                "operator": "delete",
                "prefix": true,
                "range": [
                  907,
                  931
                ],
                "loc": {
                  "end": {
                    "column": 62,
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
                900,
                931
              ],
              "loc": {
                "end": {
                  "column": 62,
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
              893,
              931
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 36
              },
              "start": {
                "column": 24,
                "line": 36
              }
            }
          },
          "range": [
            873,
            931
          ],
          "loc": {
            "end": {
              "column": 62,
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
        869,
        932
      ],
      "loc": {
        "end": {
          "column": 63,
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
            970,
            971
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
        "operator": "delete",
        "prefix": true,
        "range": [
          963,
          971
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
        963,
        972
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
            980,
            986
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
        "operator": "delete",
        "prefix": true,
        "range": [
          973,
          986
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
        973,
        987
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
            995,
            1002
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
        "operator": "delete",
        "prefix": true,
        "range": [
          988,
          1002
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
        988,
        1003
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
              1011,
              1014
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
            1011,
            1016
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
        "operator": "delete",
        "prefix": true,
        "range": [
          1004,
          1016
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
        1004,
        1017
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
              1025,
              1029
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
              1030,
              1031
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
            1025,
            1031
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
        "operator": "delete",
        "prefix": true,
        "range": [
          1018,
          1031
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
        1018,
        1032
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
              1040,
              1041
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
              1042,
              1043
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
            1040,
            1043
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
        "operator": "delete",
        "prefix": true,
        "range": [
          1033,
          1043
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
        1033,
        1044
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
                  1052,
                  1056
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
                  1057,
                  1058
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
                1052,
                1058
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
            "operator": "delete",
            "prefix": true,
            "range": [
              1045,
              1058
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
                1060,
                1061
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
                1062,
                1063
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
              1060,
              1063
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
          1045,
          1063
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
        1045,
        1064
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 19,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
