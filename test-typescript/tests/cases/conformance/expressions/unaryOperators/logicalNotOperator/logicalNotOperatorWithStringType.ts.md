__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    29,
    957
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
                60,
                70
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
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
                "raw": "\"\"",
                "value": "",
                "range": [
                  74,
                  76
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
                  78,
                  83
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
              73,
              84
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
            53,
            84
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
        49,
        85
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
                119,
                124
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
              112,
              125
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
          110,
          127
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
          96,
          99
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
          101,
          109
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            103,
            109
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
        87,
        127
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
          137,
          194
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
                150,
                151
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
                151,
                159
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  153,
                  159
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
              143,
              160
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
                172,
                175
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
                175,
                192
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
                        187,
                        189
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
                      180,
                      190
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
                  178,
                  192
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
              165,
              192
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
          135,
          136
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
        129,
        194
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
              210,
              231
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
                        222,
                        230
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          224,
                          230
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
                      221,
                      230
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
                    221,
                    230
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
                217,
                231
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
          204,
          233
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
          202,
          203
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
        195,
        233
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
              239,
              243
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
                250,
                251
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
              246,
              253
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
            239,
            253
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
        235,
        254
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
              279,
              295
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
                299,
                305
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
              298,
              305
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
            279,
            305
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
        275,
        306
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
              311,
              327
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
                331,
                338
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
              330,
              338
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
            311,
            338
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
        307,
        339
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
              368,
              384
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
                388,
                390
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
            "operator": "!",
            "prefix": true,
            "range": [
              387,
              390
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          "range": [
            368,
            390
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
        364,
        391
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "range": [
              396,
              412
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
                      418,
                      419
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
                      421,
                      423
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
                    418,
                    423
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
                      425,
                      426
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
                      428,
                      430
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
                    425,
                    430
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
                416,
                432
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
            "operator": "!",
            "prefix": true,
            "range": [
              415,
              432
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          },
          "range": [
            396,
            432
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
        392,
        433
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "range": [
              438,
              454
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
                      460,
                      461
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
                      463,
                      465
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
                    460,
                    465
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
                      467,
                      468
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
                              494,
                              495
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
                            487,
                            496
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
                        485,
                        498
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
                            472,
                            480
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              474,
                              480
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
                          471,
                          480
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
                      470,
                      498
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
                    467,
                    498
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
                458,
                500
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
            "operator": "!",
            "prefix": true,
            "range": [
              457,
              500
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          "range": [
            438,
            500
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
        434,
        501
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "range": [
              534,
              550
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
                  554,
                  558
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
                  559,
                  560
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
                554,
                560
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
              553,
              560
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
            534,
            560
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
        530,
        561
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
              566,
              582
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
                  586,
                  587
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
                  588,
                  589
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
                586,
                589
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
              585,
              589
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
            566,
            589
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
        562,
        590
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
              595,
              611
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
                  615,
                  622
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
                  623,
                  624
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
                615,
                625
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
              614,
              625
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
            595,
            625
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
        591,
        626
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
              631,
              647
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
                  651,
                  654
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
                651,
                656
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
              650,
              656
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
            631,
            656
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
        627,
        657
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
              662,
              679
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
                    683,
                    684
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
                    685,
                    688
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
                  683,
                  688
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
                683,
                690
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
              682,
              690
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
            662,
            690
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
        658,
        691
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
              696,
              713
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
                  718,
                  724
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
                  727,
                  733
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
                718,
                733
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
              716,
              734
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
            696,
            734
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
        692,
        735
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
              740,
              757
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
                    775,
                    776
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
                    761,
                    767
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
                    768,
                    774
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
                  761,
                  774
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
                761,
                777
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
            "operator": "!",
            "prefix": true,
            "range": [
              760,
              777
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 33
              }
            }
          },
          "range": [
            740,
            777
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
        736,
        778
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "range": [
              807,
              824
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
                  829,
                  835
                ],
                "loc": {
                  "end": {
                    "column": 32,
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
                828,
                835
              ],
              "loc": {
                "end": {
                  "column": 32,
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
              827,
              835
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 36
              },
              "start": {
                "column": 24,
                "line": 36
              }
            }
          },
          "range": [
            807,
            835
          ],
          "loc": {
            "end": {
              "column": 32,
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
        803,
        836
      ],
      "loc": {
        "end": {
          "column": 33,
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
              841,
              858
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
                      865,
                      871
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 37
                      },
                      "start": {
                        "column": 28,
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
                      874,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 37
                      },
                      "start": {
                        "column": 37,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    865,
                    880
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 37
                    },
                    "start": {
                      "column": 28,
                      "line": 37
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  863,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 37
                  },
                  "start": {
                    "column": 26,
                    "line": 37
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                862,
                881
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 37
                },
                "start": {
                  "column": 25,
                  "line": 37
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              861,
              881
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 37
              },
              "start": {
                "column": 24,
                "line": 37
              }
            }
          },
          "range": [
            841,
            881
          ],
          "loc": {
            "end": {
              "column": 44,
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
        837,
        882
      ],
      "loc": {
        "end": {
          "column": 45,
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
            914,
            916
          ],
          "loc": {
            "end": {
              "column": 3,
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
          913,
          916
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        913,
        917
      ],
      "loc": {
        "end": {
          "column": 4,
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
            919,
            925
          ],
          "loc": {
            "end": {
              "column": 7,
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
          918,
          925
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        918,
        926
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
            928,
            935
          ],
          "loc": {
            "end": {
              "column": 8,
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
          927,
          935
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        927,
        936
      ],
      "loc": {
        "end": {
          "column": 9,
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
              938,
              941
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 43
              },
              "start": {
                "column": 1,
                "line": 43
              }
            }
          },
          "optional": false,
          "range": [
            938,
            943
          ],
          "loc": {
            "end": {
              "column": 6,
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
          937,
          943
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        937,
        944
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
                  946,
                  950
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                "name": "a",
                "optional": false,
                "range": [
                  951,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 44
                  },
                  "start": {
                    "column": 6,
                    "line": 44
                  }
                }
              },
              "range": [
                946,
                952
              ],
              "loc": {
                "end": {
                  "column": 7,
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
              945,
              952
            ],
            "loc": {
              "end": {
                "column": 7,
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
                953,
                954
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 44
                },
                "start": {
                  "column": 8,
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
                955,
                956
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
              953,
              956
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 44
              },
              "start": {
                "column": 8,
                "line": 44
              }
            }
          }
        ],
        "range": [
          945,
          956
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
      "range": [
        945,
        957
      ],
      "loc": {
        "end": {
          "column": 12,
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
      "column": 12,
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
