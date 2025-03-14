__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    357
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          21,
          38
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
              "name": "value",
              "optional": false,
              "range": [
                27,
                32
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                32,
                35
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    34,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  34,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              27,
              36
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          14,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        },
        "range": [
          17,
          20
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
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              18,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
            "name": "maybeBox",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              },
              "range": [
                63,
                72
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  65,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              55,
              72
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            55,
            72
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 14,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        41,
        73
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "range": [
            75,
            83
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            95,
            98
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          75,
          98
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        75,
        99
      ],
      "loc": {
        "end": {
          "column": 24,
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
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "range": [
            107,
            115
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              127,
              130
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              130,
              138
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  131,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
              }
            }
          },
          "range": [
            127,
            138
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 10
            },
            "start": {
              "column": 20,
              "line": 10
            }
          }
        },
        "range": [
          107,
          138
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        107,
        139
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "range": [
            149,
            157
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              170,
              173
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 11
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              173,
              181
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  174,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 11
                  },
                  "start": {
                    "column": 25,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            }
          },
          "range": [
            170,
            181
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 11
            },
            "start": {
              "column": 21,
              "line": 11
            }
          }
        },
        "range": [
          149,
          182
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        149,
        183
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "range": [
            193,
            201
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              215,
              218
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              218,
              226
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  219,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 26,
                    "line": 12
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            }
          },
          "range": [
            215,
            226
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 12
            },
            "start": {
              "column": 22,
              "line": 12
            }
          }
        },
        "range": [
          193,
          228
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        193,
        229
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              240,
              243
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 0,
                "line": 14
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              243,
              251
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  244,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 14
              },
              "start": {
                "column": 3,
                "line": 14
              }
            }
          },
          "range": [
            240,
            251
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "range": [
            263,
            269
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 14
            },
            "start": {
              "column": 23,
              "line": 14
            }
          }
        },
        "range": [
          240,
          269
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        240,
        270
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              278,
              281
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 15
              },
              "start": {
                "column": 1,
                "line": 15
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              281,
              289
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  282,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "range": [
            278,
            289
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 15
            },
            "start": {
              "column": 1,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "range": [
            302,
            308
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        },
        "range": [
          277,
          308
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        277,
        309
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              318,
              321
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              321,
              329
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  322,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 16
                  },
                  "start": {
                    "column": 6,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 5,
                "line": 16
              }
            }
          },
          "range": [
            318,
            329
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 16
            },
            "start": {
              "column": 2,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "range": [
            343,
            349
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 16
            },
            "start": {
              "column": 27,
              "line": 16
            }
          }
        },
        "range": [
          316,
          349
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        316,
        350
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
