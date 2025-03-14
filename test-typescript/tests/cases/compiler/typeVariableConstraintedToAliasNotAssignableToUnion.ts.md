__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    722
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          107,
          128
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                113,
                117
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              },
              "range": [
                117,
                125
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  119,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              113,
              126
            ],
            "loc": {
              "end": {
                "column": 17,
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
            "column": 20,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "range": [
          97,
          106
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        87,
        128
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          154,
          176
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "range": [
                160,
                165
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              },
              "range": [
                165,
                173
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  167,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              160,
              174
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 24,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomethingElse",
        "optional": false,
        "range": [
          140,
          153
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "range": [
        130,
        176
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
            "name": "aBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
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
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 22,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              190,
              207
            ],
            "loc": {
              "end": {
                "column": 29,
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
            190,
            207
          ],
          "loc": {
            "end": {
              "column": 29,
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
        178,
        208
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "aStringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              },
              "range": [
                236,
                253
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      238,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      247,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 16
                      },
                      "start": {
                        "column": 38,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  238,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 16
                  },
                  "start": {
                    "column": 29,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              221,
              253
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            221,
            253
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 16
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        209,
        254
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "aStringOrSomething",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 17
                },
                "start": {
                  "column": 30,
                  "line": 17
                }
              },
              "range": [
                285,
                305
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      287,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 17
                      },
                      "start": {
                        "column": 32,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Something",
                      "optional": false,
                      "range": [
                        296,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 17
                        },
                        "start": {
                          "column": 41,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      296,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 17
                      },
                      "start": {
                        "column": 41,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  287,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 17
                  },
                  "start": {
                    "column": 32,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              267,
              305
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            267,
            305
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        255,
        306
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "name": "someUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              },
              "range": [
                328,
                355
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Something",
                      "optional": false,
                      "range": [
                        330,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 18
                        },
                        "start": {
                          "column": 23,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      330,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 23,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SomethingElse",
                      "optional": false,
                      "range": [
                        342,
                        355
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 18
                        },
                        "start": {
                          "column": 35,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      342,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 18
                      },
                      "start": {
                        "column": 35,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  330,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 18
                  },
                  "start": {
                    "column": 23,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              319,
              355
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            319,
            355
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        307,
        356
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "aBoolean",
                "optional": false,
                "range": [
                  399,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  410,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              },
              "range": [
                399,
                411
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              399,
              412
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                "name": "aStringOrNumber",
                "optional": false,
                "range": [
                  417,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  435,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              },
              "range": [
                417,
                436
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              417,
              437
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                "name": "aStringOrSomething",
                "optional": false,
                "range": [
                  442,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  463,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 23
                  },
                  "start": {
                    "column": 25,
                    "line": 23
                  }
                }
              },
              "range": [
                442,
                464
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              442,
              465
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                "name": "someUnion",
                "optional": false,
                "range": [
                  470,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  482,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 16,
                    "line": 24
                  }
                }
              },
              "range": [
                470,
                483
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
            },
            "range": [
              470,
              484
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          393,
          486
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 35,
            "line": 20
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
          367,
          369
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
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
                "line": 20
              },
              "start": {
                "column": 30,
                "line": 20
              }
            },
            "range": [
              388,
              391
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  390,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              },
              "range": [
                390,
                391
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 20
                },
                "start": {
                  "column": 32,
                  "line": 20
                }
              }
            }
          },
          "range": [
            387,
            391
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
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 20
          },
          "start": {
            "column": 11,
            "line": 20
          }
        },
        "range": [
          369,
          386
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
                  380,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 22,
                    "line": 20
                  }
                }
              },
              "range": [
                380,
                385
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
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
                370,
                371
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              370,
              385
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        358,
        486
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 20
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "aBoolean",
                "optional": false,
                "range": [
                  535,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  546,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 15,
                    "line": 28
                  }
                }
              },
              "range": [
                535,
                547
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              535,
              548
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 28
              },
              "start": {
                "column": 4,
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
                "name": "aStringOrNumber",
                "optional": false,
                "range": [
                  553,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  571,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 29
                  },
                  "start": {
                    "column": 22,
                    "line": 29
                  }
                }
              },
              "range": [
                553,
                572
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              553,
              573
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                "name": "aStringOrSomething",
                "optional": false,
                "range": [
                  578,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  599,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 25,
                    "line": 30
                  }
                }
              },
              "range": [
                578,
                600
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              578,
              601
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                "name": "someUnion",
                "optional": false,
                "range": [
                  606,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  618,
                  619
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
                606,
                619
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              606,
              620
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          529,
          622
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 41,
            "line": 27
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
          497,
          500
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
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
                "line": 27
              },
              "start": {
                "column": 36,
                "line": 27
              }
            },
            "range": [
              524,
              527
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  526,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 27
                  },
                  "start": {
                    "column": 38,
                    "line": 27
                  }
                }
              },
              "range": [
                526,
                527
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 27
                },
                "start": {
                  "column": 38,
                  "line": 27
                }
              }
            }
          },
          "range": [
            523,
            527
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 27
            },
            "start": {
              "column": 35,
              "line": 27
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 27
          },
          "start": {
            "column": 12,
            "line": 27
          }
        },
        "range": [
          500,
          522
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
                  511,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 27
                  },
                  "start": {
                    "column": 23,
                    "line": 27
                  }
                }
              },
              "range": [
                511,
                521
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
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
                501,
                502
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              501,
              521
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        488,
        622
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              },
              "range": [
                639,
                646
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Table",
                  "optional": false,
                  "range": [
                    641,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 17,
                      "line": 34
                    }
                  }
                },
                "range": [
                  641,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 34
                  },
                  "start": {
                    "column": 17,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              638,
              646
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 34
              },
              "start": {
                "column": 14,
                "line": 34
              }
            }
          },
          "init": null,
          "range": [
            638,
            646
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 34
            },
            "start": {
              "column": 14,
              "line": 34
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        624,
        647
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aBoolean",
          "optional": false,
          "range": [
            648,
            656
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "range": [
            659,
            660
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 35
            },
            "start": {
              "column": 11,
              "line": 35
            }
          }
        },
        "range": [
          648,
          660
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
        648,
        661
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aStringOrNumber",
          "optional": false,
          "range": [
            662,
            677
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "range": [
            680,
            681
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 36
            },
            "start": {
              "column": 18,
              "line": 36
            }
          }
        },
        "range": [
          662,
          681
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
      "range": [
        662,
        682
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aStringOrSomething",
          "optional": false,
          "range": [
            683,
            701
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "range": [
            704,
            705
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 37
            },
            "start": {
              "column": 21,
              "line": 37
            }
          }
        },
        "range": [
          683,
          705
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        683,
        706
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someUnion",
          "optional": false,
          "range": [
            707,
            716
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "range": [
            719,
            720
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 38
            },
            "start": {
              "column": 12,
              "line": 38
            }
          }
        },
        "range": [
          707,
          720
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        707,
        721
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 39
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
