__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1904
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
            "name": "sym",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  19,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                12,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              12,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Orig",
        "optional": false,
        "range": [
          28,
          32
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
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
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  38,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              },
              "range": [
                48,
                53
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  50,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              37,
              54
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "range": [
                55,
                58
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              },
              "range": [
                58,
                63
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  60,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 2
                  },
                  "start": {
                    "column": 37,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              55,
              64
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 2
              },
              "start": {
                "column": 32,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym",
              "optional": false,
              "range": [
                66,
                69
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 2
                },
                "start": {
                  "column": 43,
                  "line": 2
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 2
                },
                "start": {
                  "column": 47,
                  "line": 2
                }
              },
              "range": [
                70,
                75
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  72,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 2
                  },
                  "start": {
                    "column": 49,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              65,
              75
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 2
              },
              "start": {
                "column": 42,
                "line": 2
              }
            }
          }
        ],
        "range": [
          35,
          77
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 2
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "range": [
        23,
        77
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Okay",
        "optional": false,
        "range": [
          84,
          88
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            98,
            117
          ],
          "params": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "range": [
                    105,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                },
                "range": [
                  105,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              },
              "range": [
                99,
                109
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            {
              "type": "TSNeverKeyword",
              "range": [
                111,
                116
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "range": [
            91,
            98
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "range": [
          91,
          117
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 4
          }
        }
      },
      "range": [
        79,
        117
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Remapped",
        "optional": false,
        "range": [
          168,
          176
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "range": [
                193,
                197
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 30,
                  "line": 7
                }
              }
            },
            "range": [
              193,
              197
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 30,
                "line": 7
              }
            }
          },
          "range": [
            187,
            197
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            182,
            183
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 7
            },
            "start": {
              "column": 19,
              "line": 7
            }
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              201,
              203
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 7
              },
              "start": {
                "column": 38,
                "line": 7
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                218,
                226
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      219,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 7
                      },
                      "start": {
                        "column": 56,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    219,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 7
                    },
                    "start": {
                      "column": 56,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    222,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 7
                    },
                    "start": {
                      "column": 59,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 7
                },
                "start": {
                  "column": 55,
                  "line": 7
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "range": [
                212,
                218
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 7
                },
                "start": {
                  "column": 49,
                  "line": 7
                }
              }
            },
            "range": [
              212,
              226
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 7
              },
              "start": {
                "column": 49,
                "line": 7
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                237,
                238
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 7
                },
                "start": {
                  "column": 74,
                  "line": 7
                }
              }
            },
            "range": [
              237,
              238
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 7
              },
              "start": {
                "column": 74,
                "line": 7
              }
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "range": [
              229,
              234
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 7
              },
              "start": {
                "column": 66,
                "line": 7
              }
            }
          },
          "range": [
            201,
            238
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 7
            },
            "start": {
              "column": 38,
              "line": 7
            }
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            241,
            244
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 7
            },
            "start": {
              "column": 78,
              "line": 7
            }
          }
        },
        "range": [
          179,
          246
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 7
          }
        }
      },
      "range": [
        163,
        246
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Oops",
        "optional": false,
        "range": [
          346,
          350
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            360,
            383
          ],
          "params": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "range": [
                    367,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 14
                    },
                    "start": {
                      "column": 26,
                      "line": 14
                    }
                  }
                },
                "range": [
                  367,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 14
                  },
                  "start": {
                    "column": 26,
                    "line": 14
                  }
                }
              },
              "range": [
                361,
                375
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 14
                }
              }
            },
            {
              "type": "TSNeverKeyword",
              "range": [
                377,
                382
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 14
                },
                "start": {
                  "column": 36,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 14
            },
            "start": {
              "column": 19,
              "line": 14
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "range": [
            353,
            360
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        },
        "range": [
          353,
          383
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 14
          }
        }
      },
      "range": [
        341,
        383
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              },
              "range": [
                397,
                403
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Oops",
                  "optional": false,
                  "range": [
                    399,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  }
                },
                "range": [
                  399,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              396,
              403
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            396,
            403
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        384,
        404
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            405,
            406
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
          "name": "sym",
          "optional": false,
          "range": [
            409,
            412
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "range": [
          405,
          412
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        405,
        413
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            414,
            415
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"str\"",
          "value": "str",
          "range": [
            418,
            423
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          414,
          423
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        414,
        424
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "range": [
                611,
                615
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 22
                              },
                              "start": {
                                "column": 20,
                                "line": 22
                              }
                            },
                            "range": [
                              622,
                              630
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                624,
                                630
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 22
                                },
                                "start": {
                                  "column": 22,
                                  "line": 22
                                }
                              }
                            }
                          },
                          "range": [
                            621,
                            630
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 22
                            },
                            "start": {
                              "column": 19,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 22
                          },
                          "start": {
                            "column": 29,
                            "line": 22
                          }
                        },
                        "range": [
                          631,
                          636
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            633,
                            636
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 22
                            },
                            "start": {
                              "column": 31,
                              "line": 22
                            }
                          }
                        }
                      },
                      "range": [
                        620,
                        637
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 22
                        },
                        "start": {
                          "column": 18,
                          "line": 22
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "range": [
                          638,
                          641
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 22
                          },
                          "start": {
                            "column": 36,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 22
                          },
                          "start": {
                            "column": 39,
                            "line": 22
                          }
                        },
                        "range": [
                          641,
                          646
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            643,
                            646
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 22
                            },
                            "start": {
                              "column": 41,
                              "line": 22
                            }
                          }
                        }
                      },
                      "range": [
                        638,
                        647
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 22
                        },
                        "start": {
                          "column": 36,
                          "line": 22
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "range": [
                          649,
                          652
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 22
                          },
                          "start": {
                            "column": 47,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 22
                          },
                          "start": {
                            "column": 51,
                            "line": 22
                          }
                        },
                        "range": [
                          653,
                          658
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            655,
                            658
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 22
                            },
                            "start": {
                              "column": 53,
                              "line": 22
                            }
                          }
                        }
                      },
                      "range": [
                        648,
                        658
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 22
                        },
                        "start": {
                          "column": 46,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "range": [
                    618,
                    660
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      663,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 22
                      },
                      "start": {
                        "column": 61,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    663,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 22
                    },
                    "start": {
                      "column": 61,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                618,
                664
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 22
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              }
            },
            "range": [
              606,
              665
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Okay",
              "optional": false,
              "range": [
                680,
                684
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "range": [
                    693,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 24
                    },
                    "start": {
                      "column": 22,
                      "line": 24
                    }
                  }
                },
                "range": [
                  693,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 22,
                    "line": 24
                  }
                }
              },
              "range": [
                687,
                697
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 16,
                  "line": 24
                }
              }
            },
            "range": [
              675,
              698
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 24
              },
              "start": {
                "column": 4,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    },
                    "range": [
                      708,
                      714
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Okay",
                        "optional": false,
                        "range": [
                          710,
                          714
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 25
                          },
                          "start": {
                            "column": 11,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        710,
                        714
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 25
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    707,
                    714
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": null,
                "range": [
                  707,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              703,
              715
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  720,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"str\"",
                "value": "str",
                "range": [
                  724,
                  729
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "range": [
                720,
                729
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              720,
              730
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  735,
                  736
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "range": [
                  739,
                  742
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              },
              "range": [
                735,
                742
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              735,
              743
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  748,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"whatever\"",
                "value": "whatever",
                "range": [
                  752,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "range": [
                748,
                762
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              748,
              763
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
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Remapped",
              "optional": false,
              "range": [
                826,
                834
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Orig",
                    "optional": false,
                    "range": [
                      851,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 31
                      },
                      "start": {
                        "column": 34,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    851,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 31
                    },
                    "start": {
                      "column": 34,
                      "line": 31
                    }
                  }
                },
                "range": [
                  845,
                  855
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 31
                  },
                  "start": {
                    "column": 28,
                    "line": 31
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  840,
                  841
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 31
                  },
                  "start": {
                    "column": 23,
                    "line": 31
                  }
                }
              },
              "nameType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    859,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 31
                    },
                    "start": {
                      "column": 42,
                      "line": 31
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      876,
                      884
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            877,
                            878
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 31
                            },
                            "start": {
                              "column": 60,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          877,
                          878
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 31
                          },
                          "start": {
                            "column": 60,
                            "line": 31
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          880,
                          883
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 31
                          },
                          "start": {
                            "column": 63,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 31
                      },
                      "start": {
                        "column": 59,
                        "line": 31
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "range": [
                      870,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 31
                      },
                      "start": {
                        "column": 53,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    870,
                    884
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 31
                    },
                    "start": {
                      "column": 53,
                      "line": 31
                    }
                  }
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      895,
                      896
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 31
                      },
                      "start": {
                        "column": 78,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    895,
                    896
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 31
                    },
                    "start": {
                      "column": 78,
                      "line": 31
                    }
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    887,
                    892
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 31
                    },
                    "start": {
                      "column": 70,
                      "line": 31
                    }
                  }
                },
                "range": [
                  859,
                  896
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 31
                  },
                  "start": {
                    "column": 42,
                    "line": 31
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  899,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 31
                  },
                  "start": {
                    "column": 82,
                    "line": 31
                  }
                }
              },
              "range": [
                837,
                904
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            },
            "range": [
              821,
              904
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Oops",
              "optional": false,
              "range": [
                1032,
                1036
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "range": [
                    1045,
                    1053
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 38
                    },
                    "start": {
                      "column": 22,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1045,
                  1053
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 38
                  },
                  "start": {
                    "column": 22,
                    "line": 38
                  }
                }
              },
              "range": [
                1039,
                1053
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 38
                },
                "start": {
                  "column": 16,
                  "line": 38
                }
              }
            },
            "range": [
              1027,
              1054
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 38
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 39
                      },
                      "start": {
                        "column": 9,
                        "line": 39
                      }
                    },
                    "range": [
                      1064,
                      1070
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Oops",
                        "optional": false,
                        "range": [
                          1066,
                          1070
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 39
                          },
                          "start": {
                            "column": 11,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        1066,
                        1070
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 39
                        },
                        "start": {
                          "column": 11,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    1063,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "init": null,
                "range": [
                  1063,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1059,
              1071
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1076,
                  1077
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "range": [
                  1080,
                  1083
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              },
              "range": [
                1076,
                1083
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              1076,
              1084
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1089,
                  1090
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"str\"",
                "value": "str",
                "range": [
                  1093,
                  1098
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              },
              "range": [
                1089,
                1098
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              1089,
              1099
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
        "range": [
          600,
          1101
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 16,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          593,
          594
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        },
        "range": [
          594,
          597
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
                595,
                596
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              595,
              596
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        584,
        1101
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 21
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
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "range": [
                1237,
                1241
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 46
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 46
                              },
                              "start": {
                                "column": 20,
                                "line": 46
                              }
                            },
                            "range": [
                              1248,
                              1256
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                1250,
                                1256
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 46
                                },
                                "start": {
                                  "column": 22,
                                  "line": 46
                                }
                              }
                            }
                          },
                          "range": [
                            1247,
                            1256
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 46
                            },
                            "start": {
                              "column": 19,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 46
                          },
                          "start": {
                            "column": 29,
                            "line": 46
                          }
                        },
                        "range": [
                          1257,
                          1262
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            1259,
                            1262
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 46
                            },
                            "start": {
                              "column": 31,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        1246,
                        1263
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 46
                        },
                        "start": {
                          "column": 18,
                          "line": 46
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "range": [
                          1264,
                          1267
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 46
                          },
                          "start": {
                            "column": 36,
                            "line": 46
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 46
                          },
                          "start": {
                            "column": 39,
                            "line": 46
                          }
                        },
                        "range": [
                          1267,
                          1272
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            1269,
                            1272
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 46
                            },
                            "start": {
                              "column": 41,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        1264,
                        1273
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 46
                        },
                        "start": {
                          "column": 36,
                          "line": 46
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "range": [
                          1275,
                          1278
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 46
                          },
                          "start": {
                            "column": 47,
                            "line": 46
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 46
                          },
                          "start": {
                            "column": 51,
                            "line": 46
                          }
                        },
                        "range": [
                          1279,
                          1284
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            1281,
                            1284
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 46
                            },
                            "start": {
                              "column": 53,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        1274,
                        1284
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 46
                        },
                        "start": {
                          "column": 46,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "range": [
                    1244,
                    1286
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 46
                    },
                    "start": {
                      "column": 16,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1289,
                      1290
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 46
                      },
                      "start": {
                        "column": 61,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1289,
                    1290
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 46
                    },
                    "start": {
                      "column": 61,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                1244,
                1290
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 46
                },
                "start": {
                  "column": 16,
                  "line": 46
                }
              }
            },
            "range": [
              1232,
              1291
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Okay",
              "optional": false,
              "range": [
                1306,
                1310
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 48
                },
                "start": {
                  "column": 9,
                  "line": 48
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "range": [
                    1319,
                    1323
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 48
                    },
                    "start": {
                      "column": 22,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1319,
                  1323
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 48
                  },
                  "start": {
                    "column": 22,
                    "line": 48
                  }
                }
              },
              "range": [
                1313,
                1323
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 48
                },
                "start": {
                  "column": 16,
                  "line": 48
                }
              }
            },
            "range": [
              1301,
              1324
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 48
              },
              "start": {
                "column": 4,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 49
                      },
                      "start": {
                        "column": 9,
                        "line": 49
                      }
                    },
                    "range": [
                      1334,
                      1340
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Okay",
                        "optional": false,
                        "range": [
                          1336,
                          1340
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 49
                          },
                          "start": {
                            "column": 11,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        1336,
                        1340
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 49
                        },
                        "start": {
                          "column": 11,
                          "line": 49
                        }
                      }
                    }
                  },
                  "range": [
                    1333,
                    1340
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                "init": null,
                "range": [
                  1333,
                  1340
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1329,
              1341
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1346,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"str\"",
                "value": "str",
                "range": [
                  1350,
                  1355
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
                1346,
                1355
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1346,
              1356
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1361,
                  1362
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "range": [
                  1365,
                  1368
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              },
              "range": [
                1361,
                1368
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1361,
              1369
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1374,
                  1375
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"whatever\"",
                "value": "whatever",
                "range": [
                  1378,
                  1388
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              },
              "range": [
                1374,
                1388
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              1374,
              1389
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonIndex",
              "optional": false,
              "range": [
                1448,
                1456
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 55
                },
                "start": {
                  "column": 9,
                  "line": 55
                }
              }
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  1482,
                  1484
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 55
                  },
                  "start": {
                    "column": 43,
                    "line": 55
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1499,
                    1507
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1500,
                          1501
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 55
                          },
                          "start": {
                            "column": 61,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1500,
                        1501
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 55
                        },
                        "start": {
                          "column": 61,
                          "line": 55
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1503,
                        1506
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 55
                        },
                        "start": {
                          "column": 64,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 55
                    },
                    "start": {
                      "column": 60,
                      "line": 55
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    1493,
                    1499
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 55
                    },
                    "start": {
                      "column": 54,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1493,
                  1507
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 55
                  },
                  "start": {
                    "column": 54,
                    "line": 55
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1518,
                    1519
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 55
                    },
                    "start": {
                      "column": 79,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1518,
                  1519
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 55
                  },
                  "start": {
                    "column": 79,
                    "line": 55
                  }
                }
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "range": [
                  1510,
                  1515
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 55
                  },
                  "start": {
                    "column": 71,
                    "line": 55
                  }
                }
              },
              "range": [
                1482,
                1519
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 55
                },
                "start": {
                  "column": 43,
                  "line": 55
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 55
                },
                "start": {
                  "column": 17,
                  "line": 55
                }
              },
              "range": [
                1456,
                1479
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
                      "name": "PropertyKey",
                      "optional": false,
                      "range": [
                        1467,
                        1478
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 55
                        },
                        "start": {
                          "column": 28,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1467,
                      1478
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 55
                      },
                      "start": {
                        "column": 28,
                        "line": 55
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
                      1457,
                      1458
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 55
                      },
                      "start": {
                        "column": 18,
                        "line": 55
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1457,
                    1478
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 55
                    },
                    "start": {
                      "column": 18,
                      "line": 55
                    }
                  }
                }
              ]
            },
            "range": [
              1443,
              1520
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DistributiveNonIndex",
              "optional": false,
              "range": [
                1530,
                1550
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 56
                },
                "start": {
                  "column": 9,
                  "line": 56
                }
              }
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1576,
                    1577
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 56
                    },
                    "start": {
                      "column": 55,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1576,
                  1577
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 56
                  },
                  "start": {
                    "column": 55,
                    "line": 56
                  }
                }
              },
              "extendsType": {
                "type": "TSUnknownKeyword",
                "range": [
                  1586,
                  1593
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 56
                  },
                  "start": {
                    "column": 65,
                    "line": 56
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  1610,
                  1615
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 56
                  },
                  "start": {
                    "column": 89,
                    "line": 56
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1604,
                    1607
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1605,
                          1606
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 56
                          },
                          "start": {
                            "column": 84,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1605,
                        1606
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 56
                        },
                        "start": {
                          "column": 84,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 56
                    },
                    "start": {
                      "column": 83,
                      "line": 56
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonIndex",
                  "optional": false,
                  "range": [
                    1596,
                    1604
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 56
                    },
                    "start": {
                      "column": 75,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1596,
                  1607
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 56
                  },
                  "start": {
                    "column": 75,
                    "line": 56
                  }
                }
              },
              "range": [
                1576,
                1615
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 56
                },
                "start": {
                  "column": 55,
                  "line": 56
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 56
                },
                "start": {
                  "column": 29,
                  "line": 56
                }
              },
              "range": [
                1550,
                1573
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
                      "name": "PropertyKey",
                      "optional": false,
                      "range": [
                        1561,
                        1572
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 56
                        },
                        "start": {
                          "column": 40,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1561,
                      1572
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 56
                      },
                      "start": {
                        "column": 40,
                        "line": 56
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
                      1551,
                      1552
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 56
                      },
                      "start": {
                        "column": 30,
                        "line": 56
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1551,
                    1572
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 56
                    },
                    "start": {
                      "column": 30,
                      "line": 56
                    }
                  }
                }
              ]
            },
            "range": [
              1525,
              1616
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Remapped",
              "optional": false,
              "range": [
                1631,
                1639
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 58
                },
                "start": {
                  "column": 9,
                  "line": 58
                }
              }
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Orig",
                    "optional": false,
                    "range": [
                      1656,
                      1660
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 58
                      },
                      "start": {
                        "column": 34,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1656,
                    1660
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 58
                    },
                    "start": {
                      "column": 34,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1650,
                  1660
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 58
                  },
                  "start": {
                    "column": 28,
                    "line": 58
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1645,
                  1646
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 58
                  },
                  "start": {
                    "column": 23,
                    "line": 58
                  }
                }
              },
              "nameType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1684,
                    1687
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          1685,
                          1686
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 58
                          },
                          "start": {
                            "column": 63,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1685,
                        1686
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 58
                        },
                        "start": {
                          "column": 63,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 58
                    },
                    "start": {
                      "column": 62,
                      "line": 58
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DistributiveNonIndex",
                  "optional": false,
                  "range": [
                    1664,
                    1684
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 58
                    },
                    "start": {
                      "column": 42,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1664,
                  1687
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 58
                  },
                  "start": {
                    "column": 42,
                    "line": 58
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1690,
                  1693
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 58
                  },
                  "start": {
                    "column": 68,
                    "line": 58
                  }
                }
              },
              "range": [
                1642,
                1695
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 58
                },
                "start": {
                  "column": 20,
                  "line": 58
                }
              }
            },
            "range": [
              1626,
              1695
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Oops",
              "optional": false,
              "range": [
                1823,
                1827
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "range": [
                    1836,
                    1844
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 65
                    },
                    "start": {
                      "column": 22,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1836,
                  1844
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 65
                  },
                  "start": {
                    "column": 22,
                    "line": 65
                  }
                }
              },
              "range": [
                1830,
                1844
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 65
                },
                "start": {
                  "column": 16,
                  "line": 65
                }
              }
            },
            "range": [
              1818,
              1845
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
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
                        "line": 66
                      },
                      "start": {
                        "column": 9,
                        "line": 66
                      }
                    },
                    "range": [
                      1855,
                      1861
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Oops",
                        "optional": false,
                        "range": [
                          1857,
                          1861
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 66
                          },
                          "start": {
                            "column": 11,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1857,
                        1861
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 66
                        },
                        "start": {
                          "column": 11,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1854,
                    1861
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                "init": null,
                "range": [
                  1854,
                  1861
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1850,
              1862
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1867,
                  1868
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "range": [
                  1871,
                  1874
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 67
                  },
                  "start": {
                    "column": 8,
                    "line": 67
                  }
                }
              },
              "range": [
                1867,
                1874
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "range": [
              1867,
              1875
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1880,
                  1881
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"str\"",
                "value": "str",
                "range": [
                  1884,
                  1889
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                }
              },
              "range": [
                1880,
                1889
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1880,
              1890
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "range": [
          1226,
          1892
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 16,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          1219,
          1220
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
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 45
          },
          "start": {
            "column": 10,
            "line": 45
          }
        },
        "range": [
          1220,
          1223
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
                1221,
                1222
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
            "out": false,
            "range": [
              1221,
              1222
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
          }
        ]
      },
      "range": [
        1210,
        1892
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        1894,
        1904
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 10,
      "line": 71
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
