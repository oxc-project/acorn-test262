__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    633
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          18,
          39
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                24,
                27
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
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  },
                  "range": [
                    29,
                    32
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        31,
                        32
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
                      31,
                      32
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
                "range": [
                  28,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              },
              "range": [
                33,
                36
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    35,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "range": [
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              24,
              37
            ],
            "loc": {
              "end": {
                "column": 17,
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
            "column": 18,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "range": [
          10,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          17
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
            "out": false,
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
          }
        ]
      },
      "range": [
        0,
        39
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
            "name": "iFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              },
              "range": [
                49,
                63
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    55,
                    63
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        56,
                        62
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "range": [
                    51,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
                    }
                  }
                },
                "range": [
                  51,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              45,
              63
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            45,
            63
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        41,
        64
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
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
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
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
            "name": "iFoo",
            "optional": false,
            "range": [
              65,
              69
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
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
              70,
              73
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 6
              },
              "start": {
                "column": 5,
                "line": 6
              }
            }
          },
          "range": [
            65,
            73
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          65,
          76
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        65,
        77
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          119,
          175
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
                134,
                137
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                137,
                173
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
                        166,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 9
                        },
                        "start": {
                          "column": 36,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      159,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 9
                      },
                      "start": {
                        "column": 29,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  157,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    },
                    "range": [
                      139,
                      147
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        141,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    138,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                },
                "range": [
                  148,
                  156
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    150,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              }
            },
            "range": [
              134,
              173
            ],
            "loc": {
              "end": {
                "column": 43,
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
            "column": 40,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntFooBad",
        "optional": false,
        "range": [
          85,
          94
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "range": [
              106,
              110
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 27,
                "line": 8
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              110,
              118
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  111,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 8
                  },
                  "start": {
                    "column": 32,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 8
              },
              "start": {
                "column": 31,
                "line": 8
              }
            }
          },
          "range": [
            106,
            118
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 8
            },
            "start": {
              "column": 27,
              "line": 8
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        79,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "intFooBad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 12
                }
              },
              "range": [
                190,
                201
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IntFooBad",
                  "optional": false,
                  "range": [
                    192,
                    201
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
                "range": [
                  192,
                  201
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
            },
            "range": [
              181,
              201
            ],
            "loc": {
              "end": {
                "column": 24,
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
            181,
            201
          ],
          "loc": {
            "end": {
              "column": 24,
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
        177,
        202
      ],
      "loc": {
        "end": {
          "column": 25,
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
          241,
          288
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
                247,
                250
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
                250,
                286
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
                        279,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 15
                        },
                        "start": {
                          "column": 36,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      272,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 15
                      },
                      "start": {
                        "column": 29,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  270,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    },
                    "range": [
                      252,
                      260
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        254,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    251,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 18,
                    "line": 15
                  }
                },
                "range": [
                  261,
                  269
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    263,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 15
                    },
                    "start": {
                      "column": 20,
                      "line": 15
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 43,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              }
            },
            "range": [
              247,
              286
            ],
            "loc": {
              "end": {
                "column": 43,
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
            "column": 37,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntFoo",
        "optional": false,
        "range": [
          210,
          216
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "range": [
              228,
              232
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 14
              },
              "start": {
                "column": 24,
                "line": 14
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              232,
              240
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  233,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 29,
                    "line": 14
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 28,
                "line": 14
              }
            }
          },
          "range": [
            228,
            240
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 14
            },
            "start": {
              "column": 24,
              "line": 14
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        204,
        288
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "intFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 10,
                  "line": 18
                }
              },
              "range": [
                300,
                308
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IntFoo",
                  "optional": false,
                  "range": [
                    302,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  302,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 12,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              294,
              308
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            294,
            308
          ],
          "loc": {
            "end": {
              "column": 18,
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
        290,
        309
      ],
      "loc": {
        "end": {
          "column": 19,
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
          352,
          399
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
                358,
                361
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                361,
                397
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
                        390,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 21
                        },
                        "start": {
                          "column": 36,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      383,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 21
                      },
                      "start": {
                        "column": 29,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  381,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 21
                  },
                  "start": {
                    "column": 27,
                    "line": 21
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    },
                    "range": [
                      363,
                      371
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        365,
                        371
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    362,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 21
                  }
                },
                "range": [
                  372,
                  380
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    374,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 43,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              }
            },
            "range": [
              358,
              397
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 41,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringFoo2",
        "optional": false,
        "range": [
          317,
          327
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "range": [
              339,
              343
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              343,
              351
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  344,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 20
                  },
                  "start": {
                    "column": 33,
                    "line": 20
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 20
              },
              "start": {
                "column": 32,
                "line": 20
              }
            }
          },
          "range": [
            339,
            351
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 20
            },
            "start": {
              "column": 28,
              "line": 20
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        311,
        399
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
            "name": "stringFoo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 14,
                  "line": 24
                }
              },
              "range": [
                415,
                427
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringFoo2",
                  "optional": false,
                  "range": [
                    417,
                    427
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
                  417,
                  427
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
              }
            },
            "range": [
              405,
              427
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            405,
            427
          ],
          "loc": {
            "end": {
              "column": 26,
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
        401,
        428
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"hm\"",
            "value": "hm",
            "range": [
              444,
              448
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 15,
                "line": 25
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
            "name": "stringFoo2",
            "optional": false,
            "range": [
              429,
              439
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
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
              440,
              443
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 11,
                "line": 25
              }
            }
          },
          "range": [
            429,
            443
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          429,
          449
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        429,
        450
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 25
        },
        "start": {
          "column": 0,
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
          "name": "intFoo",
          "optional": false,
          "range": [
            453,
            459
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringFoo2",
          "optional": false,
          "range": [
            462,
            472
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 28
            },
            "start": {
              "column": 9,
              "line": 28
            }
          }
        },
        "range": [
          453,
          472
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        453,
        473
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
          "name": "stringFoo2",
          "optional": false,
          "range": [
            483,
            493
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "intFoo",
          "optional": false,
          "range": [
            496,
            502
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 29
            },
            "start": {
              "column": 13,
              "line": 29
            }
          }
        },
        "range": [
          483,
          502
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        483,
        503
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          556,
          605
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
                571,
                574
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                574,
                603
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
                        596,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 33
                        },
                        "start": {
                          "column": 29,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      589,
                      601
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 33
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  587,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 33
                      },
                      "start": {
                        "column": 12,
                        "line": 33
                      }
                    },
                    "range": [
                      579,
                      582
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          581,
                          582
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 33
                          },
                          "start": {
                            "column": 14,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        581,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 33
                        },
                        "start": {
                          "column": 14,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    578,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 33
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 33
                  },
                  "start": {
                    "column": 16,
                    "line": 33
                  }
                },
                "range": [
                  583,
                  586
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      585,
                      586
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    585,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 33
                    },
                    "start": {
                      "column": 18,
                      "line": 33
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 33
                  },
                  "start": {
                    "column": 7,
                    "line": 33
                  }
                },
                "range": [
                  574,
                  577
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
                        575,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      575,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 33
                },
                "start": {
                  "column": 7,
                  "line": 33
                }
              }
            },
            "range": [
              571,
              603
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 41,
            "line": 32
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringFoo3",
        "optional": false,
        "range": [
          521,
          531
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 32
          },
          "start": {
            "column": 6,
            "line": 32
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "range": [
              543,
              547
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 32
              },
              "start": {
                "column": 28,
                "line": 32
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              547,
              555
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  548,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 32
                  },
                  "start": {
                    "column": 33,
                    "line": 32
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 32
              },
              "start": {
                "column": 32,
                "line": 32
              }
            }
          },
          "range": [
            543,
            555
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 32
            },
            "start": {
              "column": 28,
              "line": 32
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        515,
        605
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
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
            "name": "stringFoo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 35
                },
                "start": {
                  "column": 14,
                  "line": 35
                }
              },
              "range": [
                620,
                632
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringFoo3",
                  "optional": false,
                  "range": [
                    622,
                    632
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 35
                    },
                    "start": {
                      "column": 16,
                      "line": 35
                    }
                  }
                },
                "range": [
                  622,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 35
                  },
                  "start": {
                    "column": 16,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              610,
              632
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": null,
          "range": [
            610,
            632
          ],
          "loc": {
            "end": {
              "column": 26,
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
        606,
        633
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 27,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
