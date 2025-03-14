__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    29,
    914
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
                39,
                47
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  41,
                  47
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
              33,
              47
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
            33,
            47
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
        29,
        48
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
                60,
                70
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    62,
                    68
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
                  62,
                  70
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
              53,
              70
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
                  74,
                  75
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
                  77,
                  78
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
              73,
              79
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
            53,
            79
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
        49,
        80
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
                114,
                115
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
              107,
              116
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
          105,
          118
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
          91,
          94
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
          96,
          104
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            98,
            104
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
        82,
        118
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
          128,
          184
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
                141,
                142
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
                142,
                150
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  144,
                  150
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
              134,
              151
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
                163,
                166
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
                166,
                182
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
                        178,
                        179
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
                      171,
                      180
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
                  169,
                  182
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
              156,
              182
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
          126,
          127
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
        120,
        184
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
              200,
              221
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
                        212,
                        220
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          214,
                          220
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
                      211,
                      220
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
                    211,
                    220
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
                207,
                221
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
          194,
          223
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
          192,
          193
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
        185,
        223
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
              229,
              233
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
                240,
                241
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
              236,
              243
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
            229,
            243
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
        225,
        244
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
              269,
              285
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
                289,
                295
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
            "operator": "!",
            "prefix": true,
            "range": [
              288,
              295
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 23,
                "line": 18
              }
            }
          },
          "range": [
            269,
            295
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
        265,
        296
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "range": [
              301,
              317
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
                321,
                328
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
            "operator": "!",
            "prefix": true,
            "range": [
              320,
              328
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 19
              },
              "start": {
                "column": 23,
                "line": 19
              }
            }
          },
          "range": [
            301,
            328
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
        297,
        329
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "range": [
              358,
              374
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
                378,
                379
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 22
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              377,
              379
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          "range": [
            358,
            379
          ],
          "loc": {
            "end": {
              "column": 25,
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
        354,
        380
      ],
      "loc": {
        "end": {
          "column": 26,
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
              385,
              401
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
                      407,
                      408
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      410,
                      411
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 23
                      },
                      "start": {
                        "column": 29,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    407,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
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
                      413,
                      414
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
                    "raw": "2",
                    "value": 2,
                    "range": [
                      416,
                      417
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
                    413,
                    417
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
                }
              ],
              "range": [
                405,
                418
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 23
                },
                "start": {
                  "column": 24,
                  "line": 23
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              404,
              418
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          },
          "range": [
            385,
            418
          ],
          "loc": {
            "end": {
              "column": 37,
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
        381,
        419
      ],
      "loc": {
        "end": {
          "column": 38,
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
              424,
              440
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
                      446,
                      447
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      449,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 24
                      },
                      "start": {
                        "column": 29,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    446,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
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
                      452,
                      453
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
                              479,
                              480
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 24
                              },
                              "start": {
                                "column": 59,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            472,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 24
                            },
                            "start": {
                              "column": 52,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        470,
                        483
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 24
                        },
                        "start": {
                          "column": 50,
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
                              "column": 45,
                              "line": 24
                            },
                            "start": {
                              "column": 37,
                              "line": 24
                            }
                          },
                          "range": [
                            457,
                            465
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              459,
                              465
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 24
                              },
                              "start": {
                                "column": 39,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          456,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 24
                          },
                          "start": {
                            "column": 36,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      455,
                      483
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 24
                      },
                      "start": {
                        "column": 35,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    452,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 24
                    },
                    "start": {
                      "column": 32,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                444,
                485
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              443,
              485
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          "range": [
            424,
            485
          ],
          "loc": {
            "end": {
              "column": 65,
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
        420,
        486
      ],
      "loc": {
        "end": {
          "column": 66,
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
              519,
              535
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
                  539,
                  543
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
                  544,
                  545
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
                539,
                545
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
            "operator": "!",
            "prefix": true,
            "range": [
              538,
              545
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 27
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          "range": [
            519,
            545
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
        515,
        546
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "range": [
              551,
              567
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
                  571,
                  572
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
                  573,
                  574
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
                571,
                574
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
            "operator": "!",
            "prefix": true,
            "range": [
              570,
              574
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 28
              },
              "start": {
                "column": 23,
                "line": 28
              }
            }
          },
          "range": [
            551,
            574
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
        547,
        575
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "range": [
              580,
              596
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
                  600,
                  607
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
                  608,
                  609
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
                600,
                610
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
            "operator": "!",
            "prefix": true,
            "range": [
              599,
              610
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 29
              },
              "start": {
                "column": 23,
                "line": 29
              }
            }
          },
          "range": [
            580,
            610
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
        576,
        611
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "range": [
              616,
              632
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
                  636,
                  639
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
                636,
                641
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
            "operator": "!",
            "prefix": true,
            "range": [
              635,
              641
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 30
              },
              "start": {
                "column": 23,
                "line": 30
              }
            }
          },
          "range": [
            616,
            641
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
        612,
        642
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "range": [
              647,
              664
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
                    668,
                    669
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
                    670,
                    673
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
                  668,
                  673
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
                668,
                675
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
            "operator": "!",
            "prefix": true,
            "range": [
              667,
              675
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 24,
                "line": 31
              }
            }
          },
          "range": [
            647,
            675
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
        643,
        676
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "range": [
              681,
              698
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
                  703,
                  709
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
                "name": "NUMBER",
                "optional": false,
                "range": [
                  712,
                  718
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
                703,
                718
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
            "operator": "!",
            "prefix": true,
            "range": [
              701,
              719
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 32
              },
              "start": {
                "column": 24,
                "line": 32
              }
            }
          },
          "range": [
            681,
            719
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
        677,
        720
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "range": [
              749,
              766
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
                  771,
                  777
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 35
                  },
                  "start": {
                    "column": 26,
                    "line": 35
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                770,
                777
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 35
                },
                "start": {
                  "column": 25,
                  "line": 35
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              769,
              777
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 35
              },
              "start": {
                "column": 24,
                "line": 35
              }
            }
          },
          "range": [
            749,
            777
          ],
          "loc": {
            "end": {
              "column": 32,
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
        745,
        778
      ],
      "loc": {
        "end": {
          "column": 33,
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
              783,
              800
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
                      807,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 36
                      },
                      "start": {
                        "column": 28,
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
                      816,
                      822
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
                  "range": [
                    807,
                    822
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 36
                    },
                    "start": {
                      "column": 28,
                      "line": 36
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  805,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 36
                  },
                  "start": {
                    "column": 26,
                    "line": 36
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                804,
                823
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 36
                },
                "start": {
                  "column": 25,
                  "line": 36
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              803,
              823
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
            783,
            823
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
        779,
        824
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            856,
            857
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 39
            },
            "start": {
              "column": 1,
              "line": 39
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          855,
          857
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        855,
        858
      ],
      "loc": {
        "end": {
          "column": 3,
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
            860,
            866
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 40
            },
            "start": {
              "column": 1,
              "line": 40
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          859,
          866
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
        859,
        867
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
          "name": "NUMBER1",
          "optional": false,
          "range": [
            869,
            876
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 41
            },
            "start": {
              "column": 1,
              "line": 41
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          868,
          876
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        868,
        877
      ],
      "loc": {
        "end": {
          "column": 9,
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
              879,
              882
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 42
              },
              "start": {
                "column": 1,
                "line": 42
              }
            }
          },
          "optional": false,
          "range": [
            879,
            884
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 42
            },
            "start": {
              "column": 1,
              "line": 42
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          878,
          884
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        878,
        885
      ],
      "loc": {
        "end": {
          "column": 7,
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
              887,
              891
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 1,
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
              892,
              893
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 43
              },
              "start": {
                "column": 6,
                "line": 43
              }
            }
          },
          "range": [
            887,
            893
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 43
            },
            "start": {
              "column": 1,
              "line": 43
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          886,
          893
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        886,
        894
      ],
      "loc": {
        "end": {
          "column": 8,
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
              896,
              897
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 44
              },
              "start": {
                "column": 1,
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
              898,
              899
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 44
              },
              "start": {
                "column": 3,
                "line": 44
              }
            }
          },
          "range": [
            896,
            899
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 44
            },
            "start": {
              "column": 1,
              "line": 44
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          895,
          899
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        895,
        900
      ],
      "loc": {
        "end": {
          "column": 5,
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
                  902,
                  906
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 1,
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
                  907,
                  908
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 45
                  },
                  "start": {
                    "column": 6,
                    "line": 45
                  }
                }
              },
              "range": [
                902,
                908
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 45
                },
                "start": {
                  "column": 1,
                  "line": 45
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              901,
              908
            ],
            "loc": {
              "end": {
                "column": 7,
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
                910,
                911
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 45
                },
                "start": {
                  "column": 9,
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
                912,
                913
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "range": [
              910,
              913
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 45
              },
              "start": {
                "column": 9,
                "line": 45
              }
            }
          }
        ],
        "range": [
          901,
          913
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        901,
        914
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 13,
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
