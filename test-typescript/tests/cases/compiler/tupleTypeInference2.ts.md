__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    578
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          27,
          28
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    35,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                },
                "range": [
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              34,
              37
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    41,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "range": [
                  41,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  44,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              40,
              51
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          }
        ],
        "range": [
          34,
          51
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        },
        "range": [
          28,
          31
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                29,
                30
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              29,
              30
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        52
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          70,
          71
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
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
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 23,
                "line": 4
              }
            },
            "range": [
              76,
              82
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  79,
                  82
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
                        80,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 27,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      80,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  78,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "range": [
                78,
                82
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            }
          },
          "range": [
            75,
            82
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 22,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 30,
            "line": 4
          }
        },
        "range": [
          83,
          86
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          },
          "range": [
            85,
            86
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 32,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
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
          71,
          74
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
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              72,
              73
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        53,
        87
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    91,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 5
                    },
                    "start": {
                      "column": 3,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    102,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                90,
                105
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNeverKeyword",
                  "range": [
                    110,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    117,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                109,
                124
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              90,
              124
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            88,
            89
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          88,
          125
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        88,
        126
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    142,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 3,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    153,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                141,
                156
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSVoidKeyword",
                  "range": [
                    161,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    167,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                160,
                174
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            },
            "range": [
              141,
              174
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            139,
            140
          ],
          "loc": {
            "end": {
              "column": 1,
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
          139,
          175
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        139,
        176
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          216,
          217
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    227,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                },
                "range": [
                  227,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 16,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              226,
              229
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    233,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                },
                "range": [
                  233,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    236,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                },
                "range": [
                  236,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 25,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              232,
              238
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            }
          }
        ],
        "range": [
          226,
          238
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        },
        "range": [
          217,
          223
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                218,
                219
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              218,
              219
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 10
              },
              "start": {
                "column": 7,
                "line": 10
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              221,
              222
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        211,
        239
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          257,
          258
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 26,
                "line": 11
              }
            },
            "range": [
              266,
              275
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  269,
                  275
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
                        270,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      270,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 30,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        273,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 11
                        },
                        "start": {
                          "column": 33,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      273,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 11
                      },
                      "start": {
                        "column": 33,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  268,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 11
                  }
                }
              },
              "range": [
                268,
                275
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 28,
                  "line": 11
                }
              }
            }
          },
          "range": [
            265,
            275
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 25,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
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
          276,
          279
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              278,
              279
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
            278,
            279
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 18,
            "line": 11
          }
        },
        "range": [
          258,
          264
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
                259,
                260
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              259,
              260
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                262,
                263
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              262,
              263
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        240,
        280
      ],
      "loc": {
        "end": {
          "column": 40,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    284,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 12
                    },
                    "start": {
                      "column": 3,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                283,
                287
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "range": [
                      292,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    292,
                    298
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
              ],
              "range": [
                291,
                299
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "range": [
              283,
              299
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "range": [
            281,
            282
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          281,
          300
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        281,
        301
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          317,
          318
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      328,
                      329
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
                    328,
                    329
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
                  328,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 14
                  },
                  "start": {
                    "column": 16,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              327,
              332
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 15,
                "line": 14
              }
            }
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      336,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    336,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 24,
                      "line": 14
                    }
                  }
                },
                "range": [
                  336,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 24,
                    "line": 14
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    341,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 29,
                      "line": 14
                    }
                  }
                },
                "range": [
                  341,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 14
                  },
                  "start": {
                    "column": 29,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              335,
              343
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            }
          }
        ],
        "range": [
          327,
          343
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 14
          },
          "start": {
            "column": 15,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        },
        "range": [
          318,
          324
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                319,
                320
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              319,
              320
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 7,
                "line": 14
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                322,
                323
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              322,
              323
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 14
              },
              "start": {
                "column": 10,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        312,
        344
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "range": [
          362,
          363
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 15
              },
              "start": {
                "column": 26,
                "line": 15
              }
            },
            "range": [
              371,
              380
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  374,
                  380
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
                        375,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 30,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      375,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        378,
                        379
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 15
                        },
                        "start": {
                          "column": 33,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      378,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 15
                      },
                      "start": {
                        "column": 33,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 15
                  },
                  "start": {
                    "column": 29,
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
                  373,
                  374
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
                373,
                380
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 15
                }
              }
            }
          },
          "range": [
            370,
            380
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 15
          },
          "start": {
            "column": 36,
            "line": 15
          }
        },
        "range": [
          381,
          384
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              383,
              384
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 15
              },
              "start": {
                "column": 38,
                "line": 15
              }
            }
          },
          "range": [
            383,
            384
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 15
            },
            "start": {
              "column": 38,
              "line": 15
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 15
          },
          "start": {
            "column": 18,
            "line": 15
          }
        },
        "range": [
          363,
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
                364,
                365
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
            "out": false,
            "range": [
              364,
              365
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                367,
                368
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
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
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 22,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        345,
        385
      ],
      "loc": {
        "end": {
          "column": 40,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    389,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 3,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                388,
                392
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "range": [
                      397,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 11,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    397,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                396,
                404
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "range": [
              388,
              404
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "range": [
            386,
            387
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
        "optional": false,
        "range": [
          386,
          405
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        386,
        406
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          444,
          446
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      453,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 20
                      },
                      "start": {
                        "column": 14,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    453,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                },
                "range": [
                  453,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              452,
              457
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 20
              },
              "start": {
                "column": 13,
                "line": 20
              }
            }
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      461,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 20
                      },
                      "start": {
                        "column": 22,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    461,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 22,
                      "line": 20
                    }
                  }
                },
                "range": [
                  461,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 20
                  },
                  "start": {
                    "column": 22,
                    "line": 20
                  }
                }
              },
              {
                "type": "TSVoidKeyword",
                "range": [
                  466,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 20
                  },
                  "start": {
                    "column": 27,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              460,
              471
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            }
          }
        ],
        "range": [
          452,
          471
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 20
          },
          "start": {
            "column": 13,
            "line": 20
          }
        }
      },
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
          446,
          449
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                447,
                448
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
              447,
              448
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
        439,
        472
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "range": [
          490,
          492
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 24,
                "line": 21
              }
            },
            "range": [
              497,
              504
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  501,
                  504
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
                        502,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 21
                        },
                        "start": {
                          "column": 29,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      502,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 21
                      },
                      "start": {
                        "column": 29,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 21
                  },
                  "start": {
                    "column": 28,
                    "line": 21
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "range": [
                  499,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 26,
                    "line": 21
                  }
                }
              },
              "range": [
                499,
                504
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 26,
                  "line": 21
                }
              }
            }
          },
          "range": [
            496,
            504
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 21
            },
            "start": {
              "column": 23,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 21
          },
          "start": {
            "column": 32,
            "line": 21
          }
        },
        "range": [
          505,
          508
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              507,
              508
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 21
              },
              "start": {
                "column": 34,
                "line": 21
              }
            }
          },
          "range": [
            507,
            508
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 21
            },
            "start": {
              "column": 34,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 21
          },
          "start": {
            "column": 19,
            "line": 21
          }
        },
        "range": [
          492,
          495
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
                493,
                494
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 21
                },
                "start": {
                  "column": 20,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              493,
              494
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 21
              },
              "start": {
                "column": 20,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        473,
        509
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    514,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                513,
                517
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 22
                },
                "start": {
                  "column": 3,
                  "line": 22
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNeverKeyword",
                    "range": [
                      522,
                      527
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    522,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                521,
                530
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              513,
              530
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h2",
          "optional": false,
          "range": [
            510,
            512
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          510,
          531
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        510,
        532
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    549,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                548,
                552
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 3,
                  "line": 23
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "range": [
                      557,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    557,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                556,
                564
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "range": [
              548,
              564
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 3,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h2",
          "optional": false,
          "range": [
            545,
            547
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          545,
          565
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        545,
        566
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
