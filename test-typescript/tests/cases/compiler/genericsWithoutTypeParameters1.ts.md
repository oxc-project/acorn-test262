__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    423
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          43
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
                17,
                20
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                20,
                41
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        35,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 2
                        },
                        "start": {
                          "column": 22,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      28,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  26,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
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
                  22,
                  25
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      24,
                      25
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
                    24,
                    25
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
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              41
            ],
            "loc": {
              "end": {
                "column": 28,
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
            "column": 11,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
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
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        43
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          60,
          77
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                66,
                69
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                71,
                74
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    73,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  73,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            },
            "static": false,
            "range": [
              66,
              75
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          55,
          56
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        },
        "range": [
          56,
          59
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
                57,
                58
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              57,
              58
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        45,
        77
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              },
              "range": [
                85,
                88
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    87,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "range": [
                  87,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              83,
              88
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            83,
            88
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        79,
        89
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              },
              "range": [
                96,
                99
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    98,
                    99
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
                "range": [
                  98,
                  99
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
            },
            "range": [
              94,
              99
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            94,
            99
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        90,
        100
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 10
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              },
              "range": [
                107,
                113
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    110,
                    113
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          111,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 11
                          },
                          "start": {
                            "column": 10,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        111,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 11
                        },
                        "start": {
                          "column": 10,
                          "line": 11
                        }
                      }
                    }
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
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    109,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "range": [
                  109,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              105,
              113
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            105,
            113
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        101,
        114
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 11
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                121,
                127
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    124,
                    127
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          125,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 12
                          },
                          "start": {
                            "column": 10,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        125,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 12
                        },
                        "start": {
                          "column": 10,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    123,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "range": [
                  123,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              119,
              127
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            119,
            127
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        115,
        128
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          155,
          158
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 14
          },
          "start": {
            "column": 25,
            "line": 14
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
          139,
          142
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
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
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 14,
                "line": 14
              }
            },
            "range": [
              144,
              147
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  146,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 16,
                    "line": 14
                  }
                }
              },
              "range": [
                146,
                147
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            }
          },
          "range": [
            143,
            147
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
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 20,
                "line": 14
              }
            },
            "range": [
              150,
              153
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  152,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 14
                  },
                  "start": {
                    "column": 22,
                    "line": 14
                  }
                }
              },
              "range": [
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 14
                },
                "start": {
                  "column": 22,
                  "line": 14
                }
              }
            }
          },
          "range": [
            149,
            153
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 14
            },
            "start": {
              "column": 19,
              "line": 14
            }
          }
        }
      ],
      "range": [
        130,
        158
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          191,
          194
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 15
          },
          "start": {
            "column": 32,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          168,
          172
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
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
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            },
            "range": [
              174,
              180
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  177,
                  180
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "range": [
                        178,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      178,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 15
                  },
                  "start": {
                    "column": 18,
                    "line": 15
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  176,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              },
              "range": [
                176,
                180
              ],
              "loc": {
                "end": {
                  "column": 21,
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
            173,
            180
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 15
              },
              "start": {
                "column": 24,
                "line": 15
              }
            },
            "range": [
              183,
              189
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  186,
                  189
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        187,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 15
                        },
                        "start": {
                          "column": 28,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      187,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 28,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  185,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 15
                  },
                  "start": {
                    "column": 26,
                    "line": 15
                  }
                }
              },
              "range": [
                185,
                189
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              }
            }
          },
          "range": [
            182,
            189
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 15
            },
            "start": {
              "column": 23,
              "line": 15
            }
          }
        }
      ],
      "range": [
        159,
        194
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 17
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                201,
                211
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        205,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 17
                        },
                        "start": {
                          "column": 9,
                          "line": 17
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
                          "column": 13,
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      },
                      "range": [
                        206,
                        209
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            208,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          208,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      205,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  203,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              200,
              211
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                    216,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 20,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      223,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      224,
                      232
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          225,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 17
                          },
                          "start": {
                            "column": 29,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 17
                      },
                      "start": {
                        "column": 28,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    219,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 17
                    },
                    "start": {
                      "column": 23,
                      "line": 17
                    }
                  }
                },
                "range": [
                  216,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 17
                  },
                  "start": {
                    "column": 20,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              214,
              236
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 17
              },
              "start": {
                "column": 18,
                "line": 17
              }
            }
          },
          "range": [
            200,
            236
          ],
          "loc": {
            "end": {
              "column": 40,
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
        196,
        237
      ],
      "loc": {
        "end": {
          "column": 41,
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 6,
                  "line": 18
                }
              },
              "range": [
                244,
                254
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        248,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 18
                        },
                        "start": {
                          "column": 10,
                          "line": 18
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
                          "column": 14,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
                        }
                      },
                      "range": [
                        249,
                        252
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "range": [
                            251,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 18
                            },
                            "start": {
                              "column": 13,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          251,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 18
                          },
                          "start": {
                            "column": 13,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      248,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 10,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  246,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              242,
              254
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                    259,
                    260
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          264,
                          267
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 18
                          },
                          "start": {
                            "column": 26,
                            "line": 18
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          267,
                          282
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
                                  279,
                                  280
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                272,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 18
                                },
                                "start": {
                                  "column": 34,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "range": [
                            270,
                            282
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 18
                            },
                            "start": {
                              "column": 32,
                              "line": 18
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
                            "column": 44,
                            "line": 18
                          },
                          "start": {
                            "column": 29,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        264,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 18
                        },
                        "start": {
                          "column": 26,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    262,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 18
                    },
                    "start": {
                      "column": 24,
                      "line": 18
                    }
                  }
                },
                "range": [
                  259,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 18
                  },
                  "start": {
                    "column": 21,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              257,
              286
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 18
              },
              "start": {
                "column": 19,
                "line": 18
              }
            }
          },
          "range": [
            242,
            286
          ],
          "loc": {
            "end": {
              "column": 48,
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
        238,
        287
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 18
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
          300,
          323
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
              "name": "x",
              "optional": false,
              "range": [
                306,
                307
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                307,
                310
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    309,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 21
                    },
                    "start": {
                      "column": 7,
                      "line": 21
                    }
                  }
                },
                "range": [
                  309,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "value": null,
            "range": [
              306,
              311
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                316,
                317
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 22
                }
              },
              "range": [
                317,
                320
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    319,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 22
                    },
                    "start": {
                      "column": 7,
                      "line": 22
                    }
                  }
                },
                "range": [
                  319,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                }
              }
            },
            "value": null,
            "range": [
              316,
              321
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 11,
            "line": 20
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
          295,
          296
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 20
          }
        },
        "range": [
          296,
          299
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
                297,
                298
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              297,
              298
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        289,
        323
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          340,
          363
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                346,
                347
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 26
                },
                "start": {
                  "column": 5,
                  "line": 26
                }
              },
              "range": [
                347,
                350
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    349,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 26
                    },
                    "start": {
                      "column": 7,
                      "line": 26
                    }
                  }
                },
                "range": [
                  349,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 26
                  },
                  "start": {
                    "column": 7,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              346,
              351
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                356,
                357
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 27
                },
                "start": {
                  "column": 5,
                  "line": 27
                }
              },
              "range": [
                357,
                360
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "J",
                  "optional": false,
                  "range": [
                    359,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 27
                    },
                    "start": {
                      "column": 7,
                      "line": 27
                    }
                  }
                },
                "range": [
                  359,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 27
                  },
                  "start": {
                    "column": 7,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              356,
              361
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 15,
            "line": 25
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "range": [
          335,
          336
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 10,
            "line": 25
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 25
          },
          "start": {
            "column": 11,
            "line": 25
          }
        },
        "range": [
          336,
          339
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
                337,
                338
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              337,
              338
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 12,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        325,
        363
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          376,
          379
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 14,
            "line": 30
          },
          "start": {
            "column": 11,
            "line": 30
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
          371,
          372
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        },
        "range": [
          372,
          375
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
                373,
                374
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              373,
              374
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        365,
        379
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
              "raw": "null",
              "value": null,
              "range": [
                416,
                420
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "range": [
              409,
              421
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          403,
          423
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 23,
            "line": 31
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
          389,
          390
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
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
                "column": 18,
                "line": 31
              },
              "start": {
                "column": 15,
                "line": 31
              }
            },
            "range": [
              395,
              398
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  397,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 17,
                    "line": 31
                  }
                }
              },
              "range": [
                397,
                398
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 31
                },
                "start": {
                  "column": 17,
                  "line": 31
                }
              }
            }
          },
          "range": [
            394,
            398
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 31
            },
            "start": {
              "column": 14,
              "line": 31
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 31
          },
          "start": {
            "column": 19,
            "line": 31
          }
        },
        "range": [
          399,
          402
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              401,
              402
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 31
              },
              "start": {
                "column": 21,
                "line": 31
              }
            }
          },
          "range": [
            401,
            402
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 31
            },
            "start": {
              "column": 21,
              "line": 31
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 31
          },
          "start": {
            "column": 10,
            "line": 31
          }
        },
        "range": [
          390,
          393
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
                391,
                392
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              391,
              392
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 11,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        380,
        423
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
