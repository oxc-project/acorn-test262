__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    406
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 4
                      },
                      "start": {
                        "column": 7,
                        "line": 4
                      }
                    },
                    "range": [
                      131,
                      138
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          133,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 4
                          },
                          "start": {
                            "column": 9,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        133,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 4
                        },
                        "start": {
                          "column": 9,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    130,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    141,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                "range": [
                  130,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              126,
              144
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                154,
                155
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "range": [
              147,
              156
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "range": [
          122,
          158
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 65,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          66,
          71
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 3
          },
          "start": {
            "column": 50,
            "line": 3
          }
        },
        "range": [
          107,
          121
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    113,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 3
                    },
                    "start": {
                      "column": 56,
                      "line": 3
                    }
                  }
                },
                "range": [
                  113,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 3
                  },
                  "start": {
                    "column": 56,
                    "line": 3
                  }
                }
              },
              "range": [
                110,
                114
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 3
                },
                "start": {
                  "column": 53,
                  "line": 3
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    119,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 3
                    },
                    "start": {
                      "column": 62,
                      "line": 3
                    }
                  }
                },
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              },
              "range": [
                116,
                120
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 3
                },
                "start": {
                  "column": 59,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            109,
            121
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 3
            },
            "start": {
              "column": 52,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          71,
          105
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  82,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              "range": [
                82,
                87
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
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
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              72,
              87
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  99,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 3
                  },
                  "start": {
                    "column": 42,
                    "line": 3
                  }
                }
              },
              "range": [
                99,
                104
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
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
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              89,
              104
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 32,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        158
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
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
                        "line": 9
                      },
                      "start": {
                        "column": 7,
                        "line": 9
                      }
                    },
                    "range": [
                      234,
                      246
                    ],
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            237,
                            240
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 9
                            },
                            "start": {
                              "column": 10,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            242,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 15,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        236,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
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
                    233,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 6,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        250,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 23,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        256,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
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
                    249,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                },
                "range": [
                  233,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 6,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              229,
              262
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                272,
                273
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "range": [
              265,
              274
            ],
            "loc": {
              "end": {
                "column": 11,
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
          225,
          276
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 65,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          169,
          174
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 8
          },
          "start": {
            "column": 50,
            "line": 8
          }
        },
        "range": [
          210,
          224
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    216,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 8
                    },
                    "start": {
                      "column": 56,
                      "line": 8
                    }
                  }
                },
                "range": [
                  216,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 8
                  },
                  "start": {
                    "column": 56,
                    "line": 8
                  }
                }
              },
              "range": [
                213,
                217
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 8
                },
                "start": {
                  "column": 53,
                  "line": 8
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    222,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 8
                    },
                    "start": {
                      "column": 62,
                      "line": 8
                    }
                  }
                },
                "range": [
                  222,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 8
                  },
                  "start": {
                    "column": 62,
                    "line": 8
                  }
                }
              },
              "range": [
                219,
                223
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 8
                },
                "start": {
                  "column": 59,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            212,
            224
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 8
            },
            "start": {
              "column": 52,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        },
        "range": [
          174,
          208
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  185,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              "range": [
                185,
                190
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
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
                175,
                176
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
            "out": false,
            "range": [
              175,
              190
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  202,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 42,
                    "line": 8
                  }
                }
              },
              "range": [
                202,
                207
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 8
                },
                "start": {
                  "column": 42,
                  "line": 8
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
                192,
                193
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 8
                },
                "start": {
                  "column": 32,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              192,
              207
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 8
              },
              "start": {
                "column": 32,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        160,
        276
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
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
                        "column": 24,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 14
                      }
                    },
                    "range": [
                      352,
                      369
                    ],
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            355,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 14
                            },
                            "start": {
                              "column": 10,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            360,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            365,
                            368
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
                        }
                      ],
                      "range": [
                        354,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    351,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 14
                    },
                    "start": {
                      "column": 6,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        373,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 14
                        },
                        "start": {
                          "column": 28,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        379,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 14
                        },
                        "start": {
                          "column": 34,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        385,
                        389
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 14
                        },
                        "start": {
                          "column": 40,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    372,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 14
                    },
                    "start": {
                      "column": 27,
                      "line": 14
                    }
                  }
                },
                "range": [
                  351,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 14
                  },
                  "start": {
                    "column": 6,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              347,
              391
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                401,
                402
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "range": [
              394,
              403
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          }
        ],
        "range": [
          343,
          405
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 65,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "range": [
          287,
          292
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 13
          },
          "start": {
            "column": 50,
            "line": 13
          }
        },
        "range": [
          328,
          342
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    334,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 13
                    },
                    "start": {
                      "column": 56,
                      "line": 13
                    }
                  }
                },
                "range": [
                  334,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 13
                  },
                  "start": {
                    "column": 56,
                    "line": 13
                  }
                }
              },
              "range": [
                331,
                335
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 13
                },
                "start": {
                  "column": 53,
                  "line": 13
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    340,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 13
                    },
                    "start": {
                      "column": 62,
                      "line": 13
                    }
                  }
                },
                "range": [
                  340,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 13
                  },
                  "start": {
                    "column": 62,
                    "line": 13
                  }
                }
              },
              "range": [
                337,
                341
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 13
                },
                "start": {
                  "column": 59,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            330,
            342
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 13
            },
            "start": {
              "column": 52,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        },
        "range": [
          292,
          326
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  303,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 13
                  },
                  "start": {
                    "column": 25,
                    "line": 13
                  }
                }
              },
              "range": [
                303,
                308
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 25,
                  "line": 13
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
                293,
                294
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
              293,
              308
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  320,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 13
                  },
                  "start": {
                    "column": 42,
                    "line": 13
                  }
                }
              },
              "range": [
                320,
                325
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 13
                },
                "start": {
                  "column": 42,
                  "line": 13
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
                310,
                311
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 32,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              310,
              325
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 13
              },
              "start": {
                "column": 32,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        278,
        405
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
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
      "line": 3
    }
  },
  "hashbang": null
}
```
