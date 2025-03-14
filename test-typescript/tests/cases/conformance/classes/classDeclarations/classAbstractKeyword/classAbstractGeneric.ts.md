__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    505
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          20,
          85
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
              "name": "t",
              "optional": false,
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                27,
                30
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    29,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                },
                "range": [
                  29,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              26,
              31
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
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                50,
                53
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                53,
                59
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                },
                "range": [
                  55,
                  58
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      57,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 20,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    57,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "range": [
              41,
              59
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                73,
                76
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                76,
                83
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    },
                    "range": [
                      78,
                      81
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        80,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    77,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              64,
              83
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 1
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
          15,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 15,
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
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        85
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          120,
          122
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 35,
            "line": 8
          },
          "start": {
            "column": 33,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          102,
          103
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          115,
          116
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 28,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          116,
          119
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
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 30,
                  "line": 8
                }
              }
            },
            "range": [
              117,
              118
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 30,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 8
          },
          "start": {
            "column": 29,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 8
          },
          "start": {
            "column": 16,
            "line": 8
          }
        },
        "range": [
          103,
          106
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
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              104,
              105
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        87,
        122
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 8
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
          148,
          150
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 26,
            "line": 10
          },
          "start": {
            "column": 24,
            "line": 10
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
          130,
          131
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          143,
          144
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 19,
            "line": 10
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          144,
          147
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
                145,
                146
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "range": [
              145,
              146
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            }
          }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        },
        "range": [
          131,
          134
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
                132,
                133
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              132,
              133
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        124,
        150
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          216,
          218
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 28,
            "line": 12
          },
          "start": {
            "column": 26,
            "line": 12
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
          196,
          197
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          206,
          207
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 12
          },
          "start": {
            "column": 16,
            "line": 12
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          207,
          215
        ],
        "params": [
          {
            "type": "TSNumberKeyword",
            "range": [
              208,
              214
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
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        }
      },
      "range": [
        190,
        218
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          282,
          348
        ],
        "body": [
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
                322,
                325
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                325,
                346
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          337,
                          341
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 15
                          },
                          "start": {
                            "column": 19,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          342,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 15
                          },
                          "start": {
                            "column": 24,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        337,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      330,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  328,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
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
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              }
            },
            "range": [
              322,
              346
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 24,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          264,
          265
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          277,
          278
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 14
          },
          "start": {
            "column": 19,
            "line": 14
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          278,
          281
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
                279,
                280
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
                }
              }
            },
            "range": [
              279,
              280
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 21,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 14
          },
          "start": {
            "column": 20,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        },
        "range": [
          265,
          268
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
                266,
                267
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              266,
              267
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        258,
        348
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          374,
          429
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                414,
                417
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                417,
                427
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  425,
                  427
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 19
                      },
                      "start": {
                        "column": 10,
                        "line": 19
                      }
                    },
                    "range": [
                      420,
                      423
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          422,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        422,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 19
                        },
                        "start": {
                          "column": 12,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    418,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 7,
                  "line": 19
                }
              }
            },
            "range": [
              414,
              427
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 24,
            "line": 18
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          356,
          357
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 18
          },
          "start": {
            "column": 6,
            "line": 18
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          369,
          370
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 18
          },
          "start": {
            "column": 19,
            "line": 18
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          370,
          373
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
                371,
                372
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              }
            },
            "range": [
              371,
              372
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 21,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 18
          },
          "start": {
            "column": 20,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 18
          }
        },
        "range": [
          357,
          360
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
                358,
                359
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              358,
              359
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        350,
        429
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          455,
          505
        ],
        "body": [
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
                461,
                464
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                464,
                485
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          476,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 23
                          },
                          "start": {
                            "column": 19,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          481,
                          482
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 23
                          },
                          "start": {
                            "column": 24,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        476,
                        482
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      469,
                      483
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  467,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 10,
                    "line": 23
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
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              }
            },
            "range": [
              461,
              485
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
              "name": "bar",
              "optional": false,
              "range": [
                490,
                493
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                493,
                503
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  500,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                      495,
                      498
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          497,
                          498
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 24
                          },
                          "start": {
                            "column": 11,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        497,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    494,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 24
                },
                "start": {
                  "column": 7,
                  "line": 24
                }
              }
            },
            "range": [
              490,
              503
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 24,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "range": [
          437,
          438
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          450,
          451
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 22
          },
          "start": {
            "column": 19,
            "line": 22
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          451,
          454
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
                452,
                453
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 22
                }
              }
            },
            "range": [
              452,
              453
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 21,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 22
          },
          "start": {
            "column": 20,
            "line": 22
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 22
          }
        },
        "range": [
          438,
          441
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
                439,
                440
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              439,
              440
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        431,
        505
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
