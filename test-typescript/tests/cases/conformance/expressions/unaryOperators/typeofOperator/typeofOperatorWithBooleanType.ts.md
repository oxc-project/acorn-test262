__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    36,
    985
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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                47,
                56
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  49,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              40,
              56
            ],
            "loc": {
              "end": {
                "column": 20,
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
            40,
            56
          ],
          "loc": {
            "end": {
              "column": 20,
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
        36,
        57
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "raw": "true",
              "value": true,
              "range": [
                92,
                96
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "range": [
              85,
              97
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          }
        ],
        "range": [
          83,
          99
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 4
          },
          "start": {
            "column": 24,
            "line": 4
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
          68,
          71
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 4
          }
        },
        "range": [
          73,
          82
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            75,
            82
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        }
      },
      "range": [
        59,
        99
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          109,
          170
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
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
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
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              },
              "range": [
                123,
                132
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  125,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              115,
              133
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                145,
                148
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
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
                148,
                168
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        160,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      153,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  151,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
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
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "range": [
              138,
              168
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 6
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
          107,
          108
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        101,
        170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
              186,
              208
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
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      },
                      "range": [
                        198,
                        207
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          200,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      197,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    197,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                193,
                208
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          180,
          210
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          178,
          179
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "kind": "module",
      "range": [
        171,
        210
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "name": "objA",
            "optional": false,
            "range": [
              216,
              220
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                227,
                228
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              223,
              230
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 14
              }
            }
          },
          "range": [
            216,
            230
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        212,
        231
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 14
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsString1",
            "optional": false,
            "range": [
              257,
              272
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "range": [
                282,
                289
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 17
                },
                "start": {
                  "column": 29,
                  "line": 17
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              275,
              289
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            }
          },
          "range": [
            257,
            289
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        253,
        290
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
              320,
              335
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                345,
                349
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 20
                },
                "start": {
                  "column": 29,
                  "line": 20
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              338,
              349
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 20
              },
              "start": {
                "column": 22,
                "line": 20
              }
            }
          },
          "range": [
            320,
            349
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        316,
        350
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
              355,
              370
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                      382,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 31,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      385,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 21
                      },
                      "start": {
                        "column": 34,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    382,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 21
                    },
                    "start": {
                      "column": 31,
                      "line": 21
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
                      391,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 21
                      },
                      "start": {
                        "column": 40,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      394,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 21
                      },
                      "start": {
                        "column": 43,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    391,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 21
                    },
                    "start": {
                      "column": 40,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                380,
                401
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 21
                },
                "start": {
                  "column": 29,
                  "line": 21
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              373,
              401
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 21
              },
              "start": {
                "column": 22,
                "line": 21
              }
            }
          },
          "range": [
            355,
            401
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        351,
        402
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "name": "ResultIsString4",
            "optional": false,
            "range": [
              436,
              451
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  461,
                  465
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 24
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
                  466,
                  467
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
                461,
                467
              ],
              "loc": {
                "end": {
                  "column": 35,
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
              454,
              467
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "range": [
            436,
            467
          ],
          "loc": {
            "end": {
              "column": 35,
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
        432,
        468
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "ResultIsString5",
            "optional": false,
            "range": [
              473,
              488
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                  498,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 25
                  },
                  "start": {
                    "column": 29,
                    "line": 25
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
                  500,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 31,
                    "line": 25
                  }
                }
              },
              "range": [
                498,
                501
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 25
                },
                "start": {
                  "column": 29,
                  "line": 25
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              491,
              501
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 25
              },
              "start": {
                "column": 22,
                "line": 25
              }
            }
          },
          "range": [
            473,
            501
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        469,
        502
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
              507,
              522
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  532,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 26
                  },
                  "start": {
                    "column": 29,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                532,
                537
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 26
                },
                "start": {
                  "column": 29,
                  "line": 26
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              525,
              537
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 26
              },
              "start": {
                "column": 22,
                "line": 26
              }
            }
          },
          "range": [
            507,
            537
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        503,
        538
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
              543,
              558
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
                    568,
                    569
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    570,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 27
                    },
                    "start": {
                      "column": 31,
                      "line": 27
                    }
                  }
                },
                "range": [
                  568,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                568,
                575
              ],
              "loc": {
                "end": {
                  "column": 36,
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
              561,
              575
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
          "range": [
            543,
            575
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
        539,
        576
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
            "name": "ResultIsString8",
            "optional": false,
            "range": [
              611,
              626
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "range": [
                  643,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 30
                  },
                  "start": {
                    "column": 36,
                    "line": 30
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                636,
                650
              ],
              "loc": {
                "end": {
                  "column": 43,
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
              629,
              650
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 30
              },
              "start": {
                "column": 22,
                "line": 30
              }
            }
          },
          "range": [
            611,
            650
          ],
          "loc": {
            "end": {
              "column": 43,
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
        607,
        651
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            689,
            693
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 33
            },
            "start": {
              "column": 7,
              "line": 33
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          682,
          693
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        682,
        694
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
          "name": "BOOLEAN",
          "optional": false,
          "range": [
            702,
            709
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 34
            },
            "start": {
              "column": 7,
              "line": 34
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          695,
          709
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        695,
        710
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
              718,
              721
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 35
              },
              "start": {
                "column": 7,
                "line": 35
              }
            }
          },
          "optional": false,
          "range": [
            718,
            723
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 35
            },
            "start": {
              "column": 7,
              "line": 35
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          711,
          723
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        711,
        724
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                732,
                736
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 36
                },
                "start": {
                  "column": 7,
                  "line": 36
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              725,
              736
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 36
              },
              "start": {
                "column": 0,
                "line": 36
              }
            }
          },
          {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              738,
              743
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 36
              }
            }
          }
        ],
        "range": [
          725,
          743
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        725,
        744
      ],
      "loc": {
        "end": {
          "column": 19,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "range": [
              752,
              756
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 37
              },
              "start": {
                "column": 7,
                "line": 37
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
              757,
              758
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 12,
                "line": 37
              }
            }
          },
          "range": [
            752,
            758
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 37
            },
            "start": {
              "column": 7,
              "line": 37
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          745,
          758
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        745,
        759
      ],
      "loc": {
        "end": {
          "column": 14,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "range": [
              767,
              768
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 38
              },
              "start": {
                "column": 7,
                "line": 38
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
              769,
              770
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 38
              },
              "start": {
                "column": 9,
                "line": 38
              }
            }
          },
          "range": [
            767,
            770
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 38
            },
            "start": {
              "column": 7,
              "line": 38
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          760,
          770
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        760,
        771
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
                  "column": 14,
                  "line": 41
                },
                "start": {
                  "column": 5,
                  "line": 41
                }
              },
              "range": [
                806,
                815
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  808,
                  815
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
              }
            },
            "range": [
              805,
              815
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": null,
          "range": [
            805,
            815
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        801,
        816
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
                  "column": 16,
                  "line": 42
                },
                "start": {
                  "column": 5,
                  "line": 42
                }
              },
              "range": [
                822,
                833
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    824,
                    831
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
                "range": [
                  824,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 42
                  },
                  "start": {
                    "column": 7,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              821,
              833
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": null,
          "range": [
            821,
            833
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        817,
        834
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
                  "column": 20,
                  "line": 43
                },
                "start": {
                  "column": 5,
                  "line": 43
                }
              },
              "range": [
                840,
                855
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  },
                  "range": [
                    845,
                    855
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      848,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 43
                      },
                      "start": {
                        "column": 13,
                        "line": 43
                      }
                    }
                  }
                },
                "range": [
                  842,
                  855
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 43
                  },
                  "start": {
                    "column": 7,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              839,
              855
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
          },
          "init": null,
          "range": [
            839,
            855
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
      "declare": false,
      "kind": "var",
      "range": [
        835,
        856
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "BOOLEAN",
            "optional": false,
            "range": [
              867,
              874
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 44
              },
              "start": {
                "column": 10,
                "line": 44
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            860,
            874
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 44
            },
            "start": {
              "column": 3,
              "line": 44
            }
          }
        },
        "range": [
          860,
          875
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 44
          },
          "start": {
            "column": 3,
            "line": 44
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          857,
          858
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        857,
        875
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
              886,
              889
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 45
              },
              "start": {
                "column": 10,
                "line": 45
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            879,
            889
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 45
            },
            "start": {
              "column": 3,
              "line": 45
            }
          }
        },
        "range": [
          879,
          890
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 45
          },
          "start": {
            "column": 3,
            "line": 45
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "range": [
          876,
          877
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        876,
        890
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "name": "y",
            "optional": false,
            "range": [
              895,
              896
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
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
                    901,
                    902
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    904,
                    908
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
                "range": [
                  901,
                  908
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 46
                  },
                  "start": {
                    "column": 10,
                    "line": 46
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
                    910,
                    911
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 46
                    },
                    "start": {
                      "column": 19,
                      "line": 46
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    913,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 46
                    },
                    "start": {
                      "column": 22,
                      "line": 46
                    }
                  }
                },
                "range": [
                  910,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
              899,
              919
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 46
              },
              "start": {
                "column": 8,
                "line": 46
              }
            }
          },
          "range": [
            895,
            919
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        891,
        920
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
                931,
                932
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 47
                },
                "start": {
                  "column": 10,
                  "line": 47
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
                933,
                934
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              }
            },
            "range": [
              931,
              934
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 47
              },
              "start": {
                "column": 10,
                "line": 47
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            924,
            934
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 47
            },
            "start": {
              "column": 3,
              "line": 47
            }
          }
        },
        "range": [
          924,
          935
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 47
          },
          "start": {
            "column": 3,
            "line": 47
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          921,
          922
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        921,
        935
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
                946,
                950
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 48
                },
                "start": {
                  "column": 10,
                  "line": 48
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
                951,
                952
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 48
                },
                "start": {
                  "column": 15,
                  "line": 48
                }
              }
            },
            "range": [
              946,
              952
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 48
              },
              "start": {
                "column": 10,
                "line": 48
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            939,
            952
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 48
            },
            "start": {
              "column": 3,
              "line": 48
            }
          }
        },
        "range": [
          939,
          953
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 48
          },
          "start": {
            "column": 3,
            "line": 48
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          936,
          937
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        936,
        953
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
                964,
                965
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 49
                },
                "start": {
                  "column": 10,
                  "line": 49
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
                966,
                969
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 12,
                  "line": 49
                }
              }
            },
            "range": [
              964,
              969
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 49
              },
              "start": {
                "column": 10,
                "line": 49
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            957,
            969
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 49
            },
            "start": {
              "column": 3,
              "line": 49
            }
          }
        },
        "range": [
          957,
          970
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 49
          },
          "start": {
            "column": 3,
            "line": 49
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          954,
          955
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        954,
        970
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                981,
                982
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 50
                },
                "start": {
                  "column": 10,
                  "line": 50
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
                983,
                984
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 12,
                  "line": 50
                }
              }
            },
            "range": [
              981,
              984
            ],
            "loc": {
              "end": {
                "column": 13,
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
            974,
            984
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 50
            },
            "start": {
              "column": 3,
              "line": 50
            }
          }
        },
        "range": [
          974,
          985
        ],
        "loc": {
          "end": {
            "column": 14,
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
          971,
          972
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
        971,
        985
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 14,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
