__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    2245
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "range": [
          27,
          32
        ],
        "loc": {
          "end": {
            "column": 10,
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
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "range": [
              38,
              39
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              42,
              51
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          }
        ],
        "range": [
          38,
          51
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          32,
          35
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
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
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
        "name": "concatMaybe",
        "optional": false,
        "range": [
          70,
          81
        ],
        "loc": {
          "end": {
            "column": 28,
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              88,
              92
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 35,
                "line": 4
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 4
              },
              "start": {
                "column": 39,
                "line": 4
              }
            },
            "range": [
              92,
              119
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        100,
                        103
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
                              101,
                              102
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 4
                              },
                              "start": {
                                "column": 48,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            101,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 4
                            },
                            "start": {
                              "column": 48,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 4
                        },
                        "start": {
                          "column": 47,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Maybe",
                      "optional": false,
                      "range": [
                        95,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      95,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 4
                      },
                      "start": {
                        "column": 42,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          111,
                          114
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
                                112,
                                113
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 4
                                },
                                "start": {
                                  "column": 59,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              112,
                              113
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 4
                              },
                              "start": {
                                "column": 59,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 4
                          },
                          "start": {
                            "column": 58,
                            "line": 4
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Maybe",
                        "optional": false,
                        "range": [
                          106,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 4
                          },
                          "start": {
                            "column": 53,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        106,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 4
                        },
                        "start": {
                          "column": 53,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      106,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 4
                      },
                      "start": {
                        "column": 53,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  95,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              },
              "range": [
                94,
                119
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 4
                },
                "start": {
                  "column": 41,
                  "line": 4
                }
              }
            }
          },
          "range": [
            85,
            119
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 4
            },
            "start": {
              "column": 32,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 72,
            "line": 4
          },
          "start": {
            "column": 67,
            "line": 4
          }
        },
        "range": [
          120,
          125
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 4
                },
                "start": {
                  "column": 69,
                  "line": 4
                }
              }
            },
            "range": [
              122,
              123
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 4
              },
              "start": {
                "column": 69,
                "line": 4
              }
            }
          },
          "range": [
            122,
            125
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 4
            },
            "start": {
              "column": 69,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 4
          },
          "start": {
            "column": 28,
            "line": 4
          }
        },
        "range": [
          81,
          84
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
                82,
                83
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              82,
              83
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        53,
        126
      ],
      "loc": {
        "end": {
          "column": 73,
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  143,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  146,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              139,
              148
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              150,
              151
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "concatMaybe",
          "optional": false,
          "range": [
            127,
            138
          ],
          "loc": {
            "end": {
              "column": 11,
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
          127,
          152
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        127,
        153
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 5
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 87,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              },
              "range": [
                185,
                265
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "com",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 9
                        },
                        "start": {
                          "column": 22,
                          "line": 9
                        }
                      },
                      "range": [
                        200,
                        250
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 9
                            },
                            "start": {
                              "column": 27,
                              "line": 9
                            }
                          },
                          "range": [
                            205,
                            250
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    216,
                                    225
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false,
                                        "range": [
                                          217,
                                          218
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        217,
                                        218
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 9
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
                                          220,
                                          221
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        220,
                                        221
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 9
                                        }
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "range": [
                                          223,
                                          224
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 46,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 45,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        223,
                                        224
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 45,
                                          "line": 9
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 9
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Iterator",
                                  "optional": false,
                                  "range": [
                                    208,
                                    216
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  208,
                                  225
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    241,
                                    250
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false,
                                        "range": [
                                          242,
                                          243
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 65,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 64,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        242,
                                        243
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 65,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 64,
                                          "line": 9
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
                                          245,
                                          246
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 68,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 67,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        245,
                                        246
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 68,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 67,
                                          "line": 9
                                        }
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "range": [
                                          248,
                                          249
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 71,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 70,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        248,
                                        249
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 71,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 70,
                                          "line": 9
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 72,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 63,
                                      "line": 9
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AsyncIterator",
                                  "optional": false,
                                  "range": [
                                    228,
                                    241
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  228,
                                  250
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "range": [
                              208,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 9
                              },
                              "start": {
                                "column": 30,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          202,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 9
                          },
                          "start": {
                            "column": 24,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      197,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 9
                    },
                    "start": {
                      "column": 74,
                      "line": 9
                    }
                  },
                  "range": [
                    252,
                    265
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        262,
                        265
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              263,
                              264
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 9
                              },
                              "start": {
                                "column": 85,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            263,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 86,
                              "line": 9
                            },
                            "start": {
                              "column": 85,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 9
                        },
                        "start": {
                          "column": 84,
                          "line": 9
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        255,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 9
                        },
                        "start": {
                          "column": 77,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      255,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 9
                      },
                      "start": {
                        "column": 77,
                        "line": 9
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  },
                  "range": [
                    187,
                    196
                  ],
                  "params": [
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
                          188,
                          189
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 9
                          },
                          "start": {
                            "column": 10,
                            "line": 9
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        188,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 9
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
                        "name": "R",
                        "optional": false,
                        "range": [
                          191,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 13,
                            "line": 9
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        191,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
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
                          194,
                          195
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 16,
                            "line": 9
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        194,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      }
                    }
                  ]
                },
                "range": [
                  187,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              184,
              265
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "com",
                    "optional": false,
                    "range": [
                      364,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    358,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                354,
                370
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 176,
                  "line": 9
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
                "name": "com",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 159,
                      "line": 9
                    },
                    "start": {
                      "column": 109,
                      "line": 9
                    }
                  },
                  "range": [
                    287,
                    337
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 159,
                          "line": 9
                        },
                        "start": {
                          "column": 114,
                          "line": 9
                        }
                      },
                      "range": [
                        292,
                        337
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                303,
                                312
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "range": [
                                      304,
                                      305
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 127,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 126,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    304,
                                    305
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 127,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 126,
                                      "line": 9
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
                                      307,
                                      308
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 130,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 129,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    307,
                                    308
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 130,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 129,
                                      "line": 9
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "range": [
                                      310,
                                      311
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 133,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 132,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    310,
                                    311
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 133,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 132,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 134,
                                  "line": 9
                                },
                                "start": {
                                  "column": 125,
                                  "line": 9
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "range": [
                                295,
                                303
                              ],
                              "loc": {
                                "end": {
                                  "column": 125,
                                  "line": 9
                                },
                                "start": {
                                  "column": 117,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              295,
                              312
                            ],
                            "loc": {
                              "end": {
                                "column": 134,
                                "line": 9
                              },
                              "start": {
                                "column": 117,
                                "line": 9
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                328,
                                337
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "range": [
                                      329,
                                      330
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 152,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 151,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    329,
                                    330
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 152,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 151,
                                      "line": 9
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
                                      332,
                                      333
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 155,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 154,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    332,
                                    333
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 155,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 154,
                                      "line": 9
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "range": [
                                      335,
                                      336
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 158,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 157,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    335,
                                    336
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 158,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 157,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 159,
                                  "line": 9
                                },
                                "start": {
                                  "column": 150,
                                  "line": 9
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AsyncIterator",
                              "optional": false,
                              "range": [
                                315,
                                328
                              ],
                              "loc": {
                                "end": {
                                  "column": 150,
                                  "line": 9
                                },
                                "start": {
                                  "column": 137,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              315,
                              337
                            ],
                            "loc": {
                              "end": {
                                "column": 159,
                                "line": 9
                              },
                              "start": {
                                "column": 137,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          295,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 159,
                            "line": 9
                          },
                          "start": {
                            "column": 117,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      289,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 159,
                        "line": 9
                      },
                      "start": {
                        "column": 111,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  284,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 159,
                    "line": 9
                  },
                  "start": {
                    "column": 106,
                    "line": 9
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 172,
                  "line": 9
                },
                "start": {
                  "column": 160,
                  "line": 9
                }
              },
              "range": [
                338,
                350
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    347,
                    350
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          348,
                          349
                        ],
                        "loc": {
                          "end": {
                            "column": 171,
                            "line": 9
                          },
                          "start": {
                            "column": 170,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        348,
                        349
                      ],
                      "loc": {
                        "end": {
                          "column": 171,
                          "line": 9
                        },
                        "start": {
                          "column": 170,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 172,
                      "line": 9
                    },
                    "start": {
                      "column": 169,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    340,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 169,
                      "line": 9
                    },
                    "start": {
                      "column": 162,
                      "line": 9
                    }
                  }
                },
                "range": [
                  340,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 172,
                    "line": 9
                  },
                  "start": {
                    "column": 162,
                    "line": 9
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 105,
                  "line": 9
                },
                "start": {
                  "column": 96,
                  "line": 9
                }
              },
              "range": [
                274,
                283
              ],
              "params": [
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
                      275,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 9
                      },
                      "start": {
                        "column": 97,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    275,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 9
                    },
                    "start": {
                      "column": 97,
                      "line": 9
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
                    "name": "R",
                    "optional": false,
                    "range": [
                      278,
                      279
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 9
                      },
                      "start": {
                        "column": 100,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    278,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 9
                    },
                    "start": {
                      "column": 100,
                      "line": 9
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
                      281,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 9
                      },
                      "start": {
                        "column": 103,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    281,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 9
                    },
                    "start": {
                      "column": 103,
                      "line": 9
                    }
                  }
                }
              ]
            },
            "range": [
              268,
              370
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 90,
                "line": 9
              }
            }
          },
          "range": [
            184,
            370
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        178,
        371
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          391,
          420
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                397,
                401
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                    407,
                    410
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        409,
                        410
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
                      409,
                      410
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
                  402,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              },
              "range": [
                411,
                417
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  413,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              397,
              418
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 18,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "range": [
          383,
          387
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        },
        "range": [
          387,
          390
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
                388,
                389
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              388,
              389
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        373,
        420
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          440,
          486
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                446,
                450
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 18
                    }
                  },
                  "range": [
                    456,
                    476
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            458,
                            459
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 18
                            },
                            "start": {
                              "column": 16,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          458,
                          459
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            473,
                            476
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
                                  474,
                                  475
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                474,
                                475
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 18
                                },
                                "start": {
                                  "column": 32,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 18
                            },
                            "start": {
                              "column": 31,
                              "line": 18
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "range": [
                            462,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 18
                            },
                            "start": {
                              "column": 20,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          462,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 18
                          },
                          "start": {
                            "column": 20,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      458,
                      476
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 18
                      },
                      "start": {
                        "column": 16,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  451,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 18
                },
                "start": {
                  "column": 35,
                  "line": 18
                }
              },
              "range": [
                477,
                483
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  479,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 18
                  },
                  "start": {
                    "column": 37,
                    "line": 18
                  }
                }
              }
            },
            "static": false,
            "range": [
              446,
              484
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 18,
            "line": 17
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "range": [
          432,
          436
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 14,
            "line": 17
          }
        },
        "range": [
          436,
          439
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
                437,
                438
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              437,
              438
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        422,
        486
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 21
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              },
              "range": [
                502,
                543
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 40,
                          "line": 21
                        },
                        "start": {
                          "column": 21,
                          "line": 21
                        }
                      },
                      "range": [
                        509,
                        528
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                515,
                                518
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
                                      516,
                                      517
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "range": [
                                    516,
                                    517
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 21
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 21
                                },
                                "start": {
                                  "column": 27,
                                  "line": 21
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false,
                              "range": [
                                511,
                                515
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 21
                                },
                                "start": {
                                  "column": 23,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              511,
                              518
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 21
                              },
                              "start": {
                                "column": 23,
                                "line": 21
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                525,
                                528
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
                                      526,
                                      527
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 21
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
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 21
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 21
                                },
                                "start": {
                                  "column": 37,
                                  "line": 21
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false,
                              "range": [
                                521,
                                525
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 21
                                },
                                "start": {
                                  "column": 33,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              521,
                              528
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 21
                              },
                              "start": {
                                "column": 33,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          511,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 21
                          },
                          "start": {
                            "column": 23,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      508,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 21
                    },
                    "start": {
                      "column": 42,
                      "line": 21
                    }
                  },
                  "range": [
                    530,
                    543
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        540,
                        543
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
                              541,
                              542
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 21
                              },
                              "start": {
                                "column": 53,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            541,
                            542
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 21
                            },
                            "start": {
                              "column": 53,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 21
                        },
                        "start": {
                          "column": 52,
                          "line": 21
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        533,
                        540
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 21
                        },
                        "start": {
                          "column": 45,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      533,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 21
                      },
                      "start": {
                        "column": 45,
                        "line": 21
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  },
                  "range": [
                    504,
                    507
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
                          505,
                          506
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 21
                          },
                          "start": {
                            "column": 17,
                            "line": 21
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        505,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 21
                        },
                        "start": {
                          "column": 17,
                          "line": 21
                        }
                      }
                    }
                  ]
                },
                "range": [
                  504,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 21
                  },
                  "start": {
                    "column": 16,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              500,
              543
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            500,
            543
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 21
            },
            "start": {
              "column": 12,
              "line": 21
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        488,
        544
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 22
                },
                "start": {
                  "column": 14,
                  "line": 22
                }
              },
              "range": [
                559,
                600
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 40,
                          "line": 22
                        },
                        "start": {
                          "column": 21,
                          "line": 22
                        }
                      },
                      "range": [
                        566,
                        585
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                572,
                                575
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      573,
                                      574
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    573,
                                    574
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 22
                                },
                                "start": {
                                  "column": 27,
                                  "line": 22
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false,
                              "range": [
                                568,
                                572
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 22
                                },
                                "start": {
                                  "column": 23,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              568,
                              575
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 22
                              },
                              "start": {
                                "column": 23,
                                "line": 22
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                582,
                                585
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      583,
                                      584
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    583,
                                    584
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 22
                                },
                                "start": {
                                  "column": 37,
                                  "line": 22
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false,
                              "range": [
                                578,
                                582
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 22
                                },
                                "start": {
                                  "column": 33,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              578,
                              585
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 22
                              },
                              "start": {
                                "column": 33,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          568,
                          585
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 22
                          },
                          "start": {
                            "column": 23,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      565,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 22
                      },
                      "start": {
                        "column": 20,
                        "line": 22
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 22
                    },
                    "start": {
                      "column": 42,
                      "line": 22
                    }
                  },
                  "range": [
                    587,
                    600
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        597,
                        600
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              598,
                              599
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 22
                              },
                              "start": {
                                "column": 53,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            598,
                            599
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 22
                            },
                            "start": {
                              "column": 53,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 22
                        },
                        "start": {
                          "column": 52,
                          "line": 22
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        590,
                        597
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 22
                        },
                        "start": {
                          "column": 45,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      590,
                      600
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 22
                      },
                      "start": {
                        "column": 45,
                        "line": 22
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  },
                  "range": [
                    561,
                    564
                  ],
                  "params": [
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
                          562,
                          563
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 22
                          },
                          "start": {
                            "column": 17,
                            "line": 22
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        562,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 22
                        },
                        "start": {
                          "column": 17,
                          "line": 22
                        }
                      }
                    }
                  ]
                },
                "range": [
                  561,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 22
                  },
                  "start": {
                    "column": 16,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              557,
              600
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 22
              },
              "start": {
                "column": 12,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            557,
            600
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 22
            },
            "start": {
              "column": 12,
              "line": 22
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        545,
        601
      ],
      "loc": {
        "end": {
          "column": 56,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "range": [
            603,
            605
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            608,
            610
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 24
            },
            "start": {
              "column": 5,
              "line": 24
            }
          }
        },
        "range": [
          603,
          610
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        603,
        611
      ],
      "loc": {
        "end": {
          "column": 8,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            612,
            614
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "range": [
            617,
            619
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 25
            },
            "start": {
              "column": 5,
              "line": 25
            }
          }
        },
        "range": [
          612,
          619
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        612,
        620
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "range": [
          627,
          631
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                643,
                647
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 28
                    },
                    "start": {
                      "column": 14,
                      "line": 28
                    }
                  },
                  "range": [
                    653,
                    656
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        655,
                        656
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      655,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 28
                      },
                      "start": {
                        "column": 16,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  648,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 28
                  },
                  "start": {
                    "column": 9,
                    "line": 28
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 28
                },
                "start": {
                  "column": 18,
                  "line": 28
                }
              },
              "range": [
                657,
                663
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  659,
                  663
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 20,
                    "line": 28
                  }
                }
              }
            },
            "static": false,
            "range": [
              643,
              664
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          637,
          666
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 15,
            "line": 27
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
          }
        },
        "range": [
          631,
          634
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
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 10,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              632,
              633
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 27
              },
              "start": {
                "column": 10,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        622,
        666
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "range": [
          673,
          677
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                689,
                693
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 32
                    },
                    "start": {
                      "column": 14,
                      "line": 32
                    }
                  },
                  "range": [
                    699,
                    719
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            701,
                            702
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 32
                            },
                            "start": {
                              "column": 16,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          701,
                          702
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 32
                          },
                          "start": {
                            "column": 16,
                            "line": 32
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            716,
                            719
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
                                  717,
                                  718
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 32
                                  }
                                }
                              },
                              "range": [
                                717,
                                718
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 32
                                },
                                "start": {
                                  "column": 32,
                                  "line": 32
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 32
                            },
                            "start": {
                              "column": 31,
                              "line": 32
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "range": [
                            705,
                            716
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 32
                            },
                            "start": {
                              "column": 20,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          705,
                          719
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 32
                          },
                          "start": {
                            "column": 20,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "range": [
                      701,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 32
                      },
                      "start": {
                        "column": 16,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  694,
                  719
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 32
                  },
                  "start": {
                    "column": 9,
                    "line": 32
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 32
                },
                "start": {
                  "column": 35,
                  "line": 32
                }
              },
              "range": [
                720,
                726
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  722,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 32
                  },
                  "start": {
                    "column": 37,
                    "line": 32
                  }
                }
              }
            },
            "static": false,
            "range": [
              689,
              727
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
        "range": [
          683,
          729
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 15,
            "line": 31
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        },
        "range": [
          677,
          680
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
                678,
                679
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 10,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              678,
              679
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 31
              },
              "start": {
                "column": 10,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        668,
        729
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 35
                },
                "start": {
                  "column": 14,
                  "line": 35
                }
              },
              "range": [
                745,
                786
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 40,
                          "line": 35
                        },
                        "start": {
                          "column": 21,
                          "line": 35
                        }
                      },
                      "range": [
                        752,
                        771
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                758,
                                761
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
                                      759,
                                      760
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    759,
                                    760
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 35
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 35
                                },
                                "start": {
                                  "column": 27,
                                  "line": 35
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false,
                              "range": [
                                754,
                                758
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 35
                                },
                                "start": {
                                  "column": 23,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              754,
                              761
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 35
                              },
                              "start": {
                                "column": 23,
                                "line": 35
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                768,
                                771
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
                                      769,
                                      770
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    769,
                                    770
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 35
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 35
                                },
                                "start": {
                                  "column": 37,
                                  "line": 35
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false,
                              "range": [
                                764,
                                768
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 35
                                },
                                "start": {
                                  "column": 33,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              764,
                              771
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 35
                              },
                              "start": {
                                "column": 33,
                                "line": 35
                              }
                            }
                          }
                        ],
                        "range": [
                          754,
                          771
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 35
                          },
                          "start": {
                            "column": 23,
                            "line": 35
                          }
                        }
                      }
                    },
                    "range": [
                      751,
                      771
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 35
                      },
                      "start": {
                        "column": 20,
                        "line": 35
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 35
                    },
                    "start": {
                      "column": 42,
                      "line": 35
                    }
                  },
                  "range": [
                    773,
                    786
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        783,
                        786
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
                              784,
                              785
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 35
                              },
                              "start": {
                                "column": 53,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            784,
                            785
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 35
                            },
                            "start": {
                              "column": 53,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 35
                        },
                        "start": {
                          "column": 52,
                          "line": 35
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        776,
                        783
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 35
                        },
                        "start": {
                          "column": 45,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      776,
                      786
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 35
                      },
                      "start": {
                        "column": 45,
                        "line": 35
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 35
                    },
                    "start": {
                      "column": 16,
                      "line": 35
                    }
                  },
                  "range": [
                    747,
                    750
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
                          748,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 35
                          },
                          "start": {
                            "column": 17,
                            "line": 35
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        748,
                        749
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 35
                        },
                        "start": {
                          "column": 17,
                          "line": 35
                        }
                      }
                    }
                  ]
                },
                "range": [
                  747,
                  786
                ],
                "loc": {
                  "end": {
                    "column": 55,
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
              743,
              786
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 35
              },
              "start": {
                "column": 12,
                "line": 35
              }
            }
          },
          "init": null,
          "range": [
            743,
            786
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 35
            },
            "start": {
              "column": 12,
              "line": 35
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        731,
        787
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 36
                },
                "start": {
                  "column": 14,
                  "line": 36
                }
              },
              "range": [
                802,
                843
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 40,
                          "line": 36
                        },
                        "start": {
                          "column": 21,
                          "line": 36
                        }
                      },
                      "range": [
                        809,
                        828
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                815,
                                818
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      816,
                                      817
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 36
                                      }
                                    }
                                  },
                                  "range": [
                                    816,
                                    817
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 36
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 36
                                },
                                "start": {
                                  "column": 27,
                                  "line": 36
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false,
                              "range": [
                                811,
                                815
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 36
                                },
                                "start": {
                                  "column": 23,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              811,
                              818
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 36
                              },
                              "start": {
                                "column": 23,
                                "line": 36
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                825,
                                828
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      826,
                                      827
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 36
                                      }
                                    }
                                  },
                                  "range": [
                                    826,
                                    827
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 36
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 36
                                },
                                "start": {
                                  "column": 37,
                                  "line": 36
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false,
                              "range": [
                                821,
                                825
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 36
                                },
                                "start": {
                                  "column": 33,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              821,
                              828
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 36
                              },
                              "start": {
                                "column": 33,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "range": [
                          811,
                          828
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 36
                          },
                          "start": {
                            "column": 23,
                            "line": 36
                          }
                        }
                      }
                    },
                    "range": [
                      808,
                      828
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 36
                      },
                      "start": {
                        "column": 20,
                        "line": 36
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 36
                    },
                    "start": {
                      "column": 42,
                      "line": 36
                    }
                  },
                  "range": [
                    830,
                    843
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        840,
                        843
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              841,
                              842
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 36
                              },
                              "start": {
                                "column": 53,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            841,
                            842
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 36
                            },
                            "start": {
                              "column": 53,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 36
                        },
                        "start": {
                          "column": 52,
                          "line": 36
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        833,
                        840
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 36
                        },
                        "start": {
                          "column": 45,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      833,
                      843
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 36
                      },
                      "start": {
                        "column": 45,
                        "line": 36
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 36
                    },
                    "start": {
                      "column": 16,
                      "line": 36
                    }
                  },
                  "range": [
                    804,
                    807
                  ],
                  "params": [
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
                          805,
                          806
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 36
                          },
                          "start": {
                            "column": 17,
                            "line": 36
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        805,
                        806
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 36
                        },
                        "start": {
                          "column": 17,
                          "line": 36
                        }
                      }
                    }
                  ]
                },
                "range": [
                  804,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 36
                  },
                  "start": {
                    "column": 16,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              800,
              843
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 36
              },
              "start": {
                "column": 12,
                "line": 36
              }
            }
          },
          "init": null,
          "range": [
            800,
            843
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        788,
        844
      ],
      "loc": {
        "end": {
          "column": 56,
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
          "name": "g1",
          "optional": false,
          "range": [
            846,
            848
          ],
          "loc": {
            "end": {
              "column": 2,
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
          "name": "g2",
          "optional": false,
          "range": [
            851,
            853
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 38
            },
            "start": {
              "column": 5,
              "line": 38
            }
          }
        },
        "range": [
          846,
          853
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        846,
        854
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
          "name": "g2",
          "optional": false,
          "range": [
            855,
            857
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "range": [
            860,
            862
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 39
            },
            "start": {
              "column": 5,
              "line": 39
            }
          }
        },
        "range": [
          855,
          862
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        855,
        863
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
        "name": "foo1",
        "optional": false,
        "range": [
          904,
          908
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 43
          },
          "start": {
            "column": 17,
            "line": 43
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 43
              },
              "start": {
                "column": 28,
                "line": 43
              }
            },
            "range": [
              915,
              939
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      917,
                      923
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 43
                      },
                      "start": {
                        "column": 30,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    917,
                    925
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 43
                    },
                    "start": {
                      "column": 30,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      936,
                      939
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
                            937,
                            938
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 43
                            },
                            "start": {
                              "column": 50,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          937,
                          938
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 43
                          },
                          "start": {
                            "column": 50,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 43
                      },
                      "start": {
                        "column": 49,
                        "line": 43
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "range": [
                      928,
                      936
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 43
                      },
                      "start": {
                        "column": 41,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    928,
                    939
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 43
                    },
                    "start": {
                      "column": 41,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                917,
                939
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 43
                },
                "start": {
                  "column": 30,
                  "line": 43
                }
              }
            }
          },
          "range": [
            912,
            939
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 43
            },
            "start": {
              "column": 25,
              "line": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 56,
            "line": 43
          },
          "start": {
            "column": 53,
            "line": 43
          }
        },
        "range": [
          940,
          943
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              942,
              943
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 43
              },
              "start": {
                "column": 55,
                "line": 43
              }
            }
          },
          "range": [
            942,
            943
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 43
            },
            "start": {
              "column": 55,
              "line": 43
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 43
          },
          "start": {
            "column": 21,
            "line": 43
          }
        },
        "range": [
          908,
          911
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
                909,
                910
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 43
                },
                "start": {
                  "column": 22,
                  "line": 43
                }
              }
            },
            "out": false,
            "range": [
              909,
              910
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 43
              },
              "start": {
                "column": 22,
                "line": 43
              }
            }
          }
        ]
      },
      "range": [
        887,
        944
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
        "name": "foo2",
        "optional": false,
        "range": [
          962,
          966
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 44
          },
          "start": {
            "column": 17,
            "line": 44
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 44
              },
              "start": {
                "column": 28,
                "line": 44
              }
            },
            "range": [
              973,
              987
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      975,
                      981
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 44
                      },
                      "start": {
                        "column": 30,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    975,
                    983
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 44
                    },
                    "start": {
                      "column": 30,
                      "line": 44
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
                      986,
                      987
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 44
                      },
                      "start": {
                        "column": 41,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    986,
                    987
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 44
                    },
                    "start": {
                      "column": 41,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                975,
                987
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 44
                },
                "start": {
                  "column": 30,
                  "line": 44
                }
              }
            }
          },
          "range": [
            970,
            987
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 44
            },
            "start": {
              "column": 25,
              "line": 44
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 44
          },
          "start": {
            "column": 43,
            "line": 44
          }
        },
        "range": [
          988,
          991
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              990,
              991
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 44
              },
              "start": {
                "column": 45,
                "line": 44
              }
            }
          },
          "range": [
            990,
            991
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 44
            },
            "start": {
              "column": 45,
              "line": 44
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 44
          },
          "start": {
            "column": 21,
            "line": 44
          }
        },
        "range": [
          966,
          969
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
                967,
                968
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 44
                },
                "start": {
                  "column": 22,
                  "line": 44
                }
              }
            },
            "out": false,
            "range": [
              967,
              968
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 22,
                "line": 44
              }
            }
          }
        ]
      },
      "range": [
        945,
        992
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "sa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 46
                },
                "start": {
                  "column": 14,
                  "line": 46
                }
              },
              "range": [
                1008,
                1018
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    1010,
                    1016
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 46
                    },
                    "start": {
                      "column": 16,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1010,
                  1018
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 46
                  },
                  "start": {
                    "column": 16,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1006,
              1018
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 46
              },
              "start": {
                "column": 12,
                "line": 46
              }
            }
          },
          "init": null,
          "range": [
            1006,
            1018
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 46
            },
            "start": {
              "column": 12,
              "line": 46
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        994,
        1019
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "sx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 47
                },
                "start": {
                  "column": 14,
                  "line": 47
                }
              },
              "range": [
                1034,
                1064
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        1036,
                        1042
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 47
                        },
                        "start": {
                          "column": 16,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1036,
                      1044
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 47
                      },
                      "start": {
                        "column": 16,
                        "line": 47
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "extra",
                          "optional": false,
                          "range": [
                            1049,
                            1054
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 47
                            },
                            "start": {
                              "column": 29,
                              "line": 47
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
                              "column": 42,
                              "line": 47
                            },
                            "start": {
                              "column": 34,
                              "line": 47
                            }
                          },
                          "range": [
                            1054,
                            1062
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1056,
                              1062
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 47
                              },
                              "start": {
                                "column": 36,
                                "line": 47
                              }
                            }
                          }
                        },
                        "range": [
                          1049,
                          1062
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 47
                          },
                          "start": {
                            "column": 29,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "range": [
                      1047,
                      1064
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 47
                      },
                      "start": {
                        "column": 27,
                        "line": 47
                      }
                    }
                  }
                ],
                "range": [
                  1036,
                  1064
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 47
                  },
                  "start": {
                    "column": 16,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1032,
              1064
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 47
              },
              "start": {
                "column": 12,
                "line": 47
              }
            }
          },
          "init": null,
          "range": [
            1032,
            1064
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 47
            },
            "start": {
              "column": 12,
              "line": 47
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1020,
        1065
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "x1",
            "optional": false,
            "range": [
              1071,
              1073
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "range": [
                  1081,
                  1083
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "range": [
                1076,
                1080
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 49
                },
                "start": {
                  "column": 9,
                  "line": 49
                }
              }
            },
            "optional": false,
            "range": [
              1076,
              1084
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 49
              },
              "start": {
                "column": 9,
                "line": 49
              }
            }
          },
          "range": [
            1071,
            1084
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1067,
        1085
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "y1",
            "optional": false,
            "range": [
              1101,
              1103
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sx",
                "optional": false,
                "range": [
                  1111,
                  1113
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 50
                  },
                  "start": {
                    "column": 14,
                    "line": 50
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "range": [
                1106,
                1110
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 9,
                  "line": 50
                }
              }
            },
            "optional": false,
            "range": [
              1106,
              1114
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 50
              },
              "start": {
                "column": 9,
                "line": 50
              }
            }
          },
          "range": [
            1101,
            1114
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1097,
        1115
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
            "range": [
              1132,
              1134
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "range": [
                  1142,
                  1144
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 52
                  },
                  "start": {
                    "column": 14,
                    "line": 52
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                1137,
                1141
              ],
              "loc": {
                "end": {
                  "column": 13,
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
              1137,
              1145
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 52
              },
              "start": {
                "column": 9,
                "line": 52
              }
            }
          },
          "range": [
            1132,
            1145
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1128,
        1146
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "y2",
            "optional": false,
            "range": [
              1163,
              1165
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sx",
                "optional": false,
                "range": [
                  1173,
                  1175
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 53
                  },
                  "start": {
                    "column": 14,
                    "line": 53
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                1168,
                1172
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 53
                },
                "start": {
                  "column": 9,
                  "line": 53
                }
              }
            },
            "optional": false,
            "range": [
              1168,
              1176
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 53
              },
              "start": {
                "column": 9,
                "line": 53
              }
            }
          },
          "range": [
            1163,
            1176
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1159,
        1177
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1250,
          1262
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
              "name": "props",
              "optional": false,
              "range": [
                1252,
                1257
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 57
                },
                "start": {
                  "column": 29,
                  "line": 57
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
                  "column": 37,
                  "line": 57
                },
                "start": {
                  "column": 34,
                  "line": 57
                }
              },
              "range": [
                1257,
                1260
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    1259,
                    1260
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 57
                    },
                    "start": {
                      "column": 36,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1259,
                  1260
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 57
                  },
                  "start": {
                    "column": 36,
                    "line": 57
                  }
                }
              }
            },
            "value": null,
            "range": [
              1252,
              1260
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 57
              },
              "start": {
                "column": 29,
                "line": 57
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 57
          },
          "start": {
            "column": 27,
            "line": 57
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          1237,
          1246
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 57
          },
          "start": {
            "column": 14,
            "line": 57
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 57
          },
          "start": {
            "column": 23,
            "line": 57
          }
        },
        "range": [
          1246,
          1249
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                1247,
                1248
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 57
                },
                "start": {
                  "column": 24,
                  "line": 57
                }
              }
            },
            "out": false,
            "range": [
              1247,
              1248
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 57
              },
              "start": {
                "column": 24,
                "line": 57
              }
            }
          }
        ]
      },
      "range": [
        1223,
        1262
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1264,
        1327
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentClass",
          "optional": false,
          "range": [
            1276,
            1290
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 59
            },
            "start": {
              "column": 12,
              "line": 59
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 59
                  },
                  "start": {
                    "column": 42,
                    "line": 59
                  }
                },
                "range": [
                  1306,
                  1309
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      1308,
                      1309
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 59
                      },
                      "start": {
                        "column": 44,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1308,
                    1309
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 59
                    },
                    "start": {
                      "column": 44,
                      "line": 59
                    }
                  }
                }
              },
              "range": [
                1301,
                1309
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 59
                },
                "start": {
                  "column": 37,
                  "line": 59
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 59
              },
              "start": {
                "column": 47,
                "line": 59
              }
            },
            "range": [
              1311,
              1326
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1323,
                  1326
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1324,
                        1325
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 59
                        },
                        "start": {
                          "column": 60,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1324,
                      1325
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 59
                      },
                      "start": {
                        "column": 60,
                        "line": 59
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 59
                  },
                  "start": {
                    "column": 59,
                    "line": 59
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "range": [
                  1314,
                  1323
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 59
                  },
                  "start": {
                    "column": 50,
                    "line": 59
                  }
                }
              },
              "range": [
                1314,
                1326
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 59
                },
                "start": {
                  "column": 50,
                  "line": 59
                }
              }
            }
          },
          "range": [
            1296,
            1326
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 59
            },
            "start": {
              "column": 32,
              "line": 59
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 29,
              "line": 59
            },
            "start": {
              "column": 26,
              "line": 59
            }
          },
          "range": [
            1290,
            1293
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1291,
                  1292
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 59
                  },
                  "start": {
                    "column": 27,
                    "line": 59
                  }
                }
              },
              "out": false,
              "range": [
                1291,
                1292
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 59
                },
                "start": {
                  "column": 27,
                  "line": 59
                }
              }
            }
          ]
        },
        "range": [
          1271,
          1327
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 59
          },
          "start": {
            "column": 7,
            "line": 59
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 63,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1328,
        1382
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FunctionComponent",
          "optional": false,
          "range": [
            1340,
            1357
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 60
            },
            "start": {
              "column": 12,
              "line": 60
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 60
                  },
                  "start": {
                    "column": 41,
                    "line": 60
                  }
                },
                "range": [
                  1369,
                  1372
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      1371,
                      1372
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 60
                      },
                      "start": {
                        "column": 43,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1371,
                    1372
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 60
                    },
                    "start": {
                      "column": 43,
                      "line": 60
                    }
                  }
                }
              },
              "range": [
                1364,
                1372
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 60
                },
                "start": {
                  "column": 36,
                  "line": 60
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 60
              },
              "start": {
                "column": 46,
                "line": 60
              }
            },
            "range": [
              1374,
              1381
            ],
            "typeAnnotation": {
              "type": "TSNullKeyword",
              "range": [
                1377,
                1381
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 60
                },
                "start": {
                  "column": 49,
                  "line": 60
                }
              }
            }
          },
          "range": [
            1363,
            1381
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 60
            },
            "start": {
              "column": 35,
              "line": 60
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 32,
              "line": 60
            },
            "start": {
              "column": 29,
              "line": 60
            }
          },
          "range": [
            1357,
            1360
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1358,
                  1359
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 60
                  },
                  "start": {
                    "column": 30,
                    "line": 60
                  }
                }
              },
              "out": false,
              "range": [
                1358,
                1359
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 60
                },
                "start": {
                  "column": 30,
                  "line": 60
                }
              }
            }
          ]
        },
        "range": [
          1335,
          1382
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 60
          },
          "start": {
            "column": 7,
            "line": 60
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 54,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1384,
        1456
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentType",
          "optional": false,
          "range": [
            1396,
            1409
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 62
            },
            "start": {
              "column": 12,
              "line": 62
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1432,
                  1435
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1433,
                        1434
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 62
                        },
                        "start": {
                          "column": 49,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1433,
                      1434
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 62
                      },
                      "start": {
                        "column": 49,
                        "line": 62
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 62
                  },
                  "start": {
                    "column": 48,
                    "line": 62
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "range": [
                  1415,
                  1432
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 62
                  },
                  "start": {
                    "column": 31,
                    "line": 62
                  }
                }
              },
              "range": [
                1415,
                1435
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 62
                },
                "start": {
                  "column": 31,
                  "line": 62
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1452,
                  1455
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1453,
                        1454
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 62
                        },
                        "start": {
                          "column": 69,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1453,
                      1454
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 62
                      },
                      "start": {
                        "column": 69,
                        "line": 62
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 62
                  },
                  "start": {
                    "column": 68,
                    "line": 62
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentClass",
                "optional": false,
                "range": [
                  1438,
                  1452
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 62
                  },
                  "start": {
                    "column": 54,
                    "line": 62
                  }
                }
              },
              "range": [
                1438,
                1455
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 62
                },
                "start": {
                  "column": 54,
                  "line": 62
                }
              }
            }
          ],
          "range": [
            1415,
            1455
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 62
            },
            "start": {
              "column": 31,
              "line": 62
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 28,
              "line": 62
            },
            "start": {
              "column": 25,
              "line": 62
            }
          },
          "range": [
            1409,
            1412
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1410,
                  1411
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 62
                  },
                  "start": {
                    "column": 26,
                    "line": 62
                  }
                }
              },
              "out": false,
              "range": [
                1410,
                1411
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 62
                },
                "start": {
                  "column": 26,
                  "line": 62
                }
              }
            }
          ]
        },
        "range": [
          1391,
          1456
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 62
          },
          "start": {
            "column": 7,
            "line": 62
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 72,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1458,
        1512
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            1495,
            1512
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "route",
                "optional": false,
                "range": [
                  1497,
                  1502
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 64
                  },
                  "start": {
                    "column": 39,
                    "line": 64
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
                    "line": 64
                  },
                  "start": {
                    "column": 44,
                    "line": 64
                  }
                },
                "range": [
                  1502,
                  1510
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1504,
                    1510
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 64
                    },
                    "start": {
                      "column": 46,
                      "line": 64
                    }
                  }
                }
              },
              "range": [
                1497,
                1510
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 64
                },
                "start": {
                  "column": 39,
                  "line": 64
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 64
            },
            "start": {
              "column": 37,
              "line": 64
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RouteComponentProps",
          "optional": false,
          "range": [
            1475,
            1494
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 64
            },
            "start": {
              "column": 17,
              "line": 64
            }
          }
        },
        "range": [
          1465,
          1512
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 64
          },
          "start": {
            "column": 7,
            "line": 64
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 54,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
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
        "name": "withRouter",
        "optional": false,
        "range": [
          1531,
          1541
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 66
          },
          "start": {
            "column": 17,
            "line": 66
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 70
              },
              "start": {
                "column": 11,
                "line": 70
              }
            },
            "range": [
              1619,
              1641
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      1621,
                      1622
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 70
                      },
                      "start": {
                        "column": 13,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1621,
                    1622
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 70
                    },
                    "start": {
                      "column": 13,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1638,
                      1641
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            1639,
                            1640
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 70
                            },
                            "start": {
                              "column": 31,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1639,
                          1640
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 70
                          },
                          "start": {
                            "column": 31,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 70
                      },
                      "start": {
                        "column": 30,
                        "line": 70
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "range": [
                      1625,
                      1638
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 70
                      },
                      "start": {
                        "column": 17,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1625,
                    1641
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 70
                    },
                    "start": {
                      "column": 17,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                1621,
                1641
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 70
                },
                "start": {
                  "column": 13,
                  "line": 70
                }
              }
            }
          },
          "range": [
            1610,
            1641
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 70
            },
            "start": {
              "column": 2,
              "line": 70
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 71
          },
          "start": {
            "column": 1,
            "line": 71
          }
        },
        "range": [
          1643,
          1695
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1659,
              1695
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1664,
                    1694
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          1665,
                          1666
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 71
                          },
                          "start": {
                            "column": 23,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1665,
                        1666
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 71
                        },
                        "start": {
                          "column": 23,
                          "line": 71
                        }
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RouteComponentProps",
                          "optional": false,
                          "range": [
                            1674,
                            1693
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 71
                            },
                            "start": {
                              "column": 32,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1674,
                          1693
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 71
                          },
                          "start": {
                            "column": 32,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1668,
                        1693
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 71
                        },
                        "start": {
                          "column": 26,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 71
                    },
                    "start": {
                      "column": 22,
                      "line": 71
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Omit",
                  "optional": false,
                  "range": [
                    1660,
                    1664
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 71
                    },
                    "start": {
                      "column": 18,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1660,
                  1694
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 71
                  },
                  "start": {
                    "column": 18,
                    "line": 71
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 71
              },
              "start": {
                "column": 17,
                "line": 71
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentClass",
            "optional": false,
            "range": [
              1645,
              1659
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 71
              },
              "start": {
                "column": 3,
                "line": 71
              }
            }
          },
          "range": [
            1645,
            1695
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 71
            },
            "start": {
              "column": 3,
              "line": 71
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 27,
            "line": 66
          }
        },
        "range": [
          1541,
          1606
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
                "name": "RouteComponentProps",
                "optional": false,
                "range": [
                  1555,
                  1574
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 67
                  },
                  "start": {
                    "column": 12,
                    "line": 67
                  }
                }
              },
              "range": [
                1555,
                1574
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 67
                },
                "start": {
                  "column": 12,
                  "line": 67
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                1545,
                1546
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 67
                },
                "start": {
                  "column": 2,
                  "line": 67
                }
              }
            },
            "out": false,
            "range": [
              1545,
              1574
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 67
              },
              "start": {
                "column": 2,
                "line": 67
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1601,
                  1604
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1602,
                        1603
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 68
                        },
                        "start": {
                          "column": 26,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1602,
                      1603
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 68
                      },
                      "start": {
                        "column": 26,
                        "line": 68
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 68
                  },
                  "start": {
                    "column": 25,
                    "line": 68
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "range": [
                  1588,
                  1601
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 68
                  },
                  "start": {
                    "column": 12,
                    "line": 68
                  }
                }
              },
              "range": [
                1588,
                1604
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 68
                },
                "start": {
                  "column": 12,
                  "line": 68
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                1578,
                1579
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 68
                },
                "start": {
                  "column": 2,
                  "line": 68
                }
              }
            },
            "out": false,
            "range": [
              1578,
              1604
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 68
              },
              "start": {
                "column": 2,
                "line": 68
              }
            }
          }
        ]
      },
      "range": [
        1514,
        1696
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1742,
          1762
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "username",
              "optional": false,
              "range": [
                1744,
                1752
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 73
                },
                "start": {
                  "column": 46,
                  "line": 73
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
                  "column": 62,
                  "line": 73
                },
                "start": {
                  "column": 54,
                  "line": 73
                }
              },
              "range": [
                1752,
                1760
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1754,
                  1760
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 73
                  },
                  "start": {
                    "column": 56,
                    "line": 73
                  }
                }
              }
            },
            "range": [
              1744,
              1760
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 73
              },
              "start": {
                "column": 46,
                "line": 73
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 73
          },
          "start": {
            "column": 44,
            "line": 73
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RouteComponentProps",
            "optional": false,
            "range": [
              1722,
              1741
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 73
              },
              "start": {
                "column": 24,
                "line": 73
              }
            }
          },
          "range": [
            1722,
            1741
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 73
            },
            "start": {
              "column": 24,
              "line": 73
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          1708,
          1713
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 73
          },
          "start": {
            "column": 10,
            "line": 73
          }
        }
      },
      "range": [
        1698,
        1762
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 75
                },
                "start": {
                  "column": 25,
                  "line": 75
                }
              },
              "range": [
                1789,
                1811
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1804,
                    1811
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "range": [
                          1805,
                          1810
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 75
                          },
                          "start": {
                            "column": 41,
                            "line": 75
                          }
                        }
                      },
                      "range": [
                        1805,
                        1810
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 75
                        },
                        "start": {
                          "column": 41,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 75
                    },
                    "start": {
                      "column": 40,
                      "line": 75
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "range": [
                    1791,
                    1804
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 75
                    },
                    "start": {
                      "column": 27,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1791,
                  1811
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 75
                  },
                  "start": {
                    "column": 27,
                    "line": 75
                  }
                }
              }
            },
            "range": [
              1778,
              1811
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 75
              },
              "start": {
                "column": 14,
                "line": 75
              }
            }
          },
          "init": null,
          "range": [
            1778,
            1811
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 75
            },
            "start": {
              "column": 14,
              "line": 75
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1764,
        1812
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "range": [
              1825,
              1836
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 77
              },
              "start": {
                "column": 11,
                "line": 77
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRouter",
          "optional": false,
          "range": [
            1814,
            1824
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 77
            },
            "start": {
              "column": 0,
              "line": 77
            }
          }
        },
        "optional": false,
        "range": [
          1814,
          1837
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 77
          },
          "start": {
            "column": 0,
            "line": 77
          }
        }
      },
      "range": [
        1814,
        1838
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "range": [
          1867,
          1869
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 81
          },
          "start": {
            "column": 5,
            "line": 81
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                    1877,
                    1878
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 81
                    },
                    "start": {
                      "column": 15,
                      "line": 81
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
                      "column": 19,
                      "line": 81
                    },
                    "start": {
                      "column": 16,
                      "line": 81
                    }
                  },
                  "range": [
                    1878,
                    1881
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1880,
                        1881
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 81
                        },
                        "start": {
                          "column": 18,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1880,
                      1881
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 81
                      },
                      "start": {
                        "column": 18,
                        "line": 81
                      }
                    }
                  }
                },
                "range": [
                  1877,
                  1881
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 81
                  },
                  "start": {
                    "column": 15,
                    "line": 81
                  }
                }
              }
            ],
            "range": [
              1875,
              1883
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 81
              },
              "start": {
                "column": 13,
                "line": 81
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1888,
                    1889
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 81
                    },
                    "start": {
                      "column": 26,
                      "line": 81
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
                      "column": 30,
                      "line": 81
                    },
                    "start": {
                      "column": 27,
                      "line": 81
                    }
                  },
                  "range": [
                    1889,
                    1892
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1891,
                        1892
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 81
                        },
                        "start": {
                          "column": 29,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1891,
                      1892
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 81
                      },
                      "start": {
                        "column": 29,
                        "line": 81
                      }
                    }
                  }
                },
                "range": [
                  1888,
                  1892
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 81
                  },
                  "start": {
                    "column": 26,
                    "line": 81
                  }
                }
              }
            ],
            "range": [
              1886,
              1894
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 81
              },
              "start": {
                "column": 24,
                "line": 81
              }
            }
          }
        ],
        "range": [
          1875,
          1894
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 81
          },
          "start": {
            "column": 13,
            "line": 81
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 81
          },
          "start": {
            "column": 7,
            "line": 81
          }
        },
        "range": [
          1869,
          1872
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
                1870,
                1871
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 81
                }
              }
            },
            "out": false,
            "range": [
              1870,
              1871
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 81
              },
              "start": {
                "column": 8,
                "line": 81
              }
            }
          }
        ]
      },
      "range": [
        1862,
        1895
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
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
        "name": "foo",
        "optional": false,
        "range": [
          1975,
          1978
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 84
          },
          "start": {
            "column": 17,
            "line": 84
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 84
              },
              "start": {
                "column": 30,
                "line": 84
              }
            },
            "range": [
              1988,
              1999
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1990,
                      1991
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 84
                      },
                      "start": {
                        "column": 32,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    1990,
                    1991
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 84
                    },
                    "start": {
                      "column": 32,
                      "line": 84
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1996,
                      1999
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            1997,
                            1998
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 84
                            },
                            "start": {
                              "column": 39,
                              "line": 84
                            }
                          }
                        },
                        "range": [
                          1997,
                          1998
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 84
                          },
                          "start": {
                            "column": 39,
                            "line": 84
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 84
                      },
                      "start": {
                        "column": 38,
                        "line": 84
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AB",
                    "optional": false,
                    "range": [
                      1994,
                      1996
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 84
                      },
                      "start": {
                        "column": 36,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    1994,
                    1999
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 84
                    },
                    "start": {
                      "column": 36,
                      "line": 84
                    }
                  }
                }
              ],
              "range": [
                1990,
                1999
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 84
                },
                "start": {
                  "column": 32,
                  "line": 84
                }
              }
            }
          },
          "range": [
            1985,
            1999
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 84
            },
            "start": {
              "column": 27,
              "line": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 84
          },
          "start": {
            "column": 42,
            "line": 84
          }
        },
        "range": [
          2000,
          2008
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2003,
                  2004
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 84
                  },
                  "start": {
                    "column": 45,
                    "line": 84
                  }
                }
              },
              "range": [
                2003,
                2004
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 84
                },
                "start": {
                  "column": 45,
                  "line": 84
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
                  2006,
                  2007
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 84
                  },
                  "start": {
                    "column": 48,
                    "line": 84
                  }
                }
              },
              "range": [
                2006,
                2007
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 84
                },
                "start": {
                  "column": 48,
                  "line": 84
                }
              }
            }
          ],
          "range": [
            2002,
            2008
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 84
            },
            "start": {
              "column": 44,
              "line": 84
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 84
          },
          "start": {
            "column": 20,
            "line": 84
          }
        },
        "range": [
          1978,
          1984
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
                1979,
                1980
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 84
                },
                "start": {
                  "column": 21,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              1979,
              1980
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 84
              },
              "start": {
                "column": 21,
                "line": 84
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
                1982,
                1983
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 84
                },
                "start": {
                  "column": 24,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              1982,
              1983
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 84
              },
              "start": {
                "column": 24,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        1958,
        2009
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 85
                },
                "start": {
                  "column": 14,
                  "line": 85
                }
              },
              "range": [
                2024,
                2036
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2028,
                    2036
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        2029,
                        2035
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 85
                        },
                        "start": {
                          "column": 19,
                          "line": 85
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 85
                    },
                    "start": {
                      "column": 18,
                      "line": 85
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "range": [
                    2026,
                    2028
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 85
                    },
                    "start": {
                      "column": 16,
                      "line": 85
                    }
                  }
                },
                "range": [
                  2026,
                  2036
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 85
                  },
                  "start": {
                    "column": 16,
                    "line": 85
                  }
                }
              }
            },
            "range": [
              2022,
              2036
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 85
              },
              "start": {
                "column": 12,
                "line": 85
              }
            }
          },
          "init": null,
          "range": [
            2022,
            2036
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 85
            },
            "start": {
              "column": 12,
              "line": 85
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2010,
        2037
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
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
            "name": "z",
            "optional": false,
            "range": [
              2043,
              2044
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ab",
                "optional": false,
                "range": [
                  2051,
                  2053
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 87
                  },
                  "start": {
                    "column": 12,
                    "line": 87
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                2047,
                2050
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 87
                },
                "start": {
                  "column": 8,
                  "line": 87
                }
              }
            },
            "optional": false,
            "range": [
              2047,
              2054
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 87
              },
              "start": {
                "column": 8,
                "line": 87
              }
            }
          },
          "range": [
            2043,
            2054
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 87
            },
            "start": {
              "column": 4,
              "line": 87
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2039,
        2055
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
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
                  "column": 65,
                  "line": 91
                },
                "start": {
                  "column": 13,
                  "line": 91
                }
              },
              "range": [
                2117,
                2169
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 91
                    },
                    "start": {
                      "column": 21,
                      "line": 91
                    }
                  },
                  "range": [
                    2125,
                    2169
                  ],
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2129,
                              2130
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 91
                              },
                              "start": {
                                "column": 25,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2129,
                            2130
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 91
                            },
                            "start": {
                              "column": 25,
                              "line": 91
                            }
                          }
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              2139,
                              2143
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 91
                              },
                              "start": {
                                "column": 35,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2139,
                            2143
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 91
                            },
                            "start": {
                              "column": 35,
                              "line": 91
                            }
                          }
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              2153,
                              2158
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 91
                              },
                              "start": {
                                "column": 49,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2153,
                            2158
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 91
                            },
                            "start": {
                              "column": 49,
                              "line": 91
                            }
                          }
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              2146,
                              2150
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 91
                              },
                              "start": {
                                "column": 42,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2146,
                            2150
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 91
                            },
                            "start": {
                              "column": 42,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          2129,
                          2158
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 91
                          },
                          "start": {
                            "column": 25,
                            "line": 91
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2162,
                          2169
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 91
                          },
                          "start": {
                            "column": 58,
                            "line": 91
                          }
                        }
                      }
                    ],
                    "range": [
                      2128,
                      2169
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 91
                      },
                      "start": {
                        "column": 24,
                        "line": 91
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 91
                    },
                    "start": {
                      "column": 15,
                      "line": 91
                    }
                  },
                  "range": [
                    2119,
                    2122
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
                          2120,
                          2121
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 91
                          },
                          "start": {
                            "column": 16,
                            "line": 91
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2120,
                        2121
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 91
                        },
                        "start": {
                          "column": 16,
                          "line": 91
                        }
                      }
                    }
                  ]
                },
                "range": [
                  2119,
                  2169
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 91
                  },
                  "start": {
                    "column": 15,
                    "line": 91
                  }
                }
              }
            },
            "range": [
              2116,
              2169
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 91
              },
              "start": {
                "column": 12,
                "line": 91
              }
            }
          },
          "init": null,
          "range": [
            2116,
            2169
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 91
            },
            "start": {
              "column": 12,
              "line": 91
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2104,
        2170
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 92
                },
                "start": {
                  "column": 13,
                  "line": 92
                }
              },
              "range": [
                2184,
                2236
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 92
                    },
                    "start": {
                      "column": 21,
                      "line": 92
                    }
                  },
                  "range": [
                    2192,
                    2236
                  ],
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2196,
                              2197
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 92
                              },
                              "start": {
                                "column": 25,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            2196,
                            2197
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 92
                            },
                            "start": {
                              "column": 25,
                              "line": 92
                            }
                          }
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              2206,
                              2210
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 92
                              },
                              "start": {
                                "column": 35,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            2206,
                            2210
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 92
                            },
                            "start": {
                              "column": 35,
                              "line": 92
                            }
                          }
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              2220,
                              2225
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 92
                              },
                              "start": {
                                "column": 49,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            2220,
                            2225
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 92
                            },
                            "start": {
                              "column": 49,
                              "line": 92
                            }
                          }
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              2213,
                              2217
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 92
                              },
                              "start": {
                                "column": 42,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            2213,
                            2217
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 92
                            },
                            "start": {
                              "column": 42,
                              "line": 92
                            }
                          }
                        },
                        "range": [
                          2196,
                          2225
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 92
                          },
                          "start": {
                            "column": 25,
                            "line": 92
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2229,
                          2236
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 92
                          },
                          "start": {
                            "column": 58,
                            "line": 92
                          }
                        }
                      }
                    ],
                    "range": [
                      2195,
                      2236
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 92
                      },
                      "start": {
                        "column": 24,
                        "line": 92
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 92
                    },
                    "start": {
                      "column": 15,
                      "line": 92
                    }
                  },
                  "range": [
                    2186,
                    2189
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
                          2187,
                          2188
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 92
                          },
                          "start": {
                            "column": 16,
                            "line": 92
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2187,
                        2188
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 92
                        },
                        "start": {
                          "column": 16,
                          "line": 92
                        }
                      }
                    }
                  ]
                },
                "range": [
                  2186,
                  2236
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 92
                  },
                  "start": {
                    "column": 15,
                    "line": 92
                  }
                }
              }
            },
            "range": [
              2183,
              2236
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 92
              },
              "start": {
                "column": 12,
                "line": 92
              }
            }
          },
          "init": null,
          "range": [
            2183,
            2236
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 92
            },
            "start": {
              "column": 12,
              "line": 92
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2171,
        2237
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
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
            2238,
            2239
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 93
            },
            "start": {
              "column": 0,
              "line": 93
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            2242,
            2243
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 93
            },
            "start": {
              "column": 4,
              "line": 93
            }
          }
        },
        "range": [
          2238,
          2243
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 93
          },
          "start": {
            "column": 0,
            "line": 93
          }
        }
      },
      "range": [
        2238,
        2244
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 94
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
