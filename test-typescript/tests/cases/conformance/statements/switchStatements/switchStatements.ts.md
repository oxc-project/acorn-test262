__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    978
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              15,
              71
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        62,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      55,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  45,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "range": [
                  31,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    },
                    "range": [
                      35,
                      43
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        37,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    34,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                22,
                71
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
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
          9,
          73
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        73
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
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                80,
                85
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  82,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              79,
              85
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            79,
            85
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        75,
        86
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "Literal",
            "raw": "''",
            "value": "",
            "range": [
              109,
              111
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            104,
            112
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              122,
              124
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            117,
            125
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              135,
              139
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            130,
            140
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              150,
              154
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            145,
            155
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              165,
              174
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            160,
            175
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "12",
                "value": 12,
                "range": [
                  194,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "range": [
                189,
                193
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "range": [
              185,
              197
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "range": [
            180,
            198
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "range": [
                212,
                218
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            },
            "range": [
              208,
              220
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            203,
            221
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "Literal",
            "raw": "/[a-z]/",
            "regex": {
              "flags": "",
              "pattern": "[a-z]"
            },
            "value": null,
            "range": [
              231,
              238
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            226,
            239
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              248,
              250
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "range": [
            244,
            251
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              261,
              263
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            256,
            264
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "range": [
                    276,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 19
                    },
                    "start": {
                      "column": 11,
                      "line": 19
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    280,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                },
                "range": [
                  276,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 19
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              274,
              284
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            269,
            285
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
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  295,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              294,
              299
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            290,
            300
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                317,
                318
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              310,
              318
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            305,
            319
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                336,
                337
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 22
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              329,
              337
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            324,
            338
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  353,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 14,
                    "line": 23
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
                "name": "M",
                "optional": false,
                "range": [
                  348,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "range": [
                  350,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              },
              "range": [
                348,
                352
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              348,
              355
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 23
              },
              "start": {
                "column": 9,
                "line": 23
              }
            }
          },
          "range": [
            343,
            356
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                384,
                386
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 24
                    },
                    "start": {
                      "column": 14,
                      "line": 24
                    }
                  },
                  "range": [
                    371,
                    379
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      373,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 24
                      },
                      "start": {
                        "column": 16,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  370,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
                    "line": 24
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              },
              "range": [
                366,
                369
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      367,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 24
                      },
                      "start": {
                        "column": 10,
                        "line": 24
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    367,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 24
                    },
                    "start": {
                      "column": 10,
                      "line": 24
                    }
                  }
                }
              ]
            },
            "range": [
              366,
              386
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            361,
            387
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  420,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 25
                  },
                  "start": {
                    "column": 32,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  416,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 25
                  },
                  "start": {
                    "column": 28,
                    "line": 25
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    },
                    "range": [
                      403,
                      411
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        405,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 25
                        },
                        "start": {
                          "column": 17,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    402,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 25
                    },
                    "start": {
                      "column": 14,
                      "line": 25
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                },
                "range": [
                  398,
                  401
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        399,
                        400
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 25
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      399,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    }
                  }
                ]
              },
              "range": [
                398,
                418
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 25
                },
                "start": {
                  "column": 10,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              397,
              422
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 25
              },
              "start": {
                "column": 9,
                "line": 25
              }
            }
          },
          "range": [
            392,
            423
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": null,
          "range": [
            428,
            436
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          95,
          96
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 8
          }
        }
      },
      "range": [
        87,
        438
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          528,
          543
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "range": [
                530,
                532
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
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
                  "line": 30
                },
                "start": {
                  "column": 12,
                  "line": 30
                }
              },
              "range": [
                532,
                540
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  534,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 30
                  }
                }
              }
            },
            "value": null,
            "range": [
              530,
              541
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 30
              },
              "start": {
                "column": 10,
                "line": 30
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 30
          },
          "start": {
            "column": 8,
            "line": 30
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
          526,
          527
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 30
          },
          "start": {
            "column": 6,
            "line": 30
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        520,
        543
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          562,
          578
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                564,
                568
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
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
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 24,
                  "line": 31
                }
              },
              "range": [
                568,
                576
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  570,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 31
                  },
                  "start": {
                    "column": 26,
                    "line": 31
                  }
                }
              }
            },
            "value": null,
            "range": [
              564,
              576
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
          }
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 31
          },
          "start": {
            "column": 18,
            "line": 31
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          550,
          551
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 31
          },
          "start": {
            "column": 6,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          560,
          561
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 31
          },
          "start": {
            "column": 16,
            "line": 31
          }
        }
      },
      "range": [
        544,
        578
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                612,
                613
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "range": [
              608,
              615
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 34
              },
              "start": {
                "column": 9,
                "line": 34
              }
            }
          },
          "range": [
            603,
            616
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "range": [
                    628,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 35
                    },
                    "start": {
                      "column": 11,
                      "line": 35
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    632,
                    634
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 35
                    },
                    "start": {
                      "column": 15,
                      "line": 35
                    }
                  }
                },
                "range": [
                  628,
                  634
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "range": [
                    636,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 35
                    },
                    "start": {
                      "column": 19,
                      "line": 35
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    642,
                    644
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 35
                    },
                    "start": {
                      "column": 25,
                      "line": 35
                    }
                  }
                },
                "range": [
                  636,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 35
                  },
                  "start": {
                    "column": 19,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              626,
              646
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 35
              },
              "start": {
                "column": 9,
                "line": 35
              }
            }
          },
          "range": [
            621,
            647
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                661,
                662
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "range": [
              657,
              664
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 36
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          },
          "range": [
            652,
            665
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
        }
      ],
      "discriminant": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            592,
            593
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 33
            },
            "start": {
              "column": 12,
              "line": 33
            }
          }
        },
        "range": [
          588,
          595
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 33
          },
          "start": {
            "column": 8,
            "line": 33
          }
        }
      },
      "range": [
        580,
        667
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "raw": "''",
        "value": "",
        "range": [
          677,
          679
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 39
          },
          "start": {
            "column": 8,
            "line": 39
          }
        }
      },
      "range": [
        669,
        684
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "raw": "12",
        "value": 12,
        "range": [
          693,
          695
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 40
          },
          "start": {
            "column": 8,
            "line": 40
          }
        }
      },
      "range": [
        685,
        700
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          709,
          713
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 41
          },
          "start": {
            "column": 8,
            "line": 41
          }
        }
      },
      "range": [
        701,
        718
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "raw": "null",
        "value": null,
        "range": [
          727,
          731
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 42
          },
          "start": {
            "column": 8,
            "line": 42
          }
        }
      },
      "range": [
        719,
        736
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
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "range": [
          745,
          754
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 43
          },
          "start": {
            "column": 8,
            "line": 43
          }
        }
      },
      "range": [
        737,
        759
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              777,
              779
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 44
              },
              "start": {
                "column": 17,
                "line": 44
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "range": [
            772,
            776
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 44
            },
            "start": {
              "column": 12,
              "line": 44
            }
          }
        },
        "range": [
          768,
          780
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 44
          },
          "start": {
            "column": 8,
            "line": 44
          }
        }
      },
      "range": [
        760,
        785
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "range": [
            798,
            804
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 45
            },
            "start": {
              "column": 12,
              "line": 45
            }
          }
        },
        "range": [
          794,
          806
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 45
          },
          "start": {
            "column": 8,
            "line": 45
          }
        }
      },
      "range": [
        786,
        811
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        },
        "value": null,
        "range": [
          820,
          827
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 46
          },
          "start": {
            "column": 8,
            "line": 46
          }
        }
      },
      "range": [
        812,
        832
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          841,
          843
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 47
          },
          "start": {
            "column": 8,
            "line": 47
          }
        }
      },
      "range": [
        833,
        848
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          857,
          859
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 48
          },
          "start": {
            "column": 8,
            "line": 48
          }
        }
      },
      "range": [
        849,
        864
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "range": [
                875,
                877
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 49
                },
                "start": {
                  "column": 10,
                  "line": 49
                }
              }
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "raw": "12",
              "value": 12,
              "range": [
                879,
                881
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 49
                },
                "start": {
                  "column": 14,
                  "line": 49
                }
              }
            },
            "range": [
              875,
              881
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 49
              },
              "start": {
                "column": 10,
                "line": 49
              }
            }
          }
        ],
        "range": [
          873,
          883
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 49
          },
          "start": {
            "column": 8,
            "line": 49
          }
        }
      },
      "range": [
        865,
        888
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "raw": "'a'",
            "value": "a",
            "range": [
              898,
              901
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 50
              },
              "start": {
                "column": 9,
                "line": 50
              }
            }
          }
        ],
        "range": [
          897,
          902
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 50
          },
          "start": {
            "column": 8,
            "line": 50
          }
        }
      },
      "range": [
        889,
        907
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "ArrowFunctionExpression",
        "async": false,
        "body": {
          "type": "Literal",
          "raw": "''",
          "value": "",
          "range": [
            934,
            936
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 51
            },
            "start": {
              "column": 26,
              "line": 51
            }
          }
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 51
                },
                "start": {
                  "column": 13,
                  "line": 51
                }
              },
              "range": [
                921,
                929
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  923,
                  929
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 51
                  },
                  "start": {
                    "column": 15,
                    "line": 51
                  }
                }
              }
            },
            "range": [
              920,
              929
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 51
              },
              "start": {
                "column": 12,
                "line": 51
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 11,
              "line": 51
            },
            "start": {
              "column": 8,
              "line": 51
            }
          },
          "range": [
            916,
            919
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  917,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 51
                  },
                  "start": {
                    "column": 9,
                    "line": 51
                  }
                }
              },
              "out": false,
              "range": [
                917,
                918
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              }
            }
          ]
        },
        "range": [
          916,
          936
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 51
          },
          "start": {
            "column": 8,
            "line": 51
          }
        }
      },
      "range": [
        908,
        941
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [],
      "discriminant": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              968,
              969
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 52
              },
              "start": {
                "column": 26,
                "line": 52
              }
            }
          }
        ],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Literal",
            "raw": "''",
            "value": "",
            "range": [
              964,
              966
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 52
              },
              "start": {
                "column": 22,
                "line": 52
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 52
                  },
                  "start": {
                    "column": 14,
                    "line": 52
                  }
                },
                "range": [
                  956,
                  959
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      958,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 52
                      },
                      "start": {
                        "column": 16,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    958,
                    959
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 52
                    },
                    "start": {
                      "column": 16,
                      "line": 52
                    }
                  }
                }
              },
              "range": [
                955,
                959
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 52
                },
                "start": {
                  "column": 13,
                  "line": 52
                }
              }
            }
          ],
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 12,
                "line": 52
              },
              "start": {
                "column": 9,
                "line": 52
              }
            },
            "range": [
              951,
              954
            ],
            "params": [
              {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    952,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 52
                    },
                    "start": {
                      "column": 10,
                      "line": 52
                    }
                  }
                },
                "out": false,
                "range": [
                  952,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 52
                  },
                  "start": {
                    "column": 10,
                    "line": 52
                  }
                }
              }
            ]
          },
          "range": [
            951,
            966
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 52
            },
            "start": {
              "column": 9,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          950,
          970
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 52
          },
          "start": {
            "column": 8,
            "line": 52
          }
        }
      },
      "range": [
        942,
        975
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
