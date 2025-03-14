__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    294
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          34,
          52
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
              "name": "_field",
              "optional": false,
              "range": [
                40,
                46
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                46,
                49
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    48,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  48,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              40,
              50
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "column": 34,
            "line": 1
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TableClass",
        "optional": false,
        "range": [
          14,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 24,
            "line": 1
          }
        },
        "range": [
          24,
          33
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                29,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                25,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              25,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        52
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
      "type": "ExportNamedDeclaration",
      "range": [
        54,
        85
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Table",
          "optional": false,
          "range": [
            66,
            71
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TableClass",
            "optional": false,
            "range": [
              74,
              84
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            74,
            84
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        },
        "range": [
          61,
          85
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 31,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
              "type": "BinaryExpression",
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  135,
                  136
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "TableClass",
                "optional": false,
                "range": [
                  148,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "range": [
                135,
                158
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              128,
              159
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          122,
          161
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 35,
            "line": 7
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
          96,
          98
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 30,
                "line": 7
              }
            },
            "range": [
              117,
              120
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              },
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            }
          },
          "range": [
            116,
            120
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        },
        "range": [
          98,
          115
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Table",
                "optional": false,
                "range": [
                  109,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "range": [
                109,
                114
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              99,
              114
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        87,
        161
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "BinaryExpression",
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  217,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "TableClass",
                "optional": false,
                "range": [
                  230,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "range": [
                217,
                240
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              210,
              241
            ],
            "loc": {
              "end": {
                "column": 35,
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
          243
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 41,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "range": [
          172,
          175
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 11
              },
              "start": {
                "column": 36,
                "line": 11
              }
            },
            "range": [
              199,
              202
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  201,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 11
                  },
                  "start": {
                    "column": 38,
                    "line": 11
                  }
                }
              },
              "range": [
                201,
                202
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
                }
              }
            }
          },
          "range": [
            198,
            202
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 11
            },
            "start": {
              "column": 35,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        },
        "range": [
          175,
          197
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TableClass",
                "optional": false,
                "range": [
                  186,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 23,
                    "line": 11
                  }
                }
              },
              "range": [
                186,
                196
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                176,
                177
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              176,
              196
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        163,
        243
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              },
              "range": [
                260,
                267
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Table",
                  "optional": false,
                  "range": [
                    262,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                "range": [
                  262,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              259,
              267
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 14,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            259,
            267
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        245,
        268
      ],
      "loc": {
        "end": {
          "column": 23,
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
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "range": [
            269,
            270
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "TableClass",
          "optional": false,
          "range": [
            282,
            292
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        },
        "range": [
          269,
          292
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        269,
        293
      ],
      "loc": {
        "end": {
          "column": 24,
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
