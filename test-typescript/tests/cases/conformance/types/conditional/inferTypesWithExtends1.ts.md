__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    26,
    5718
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "range": [
          31,
          33
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
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
              57,
              58
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "range": [
            57,
            58
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "constraint": {
                  "type": "TSStringKeyword",
                  "range": [
                    84,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                },
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    74,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "out": false,
                "range": [
                  74,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "range": [
                68,
                90
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            67,
            91
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              114,
              115
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "range": [
                      141,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
                        "line": 4
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      131,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    131,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "range": [
                  125,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              124,
              148
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              171,
              176
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    152,
                    160
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
                "range": [
                  152,
                  160
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    162,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 4
                    },
                    "start": {
                      "column": 52,
                      "line": 4
                    }
                  }
                },
                "range": [
                  162,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 4
                  },
                  "start": {
                    "column": 52,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              151,
              164
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 4
              },
              "start": {
                "column": 41,
                "line": 4
              }
            }
          },
          "range": [
            114,
            176
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  95,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 42,
                    "line": 3
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
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
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
                  105,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              },
              "range": [
                105,
                106
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            94,
            107
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 3
            },
            "start": {
              "column": 41,
              "line": 3
            }
          }
        },
        "range": [
          57,
          176
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        },
        "range": [
          33,
          50
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
                  44,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                44,
                49
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
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
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              34,
              49
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        26,
        177
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 5
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
        "name": "X1_T1",
        "optional": false,
        "range": [
          184,
          189
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            194,
            201
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      196,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    196,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                195,
                200
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "range": [
            192,
            194
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        },
        "range": [
          192,
          201
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 7
          }
        }
      },
      "range": [
        179,
        202
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "name": "X1_T2",
        "optional": false,
        "range": [
          227,
          232
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            237,
            242
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      239,
                      240
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
                  "range": [
                    239,
                    240
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
              ],
              "range": [
                238,
                241
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 8
            },
            "start": {
              "column": 15,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "range": [
            235,
            237
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        },
        "range": [
          235,
          242
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 8
          },
          "start": {
            "column": 13,
            "line": 8
          }
        }
      },
      "range": [
        222,
        243
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1_T3",
        "optional": false,
        "range": [
          266,
          271
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            276,
            286
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "range": [
                    278,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 17,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                277,
                285
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "range": [
            274,
            276
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "range": [
          274,
          286
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 9
          }
        }
      },
      "range": [
        261,
        287
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "range": [
          324,
          326
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
              369,
              370
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "range": [
            369,
            370
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 13
                  },
                  "start": {
                    "column": 16,
                    "line": 13
                  }
                },
                "range": [
                  381,
                  405
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "range": [
                        399,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 13
                        },
                        "start": {
                          "column": 34,
                          "line": 13
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        389,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      389,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 13
                      },
                      "start": {
                        "column": 24,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    383,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                380,
                405
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 13
              },
              "start": {
                "column": 42,
                "line": 13
              }
            },
            "range": [
              407,
              414
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                410,
                414
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 13
                },
                "start": {
                  "column": 45,
                  "line": 13
                }
              }
            }
          },
          "range": [
            379,
            414
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 13
            },
            "start": {
              "column": 14,
              "line": 13
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
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
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              437,
              438
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  },
                  "range": [
                    449,
                    473
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "range": [
                          467,
                          473
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 14
                          },
                          "start": {
                            "column": 34,
                            "line": 14
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          457,
                          458
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
                      "out": false,
                      "range": [
                        457,
                        473
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 14
                        },
                        "start": {
                          "column": 24,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      451,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  448,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 14
                },
                "start": {
                  "column": 42,
                  "line": 14
                }
              },
              "range": [
                475,
                482
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  478,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 14
                  },
                  "start": {
                    "column": 45,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              447,
              482
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 14
              },
              "start": {
                "column": 14,
                "line": 14
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              505,
              510
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    486,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 14
                    },
                    "start": {
                      "column": 53,
                      "line": 14
                    }
                  }
                },
                "range": [
                  486,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 14
                  },
                  "start": {
                    "column": 53,
                    "line": 14
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
                    496,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 14
                    },
                    "start": {
                      "column": 63,
                      "line": 14
                    }
                  }
                },
                "range": [
                  496,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 14
                  },
                  "start": {
                    "column": 63,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              485,
              498
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 14
              },
              "start": {
                "column": 52,
                "line": 14
              }
            }
          },
          "range": [
            437,
            510
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  418,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 13
                  },
                  "start": {
                    "column": 53,
                    "line": 13
                  }
                }
              },
              "range": [
                418,
                426
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 13
                },
                "start": {
                  "column": 53,
                  "line": 13
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
                  428,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 13
                  },
                  "start": {
                    "column": 63,
                    "line": 13
                  }
                }
              },
              "range": [
                428,
                429
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 13
                },
                "start": {
                  "column": 63,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            417,
            430
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 13
            },
            "start": {
              "column": 52,
              "line": 13
            }
          }
        },
        "range": [
          369,
          510
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 12
          }
        },
        "range": [
          326,
          362
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      341,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 22,
                        "line": 12
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 26,
                        "line": 12
                      }
                    },
                    "range": [
                      345,
                      352
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          347,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 12
                          },
                          "start": {
                            "column": 28,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        347,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 28,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    338,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 19,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 12
                  },
                  "start": {
                    "column": 35,
                    "line": 12
                  }
                },
                "range": [
                  354,
                  361
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    357,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 12
                    },
                    "start": {
                      "column": 38,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                337,
                361
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 12
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
                327,
                328
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
            "out": false,
            "range": [
              327,
              361
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        319,
        511
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 15
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
        "name": "X2_T1",
        "optional": false,
        "range": [
          518,
          523
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            528,
            546
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    },
                    "range": [
                      531,
                      536
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          533,
                          536
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        533,
                        536
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    530,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 17
                  },
                  "start": {
                    "column": 25,
                    "line": 17
                  }
                },
                "range": [
                  538,
                  545
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    541,
                    545
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                }
              },
              "range": [
                529,
                545
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 17
            },
            "start": {
              "column": 15,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            526,
            528
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 17
            },
            "start": {
              "column": 13,
              "line": 17
            }
          }
        },
        "range": [
          526,
          546
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 17
          },
          "start": {
            "column": 13,
            "line": 17
          }
        }
      },
      "range": [
        513,
        547
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T2",
        "optional": false,
        "range": [
          572,
          577
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            582,
            598
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 18,
                        "line": 18
                      }
                    },
                    "range": [
                      585,
                      588
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          587,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 18
                          },
                          "start": {
                            "column": 20,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        587,
                        588
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 20,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    584,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 23,
                    "line": 18
                  }
                },
                "range": [
                  590,
                  597
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    593,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 18
                    },
                    "start": {
                      "column": 26,
                      "line": 18
                    }
                  }
                }
              },
              "range": [
                583,
                597
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
            },
            "start": {
              "column": 15,
              "line": 18
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            580,
            582
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 18
            },
            "start": {
              "column": 13,
              "line": 18
            }
          }
        },
        "range": [
          580,
          598
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 18
          },
          "start": {
            "column": 13,
            "line": 18
          }
        }
      },
      "range": [
        567,
        599
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T3",
        "optional": false,
        "range": [
          622,
          627
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            632,
            653
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    },
                    "range": [
                      635,
                      643
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        637,
                        643
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 19
                        },
                        "start": {
                          "column": 20,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    634,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 17,
                      "line": 19
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 19
                  },
                  "start": {
                    "column": 28,
                    "line": 19
                  }
                },
                "range": [
                  645,
                  652
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    648,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 19
                    },
                    "start": {
                      "column": 31,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                633,
                652
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 19
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 19
            },
            "start": {
              "column": 15,
              "line": 19
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            630,
            632
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 19
            },
            "start": {
              "column": 13,
              "line": 19
            }
          }
        },
        "range": [
          630,
          653
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 19
          }
        }
      },
      "range": [
        617,
        654
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "range": [
          694,
          696
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
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
              738,
              739
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "range": [
            738,
            739
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  752,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 23
                  },
                  "start": {
                    "column": 18,
                    "line": 23
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 23
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                },
                "range": [
                  756,
                  763
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      758,
                      761
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    758,
                    763
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                }
              },
              "range": [
                749,
                763
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 23
              },
              "start": {
                "column": 31,
                "line": 23
              }
            },
            "range": [
              765,
              792
            ],
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "constraint": {
                  "type": "TSStringKeyword",
                  "range": [
                    785,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 23
                    },
                    "start": {
                      "column": 51,
                      "line": 23
                    }
                  }
                },
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    775,
                    776
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 23
                    },
                    "start": {
                      "column": 41,
                      "line": 23
                    }
                  }
                },
                "out": false,
                "range": [
                  775,
                  791
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 23
                  },
                  "start": {
                    "column": 41,
                    "line": 23
                  }
                }
              },
              "range": [
                769,
                791
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 23
                },
                "start": {
                  "column": 35,
                  "line": 23
                }
              }
            }
          },
          "range": [
            748,
            792
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                815,
                816
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              815,
              816
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    829,
                    833
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 24
                    },
                    "start": {
                      "column": 18,
                      "line": 24
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 24
                    },
                    "start": {
                      "column": 22,
                      "line": 24
                    }
                  },
                  "range": [
                    833,
                    840
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        835,
                        838
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 24,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      835,
                      840
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  826,
                  840
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 24
                  },
                  "start": {
                    "column": 15,
                    "line": 24
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 24
                },
                "start": {
                  "column": 31,
                  "line": 24
                }
              },
              "range": [
                842,
                869
              ],
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "range": [
                      862,
                      868
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 24
                      },
                      "start": {
                        "column": 51,
                        "line": 24
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      852,
                      853
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 24
                      },
                      "start": {
                        "column": 41,
                        "line": 24
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    852,
                    868
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 24
                    },
                    "start": {
                      "column": 41,
                      "line": 24
                    }
                  }
                },
                "range": [
                  846,
                  868
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 24
                  },
                  "start": {
                    "column": 35,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              825,
              869
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 24
              },
              "start": {
                "column": 14,
                "line": 24
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              892,
              897
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    873,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 24
                    },
                    "start": {
                      "column": 62,
                      "line": 24
                    }
                  }
                },
                "range": [
                  873,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 24
                  },
                  "start": {
                    "column": 62,
                    "line": 24
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
                    883,
                    884
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 24
                    },
                    "start": {
                      "column": 72,
                      "line": 24
                    }
                  }
                },
                "range": [
                  883,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 24
                  },
                  "start": {
                    "column": 72,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              872,
              885
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 24
              },
              "start": {
                "column": 61,
                "line": 24
              }
            }
          },
          "range": [
            815,
            897
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  796,
                  804
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 23
                  },
                  "start": {
                    "column": 62,
                    "line": 23
                  }
                }
              },
              "range": [
                796,
                804
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 23
                },
                "start": {
                  "column": 62,
                  "line": 23
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
                  806,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 23
                  },
                  "start": {
                    "column": 72,
                    "line": 23
                  }
                }
              },
              "range": [
                806,
                807
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 23
                },
                "start": {
                  "column": 72,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            795,
            808
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 23
            },
            "start": {
              "column": 61,
              "line": 23
            }
          }
        },
        "range": [
          738,
          897
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 25
          },
          "start": {
            "column": 4,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 22
          }
        },
        "range": [
          696,
          731
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      711,
                      715
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 22
                      },
                      "start": {
                        "column": 22,
                        "line": 22
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 22
                      },
                      "start": {
                        "column": 26,
                        "line": 22
                      }
                    },
                    "range": [
                      715,
                      722
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          717,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 22
                          },
                          "start": {
                            "column": 28,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        717,
                        722
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 22
                        },
                        "start": {
                          "column": 28,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    708,
                    722
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 22
                    },
                    "start": {
                      "column": 19,
                      "line": 22
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 22
                  },
                  "start": {
                    "column": 35,
                    "line": 22
                  }
                },
                "range": [
                  724,
                  730
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    727,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 22
                    },
                    "start": {
                      "column": 38,
                      "line": 22
                    }
                  }
                }
              },
              "range": [
                707,
                730
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 22
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
                697,
                698
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
              697,
              730
            ],
            "loc": {
              "end": {
                "column": 41,
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
        689,
        898
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 25
        },
        "start": {
          "column": 0,
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
        "name": "X3_T1",
        "optional": false,
        "range": [
          905,
          910
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            915,
            926
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 27
                  },
                  "start": {
                    "column": 19,
                    "line": 27
                  }
                },
                "range": [
                  919,
                  925
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      922,
                      925
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 27
                      },
                      "start": {
                        "column": 22,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    922,
                    925
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 27
                    },
                    "start": {
                      "column": 22,
                      "line": 27
                    }
                  }
                }
              },
              "range": [
                916,
                925
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 27
                },
                "start": {
                  "column": 16,
                  "line": 27
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 27
            },
            "start": {
              "column": 15,
              "line": 27
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            913,
            915
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 27
            },
            "start": {
              "column": 13,
              "line": 27
            }
          }
        },
        "range": [
          913,
          926
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 27
          },
          "start": {
            "column": 13,
            "line": 27
          }
        }
      },
      "range": [
        900,
        927
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 27
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
        "name": "X3_T2",
        "optional": false,
        "range": [
          952,
          957
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            962,
            971
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
                    "line": 28
                  }
                },
                "range": [
                  966,
                  970
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      969,
                      970
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 28
                      },
                      "start": {
                        "column": 22,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    969,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 28
                    },
                    "start": {
                      "column": 22,
                      "line": 28
                    }
                  }
                }
              },
              "range": [
                963,
                970
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 28
            },
            "start": {
              "column": 15,
              "line": 28
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            960,
            962
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 28
            },
            "start": {
              "column": 13,
              "line": 28
            }
          }
        },
        "range": [
          960,
          971
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 28
          },
          "start": {
            "column": 13,
            "line": 28
          }
        }
      },
      "range": [
        947,
        972
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 28
        },
        "start": {
          "column": 0,
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
        "name": "X3_T3",
        "optional": false,
        "range": [
          995,
          1000
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1005,
            1019
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 29
                  },
                  "start": {
                    "column": 19,
                    "line": 29
                  }
                },
                "range": [
                  1009,
                  1018
                ],
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "range": [
                    1012,
                    1018
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 29
                    },
                    "start": {
                      "column": 22,
                      "line": 29
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
                  "column": 28,
                  "line": 29
                },
                "start": {
                  "column": 16,
                  "line": 29
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 29
            },
            "start": {
              "column": 15,
              "line": 29
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            1003,
            1005
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 29
            },
            "start": {
              "column": 13,
              "line": 29
            }
          }
        },
        "range": [
          1003,
          1019
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 29
          },
          "start": {
            "column": 13,
            "line": 29
          }
        }
      },
      "range": [
        990,
        1020
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4",
        "optional": false,
        "range": [
          1062,
          1064
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
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
              1110,
              1111
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "range": [
            1110,
            1111
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        },
        "extendsType": {
          "type": "TSConstructorType",
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  1128,
                  1132
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 33
                  },
                  "start": {
                    "column": 22,
                    "line": 33
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 33
                  },
                  "start": {
                    "column": 26,
                    "line": 33
                  }
                },
                "range": [
                  1132,
                  1139
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1134,
                      1137
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 33
                      },
                      "start": {
                        "column": 28,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    1134,
                    1139
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 33
                    },
                    "start": {
                      "column": 28,
                      "line": 33
                    }
                  }
                }
              },
              "range": [
                1125,
                1139
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 33
                },
                "start": {
                  "column": 19,
                  "line": 33
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 33
              },
              "start": {
                "column": 35,
                "line": 33
              }
            },
            "range": [
              1141,
              1175
            ],
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "constraint": {
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
                          1163,
                          1164
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 33
                          },
                          "start": {
                            "column": 57,
                            "line": 33
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
                            "column": 66,
                            "line": 33
                          },
                          "start": {
                            "column": 58,
                            "line": 33
                          }
                        },
                        "range": [
                          1164,
                          1172
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1166,
                            1172
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 33
                            },
                            "start": {
                              "column": 60,
                              "line": 33
                            }
                          }
                        }
                      },
                      "range": [
                        1163,
                        1172
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 33
                        },
                        "start": {
                          "column": 57,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    1161,
                    1174
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 33
                    },
                    "start": {
                      "column": 55,
                      "line": 33
                    }
                  }
                },
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    1151,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 33
                    },
                    "start": {
                      "column": 45,
                      "line": 33
                    }
                  }
                },
                "out": false,
                "range": [
                  1151,
                  1174
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 33
                  },
                  "start": {
                    "column": 45,
                    "line": 33
                  }
                }
              },
              "range": [
                1145,
                1174
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 33
                },
                "start": {
                  "column": 39,
                  "line": 33
                }
              }
            }
          },
          "range": [
            1120,
            1175
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1198,
                1199
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              1198,
              1199
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "extendsType": {
            "type": "TSConstructorType",
            "abstract": false,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    1216,
                    1220
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 34
                    },
                    "start": {
                      "column": 22,
                      "line": 34
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 34
                    },
                    "start": {
                      "column": 26,
                      "line": 34
                    }
                  },
                  "range": [
                    1220,
                    1227
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1222,
                        1225
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 34
                        },
                        "start": {
                          "column": 28,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1222,
                      1227
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 34
                      },
                      "start": {
                        "column": 28,
                        "line": 34
                      }
                    }
                  }
                },
                "range": [
                  1213,
                  1227
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 34
                  },
                  "start": {
                    "column": 19,
                    "line": 34
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 34
                },
                "start": {
                  "column": 35,
                  "line": 34
                }
              },
              "range": [
                1229,
                1263
              ],
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
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
                            1251,
                            1252
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 34
                            },
                            "start": {
                              "column": 57,
                              "line": 34
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
                              "column": 66,
                              "line": 34
                            },
                            "start": {
                              "column": 58,
                              "line": 34
                            }
                          },
                          "range": [
                            1252,
                            1260
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1254,
                              1260
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 34
                              },
                              "start": {
                                "column": 60,
                                "line": 34
                              }
                            }
                          }
                        },
                        "range": [
                          1251,
                          1260
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 34
                          },
                          "start": {
                            "column": 57,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "range": [
                      1249,
                      1262
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 34
                      },
                      "start": {
                        "column": 55,
                        "line": 34
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1239,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 34
                      },
                      "start": {
                        "column": 45,
                        "line": 34
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1239,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 34
                    },
                    "start": {
                      "column": 45,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1233,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 34
                  },
                  "start": {
                    "column": 39,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              1208,
              1263
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 34
              },
              "start": {
                "column": 14,
                "line": 34
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1286,
              1291
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    1267,
                    1275
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 34
                    },
                    "start": {
                      "column": 73,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1267,
                  1275
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 34
                  },
                  "start": {
                    "column": 73,
                    "line": 34
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
                    1277,
                    1278
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 34
                    },
                    "start": {
                      "column": 83,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1277,
                  1278
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 34
                  },
                  "start": {
                    "column": 83,
                    "line": 34
                  }
                }
              }
            ],
            "range": [
              1266,
              1279
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 34
              },
              "start": {
                "column": 72,
                "line": 34
              }
            }
          },
          "range": [
            1198,
            1291
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1179,
                  1187
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 33
                  },
                  "start": {
                    "column": 73,
                    "line": 33
                  }
                }
              },
              "range": [
                1179,
                1187
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 33
                },
                "start": {
                  "column": 73,
                  "line": 33
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
                  1189,
                  1190
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 33
                  },
                  "start": {
                    "column": 83,
                    "line": 33
                  }
                }
              },
              "range": [
                1189,
                1190
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 33
                },
                "start": {
                  "column": 83,
                  "line": 33
                }
              }
            }
          ],
          "range": [
            1178,
            1191
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 33
            },
            "start": {
              "column": 72,
              "line": 33
            }
          }
        },
        "range": [
          1110,
          1291
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 35
          },
          "start": {
            "column": 4,
            "line": 33
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 32
          }
        },
        "range": [
          1064,
          1103
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      1083,
                      1087
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 32
                      },
                      "start": {
                        "column": 26,
                        "line": 32
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 32
                      },
                      "start": {
                        "column": 30,
                        "line": 32
                      }
                    },
                    "range": [
                      1087,
                      1094
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1089,
                          1092
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 32
                          },
                          "start": {
                            "column": 32,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        1089,
                        1094
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 32
                        },
                        "start": {
                          "column": 32,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    1080,
                    1094
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 32
                    },
                    "start": {
                      "column": 23,
                      "line": 32
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 32
                  },
                  "start": {
                    "column": 39,
                    "line": 32
                  }
                },
                "range": [
                  1096,
                  1102
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1099,
                    1102
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 32
                    },
                    "start": {
                      "column": 42,
                      "line": 32
                    }
                  }
                }
              },
              "range": [
                1075,
                1102
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 32
                },
                "start": {
                  "column": 18,
                  "line": 32
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
                1065,
                1066
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              1065,
              1102
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 32
              },
              "start": {
                "column": 8,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        1057,
        1292
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T1",
        "optional": false,
        "range": [
          1299,
          1304
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1309,
            1331
          ],
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 37
                  },
                  "start": {
                    "column": 23,
                    "line": 37
                  }
                },
                "range": [
                  1317,
                  1330
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
                          1322,
                          1323
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 37
                          },
                          "start": {
                            "column": 28,
                            "line": 37
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
                            "column": 34,
                            "line": 37
                          },
                          "start": {
                            "column": 29,
                            "line": 37
                          }
                        },
                        "range": [
                          1323,
                          1328
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"a\"",
                            "value": "a",
                            "range": [
                              1325,
                              1328
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 37
                              },
                              "start": {
                                "column": 31,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            1325,
                            1328
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 37
                            },
                            "start": {
                              "column": 31,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        1322,
                        1328
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 37
                        },
                        "start": {
                          "column": 28,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    1320,
                    1330
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 37
                    },
                    "start": {
                      "column": 26,
                      "line": 37
                    }
                  }
                }
              },
              "range": [
                1310,
                1330
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 37
                },
                "start": {
                  "column": 16,
                  "line": 37
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 37
            },
            "start": {
              "column": 15,
              "line": 37
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "range": [
            1307,
            1309
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 37
            },
            "start": {
              "column": 13,
              "line": 37
            }
          }
        },
        "range": [
          1307,
          1331
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 37
          },
          "start": {
            "column": 13,
            "line": 37
          }
        }
      },
      "range": [
        1294,
        1332
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T2",
        "optional": false,
        "range": [
          1364,
          1369
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1374,
            1394
          ],
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 38
                  },
                  "start": {
                    "column": 23,
                    "line": 38
                  }
                },
                "range": [
                  1382,
                  1393
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
                          1387,
                          1388
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 38
                          },
                          "start": {
                            "column": 28,
                            "line": 38
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
                            "column": 32,
                            "line": 38
                          },
                          "start": {
                            "column": 29,
                            "line": 38
                          }
                        },
                        "range": [
                          1388,
                          1391
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1390,
                              1391
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 38
                              },
                              "start": {
                                "column": 31,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            1390,
                            1391
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 38
                            },
                            "start": {
                              "column": 31,
                              "line": 38
                            }
                          }
                        }
                      },
                      "range": [
                        1387,
                        1391
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 38
                        },
                        "start": {
                          "column": 28,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "range": [
                    1385,
                    1393
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 38
                    },
                    "start": {
                      "column": 26,
                      "line": 38
                    }
                  }
                }
              },
              "range": [
                1375,
                1393
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 38
                },
                "start": {
                  "column": 16,
                  "line": 38
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 38
            },
            "start": {
              "column": 15,
              "line": 38
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "range": [
            1372,
            1374
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 38
            },
            "start": {
              "column": 13,
              "line": 38
            }
          }
        },
        "range": [
          1372,
          1394
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 38
          },
          "start": {
            "column": 13,
            "line": 38
          }
        }
      },
      "range": [
        1359,
        1395
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T3",
        "optional": false,
        "range": [
          1425,
          1430
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1435,
            1460
          ],
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 39
                  },
                  "start": {
                    "column": 23,
                    "line": 39
                  }
                },
                "range": [
                  1443,
                  1459
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
                          1448,
                          1449
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 39
                          },
                          "start": {
                            "column": 28,
                            "line": 39
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
                            "column": 37,
                            "line": 39
                          },
                          "start": {
                            "column": 29,
                            "line": 39
                          }
                        },
                        "range": [
                          1449,
                          1457
                        ],
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "range": [
                            1451,
                            1457
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 39
                            },
                            "start": {
                              "column": 31,
                              "line": 39
                            }
                          }
                        }
                      },
                      "range": [
                        1448,
                        1457
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 39
                        },
                        "start": {
                          "column": 28,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "range": [
                    1446,
                    1459
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 39
                    },
                    "start": {
                      "column": 26,
                      "line": 39
                    }
                  }
                }
              },
              "range": [
                1436,
                1459
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 39
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 39
            },
            "start": {
              "column": 15,
              "line": 39
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "range": [
            1433,
            1435
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 39
            },
            "start": {
              "column": 13,
              "line": 39
            }
          }
        },
        "range": [
          1433,
          1460
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 39
          },
          "start": {
            "column": 13,
            "line": 39
          }
        }
      },
      "range": [
        1420,
        1461
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5",
        "optional": false,
        "range": [
          1503,
          1505
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 42
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
              1515,
              1516
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "range": [
            1515,
            1516
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1532,
              1556
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      1549,
                      1555
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 43
                      },
                      "start": {
                        "column": 38,
                        "line": 43
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1539,
                      1540
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 43
                      },
                      "start": {
                        "column": 28,
                        "line": 43
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1539,
                    1555
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 43
                    },
                    "start": {
                      "column": 28,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1533,
                  1555
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 43
                  },
                  "start": {
                    "column": 22,
                    "line": 43
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 43
              },
              "start": {
                "column": 21,
                "line": 43
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              1525,
              1532
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 43
              },
              "start": {
                "column": 14,
                "line": 43
              }
            }
          },
          "range": [
            1525,
            1556
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 43
            },
            "start": {
              "column": 14,
              "line": 43
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1579,
                1580
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              1579,
              1580
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1596,
                1620
              ],
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1613,
                        1619
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 44
                        },
                        "start": {
                          "column": 38,
                          "line": 44
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1603,
                        1604
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 44
                        },
                        "start": {
                          "column": 28,
                          "line": 44
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1603,
                      1619
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 44
                      },
                      "start": {
                        "column": 28,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1597,
                    1619
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 44
                    },
                    "start": {
                      "column": 22,
                      "line": 44
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 44
                },
                "start": {
                  "column": 21,
                  "line": 44
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                1589,
                1596
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 44
                },
                "start": {
                  "column": 14,
                  "line": 44
                }
              }
            },
            "range": [
              1589,
              1620
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1643,
              1648
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    1624,
                    1632
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 44
                    },
                    "start": {
                      "column": 49,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1624,
                  1632
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 44
                  },
                  "start": {
                    "column": 49,
                    "line": 44
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
                    1634,
                    1635
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 44
                    },
                    "start": {
                      "column": 59,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1634,
                  1635
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 44
                  },
                  "start": {
                    "column": 59,
                    "line": 44
                  }
                }
              }
            ],
            "range": [
              1623,
              1636
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 44
              },
              "start": {
                "column": 48,
                "line": 44
              }
            }
          },
          "range": [
            1579,
            1648
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1560,
                  1568
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 43
                  },
                  "start": {
                    "column": 49,
                    "line": 43
                  }
                }
              },
              "range": [
                1560,
                1568
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 43
                },
                "start": {
                  "column": 49,
                  "line": 43
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
                  1570,
                  1571
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 43
                  },
                  "start": {
                    "column": 59,
                    "line": 43
                  }
                }
              },
              "range": [
                1570,
                1571
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 43
                },
                "start": {
                  "column": 59,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            1559,
            1572
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 43
            },
            "start": {
              "column": 48,
              "line": 43
            }
          }
        },
        "range": [
          1515,
          1648
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 45
          },
          "start": {
            "column": 4,
            "line": 43
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 42
          },
          "start": {
            "column": 7,
            "line": 42
          }
        },
        "range": [
          1505,
          1508
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
                1506,
                1507
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              1506,
              1507
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 42
              },
              "start": {
                "column": 8,
                "line": 42
              }
            }
          }
        ]
      },
      "range": [
        1498,
        1649
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T1",
        "optional": false,
        "range": [
          1656,
          1661
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 47
          },
          "start": {
            "column": 5,
            "line": 47
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1666,
            1686
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1674,
                  1685
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"a\"",
                          "value": "a",
                          "range": [
                            1675,
                            1678
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 47
                            },
                            "start": {
                              "column": 24,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1675,
                          1678
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 47
                          },
                          "start": {
                            "column": 24,
                            "line": 47
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"b\"",
                          "value": "b",
                          "range": [
                            1681,
                            1684
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 47
                            },
                            "start": {
                              "column": 30,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1681,
                          1684
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 47
                          },
                          "start": {
                            "column": 30,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "range": [
                      1675,
                      1684
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 47
                      },
                      "start": {
                        "column": 24,
                        "line": 47
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 47
                  },
                  "start": {
                    "column": 23,
                    "line": 47
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  1667,
                  1674
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 47
                  },
                  "start": {
                    "column": 16,
                    "line": 47
                  }
                }
              },
              "range": [
                1667,
                1685
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 47
                },
                "start": {
                  "column": 16,
                  "line": 47
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 47
            },
            "start": {
              "column": 15,
              "line": 47
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "range": [
            1664,
            1666
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 47
            },
            "start": {
              "column": 13,
              "line": 47
            }
          }
        },
        "range": [
          1664,
          1686
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 47
          },
          "start": {
            "column": 13,
            "line": 47
          }
        }
      },
      "range": [
        1651,
        1687
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T2",
        "optional": false,
        "range": [
          1718,
          1723
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 48
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1728,
            1744
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1736,
                  1743
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1737,
                            1738
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 48
                            },
                            "start": {
                              "column": 24,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          1737,
                          1738
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 48
                          },
                          "start": {
                            "column": 24,
                            "line": 48
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            1741,
                            1742
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 48
                            },
                            "start": {
                              "column": 28,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          1741,
                          1742
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 48
                          },
                          "start": {
                            "column": 28,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "range": [
                      1737,
                      1742
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 48
                      },
                      "start": {
                        "column": 24,
                        "line": 48
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 48
                  },
                  "start": {
                    "column": 23,
                    "line": 48
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  1729,
                  1736
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 48
                  },
                  "start": {
                    "column": 16,
                    "line": 48
                  }
                }
              },
              "range": [
                1729,
                1743
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 48
                },
                "start": {
                  "column": 16,
                  "line": 48
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 48
            },
            "start": {
              "column": 15,
              "line": 48
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "range": [
            1726,
            1728
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 48
            },
            "start": {
              "column": 13,
              "line": 48
            }
          }
        },
        "range": [
          1726,
          1744
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 48
          },
          "start": {
            "column": 13,
            "line": 48
          }
        }
      },
      "range": [
        1713,
        1745
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T3",
        "optional": false,
        "range": [
          1772,
          1777
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 49
          },
          "start": {
            "column": 5,
            "line": 49
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1782,
            1800
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1790,
                  1799
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "range": [
                            1791,
                            1793
                          ],
                          "bigint": "1",
                          "raw": "1n",
                          "value": null,
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 49
                            },
                            "start": {
                              "column": 24,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1791,
                          1793
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 49
                          },
                          "start": {
                            "column": 24,
                            "line": 49
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "range": [
                            1796,
                            1798
                          ],
                          "bigint": "2",
                          "raw": "2n",
                          "value": null,
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 49
                            },
                            "start": {
                              "column": 29,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1796,
                          1798
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 49
                          },
                          "start": {
                            "column": 29,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "range": [
                      1791,
                      1798
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 49
                      },
                      "start": {
                        "column": 24,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 49
                  },
                  "start": {
                    "column": 23,
                    "line": 49
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  1783,
                  1790
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 49
                  },
                  "start": {
                    "column": 16,
                    "line": 49
                  }
                }
              },
              "range": [
                1783,
                1799
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 49
                },
                "start": {
                  "column": 16,
                  "line": 49
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 49
            },
            "start": {
              "column": 15,
              "line": 49
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "range": [
            1780,
            1782
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 49
            },
            "start": {
              "column": 13,
              "line": 49
            }
          }
        },
        "range": [
          1780,
          1800
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 49
          },
          "start": {
            "column": 13,
            "line": 49
          }
        }
      },
      "range": [
        1767,
        1801
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6",
        "optional": false,
        "range": [
          1843,
          1845
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
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
              1855,
              1856
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "range": [
            1855,
            1856
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        },
        "extendsType": {
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
                  1867,
                  1868
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 53
                  },
                  "start": {
                    "column": 16,
                    "line": 53
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
                    "column": 41,
                    "line": 53
                  },
                  "start": {
                    "column": 17,
                    "line": 53
                  }
                },
                "range": [
                  1868,
                  1892
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "range": [
                        1886,
                        1892
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 53
                        },
                        "start": {
                          "column": 35,
                          "line": 53
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1876,
                        1877
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 53
                        },
                        "start": {
                          "column": 25,
                          "line": 53
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1876,
                      1892
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 53
                      },
                      "start": {
                        "column": 25,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1870,
                    1892
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 53
                    },
                    "start": {
                      "column": 19,
                      "line": 53
                    }
                  }
                }
              },
              "range": [
                1867,
                1892
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 53
                },
                "start": {
                  "column": 16,
                  "line": 53
                }
              }
            }
          ],
          "range": [
            1865,
            1894
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 53
            },
            "start": {
              "column": 14,
              "line": 53
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1917,
                1918
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              1917,
              1918
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "extendsType": {
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
                    1929,
                    1930
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 54
                    },
                    "start": {
                      "column": 16,
                      "line": 54
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
                      "column": 41,
                      "line": 54
                    },
                    "start": {
                      "column": 17,
                      "line": 54
                    }
                  },
                  "range": [
                    1930,
                    1954
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1948,
                          1954
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 54
                          },
                          "start": {
                            "column": 35,
                            "line": 54
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          1938,
                          1939
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 54
                          },
                          "start": {
                            "column": 25,
                            "line": 54
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1938,
                        1954
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 54
                        },
                        "start": {
                          "column": 25,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1932,
                      1954
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 54
                      },
                      "start": {
                        "column": 19,
                        "line": 54
                      }
                    }
                  }
                },
                "range": [
                  1929,
                  1954
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 54
                  },
                  "start": {
                    "column": 16,
                    "line": 54
                  }
                }
              }
            ],
            "range": [
              1927,
              1956
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 54
              },
              "start": {
                "column": 14,
                "line": 54
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1979,
              1984
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    1960,
                    1968
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 54
                    },
                    "start": {
                      "column": 47,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1960,
                  1968
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 54
                  },
                  "start": {
                    "column": 47,
                    "line": 54
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
                    1970,
                    1971
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 54
                    },
                    "start": {
                      "column": 57,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1970,
                  1971
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 54
                  },
                  "start": {
                    "column": 57,
                    "line": 54
                  }
                }
              }
            ],
            "range": [
              1959,
              1972
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 54
              },
              "start": {
                "column": 46,
                "line": 54
              }
            }
          },
          "range": [
            1917,
            1984
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 55
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1898,
                  1906
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 53
                  },
                  "start": {
                    "column": 47,
                    "line": 53
                  }
                }
              },
              "range": [
                1898,
                1906
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 53
                },
                "start": {
                  "column": 47,
                  "line": 53
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
                  1908,
                  1909
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 53
                  },
                  "start": {
                    "column": 57,
                    "line": 53
                  }
                }
              },
              "range": [
                1908,
                1909
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 53
                },
                "start": {
                  "column": 57,
                  "line": 53
                }
              }
            }
          ],
          "range": [
            1897,
            1910
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 53
            },
            "start": {
              "column": 46,
              "line": 53
            }
          }
        },
        "range": [
          1855,
          1984
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 55
          },
          "start": {
            "column": 4,
            "line": 53
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 52
          },
          "start": {
            "column": 7,
            "line": 52
          }
        },
        "range": [
          1845,
          1848
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
                1846,
                1847
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 52
                },
                "start": {
                  "column": 8,
                  "line": 52
                }
              }
            },
            "out": false,
            "range": [
              1846,
              1847
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 52
              },
              "start": {
                "column": 8,
                "line": 52
              }
            }
          }
        ]
      },
      "range": [
        1838,
        1985
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 55
        },
        "start": {
          "column": 0,
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
        "name": "X6_T1",
        "optional": false,
        "range": [
          1992,
          1997
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 57
          },
          "start": {
            "column": 5,
            "line": 57
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2002,
            2014
          ],
          "params": [
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
                      2005,
                      2006
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 57
                      },
                      "start": {
                        "column": 18,
                        "line": 57
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
                        "column": 24,
                        "line": 57
                      },
                      "start": {
                        "column": 19,
                        "line": 57
                      }
                    },
                    "range": [
                      2006,
                      2011
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          2008,
                          2011
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 57
                          },
                          "start": {
                            "column": 21,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        2008,
                        2011
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 57
                        },
                        "start": {
                          "column": 21,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    2005,
                    2011
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 57
                    },
                    "start": {
                      "column": 18,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                2003,
                2013
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 57
                },
                "start": {
                  "column": 16,
                  "line": 57
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 57
            },
            "start": {
              "column": 15,
              "line": 57
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "range": [
            2000,
            2002
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 57
            },
            "start": {
              "column": 13,
              "line": 57
            }
          }
        },
        "range": [
          2000,
          2014
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 57
          },
          "start": {
            "column": 13,
            "line": 57
          }
        }
      },
      "range": [
        1987,
        2015
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6_T2",
        "optional": false,
        "range": [
          2040,
          2045
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 58
          },
          "start": {
            "column": 5,
            "line": 58
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2050,
            2060
          ],
          "params": [
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
                      2053,
                      2054
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 18,
                        "line": 58
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
                        "column": 22,
                        "line": 58
                      },
                      "start": {
                        "column": 19,
                        "line": 58
                      }
                    },
                    "range": [
                      2054,
                      2057
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2056,
                          2057
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 58
                          },
                          "start": {
                            "column": 21,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        2056,
                        2057
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 58
                        },
                        "start": {
                          "column": 21,
                          "line": 58
                        }
                      }
                    }
                  },
                  "range": [
                    2053,
                    2057
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 58
                    },
                    "start": {
                      "column": 18,
                      "line": 58
                    }
                  }
                }
              ],
              "range": [
                2051,
                2059
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 58
                },
                "start": {
                  "column": 16,
                  "line": 58
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 58
            },
            "start": {
              "column": 15,
              "line": 58
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "range": [
            2048,
            2050
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 58
            },
            "start": {
              "column": 13,
              "line": 58
            }
          }
        },
        "range": [
          2048,
          2060
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 58
          },
          "start": {
            "column": 13,
            "line": 58
          }
        }
      },
      "range": [
        2035,
        2061
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 58
        },
        "start": {
          "column": 0,
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
        "name": "X6_T3",
        "optional": false,
        "range": [
          2084,
          2089
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 59
          },
          "start": {
            "column": 5,
            "line": 59
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2094,
            2109
          ],
          "params": [
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
                      2097,
                      2098
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 59
                      },
                      "start": {
                        "column": 18,
                        "line": 59
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
                        "column": 27,
                        "line": 59
                      },
                      "start": {
                        "column": 19,
                        "line": 59
                      }
                    },
                    "range": [
                      2098,
                      2106
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        2100,
                        2106
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 59
                        },
                        "start": {
                          "column": 21,
                          "line": 59
                        }
                      }
                    }
                  },
                  "range": [
                    2097,
                    2106
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 59
                    },
                    "start": {
                      "column": 18,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                2095,
                2108
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 59
                },
                "start": {
                  "column": 16,
                  "line": 59
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 59
            },
            "start": {
              "column": 15,
              "line": 59
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "range": [
            2092,
            2094
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 59
            },
            "start": {
              "column": 13,
              "line": 59
            }
          }
        },
        "range": [
          2092,
          2109
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 59
          },
          "start": {
            "column": 13,
            "line": 59
          }
        }
      },
      "range": [
        2079,
        2110
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7",
        "optional": false,
        "range": [
          2162,
          2164
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 62
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
              2174,
              2175
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          "range": [
            2174,
            2175
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 63
            }
          }
        },
        "extendsType": {
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
                  2186,
                  2187
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 63
                  },
                  "start": {
                    "column": 16,
                    "line": 63
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
                    "column": 41,
                    "line": 63
                  },
                  "start": {
                    "column": 17,
                    "line": 63
                  }
                },
                "range": [
                  2187,
                  2211
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "range": [
                        2205,
                        2211
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 63
                        },
                        "start": {
                          "column": 35,
                          "line": 63
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        2195,
                        2196
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 63
                        },
                        "start": {
                          "column": 25,
                          "line": 63
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2195,
                      2211
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 63
                      },
                      "start": {
                        "column": 25,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    2189,
                    2211
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 63
                    },
                    "start": {
                      "column": 19,
                      "line": 63
                    }
                  }
                }
              },
              "range": [
                2186,
                2212
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 63
                },
                "start": {
                  "column": 16,
                  "line": 63
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  2213,
                  2214
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 63
                  },
                  "start": {
                    "column": 43,
                    "line": 63
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
                    "column": 68,
                    "line": 63
                  },
                  "start": {
                    "column": 44,
                    "line": 63
                  }
                },
                "range": [
                  2214,
                  2238
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "range": [
                        2232,
                        2238
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 63
                        },
                        "start": {
                          "column": 62,
                          "line": 63
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        2222,
                        2223
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 63
                        },
                        "start": {
                          "column": 52,
                          "line": 63
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2222,
                      2238
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 63
                      },
                      "start": {
                        "column": 52,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    2216,
                    2238
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 63
                    },
                    "start": {
                      "column": 46,
                      "line": 63
                    }
                  }
                }
              },
              "range": [
                2213,
                2238
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 63
                },
                "start": {
                  "column": 43,
                  "line": 63
                }
              }
            }
          ],
          "range": [
            2184,
            2240
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 63
            },
            "start": {
              "column": 14,
              "line": 63
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                2263,
                2264
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              2263,
              2264
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          "extendsType": {
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
                    2275,
                    2276
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 64
                    },
                    "start": {
                      "column": 16,
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
                      "column": 41,
                      "line": 64
                    },
                    "start": {
                      "column": 17,
                      "line": 64
                    }
                  },
                  "range": [
                    2276,
                    2300
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2294,
                          2300
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 64
                          },
                          "start": {
                            "column": 35,
                            "line": 64
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          2284,
                          2285
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 64
                          },
                          "start": {
                            "column": 25,
                            "line": 64
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2284,
                        2300
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 64
                        },
                        "start": {
                          "column": 25,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      2278,
                      2300
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 64
                      },
                      "start": {
                        "column": 19,
                        "line": 64
                      }
                    }
                  }
                },
                "range": [
                  2275,
                  2301
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 64
                  },
                  "start": {
                    "column": 16,
                    "line": 64
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    2302,
                    2303
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 64
                    },
                    "start": {
                      "column": 43,
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
                      "column": 68,
                      "line": 64
                    },
                    "start": {
                      "column": 44,
                      "line": 64
                    }
                  },
                  "range": [
                    2303,
                    2327
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2321,
                          2327
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 64
                          },
                          "start": {
                            "column": 62,
                            "line": 64
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          2311,
                          2312
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 64
                          },
                          "start": {
                            "column": 52,
                            "line": 64
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2311,
                        2327
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 64
                        },
                        "start": {
                          "column": 52,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      2305,
                      2327
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
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
                  2302,
                  2327
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 64
                  },
                  "start": {
                    "column": 43,
                    "line": 64
                  }
                }
              }
            ],
            "range": [
              2273,
              2329
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 64
              },
              "start": {
                "column": 14,
                "line": 64
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              2352,
              2357
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    2333,
                    2341
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 64
                    },
                    "start": {
                      "column": 74,
                      "line": 64
                    }
                  }
                },
                "range": [
                  2333,
                  2341
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 64
                  },
                  "start": {
                    "column": 74,
                    "line": 64
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
                    2343,
                    2344
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 64
                    },
                    "start": {
                      "column": 84,
                      "line": 64
                    }
                  }
                },
                "range": [
                  2343,
                  2344
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 64
                  },
                  "start": {
                    "column": 84,
                    "line": 64
                  }
                }
              }
            ],
            "range": [
              2332,
              2345
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 64
              },
              "start": {
                "column": 73,
                "line": 64
              }
            }
          },
          "range": [
            2263,
            2357
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 64
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  2244,
                  2252
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 63
                  },
                  "start": {
                    "column": 74,
                    "line": 63
                  }
                }
              },
              "range": [
                2244,
                2252
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 63
                },
                "start": {
                  "column": 74,
                  "line": 63
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
                  2254,
                  2255
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 63
                  },
                  "start": {
                    "column": 84,
                    "line": 63
                  }
                }
              },
              "range": [
                2254,
                2255
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 63
                },
                "start": {
                  "column": 84,
                  "line": 63
                }
              }
            }
          ],
          "range": [
            2243,
            2256
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 63
            },
            "start": {
              "column": 73,
              "line": 63
            }
          }
        },
        "range": [
          2174,
          2357
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 65
          },
          "start": {
            "column": 4,
            "line": 63
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 62
          },
          "start": {
            "column": 7,
            "line": 62
          }
        },
        "range": [
          2164,
          2167
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
                2165,
                2166
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 62
                },
                "start": {
                  "column": 8,
                  "line": 62
                }
              }
            },
            "out": false,
            "range": [
              2165,
              2166
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 62
              },
              "start": {
                "column": 8,
                "line": 62
              }
            }
          }
        ]
      },
      "range": [
        2157,
        2358
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T1",
        "optional": false,
        "range": [
          2365,
          2370
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 67
          },
          "start": {
            "column": 5,
            "line": 67
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2375,
            2395
          ],
          "params": [
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
                      2378,
                      2379
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 67
                      },
                      "start": {
                        "column": 18,
                        "line": 67
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
                        "column": 24,
                        "line": 67
                      },
                      "start": {
                        "column": 19,
                        "line": 67
                      }
                    },
                    "range": [
                      2379,
                      2384
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          2381,
                          2384
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 67
                          },
                          "start": {
                            "column": 21,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        2381,
                        2384
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 67
                        },
                        "start": {
                          "column": 21,
                          "line": 67
                        }
                      }
                    }
                  },
                  "range": [
                    2378,
                    2385
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 67
                    },
                    "start": {
                      "column": 18,
                      "line": 67
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2386,
                      2387
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 67
                      },
                      "start": {
                        "column": 26,
                        "line": 67
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
                        "column": 32,
                        "line": 67
                      },
                      "start": {
                        "column": 27,
                        "line": 67
                      }
                    },
                    "range": [
                      2387,
                      2392
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"b\"",
                        "value": "b",
                        "range": [
                          2389,
                          2392
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 67
                          },
                          "start": {
                            "column": 29,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        2389,
                        2392
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 67
                        },
                        "start": {
                          "column": 29,
                          "line": 67
                        }
                      }
                    }
                  },
                  "range": [
                    2386,
                    2392
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 67
                    },
                    "start": {
                      "column": 26,
                      "line": 67
                    }
                  }
                }
              ],
              "range": [
                2376,
                2394
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 67
                },
                "start": {
                  "column": 16,
                  "line": 67
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 67
            },
            "start": {
              "column": 15,
              "line": 67
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "range": [
            2373,
            2375
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 67
            },
            "start": {
              "column": 13,
              "line": 67
            }
          }
        },
        "range": [
          2373,
          2395
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 67
          },
          "start": {
            "column": 13,
            "line": 67
          }
        }
      },
      "range": [
        2360,
        2396
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T2",
        "optional": false,
        "range": [
          2427,
          2432
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2437,
            2453
          ],
          "params": [
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
                      2440,
                      2441
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 68
                      },
                      "start": {
                        "column": 18,
                        "line": 68
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
                        "column": 22,
                        "line": 68
                      },
                      "start": {
                        "column": 19,
                        "line": 68
                      }
                    },
                    "range": [
                      2441,
                      2444
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2443,
                          2444
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 68
                          },
                          "start": {
                            "column": 21,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        2443,
                        2444
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 68
                        },
                        "start": {
                          "column": 21,
                          "line": 68
                        }
                      }
                    }
                  },
                  "range": [
                    2440,
                    2445
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 68
                    },
                    "start": {
                      "column": 18,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2446,
                      2447
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 68
                      },
                      "start": {
                        "column": 24,
                        "line": 68
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
                        "column": 28,
                        "line": 68
                      },
                      "start": {
                        "column": 25,
                        "line": 68
                      }
                    },
                    "range": [
                      2447,
                      2450
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          2449,
                          2450
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 68
                          },
                          "start": {
                            "column": 27,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        2449,
                        2450
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 68
                        },
                        "start": {
                          "column": 27,
                          "line": 68
                        }
                      }
                    }
                  },
                  "range": [
                    2446,
                    2450
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 68
                    },
                    "start": {
                      "column": 24,
                      "line": 68
                    }
                  }
                }
              ],
              "range": [
                2438,
                2452
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 68
                },
                "start": {
                  "column": 16,
                  "line": 68
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 68
            },
            "start": {
              "column": 15,
              "line": 68
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "range": [
            2435,
            2437
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 68
            },
            "start": {
              "column": 13,
              "line": 68
            }
          }
        },
        "range": [
          2435,
          2453
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 68
          },
          "start": {
            "column": 13,
            "line": 68
          }
        }
      },
      "range": [
        2422,
        2454
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T3",
        "optional": false,
        "range": [
          2481,
          2486
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 69
          },
          "start": {
            "column": 5,
            "line": 69
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2491,
            2517
          ],
          "params": [
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
                      2494,
                      2495
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 69
                      },
                      "start": {
                        "column": 18,
                        "line": 69
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
                        "column": 27,
                        "line": 69
                      },
                      "start": {
                        "column": 19,
                        "line": 69
                      }
                    },
                    "range": [
                      2495,
                      2503
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        2497,
                        2503
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 69
                        },
                        "start": {
                          "column": 21,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    2494,
                    2504
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 69
                    },
                    "start": {
                      "column": 18,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2505,
                      2506
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 69
                      },
                      "start": {
                        "column": 29,
                        "line": 69
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
                        "column": 38,
                        "line": 69
                      },
                      "start": {
                        "column": 30,
                        "line": 69
                      }
                    },
                    "range": [
                      2506,
                      2514
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        2508,
                        2514
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 69
                        },
                        "start": {
                          "column": 32,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    2505,
                    2514
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 69
                    },
                    "start": {
                      "column": 29,
                      "line": 69
                    }
                  }
                }
              ],
              "range": [
                2492,
                2516
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 69
                },
                "start": {
                  "column": 16,
                  "line": 69
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 69
            },
            "start": {
              "column": 15,
              "line": 69
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "range": [
            2489,
            2491
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 69
            },
            "start": {
              "column": 13,
              "line": 69
            }
          }
        },
        "range": [
          2489,
          2517
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 69
          },
          "start": {
            "column": 13,
            "line": 69
          }
        }
      },
      "range": [
        2476,
        2518
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T4",
        "optional": false,
        "range": [
          2533,
          2538
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 70
          },
          "start": {
            "column": 5,
            "line": 70
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2543,
            2561
          ],
          "params": [
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
                      2546,
                      2547
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 70
                      },
                      "start": {
                        "column": 18,
                        "line": 70
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
                        "column": 24,
                        "line": 70
                      },
                      "start": {
                        "column": 19,
                        "line": 70
                      }
                    },
                    "range": [
                      2547,
                      2552
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          2549,
                          2552
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 70
                          },
                          "start": {
                            "column": 21,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        2549,
                        2552
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 70
                        },
                        "start": {
                          "column": 21,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    2546,
                    2553
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 70
                    },
                    "start": {
                      "column": 18,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2554,
                      2555
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 70
                      },
                      "start": {
                        "column": 26,
                        "line": 70
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
                        "line": 70
                      },
                      "start": {
                        "column": 27,
                        "line": 70
                      }
                    },
                    "range": [
                      2555,
                      2558
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2557,
                          2558
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 70
                          },
                          "start": {
                            "column": 29,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        2557,
                        2558
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 70
                        },
                        "start": {
                          "column": 29,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    2554,
                    2558
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 70
                    },
                    "start": {
                      "column": 26,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                2544,
                2560
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 70
                },
                "start": {
                  "column": 16,
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
              "column": 15,
              "line": 70
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "range": [
            2541,
            2543
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 70
            },
            "start": {
              "column": 13,
              "line": 70
            }
          }
        },
        "range": [
          2541,
          2561
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
      },
      "range": [
        2528,
        2562
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8",
        "optional": false,
        "range": [
          2659,
          2661
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 73
          },
          "start": {
            "column": 5,
            "line": 73
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
              2671,
              2672
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          "range": [
            2671,
            2672
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 74
            },
            "start": {
              "column": 4,
              "line": 74
            }
          }
        },
        "extendsType": {
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
                  2683,
                  2684
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 74
                  },
                  "start": {
                    "column": 16,
                    "line": 74
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
                    "column": 41,
                    "line": 74
                  },
                  "start": {
                    "column": 17,
                    "line": 74
                  }
                },
                "range": [
                  2684,
                  2708
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "range": [
                        2702,
                        2708
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 74
                        },
                        "start": {
                          "column": 35,
                          "line": 74
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        2692,
                        2693
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 74
                        },
                        "start": {
                          "column": 25,
                          "line": 74
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2692,
                      2708
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 74
                      },
                      "start": {
                        "column": 25,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    2686,
                    2708
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 74
                    },
                    "start": {
                      "column": 19,
                      "line": 74
                    }
                  }
                }
              },
              "range": [
                2683,
                2709
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 74
                },
                "start": {
                  "column": 16,
                  "line": 74
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  2710,
                  2711
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 74
                  },
                  "start": {
                    "column": 43,
                    "line": 74
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
                    "column": 53,
                    "line": 74
                  },
                  "start": {
                    "column": 44,
                    "line": 74
                  }
                },
                "range": [
                  2711,
                  2720
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        2719,
                        2720
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 74
                        },
                        "start": {
                          "column": 52,
                          "line": 74
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2719,
                      2720
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 74
                      },
                      "start": {
                        "column": 52,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    2713,
                    2720
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 74
                    },
                    "start": {
                      "column": 46,
                      "line": 74
                    }
                  }
                }
              },
              "range": [
                2710,
                2720
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 74
                },
                "start": {
                  "column": 43,
                  "line": 74
                }
              }
            }
          ],
          "range": [
            2681,
            2722
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 74
            },
            "start": {
              "column": 14,
              "line": 74
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                2745,
                2746
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              2745,
              2746
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          "extendsType": {
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
                    2757,
                    2758
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 75
                    },
                    "start": {
                      "column": 16,
                      "line": 75
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
                      "column": 41,
                      "line": 75
                    },
                    "start": {
                      "column": 17,
                      "line": 75
                    }
                  },
                  "range": [
                    2758,
                    2782
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2776,
                          2782
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 75
                          },
                          "start": {
                            "column": 35,
                            "line": 75
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          2766,
                          2767
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 75
                          },
                          "start": {
                            "column": 25,
                            "line": 75
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2766,
                        2782
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 75
                        },
                        "start": {
                          "column": 25,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      2760,
                      2782
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 75
                      },
                      "start": {
                        "column": 19,
                        "line": 75
                      }
                    }
                  }
                },
                "range": [
                  2757,
                  2783
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 75
                  },
                  "start": {
                    "column": 16,
                    "line": 75
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    2784,
                    2785
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 75
                    },
                    "start": {
                      "column": 43,
                      "line": 75
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
                      "column": 53,
                      "line": 75
                    },
                    "start": {
                      "column": 44,
                      "line": 75
                    }
                  },
                  "range": [
                    2785,
                    2794
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          2793,
                          2794
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 75
                          },
                          "start": {
                            "column": 52,
                            "line": 75
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2793,
                        2794
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 75
                        },
                        "start": {
                          "column": 52,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      2787,
                      2794
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 75
                      },
                      "start": {
                        "column": 46,
                        "line": 75
                      }
                    }
                  }
                },
                "range": [
                  2784,
                  2794
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 75
                  },
                  "start": {
                    "column": 43,
                    "line": 75
                  }
                }
              }
            ],
            "range": [
              2755,
              2796
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 75
              },
              "start": {
                "column": 14,
                "line": 75
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              2819,
              2824
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    2800,
                    2808
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 75
                    },
                    "start": {
                      "column": 59,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2800,
                  2808
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 75
                  },
                  "start": {
                    "column": 59,
                    "line": 75
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
                    2810,
                    2811
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 75
                    },
                    "start": {
                      "column": 69,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2810,
                  2811
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 75
                  },
                  "start": {
                    "column": 69,
                    "line": 75
                  }
                }
              }
            ],
            "range": [
              2799,
              2812
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 75
              },
              "start": {
                "column": 58,
                "line": 75
              }
            }
          },
          "range": [
            2745,
            2824
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 76
            },
            "start": {
              "column": 4,
              "line": 75
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  2726,
                  2734
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 74
                  },
                  "start": {
                    "column": 59,
                    "line": 74
                  }
                }
              },
              "range": [
                2726,
                2734
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 74
                },
                "start": {
                  "column": 59,
                  "line": 74
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
                  2736,
                  2737
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 74
                  },
                  "start": {
                    "column": 69,
                    "line": 74
                  }
                }
              },
              "range": [
                2736,
                2737
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 74
                },
                "start": {
                  "column": 69,
                  "line": 74
                }
              }
            }
          ],
          "range": [
            2725,
            2738
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 74
            },
            "start": {
              "column": 58,
              "line": 74
            }
          }
        },
        "range": [
          2671,
          2824
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 76
          },
          "start": {
            "column": 4,
            "line": 74
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 73
          },
          "start": {
            "column": 7,
            "line": 73
          }
        },
        "range": [
          2661,
          2664
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
                2662,
                2663
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 73
                },
                "start": {
                  "column": 8,
                  "line": 73
                }
              }
            },
            "out": false,
            "range": [
              2662,
              2663
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 73
              },
              "start": {
                "column": 8,
                "line": 73
              }
            }
          }
        ]
      },
      "range": [
        2654,
        2825
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T1",
        "optional": false,
        "range": [
          2832,
          2837
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 78
          },
          "start": {
            "column": 5,
            "line": 78
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2842,
            2862
          ],
          "params": [
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
                      2845,
                      2846
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 78
                      },
                      "start": {
                        "column": 18,
                        "line": 78
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
                        "column": 24,
                        "line": 78
                      },
                      "start": {
                        "column": 19,
                        "line": 78
                      }
                    },
                    "range": [
                      2846,
                      2851
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          2848,
                          2851
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 78
                          },
                          "start": {
                            "column": 21,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        2848,
                        2851
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 78
                        },
                        "start": {
                          "column": 21,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    2845,
                    2852
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 78
                    },
                    "start": {
                      "column": 18,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2853,
                      2854
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 78
                      },
                      "start": {
                        "column": 26,
                        "line": 78
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
                        "column": 32,
                        "line": 78
                      },
                      "start": {
                        "column": 27,
                        "line": 78
                      }
                    },
                    "range": [
                      2854,
                      2859
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"b\"",
                        "value": "b",
                        "range": [
                          2856,
                          2859
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 78
                          },
                          "start": {
                            "column": 29,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        2856,
                        2859
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 78
                        },
                        "start": {
                          "column": 29,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    2853,
                    2859
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 78
                    },
                    "start": {
                      "column": 26,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                2843,
                2861
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 78
                },
                "start": {
                  "column": 16,
                  "line": 78
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 78
            },
            "start": {
              "column": 15,
              "line": 78
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "range": [
            2840,
            2842
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 78
            },
            "start": {
              "column": 13,
              "line": 78
            }
          }
        },
        "range": [
          2840,
          2862
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 78
          },
          "start": {
            "column": 13,
            "line": 78
          }
        }
      },
      "range": [
        2827,
        2863
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T2",
        "optional": false,
        "range": [
          2894,
          2899
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 79
          },
          "start": {
            "column": 5,
            "line": 79
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2904,
            2920
          ],
          "params": [
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
                      2907,
                      2908
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 79
                      },
                      "start": {
                        "column": 18,
                        "line": 79
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
                        "column": 22,
                        "line": 79
                      },
                      "start": {
                        "column": 19,
                        "line": 79
                      }
                    },
                    "range": [
                      2908,
                      2911
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2910,
                          2911
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 79
                          },
                          "start": {
                            "column": 21,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        2910,
                        2911
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 79
                        },
                        "start": {
                          "column": 21,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    2907,
                    2912
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 79
                    },
                    "start": {
                      "column": 18,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2913,
                      2914
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 79
                      },
                      "start": {
                        "column": 24,
                        "line": 79
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
                        "column": 28,
                        "line": 79
                      },
                      "start": {
                        "column": 25,
                        "line": 79
                      }
                    },
                    "range": [
                      2914,
                      2917
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          2916,
                          2917
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 79
                          },
                          "start": {
                            "column": 27,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        2916,
                        2917
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 79
                        },
                        "start": {
                          "column": 27,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    2913,
                    2917
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 79
                    },
                    "start": {
                      "column": 24,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                2905,
                2919
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 79
                },
                "start": {
                  "column": 16,
                  "line": 79
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 79
            },
            "start": {
              "column": 15,
              "line": 79
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "range": [
            2902,
            2904
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 79
            },
            "start": {
              "column": 13,
              "line": 79
            }
          }
        },
        "range": [
          2902,
          2920
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 79
          },
          "start": {
            "column": 13,
            "line": 79
          }
        }
      },
      "range": [
        2889,
        2921
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T3",
        "optional": false,
        "range": [
          2948,
          2953
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 80
          },
          "start": {
            "column": 5,
            "line": 80
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2958,
            2984
          ],
          "params": [
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
                      2961,
                      2962
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 80
                      },
                      "start": {
                        "column": 18,
                        "line": 80
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
                        "column": 27,
                        "line": 80
                      },
                      "start": {
                        "column": 19,
                        "line": 80
                      }
                    },
                    "range": [
                      2962,
                      2970
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        2964,
                        2970
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 80
                        },
                        "start": {
                          "column": 21,
                          "line": 80
                        }
                      }
                    }
                  },
                  "range": [
                    2961,
                    2971
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 80
                    },
                    "start": {
                      "column": 18,
                      "line": 80
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2972,
                      2973
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 80
                      },
                      "start": {
                        "column": 29,
                        "line": 80
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
                        "column": 38,
                        "line": 80
                      },
                      "start": {
                        "column": 30,
                        "line": 80
                      }
                    },
                    "range": [
                      2973,
                      2981
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        2975,
                        2981
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 80
                        },
                        "start": {
                          "column": 32,
                          "line": 80
                        }
                      }
                    }
                  },
                  "range": [
                    2972,
                    2981
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 80
                    },
                    "start": {
                      "column": 29,
                      "line": 80
                    }
                  }
                }
              ],
              "range": [
                2959,
                2983
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 80
                },
                "start": {
                  "column": 16,
                  "line": 80
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 80
            },
            "start": {
              "column": 15,
              "line": 80
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "range": [
            2956,
            2958
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 80
            },
            "start": {
              "column": 13,
              "line": 80
            }
          }
        },
        "range": [
          2956,
          2984
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 80
          },
          "start": {
            "column": 13,
            "line": 80
          }
        }
      },
      "range": [
        2943,
        2985
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T4",
        "optional": false,
        "range": [
          3000,
          3005
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 81
          },
          "start": {
            "column": 5,
            "line": 81
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3010,
            3028
          ],
          "params": [
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
                      3013,
                      3014
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 81
                      },
                      "start": {
                        "column": 19,
                        "line": 81
                      }
                    },
                    "range": [
                      3014,
                      3019
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          3016,
                          3019
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 81
                          },
                          "start": {
                            "column": 21,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        3016,
                        3019
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 81
                        },
                        "start": {
                          "column": 21,
                          "line": 81
                        }
                      }
                    }
                  },
                  "range": [
                    3013,
                    3020
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 81
                    },
                    "start": {
                      "column": 18,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      3021,
                      3022
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
                      3022,
                      3025
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3024,
                          3025
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
                        3024,
                        3025
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
                    3021,
                    3025
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
                3011,
                3027
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 81
                },
                "start": {
                  "column": 16,
                  "line": 81
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 81
            },
            "start": {
              "column": 15,
              "line": 81
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "range": [
            3008,
            3010
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 81
            },
            "start": {
              "column": 13,
              "line": 81
            }
          }
        },
        "range": [
          3008,
          3028
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 81
          },
          "start": {
            "column": 13,
            "line": 81
          }
        }
      },
      "range": [
        2995,
        3029
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9",
        "optional": false,
        "range": [
          3125,
          3127
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 84
          },
          "start": {
            "column": 5,
            "line": 84
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
              3137,
              3138
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          "range": [
            3137,
            3138
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 85
            },
            "start": {
              "column": 4,
              "line": 85
            }
          }
        },
        "extendsType": {
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
                  3149,
                  3150
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 85
                  },
                  "start": {
                    "column": 16,
                    "line": 85
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
                    "column": 26,
                    "line": 85
                  },
                  "start": {
                    "column": 17,
                    "line": 85
                  }
                },
                "range": [
                  3150,
                  3159
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3158,
                        3159
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 85
                        },
                        "start": {
                          "column": 25,
                          "line": 85
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3158,
                      3159
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 85
                      },
                      "start": {
                        "column": 25,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    3152,
                    3159
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 85
                    },
                    "start": {
                      "column": 19,
                      "line": 85
                    }
                  }
                }
              },
              "range": [
                3149,
                3160
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 85
                },
                "start": {
                  "column": 16,
                  "line": 85
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  3161,
                  3162
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 85
                  },
                  "start": {
                    "column": 28,
                    "line": 85
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
                    "column": 53,
                    "line": 85
                  },
                  "start": {
                    "column": 29,
                    "line": 85
                  }
                },
                "range": [
                  3162,
                  3186
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "range": [
                        3180,
                        3186
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 85
                        },
                        "start": {
                          "column": 47,
                          "line": 85
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3170,
                        3171
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 85
                        },
                        "start": {
                          "column": 37,
                          "line": 85
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3170,
                      3186
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 85
                      },
                      "start": {
                        "column": 37,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    3164,
                    3186
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 85
                    },
                    "start": {
                      "column": 31,
                      "line": 85
                    }
                  }
                }
              },
              "range": [
                3161,
                3186
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 85
                },
                "start": {
                  "column": 28,
                  "line": 85
                }
              }
            }
          ],
          "range": [
            3147,
            3188
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 85
            },
            "start": {
              "column": 14,
              "line": 85
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3211,
                3212
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "range": [
              3211,
              3212
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          },
          "extendsType": {
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
                    3223,
                    3224
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 86
                    },
                    "start": {
                      "column": 16,
                      "line": 86
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
                      "column": 26,
                      "line": 86
                    },
                    "start": {
                      "column": 17,
                      "line": 86
                    }
                  },
                  "range": [
                    3224,
                    3233
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3232,
                          3233
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 86
                          },
                          "start": {
                            "column": 25,
                            "line": 86
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3232,
                        3233
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 86
                        },
                        "start": {
                          "column": 25,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      3226,
                      3233
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 86
                      },
                      "start": {
                        "column": 19,
                        "line": 86
                      }
                    }
                  }
                },
                "range": [
                  3223,
                  3234
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 86
                  },
                  "start": {
                    "column": 16,
                    "line": 86
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    3235,
                    3236
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 86
                    },
                    "start": {
                      "column": 28,
                      "line": 86
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
                      "column": 53,
                      "line": 86
                    },
                    "start": {
                      "column": 29,
                      "line": 86
                    }
                  },
                  "range": [
                    3236,
                    3260
                  ],
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3254,
                          3260
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 86
                          },
                          "start": {
                            "column": 47,
                            "line": 86
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3244,
                          3245
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 86
                          },
                          "start": {
                            "column": 37,
                            "line": 86
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3244,
                        3260
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 86
                        },
                        "start": {
                          "column": 37,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      3238,
                      3260
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 86
                      },
                      "start": {
                        "column": 31,
                        "line": 86
                      }
                    }
                  }
                },
                "range": [
                  3235,
                  3260
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 86
                  },
                  "start": {
                    "column": 28,
                    "line": 86
                  }
                }
              }
            ],
            "range": [
              3221,
              3262
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 86
              },
              "start": {
                "column": 14,
                "line": 86
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              3285,
              3290
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    3266,
                    3274
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 86
                    },
                    "start": {
                      "column": 59,
                      "line": 86
                    }
                  }
                },
                "range": [
                  3266,
                  3274
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 86
                  },
                  "start": {
                    "column": 59,
                    "line": 86
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
                    3276,
                    3277
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 86
                    },
                    "start": {
                      "column": 69,
                      "line": 86
                    }
                  }
                },
                "range": [
                  3276,
                  3277
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 86
                  },
                  "start": {
                    "column": 69,
                    "line": 86
                  }
                }
              }
            ],
            "range": [
              3265,
              3278
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 86
              },
              "start": {
                "column": 58,
                "line": 86
              }
            }
          },
          "range": [
            3211,
            3290
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 87
            },
            "start": {
              "column": 4,
              "line": 86
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  3192,
                  3200
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 85
                  },
                  "start": {
                    "column": 59,
                    "line": 85
                  }
                }
              },
              "range": [
                3192,
                3200
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 85
                },
                "start": {
                  "column": 59,
                  "line": 85
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
                  3202,
                  3203
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 85
                  },
                  "start": {
                    "column": 69,
                    "line": 85
                  }
                }
              },
              "range": [
                3202,
                3203
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 85
                },
                "start": {
                  "column": 69,
                  "line": 85
                }
              }
            }
          ],
          "range": [
            3191,
            3204
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 85
            },
            "start": {
              "column": 58,
              "line": 85
            }
          }
        },
        "range": [
          3137,
          3290
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 87
          },
          "start": {
            "column": 4,
            "line": 85
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 84
          },
          "start": {
            "column": 7,
            "line": 84
          }
        },
        "range": [
          3127,
          3130
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
                3128,
                3129
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 84
                },
                "start": {
                  "column": 8,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              3128,
              3129
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 84
              },
              "start": {
                "column": 8,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        3120,
        3291
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T1",
        "optional": false,
        "range": [
          3298,
          3303
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 89
          },
          "start": {
            "column": 5,
            "line": 89
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3308,
            3328
          ],
          "params": [
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
                      3311,
                      3312
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 89
                      },
                      "start": {
                        "column": 18,
                        "line": 89
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
                        "column": 24,
                        "line": 89
                      },
                      "start": {
                        "column": 19,
                        "line": 89
                      }
                    },
                    "range": [
                      3312,
                      3317
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          3314,
                          3317
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 89
                          },
                          "start": {
                            "column": 21,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        3314,
                        3317
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 89
                        },
                        "start": {
                          "column": 21,
                          "line": 89
                        }
                      }
                    }
                  },
                  "range": [
                    3311,
                    3318
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 89
                    },
                    "start": {
                      "column": 18,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      3319,
                      3320
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 89
                      },
                      "start": {
                        "column": 26,
                        "line": 89
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
                        "column": 32,
                        "line": 89
                      },
                      "start": {
                        "column": 27,
                        "line": 89
                      }
                    },
                    "range": [
                      3320,
                      3325
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"b\"",
                        "value": "b",
                        "range": [
                          3322,
                          3325
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 89
                          },
                          "start": {
                            "column": 29,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        3322,
                        3325
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 89
                        },
                        "start": {
                          "column": 29,
                          "line": 89
                        }
                      }
                    }
                  },
                  "range": [
                    3319,
                    3325
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 89
                    },
                    "start": {
                      "column": 26,
                      "line": 89
                    }
                  }
                }
              ],
              "range": [
                3309,
                3327
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 89
                },
                "start": {
                  "column": 16,
                  "line": 89
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 89
            },
            "start": {
              "column": 15,
              "line": 89
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "range": [
            3306,
            3308
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 89
            },
            "start": {
              "column": 13,
              "line": 89
            }
          }
        },
        "range": [
          3306,
          3328
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 89
          },
          "start": {
            "column": 13,
            "line": 89
          }
        }
      },
      "range": [
        3293,
        3329
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T2",
        "optional": false,
        "range": [
          3360,
          3365
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 90
          },
          "start": {
            "column": 5,
            "line": 90
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3370,
            3386
          ],
          "params": [
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
                      3373,
                      3374
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 90
                      },
                      "start": {
                        "column": 18,
                        "line": 90
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
                        "column": 22,
                        "line": 90
                      },
                      "start": {
                        "column": 19,
                        "line": 90
                      }
                    },
                    "range": [
                      3374,
                      3377
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3376,
                          3377
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 90
                          },
                          "start": {
                            "column": 21,
                            "line": 90
                          }
                        }
                      },
                      "range": [
                        3376,
                        3377
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 90
                        },
                        "start": {
                          "column": 21,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    3373,
                    3378
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 90
                    },
                    "start": {
                      "column": 18,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      3379,
                      3380
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 90
                      },
                      "start": {
                        "column": 24,
                        "line": 90
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
                        "column": 28,
                        "line": 90
                      },
                      "start": {
                        "column": 25,
                        "line": 90
                      }
                    },
                    "range": [
                      3380,
                      3383
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          3382,
                          3383
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 90
                          },
                          "start": {
                            "column": 27,
                            "line": 90
                          }
                        }
                      },
                      "range": [
                        3382,
                        3383
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 90
                        },
                        "start": {
                          "column": 27,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    3379,
                    3383
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 90
                    },
                    "start": {
                      "column": 24,
                      "line": 90
                    }
                  }
                }
              ],
              "range": [
                3371,
                3385
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 90
                },
                "start": {
                  "column": 16,
                  "line": 90
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 90
            },
            "start": {
              "column": 15,
              "line": 90
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "range": [
            3368,
            3370
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 90
            },
            "start": {
              "column": 13,
              "line": 90
            }
          }
        },
        "range": [
          3368,
          3386
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 90
          },
          "start": {
            "column": 13,
            "line": 90
          }
        }
      },
      "range": [
        3355,
        3387
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T3",
        "optional": false,
        "range": [
          3414,
          3419
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 91
          },
          "start": {
            "column": 5,
            "line": 91
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3424,
            3450
          ],
          "params": [
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
                      3427,
                      3428
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 91
                      },
                      "start": {
                        "column": 18,
                        "line": 91
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
                        "column": 27,
                        "line": 91
                      },
                      "start": {
                        "column": 19,
                        "line": 91
                      }
                    },
                    "range": [
                      3428,
                      3436
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        3430,
                        3436
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 91
                        },
                        "start": {
                          "column": 21,
                          "line": 91
                        }
                      }
                    }
                  },
                  "range": [
                    3427,
                    3437
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 91
                    },
                    "start": {
                      "column": 18,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      3438,
                      3439
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 91
                      },
                      "start": {
                        "column": 29,
                        "line": 91
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
                        "column": 38,
                        "line": 91
                      },
                      "start": {
                        "column": 30,
                        "line": 91
                      }
                    },
                    "range": [
                      3439,
                      3447
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        3441,
                        3447
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 91
                        },
                        "start": {
                          "column": 32,
                          "line": 91
                        }
                      }
                    }
                  },
                  "range": [
                    3438,
                    3447
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 91
                    },
                    "start": {
                      "column": 29,
                      "line": 91
                    }
                  }
                }
              ],
              "range": [
                3425,
                3449
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 91
                },
                "start": {
                  "column": 16,
                  "line": 91
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 91
            },
            "start": {
              "column": 15,
              "line": 91
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "range": [
            3422,
            3424
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 91
            },
            "start": {
              "column": 13,
              "line": 91
            }
          }
        },
        "range": [
          3422,
          3450
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 91
          },
          "start": {
            "column": 13,
            "line": 91
          }
        }
      },
      "range": [
        3409,
        3451
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T4",
        "optional": false,
        "range": [
          3466,
          3471
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 92
          },
          "start": {
            "column": 5,
            "line": 92
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3476,
            3494
          ],
          "params": [
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
                      3479,
                      3480
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 92
                      },
                      "start": {
                        "column": 18,
                        "line": 92
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
                        "column": 24,
                        "line": 92
                      },
                      "start": {
                        "column": 19,
                        "line": 92
                      }
                    },
                    "range": [
                      3480,
                      3485
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          3482,
                          3485
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 92
                          },
                          "start": {
                            "column": 21,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        3482,
                        3485
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 92
                        },
                        "start": {
                          "column": 21,
                          "line": 92
                        }
                      }
                    }
                  },
                  "range": [
                    3479,
                    3486
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 92
                    },
                    "start": {
                      "column": 18,
                      "line": 92
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      3487,
                      3488
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 92
                      },
                      "start": {
                        "column": 26,
                        "line": 92
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
                        "line": 92
                      },
                      "start": {
                        "column": 27,
                        "line": 92
                      }
                    },
                    "range": [
                      3488,
                      3491
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3490,
                          3491
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 92
                          },
                          "start": {
                            "column": 29,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        3490,
                        3491
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 92
                        },
                        "start": {
                          "column": 29,
                          "line": 92
                        }
                      }
                    }
                  },
                  "range": [
                    3487,
                    3491
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 92
                    },
                    "start": {
                      "column": 26,
                      "line": 92
                    }
                  }
                }
              ],
              "range": [
                3477,
                3493
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 92
                },
                "start": {
                  "column": 16,
                  "line": 92
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 92
            },
            "start": {
              "column": 15,
              "line": 92
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "range": [
            3474,
            3476
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 92
            },
            "start": {
              "column": 13,
              "line": 92
            }
          }
        },
        "range": [
          3474,
          3494
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 92
          },
          "start": {
            "column": 13,
            "line": 92
          }
        }
      },
      "range": [
        3461,
        3495
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10",
        "optional": false,
        "range": [
          3562,
          3565
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 95
          },
          "start": {
            "column": 5,
            "line": 95
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
              3571,
              3572
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 95
              },
              "start": {
                "column": 14,
                "line": 95
              }
            }
          },
          "range": [
            3571,
            3572
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 95
            },
            "start": {
              "column": 14,
              "line": 95
            }
          }
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3588,
                  3589
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 95
                  },
                  "start": {
                    "column": 31,
                    "line": 95
                  }
                }
              },
              "out": false,
              "range": [
                3588,
                3589
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 95
                },
                "start": {
                  "column": 31,
                  "line": 95
                }
              }
            },
            "range": [
              3582,
              3589
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 95
              },
              "start": {
                "column": 25,
                "line": 95
              }
            }
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "range": [
              3598,
              3604
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 95
              },
              "start": {
                "column": 41,
                "line": 95
              }
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3611,
                3612
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 95
                },
                "start": {
                  "column": 54,
                  "line": 95
                }
              }
            },
            "range": [
              3611,
              3612
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 95
              },
              "start": {
                "column": 54,
                "line": 95
              }
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                3607,
                3608
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 95
                },
                "start": {
                  "column": 50,
                  "line": 95
                }
              }
            },
            "range": [
              3607,
              3608
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 95
              },
              "start": {
                "column": 50,
                "line": 95
              }
            }
          },
          "range": [
            3582,
            3612
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 95
            },
            "start": {
              "column": 25,
              "line": 95
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              3620,
              3621
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 95
              },
              "start": {
                "column": 63,
                "line": 95
              }
            }
          },
          "range": [
            3620,
            3621
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 95
            },
            "start": {
              "column": 63,
              "line": 95
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3616,
              3617
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 95
              },
              "start": {
                "column": 59,
                "line": 95
              }
            }
          },
          "range": [
            3616,
            3617
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 95
            },
            "start": {
              "column": 59,
              "line": 95
            }
          }
        },
        "range": [
          3571,
          3621
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 95
          },
          "start": {
            "column": 14,
            "line": 95
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 95
          },
          "start": {
            "column": 8,
            "line": 95
          }
        },
        "range": [
          3565,
          3568
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
                3566,
                3567
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 95
                },
                "start": {
                  "column": 9,
                  "line": 95
                }
              }
            },
            "out": false,
            "range": [
              3566,
              3567
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 95
              },
              "start": {
                "column": 9,
                "line": 95
              }
            }
          }
        ]
      },
      "range": [
        3557,
        3622
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10_Y1",
        "optional": false,
        "range": [
          3657,
          3663
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 96
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3672,
            3698
          ],
          "params": [
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
                    3673,
                    3674
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 96
                    },
                    "start": {
                      "column": 21,
                      "line": 96
                    }
                  }
                },
                "range": [
                  3673,
                  3674
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 96
                  },
                  "start": {
                    "column": 21,
                    "line": 96
                  }
                }
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "range": [
                  3683,
                  3689
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 96
                  },
                  "start": {
                    "column": 31,
                    "line": 96
                  }
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    3696,
                    3697
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 96
                    },
                    "start": {
                      "column": 44,
                      "line": 96
                    }
                  }
                },
                "range": [
                  3696,
                  3697
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 96
                  },
                  "start": {
                    "column": 44,
                    "line": 96
                  }
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    3692,
                    3693
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 96
                    },
                    "start": {
                      "column": 40,
                      "line": 96
                    }
                  }
                },
                "range": [
                  3692,
                  3693
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 96
                  },
                  "start": {
                    "column": 40,
                    "line": 96
                  }
                }
              },
              "range": [
                3673,
                3697
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 96
                },
                "start": {
                  "column": 21,
                  "line": 96
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 96
            },
            "start": {
              "column": 20,
              "line": 96
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X10",
          "optional": false,
          "range": [
            3669,
            3672
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 96
            },
            "start": {
              "column": 17,
              "line": 96
            }
          }
        },
        "range": [
          3669,
          3698
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 96
          },
          "start": {
            "column": 17,
            "line": 96
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 96
          },
          "start": {
            "column": 11,
            "line": 96
          }
        },
        "range": [
          3663,
          3666
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
                3664,
                3665
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 96
                },
                "start": {
                  "column": 12,
                  "line": 96
                }
              }
            },
            "out": false,
            "range": [
              3664,
              3665
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 96
              },
              "start": {
                "column": 12,
                "line": 96
              }
            }
          }
        ]
      },
      "range": [
        3652,
        3699
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10_T1_T1",
        "optional": false,
        "range": [
          3705,
          3714
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 97
          },
          "start": {
            "column": 5,
            "line": 97
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3723,
            3731
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                3724,
                3730
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 97
                },
                "start": {
                  "column": 24,
                  "line": 97
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 97
            },
            "start": {
              "column": 23,
              "line": 97
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X10_Y1",
          "optional": false,
          "range": [
            3717,
            3723
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 97
            },
            "start": {
              "column": 17,
              "line": 97
            }
          }
        },
        "range": [
          3717,
          3731
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 97
          },
          "start": {
            "column": 17,
            "line": 97
          }
        }
      },
      "range": [
        3700,
        3732
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X11",
        "optional": false,
        "range": [
          3739,
          3742
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 99
          },
          "start": {
            "column": 5,
            "line": 99
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
              3748,
              3749
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 99
              },
              "start": {
                "column": 14,
                "line": 99
              }
            }
          },
          "range": [
            3748,
            3749
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 99
            },
            "start": {
              "column": 14,
              "line": 99
            }
          }
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3766,
                  3767
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 99
                  },
                  "start": {
                    "column": 32,
                    "line": 99
                  }
                }
              },
              "out": false,
              "range": [
                3766,
                3767
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 99
                },
                "start": {
                  "column": 32,
                  "line": 99
                }
              }
            },
            "range": [
              3760,
              3767
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 99
              },
              "start": {
                "column": 26,
                "line": 99
              }
            }
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "range": [
              3777,
              3783
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 99
              },
              "start": {
                "column": 43,
                "line": 99
              }
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3790,
                3791
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 99
                },
                "start": {
                  "column": 56,
                  "line": 99
                }
              }
            },
            "range": [
              3790,
              3791
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 99
              },
              "start": {
                "column": 56,
                "line": 99
              }
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                3786,
                3787
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 99
                },
                "start": {
                  "column": 52,
                  "line": 99
                }
              }
            },
            "range": [
              3786,
              3787
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 99
              },
              "start": {
                "column": 52,
                "line": 99
              }
            }
          },
          "range": [
            3759,
            3791
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 99
            },
            "start": {
              "column": 25,
              "line": 99
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              3799,
              3800
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 99
              },
              "start": {
                "column": 65,
                "line": 99
              }
            }
          },
          "range": [
            3799,
            3800
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 99
            },
            "start": {
              "column": 65,
              "line": 99
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3795,
              3796
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 99
              },
              "start": {
                "column": 61,
                "line": 99
              }
            }
          },
          "range": [
            3795,
            3796
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 99
            },
            "start": {
              "column": 61,
              "line": 99
            }
          }
        },
        "range": [
          3748,
          3800
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 99
          },
          "start": {
            "column": 14,
            "line": 99
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 99
          },
          "start": {
            "column": 8,
            "line": 99
          }
        },
        "range": [
          3742,
          3745
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
                3743,
                3744
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 99
                },
                "start": {
                  "column": 9,
                  "line": 99
                }
              }
            },
            "out": false,
            "range": [
              3743,
              3744
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 99
              },
              "start": {
                "column": 9,
                "line": 99
              }
            }
          }
        ]
      },
      "range": [
        3734,
        3801
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X12",
        "optional": false,
        "range": [
          3836,
          3839
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 100
          },
          "start": {
            "column": 5,
            "line": 100
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
              3845,
              3846
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 100
              },
              "start": {
                "column": 14,
                "line": 100
              }
            }
          },
          "range": [
            3845,
            3846
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 100
            },
            "start": {
              "column": 14,
              "line": 100
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                3872,
                3878
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 100
                },
                "start": {
                  "column": 41,
                  "line": 100
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                3862,
                3863
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 100
                },
                "start": {
                  "column": 31,
                  "line": 100
                }
              }
            },
            "out": false,
            "range": [
              3862,
              3878
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 100
              },
              "start": {
                "column": 31,
                "line": 100
              }
            }
          },
          "range": [
            3856,
            3878
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 100
            },
            "start": {
              "column": 25,
              "line": 100
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              3886,
              3887
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 100
              },
              "start": {
                "column": 55,
                "line": 100
              }
            }
          },
          "range": [
            3886,
            3887
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 100
            },
            "start": {
              "column": 55,
              "line": 100
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3882,
              3883
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 100
              },
              "start": {
                "column": 51,
                "line": 100
              }
            }
          },
          "range": [
            3882,
            3883
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 100
            },
            "start": {
              "column": 51,
              "line": 100
            }
          }
        },
        "range": [
          3845,
          3887
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 100
          },
          "start": {
            "column": 14,
            "line": 100
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 100
          },
          "start": {
            "column": 8,
            "line": 100
          }
        },
        "range": [
          3839,
          3842
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
                3840,
                3841
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 100
                },
                "start": {
                  "column": 9,
                  "line": 100
                }
              }
            },
            "out": false,
            "range": [
              3840,
              3841
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 100
              },
              "start": {
                "column": 9,
                "line": 100
              }
            }
          }
        ]
      },
      "range": [
        3831,
        3888
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X13",
        "optional": false,
        "range": [
          3946,
          3949
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 101
          },
          "start": {
            "column": 5,
            "line": 101
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
              3955,
              3956
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 101
              },
              "start": {
                "column": 14,
                "line": 101
              }
            }
          },
          "range": [
            3955,
            3956
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 101
            },
            "start": {
              "column": 14,
              "line": 101
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                3981,
                3987
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 101
                },
                "start": {
                  "column": 40,
                  "line": 101
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                3971,
                3972
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 101
                },
                "start": {
                  "column": 30,
                  "line": 101
                }
              }
            },
            "out": false,
            "range": [
              3971,
              3987
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 101
              },
              "start": {
                "column": 30,
                "line": 101
              }
            }
          },
          "range": [
            3965,
            3987
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 101
            },
            "start": {
              "column": 24,
              "line": 101
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              3994,
              3995
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 101
              },
              "start": {
                "column": 53,
                "line": 101
              }
            }
          },
          "range": [
            3994,
            3995
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 101
            },
            "start": {
              "column": 53,
              "line": 101
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3990,
              3991
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 101
              },
              "start": {
                "column": 49,
                "line": 101
              }
            }
          },
          "range": [
            3990,
            3991
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 101
            },
            "start": {
              "column": 49,
              "line": 101
            }
          }
        },
        "range": [
          3955,
          3995
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 101
          },
          "start": {
            "column": 14,
            "line": 101
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 101
          },
          "start": {
            "column": 8,
            "line": 101
          }
        },
        "range": [
          3949,
          3952
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
                3950,
                3951
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 101
                }
              }
            },
            "out": false,
            "range": [
              3950,
              3951
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 101
              },
              "start": {
                "column": 9,
                "line": 101
              }
            }
          }
        ]
      },
      "range": [
        3941,
        3996
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X14",
        "optional": false,
        "range": [
          4086,
          4089
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 102
          },
          "start": {
            "column": 5,
            "line": 102
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
              4095,
              4096
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 102
              },
              "start": {
                "column": 14,
                "line": 102
              }
            }
          },
          "range": [
            4095,
            4096
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 102
            },
            "start": {
              "column": 14,
              "line": 102
            }
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "range": [
                  4127,
                  4133
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 102
                  },
                  "start": {
                    "column": 46,
                    "line": 102
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  4117,
                  4118
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 102
                  },
                  "start": {
                    "column": 36,
                    "line": 102
                  }
                }
              },
              "out": false,
              "range": [
                4117,
                4133
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 102
                },
                "start": {
                  "column": 36,
                  "line": 102
                }
              }
            },
            "range": [
              4111,
              4133
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 102
              },
              "start": {
                "column": 30,
                "line": 102
              }
            }
          },
          "range": [
            4105,
            4133
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 102
            },
            "start": {
              "column": 24,
              "line": 102
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              4140,
              4141
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 102
              },
              "start": {
                "column": 59,
                "line": 102
              }
            }
          },
          "range": [
            4140,
            4141
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 102
            },
            "start": {
              "column": 59,
              "line": 102
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              4136,
              4137
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 102
              },
              "start": {
                "column": 55,
                "line": 102
              }
            }
          },
          "range": [
            4136,
            4137
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 102
            },
            "start": {
              "column": 55,
              "line": 102
            }
          }
        },
        "range": [
          4095,
          4141
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 102
          },
          "start": {
            "column": 14,
            "line": 102
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 102
          },
          "start": {
            "column": 8,
            "line": 102
          }
        },
        "range": [
          4089,
          4092
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
                4090,
                4091
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 102
                },
                "start": {
                  "column": 9,
                  "line": 102
                }
              }
            },
            "out": false,
            "range": [
              4090,
              4091
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 102
              },
              "start": {
                "column": 9,
                "line": 102
              }
            }
          }
        ]
      },
      "range": [
        4081,
        4142
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X15",
        "optional": false,
        "range": [
          4251,
          4254
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 103
          },
          "start": {
            "column": 5,
            "line": 103
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
              4260,
              4261
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 103
              },
              "start": {
                "column": 14,
                "line": 103
              }
            }
          },
          "range": [
            4260,
            4261
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 103
            },
            "start": {
              "column": 14,
              "line": 103
            }
          }
        },
        "extendsType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    4284,
                    4285
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 103
                    },
                    "start": {
                      "column": 38,
                      "line": 103
                    }
                  }
                },
                "out": false,
                "range": [
                  4284,
                  4285
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 103
                  },
                  "start": {
                    "column": 38,
                    "line": 103
                  }
                }
              },
              "range": [
                4278,
                4285
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 103
                },
                "start": {
                  "column": 32,
                  "line": 103
                }
              }
            },
            "extendsType": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    4300,
                    4301
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 103
                    },
                    "start": {
                      "column": 54,
                      "line": 103
                    }
                  }
                },
                "range": [
                  4300,
                  4301
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 103
                  },
                  "start": {
                    "column": 54,
                    "line": 103
                  }
                }
              },
              "range": [
                4294,
                4301
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 103
                },
                "start": {
                  "column": 48,
                  "line": 103
                }
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  4308,
                  4309
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 103
                  },
                  "start": {
                    "column": 62,
                    "line": 103
                  }
                }
              },
              "range": [
                4308,
                4309
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 103
                },
                "start": {
                  "column": 62,
                  "line": 103
                }
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  4304,
                  4305
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 103
                  },
                  "start": {
                    "column": 58,
                    "line": 103
                  }
                }
              },
              "range": [
                4304,
                4305
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 103
                },
                "start": {
                  "column": 58,
                  "line": 103
                }
              }
            },
            "range": [
              4278,
              4309
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 103
              },
              "start": {
                "column": 32,
                "line": 103
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4273,
              4274
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 103
              },
              "start": {
                "column": 27,
                "line": 103
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                4312,
                4313
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 103
                },
                "start": {
                  "column": 66,
                  "line": 103
                }
              }
            },
            "range": [
              4312,
              4313
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 103
              },
              "start": {
                "column": 66,
                "line": 103
              }
            }
          },
          "range": [
            4270,
            4316
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 103
            },
            "start": {
              "column": 24,
              "line": 103
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              4323,
              4324
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 103
              },
              "start": {
                "column": 77,
                "line": 103
              }
            }
          },
          "range": [
            4323,
            4324
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 103
            },
            "start": {
              "column": 77,
              "line": 103
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              4319,
              4320
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 103
              },
              "start": {
                "column": 73,
                "line": 103
              }
            }
          },
          "range": [
            4319,
            4320
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 103
            },
            "start": {
              "column": 73,
              "line": 103
            }
          }
        },
        "range": [
          4260,
          4324
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 103
          },
          "start": {
            "column": 14,
            "line": 103
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 103
          },
          "start": {
            "column": 8,
            "line": 103
          }
        },
        "range": [
          4254,
          4257
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
                4255,
                4256
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 103
                },
                "start": {
                  "column": 9,
                  "line": 103
                }
              }
            },
            "out": false,
            "range": [
              4255,
              4256
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 103
              },
              "start": {
                "column": 9,
                "line": 103
              }
            }
          }
        ]
      },
      "range": [
        4246,
        4325
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 103
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X16",
        "optional": false,
        "range": [
          4360,
          4363
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 104
          },
          "start": {
            "column": 5,
            "line": 104
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
              4369,
              4370
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 104
              },
              "start": {
                "column": 14,
                "line": 104
              }
            }
          },
          "range": [
            4369,
            4370
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 104
            },
            "start": {
              "column": 14,
              "line": 104
            }
          }
        },
        "extendsType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      4409,
                      4410
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 104
                      },
                      "start": {
                        "column": 54,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    4409,
                    4410
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 104
                    },
                    "start": {
                      "column": 54,
                      "line": 104
                    }
                  }
                },
                "range": [
                  4403,
                  4410
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 104
                  },
                  "start": {
                    "column": 48,
                    "line": 104
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  4393,
                  4394
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 104
                  },
                  "start": {
                    "column": 38,
                    "line": 104
                  }
                }
              },
              "out": false,
              "range": [
                4393,
                4410
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 104
                },
                "start": {
                  "column": 38,
                  "line": 104
                }
              }
            },
            "range": [
              4387,
              4410
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 104
              },
              "start": {
                "column": 32,
                "line": 104
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4382,
              4383
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 104
              },
              "start": {
                "column": 27,
                "line": 104
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                4413,
                4414
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 104
                },
                "start": {
                  "column": 58,
                  "line": 104
                }
              }
            },
            "range": [
              4413,
              4414
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 104
              },
              "start": {
                "column": 58,
                "line": 104
              }
            }
          },
          "range": [
            4379,
            4417
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 104
            },
            "start": {
              "column": 24,
              "line": 104
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              4424,
              4425
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 104
              },
              "start": {
                "column": 69,
                "line": 104
              }
            }
          },
          "range": [
            4424,
            4425
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 104
            },
            "start": {
              "column": 69,
              "line": 104
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              4420,
              4421
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 104
              },
              "start": {
                "column": 65,
                "line": 104
              }
            }
          },
          "range": [
            4420,
            4421
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 104
            },
            "start": {
              "column": 65,
              "line": 104
            }
          }
        },
        "range": [
          4369,
          4425
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 104
          },
          "start": {
            "column": 14,
            "line": 104
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 104
          },
          "start": {
            "column": 8,
            "line": 104
          }
        },
        "range": [
          4363,
          4366
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
                4364,
                4365
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 104
                },
                "start": {
                  "column": 9,
                  "line": 104
                }
              }
            },
            "out": false,
            "range": [
              4364,
              4365
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 104
              },
              "start": {
                "column": 9,
                "line": 104
              }
            }
          }
        ]
      },
      "range": [
        4355,
        4426
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X17",
        "optional": false,
        "range": [
          4484,
          4487
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 105
          },
          "start": {
            "column": 5,
            "line": 105
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
              4493,
              4494
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 105
              },
              "start": {
                "column": 14,
                "line": 105
              }
            }
          },
          "range": [
            4493,
            4494
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 105
            },
            "start": {
              "column": 14,
              "line": 105
            }
          }
        },
        "extendsType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4517,
                  4518
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 105
                  },
                  "start": {
                    "column": 38,
                    "line": 105
                  }
                }
              },
              "range": [
                4517,
                4518
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 105
                },
                "start": {
                  "column": 38,
                  "line": 105
                }
              }
            },
            "range": [
              4511,
              4518
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 105
              },
              "start": {
                "column": 32,
                "line": 105
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4506,
              4507
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 105
              },
              "start": {
                "column": 27,
                "line": 105
              }
            }
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    4528,
                    4529
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 105
                    },
                    "start": {
                      "column": 49,
                      "line": 105
                    }
                  }
                },
                "out": false,
                "range": [
                  4528,
                  4529
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 105
                  },
                  "start": {
                    "column": 49,
                    "line": 105
                  }
                }
              },
              "range": [
                4522,
                4529
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 105
                },
                "start": {
                  "column": 43,
                  "line": 105
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  4538,
                  4539
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 105
                  },
                  "start": {
                    "column": 59,
                    "line": 105
                  }
                }
              },
              "range": [
                4538,
                4539
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 105
                },
                "start": {
                  "column": 59,
                  "line": 105
                }
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  4546,
                  4547
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 105
                  },
                  "start": {
                    "column": 67,
                    "line": 105
                  }
                }
              },
              "range": [
                4546,
                4547
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 105
                },
                "start": {
                  "column": 67,
                  "line": 105
                }
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  4542,
                  4543
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 105
                  },
                  "start": {
                    "column": 63,
                    "line": 105
                  }
                }
              },
              "range": [
                4542,
                4543
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 105
                },
                "start": {
                  "column": 63,
                  "line": 105
                }
              }
            },
            "range": [
              4522,
              4547
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 105
              },
              "start": {
                "column": 43,
                "line": 105
              }
            }
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                4550,
                4551
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 105
                },
                "start": {
                  "column": 71,
                  "line": 105
                }
              }
            },
            "range": [
              4550,
              4551
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 105
              },
              "start": {
                "column": 71,
                "line": 105
              }
            }
          },
          "range": [
            4503,
            4554
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 105
            },
            "start": {
              "column": 24,
              "line": 105
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              4561,
              4562
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 105
              },
              "start": {
                "column": 82,
                "line": 105
              }
            }
          },
          "range": [
            4561,
            4562
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 105
            },
            "start": {
              "column": 82,
              "line": 105
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              4557,
              4558
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 105
              },
              "start": {
                "column": 78,
                "line": 105
              }
            }
          },
          "range": [
            4557,
            4558
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 105
            },
            "start": {
              "column": 78,
              "line": 105
            }
          }
        },
        "range": [
          4493,
          4562
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 105
          },
          "start": {
            "column": 14,
            "line": 105
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 105
          },
          "start": {
            "column": 8,
            "line": 105
          }
        },
        "range": [
          4487,
          4490
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
                4488,
                4489
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 105
                },
                "start": {
                  "column": 9,
                  "line": 105
                }
              }
            },
            "out": false,
            "range": [
              4488,
              4489
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 105
              },
              "start": {
                "column": 9,
                "line": 105
              }
            }
          }
        ]
      },
      "range": [
        4479,
        4563
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X18",
        "optional": false,
        "range": [
          4598,
          4601
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 106
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
              4607,
              4608
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 106
              },
              "start": {
                "column": 14,
                "line": 106
              }
            }
          },
          "range": [
            4607,
            4608
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 106
            },
            "start": {
              "column": 14,
              "line": 106
            }
          }
        },
        "extendsType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4631,
                  4632
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 106
                  },
                  "start": {
                    "column": 38,
                    "line": 106
                  }
                }
              },
              "range": [
                4631,
                4632
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 106
                },
                "start": {
                  "column": 38,
                  "line": 106
                }
              }
            },
            "range": [
              4625,
              4632
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 106
              },
              "start": {
                "column": 32,
                "line": 106
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4620,
              4621
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 106
              },
              "start": {
                "column": 27,
                "line": 106
              }
            }
          },
          "nameType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    4652,
                    4653
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 106
                    },
                    "start": {
                      "column": 59,
                      "line": 106
                    }
                  }
                },
                "range": [
                  4652,
                  4653
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 106
                  },
                  "start": {
                    "column": 59,
                    "line": 106
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  4642,
                  4643
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 106
                  },
                  "start": {
                    "column": 49,
                    "line": 106
                  }
                }
              },
              "out": false,
              "range": [
                4642,
                4653
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 106
                },
                "start": {
                  "column": 49,
                  "line": 106
                }
              }
            },
            "range": [
              4636,
              4653
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 106
              },
              "start": {
                "column": 43,
                "line": 106
              }
            }
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                4656,
                4657
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 106
                },
                "start": {
                  "column": 63,
                  "line": 106
                }
              }
            },
            "range": [
              4656,
              4657
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 106
              },
              "start": {
                "column": 63,
                "line": 106
              }
            }
          },
          "range": [
            4617,
            4660
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 106
            },
            "start": {
              "column": 24,
              "line": 106
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              4667,
              4668
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 106
              },
              "start": {
                "column": 74,
                "line": 106
              }
            }
          },
          "range": [
            4667,
            4668
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 106
            },
            "start": {
              "column": 74,
              "line": 106
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              4663,
              4664
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 106
              },
              "start": {
                "column": 70,
                "line": 106
              }
            }
          },
          "range": [
            4663,
            4664
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 106
            },
            "start": {
              "column": 70,
              "line": 106
            }
          }
        },
        "range": [
          4607,
          4668
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 106
          },
          "start": {
            "column": 14,
            "line": 106
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 106
          },
          "start": {
            "column": 8,
            "line": 106
          }
        },
        "range": [
          4601,
          4604
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
                4602,
                4603
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 106
                },
                "start": {
                  "column": 9,
                  "line": 106
                }
              }
            },
            "out": false,
            "range": [
              4602,
              4603
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 106
              },
              "start": {
                "column": 9,
                "line": 106
              }
            }
          }
        ]
      },
      "range": [
        4593,
        4669
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 106
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19",
        "optional": false,
        "range": [
          4728,
          4731
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 108
          },
          "start": {
            "column": 5,
            "line": 108
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
              4761,
              4762
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 108
              },
              "start": {
                "column": 38,
                "line": 108
              }
            }
          },
          "range": [
            4761,
            4762
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 108
            },
            "start": {
              "column": 38,
              "line": 108
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                4788,
                4794
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 108
                },
                "start": {
                  "column": 65,
                  "line": 108
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                4778,
                4779
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 108
                },
                "start": {
                  "column": 55,
                  "line": 108
                }
              }
            },
            "out": false,
            "range": [
              4778,
              4794
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 108
              },
              "start": {
                "column": 55,
                "line": 108
              }
            }
          },
          "range": [
            4772,
            4794
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 108
            },
            "start": {
              "column": 49,
              "line": 108
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            4807,
            4812
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 108
            },
            "start": {
              "column": 84,
              "line": 108
            }
          }
        },
        "trueType": {
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
                  4799,
                  4800
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 108
                  },
                  "start": {
                    "column": 76,
                    "line": 108
                  }
                }
              },
              "range": [
                4799,
                4800
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 108
                },
                "start": {
                  "column": 76,
                  "line": 108
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
                  4802,
                  4803
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 108
                  },
                  "start": {
                    "column": 79,
                    "line": 108
                  }
                }
              },
              "range": [
                4802,
                4803
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 108
                },
                "start": {
                  "column": 79,
                  "line": 108
                }
              }
            }
          ],
          "range": [
            4798,
            4804
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 108
            },
            "start": {
              "column": 75,
              "line": 108
            }
          }
        },
        "range": [
          4761,
          4812
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 108
          },
          "start": {
            "column": 38,
            "line": 108
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 108
          },
          "start": {
            "column": 8,
            "line": 108
          }
        },
        "range": [
          4731,
          4758
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4742,
                    4748
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 108
                    },
                    "start": {
                      "column": 19,
                      "line": 108
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4751,
                    4757
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 108
                    },
                    "start": {
                      "column": 28,
                      "line": 108
                    }
                  }
                }
              ],
              "range": [
                4742,
                4757
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 108
                },
                "start": {
                  "column": 19,
                  "line": 108
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
                4732,
                4733
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 108
                },
                "start": {
                  "column": 9,
                  "line": 108
                }
              }
            },
            "out": false,
            "range": [
              4732,
              4757
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 108
              },
              "start": {
                "column": 9,
                "line": 108
              }
            }
          }
        ]
      },
      "range": [
        4723,
        4813
      ],
      "loc": {
        "end": {
          "column": 90,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 108
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T1",
        "optional": false,
        "range": [
          4819,
          4825
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 109
          },
          "start": {
            "column": 5,
            "line": 109
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4831,
            4836
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  4832,
                  4835
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 109
                  },
                  "start": {
                    "column": 18,
                    "line": 109
                  }
                }
              },
              "range": [
                4832,
                4835
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 109
                },
                "start": {
                  "column": 18,
                  "line": 109
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 109
            },
            "start": {
              "column": 17,
              "line": 109
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "range": [
            4828,
            4831
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 109
            },
            "start": {
              "column": 14,
              "line": 109
            }
          }
        },
        "range": [
          4828,
          4836
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 109
          },
          "start": {
            "column": 14,
            "line": 109
          }
        }
      },
      "range": [
        4814,
        4837
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T2",
        "optional": false,
        "range": [
          4852,
          4858
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 110
          },
          "start": {
            "column": 5,
            "line": 110
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4864,
            4867
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  4865,
                  4866
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 110
                  },
                  "start": {
                    "column": 18,
                    "line": 110
                  }
                }
              },
              "range": [
                4865,
                4866
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 110
                },
                "start": {
                  "column": 18,
                  "line": 110
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 110
            },
            "start": {
              "column": 17,
              "line": 110
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "range": [
            4861,
            4864
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 110
            },
            "start": {
              "column": 14,
              "line": 110
            }
          }
        },
        "range": [
          4861,
          4867
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 110
          },
          "start": {
            "column": 14,
            "line": 110
          }
        }
      },
      "range": [
        4847,
        4868
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T3",
        "optional": false,
        "range": [
          4884,
          4890
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 111
          },
          "start": {
            "column": 5,
            "line": 111
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4896,
            4905
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      4897,
                      4898
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 111
                      },
                      "start": {
                        "column": 18,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    4897,
                    4898
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 111
                    },
                    "start": {
                      "column": 18,
                      "line": 111
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      4901,
                      4904
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 111
                      },
                      "start": {
                        "column": 22,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    4901,
                    4904
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 111
                    },
                    "start": {
                      "column": 22,
                      "line": 111
                    }
                  }
                }
              ],
              "range": [
                4897,
                4904
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 111
                },
                "start": {
                  "column": 18,
                  "line": 111
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 111
            },
            "start": {
              "column": 17,
              "line": 111
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "range": [
            4893,
            4896
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 111
            },
            "start": {
              "column": 14,
              "line": 111
            }
          }
        },
        "range": [
          4893,
          4905
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 111
          },
          "start": {
            "column": 14,
            "line": 111
          }
        }
      },
      "range": [
        4879,
        4906
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X20",
        "optional": false,
        "range": [
          4923,
          4926
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 113
          },
          "start": {
            "column": 5,
            "line": 113
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
              4932,
              4933
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 113
              },
              "start": {
                "column": 14,
                "line": 113
              }
            }
          },
          "range": [
            4932,
            4933
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 113
            },
            "start": {
              "column": 14,
              "line": 113
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                4959,
                4965
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 113
                },
                "start": {
                  "column": 41,
                  "line": 113
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                4949,
                4950
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 113
                },
                "start": {
                  "column": 31,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              4949,
              4965
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 113
              },
              "start": {
                "column": 31,
                "line": 113
              }
            }
          },
          "range": [
            4943,
            4965
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 113
            },
            "start": {
              "column": 25,
              "line": 113
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            5021,
            5026
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 113
            },
            "start": {
              "column": 103,
              "line": 113
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                4969,
                4970
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 113
                },
                "start": {
                  "column": 51,
                  "line": 113
                }
              }
            },
            "range": [
              4969,
              4970
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 113
              },
              "start": {
                "column": 51,
                "line": 113
              }
            }
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    4996,
                    4997
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 113
                    },
                    "start": {
                      "column": 78,
                      "line": 113
                    }
                  }
                },
                "range": [
                  4996,
                  4997
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 113
                  },
                  "start": {
                    "column": 78,
                    "line": 113
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  4986,
                  4987
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 113
                  },
                  "start": {
                    "column": 68,
                    "line": 113
                  }
                }
              },
              "out": false,
              "range": [
                4986,
                4997
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 113
                },
                "start": {
                  "column": 68,
                  "line": 113
                }
              }
            },
            "range": [
              4980,
              4997
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 113
              },
              "start": {
                "column": 62,
                "line": 113
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              5013,
              5018
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 113
              },
              "start": {
                "column": 95,
                "line": 113
              }
            }
          },
          "trueType": {
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
                    5002,
                    5003
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 113
                    },
                    "start": {
                      "column": 84,
                      "line": 113
                    }
                  }
                },
                "range": [
                  5002,
                  5003
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 113
                  },
                  "start": {
                    "column": 84,
                    "line": 113
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
                    5005,
                    5006
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 113
                    },
                    "start": {
                      "column": 87,
                      "line": 113
                    }
                  }
                },
                "range": [
                  5005,
                  5006
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 113
                  },
                  "start": {
                    "column": 87,
                    "line": 113
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    5008,
                    5009
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 113
                    },
                    "start": {
                      "column": 90,
                      "line": 113
                    }
                  }
                },
                "range": [
                  5008,
                  5009
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 113
                  },
                  "start": {
                    "column": 90,
                    "line": 113
                  }
                }
              }
            ],
            "range": [
              5001,
              5010
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 113
              },
              "start": {
                "column": 83,
                "line": 113
              }
            }
          },
          "range": [
            4969,
            5018
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 113
            },
            "start": {
              "column": 51,
              "line": 113
            }
          }
        },
        "range": [
          4932,
          5026
        ],
        "loc": {
          "end": {
            "column": 108,
            "line": 113
          },
          "start": {
            "column": 14,
            "line": 113
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 113
          },
          "start": {
            "column": 8,
            "line": 113
          }
        },
        "range": [
          4926,
          4929
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
                4927,
                4928
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 113
                },
                "start": {
                  "column": 9,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              4927,
              4928
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 113
              },
              "start": {
                "column": 9,
                "line": 113
              }
            }
          }
        ]
      },
      "range": [
        4918,
        5027
      ],
      "loc": {
        "end": {
          "column": 109,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X20_T1",
        "optional": false,
        "range": [
          5033,
          5039
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 114
          },
          "start": {
            "column": 5,
            "line": 114
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5045,
            5054
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      5046,
                      5047
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 114
                      },
                      "start": {
                        "column": 18,
                        "line": 114
                      }
                    }
                  },
                  "range": [
                    5046,
                    5047
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 114
                    },
                    "start": {
                      "column": 18,
                      "line": 114
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      5050,
                      5053
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 114
                      },
                      "start": {
                        "column": 22,
                        "line": 114
                      }
                    }
                  },
                  "range": [
                    5050,
                    5053
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 114
                    },
                    "start": {
                      "column": 22,
                      "line": 114
                    }
                  }
                }
              ],
              "range": [
                5046,
                5053
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 114
                },
                "start": {
                  "column": 18,
                  "line": 114
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 114
            },
            "start": {
              "column": 17,
              "line": 114
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X20",
          "optional": false,
          "range": [
            5042,
            5045
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 114
            },
            "start": {
              "column": 14,
              "line": 114
            }
          }
        },
        "range": [
          5042,
          5054
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 114
          },
          "start": {
            "column": 14,
            "line": 114
          }
        }
      },
      "range": [
        5028,
        5055
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 114
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21",
        "optional": false,
        "range": [
          5075,
          5078
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 116
          },
          "start": {
            "column": 5,
            "line": 116
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
              5102,
              5103
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 116
              },
              "start": {
                "column": 32,
                "line": 116
              }
            }
          },
          "range": [
            5102,
            5103
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 116
            },
            "start": {
              "column": 32,
              "line": 116
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "range": [
                  5129,
                  5130
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 116
                  },
                  "start": {
                    "column": 59,
                    "line": 116
                  }
                }
              },
              "range": [
                5129,
                5130
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 116
                },
                "start": {
                  "column": 59,
                  "line": 116
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                5119,
                5120
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 116
                },
                "start": {
                  "column": 49,
                  "line": 116
                }
              }
            },
            "out": false,
            "range": [
              5119,
              5130
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 116
              },
              "start": {
                "column": 49,
                "line": 116
              }
            }
          },
          "range": [
            5113,
            5130
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 116
            },
            "start": {
              "column": 43,
              "line": 116
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            5143,
            5148
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 116
            },
            "start": {
              "column": 73,
              "line": 116
            }
          }
        },
        "trueType": {
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
                  5135,
                  5136
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 116
                  },
                  "start": {
                    "column": 65,
                    "line": 116
                  }
                }
              },
              "range": [
                5135,
                5136
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 116
                },
                "start": {
                  "column": 65,
                  "line": 116
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
                  5138,
                  5139
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 116
                  },
                  "start": {
                    "column": 68,
                    "line": 116
                  }
                }
              },
              "range": [
                5138,
                5139
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 116
                },
                "start": {
                  "column": 68,
                  "line": 116
                }
              }
            }
          ],
          "range": [
            5134,
            5140
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 116
            },
            "start": {
              "column": 64,
              "line": 116
            }
          }
        },
        "range": [
          5102,
          5148
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 116
          },
          "start": {
            "column": 32,
            "line": 116
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 116
          },
          "start": {
            "column": 8,
            "line": 116
          }
        },
        "range": [
          5078,
          5099
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
                5079,
                5080
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 116
                },
                "start": {
                  "column": 9,
                  "line": 116
                }
              }
            },
            "out": false,
            "range": [
              5079,
              5080
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 116
              },
              "start": {
                "column": 9,
                "line": 116
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                5092,
                5098
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 116
                },
                "start": {
                  "column": 22,
                  "line": 116
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                5082,
                5083
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 116
                },
                "start": {
                  "column": 12,
                  "line": 116
                }
              }
            },
            "out": false,
            "range": [
              5082,
              5098
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 116
              },
              "start": {
                "column": 12,
                "line": 116
              }
            }
          }
        ]
      },
      "range": [
        5070,
        5149
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 116
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T1",
        "optional": false,
        "range": [
          5155,
          5161
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 117
          },
          "start": {
            "column": 5,
            "line": 117
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5167,
            5173
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  5168,
                  5169
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 117
                  },
                  "start": {
                    "column": 18,
                    "line": 117
                  }
                }
              },
              "range": [
                5168,
                5169
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 117
                },
                "start": {
                  "column": 18,
                  "line": 117
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  5171,
                  5172
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 117
                  },
                  "start": {
                    "column": 21,
                    "line": 117
                  }
                }
              },
              "range": [
                5171,
                5172
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 117
                },
                "start": {
                  "column": 21,
                  "line": 117
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 117
            },
            "start": {
              "column": 17,
              "line": 117
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "range": [
            5164,
            5167
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 117
            },
            "start": {
              "column": 14,
              "line": 117
            }
          }
        },
        "range": [
          5164,
          5173
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 117
          },
          "start": {
            "column": 14,
            "line": 117
          }
        }
      },
      "range": [
        5150,
        5174
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T2",
        "optional": false,
        "range": [
          5190,
          5196
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 118
          },
          "start": {
            "column": 5,
            "line": 118
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5202,
            5214
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      5203,
                      5204
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 118
                      },
                      "start": {
                        "column": 18,
                        "line": 118
                      }
                    }
                  },
                  "range": [
                    5203,
                    5204
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 118
                    },
                    "start": {
                      "column": 18,
                      "line": 118
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      5207,
                      5210
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 118
                      },
                      "start": {
                        "column": 22,
                        "line": 118
                      }
                    }
                  },
                  "range": [
                    5207,
                    5210
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 118
                    },
                    "start": {
                      "column": 22,
                      "line": 118
                    }
                  }
                }
              ],
              "range": [
                5203,
                5210
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 118
                },
                "start": {
                  "column": 18,
                  "line": 118
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  5212,
                  5213
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 118
                  },
                  "start": {
                    "column": 27,
                    "line": 118
                  }
                }
              },
              "range": [
                5212,
                5213
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 118
                },
                "start": {
                  "column": 27,
                  "line": 118
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 118
            },
            "start": {
              "column": 17,
              "line": 118
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "range": [
            5199,
            5202
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 118
            },
            "start": {
              "column": 14,
              "line": 118
            }
          }
        },
        "range": [
          5199,
          5214
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 118
          },
          "start": {
            "column": 14,
            "line": 118
          }
        }
      },
      "range": [
        5185,
        5215
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T3",
        "optional": false,
        "range": [
          5231,
          5237
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 119
          },
          "start": {
            "column": 5,
            "line": 119
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5243,
            5253
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      5244,
                      5245
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 119
                      },
                      "start": {
                        "column": 18,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    5244,
                    5245
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 119
                    },
                    "start": {
                      "column": 18,
                      "line": 119
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      5248,
                      5249
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 119
                      },
                      "start": {
                        "column": 22,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    5248,
                    5249
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 119
                    },
                    "start": {
                      "column": 22,
                      "line": 119
                    }
                  }
                }
              ],
              "range": [
                5244,
                5249
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 119
                },
                "start": {
                  "column": 18,
                  "line": 119
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  5251,
                  5252
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 119
                  },
                  "start": {
                    "column": 25,
                    "line": 119
                  }
                }
              },
              "range": [
                5251,
                5252
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 119
                },
                "start": {
                  "column": 25,
                  "line": 119
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 119
            },
            "start": {
              "column": 17,
              "line": 119
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "range": [
            5240,
            5243
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 119
            },
            "start": {
              "column": 14,
              "line": 119
            }
          }
        },
        "range": [
          5240,
          5253
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 119
          },
          "start": {
            "column": 14,
            "line": 119
          }
        }
      },
      "range": [
        5226,
        5254
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T4",
        "optional": false,
        "range": [
          5270,
          5276
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 120
          },
          "start": {
            "column": 5,
            "line": 120
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5282,
            5296
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      5283,
                      5284
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 120
                      },
                      "start": {
                        "column": 18,
                        "line": 120
                      }
                    }
                  },
                  "range": [
                    5283,
                    5284
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 120
                    },
                    "start": {
                      "column": 18,
                      "line": 120
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      5287,
                      5288
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 120
                      },
                      "start": {
                        "column": 22,
                        "line": 120
                      }
                    }
                  },
                  "range": [
                    5287,
                    5288
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 120
                    },
                    "start": {
                      "column": 22,
                      "line": 120
                    }
                  }
                }
              ],
              "range": [
                5283,
                5288
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 120
                },
                "start": {
                  "column": 18,
                  "line": 120
                }
              }
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      5290,
                      5291
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 120
                      },
                      "start": {
                        "column": 25,
                        "line": 120
                      }
                    }
                  },
                  "range": [
                    5290,
                    5291
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 120
                    },
                    "start": {
                      "column": 25,
                      "line": 120
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      5294,
                      5295
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 120
                      },
                      "start": {
                        "column": 29,
                        "line": 120
                      }
                    }
                  },
                  "range": [
                    5294,
                    5295
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 120
                    },
                    "start": {
                      "column": 29,
                      "line": 120
                    }
                  }
                }
              ],
              "range": [
                5290,
                5295
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 120
                },
                "start": {
                  "column": 25,
                  "line": 120
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 120
            },
            "start": {
              "column": 17,
              "line": 120
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "range": [
            5279,
            5282
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 120
            },
            "start": {
              "column": 14,
              "line": 120
            }
          }
        },
        "range": [
          5279,
          5296
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 120
          },
          "start": {
            "column": 14,
            "line": 120
          }
        }
      },
      "range": [
        5265,
        5297
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 120
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T5",
        "optional": false,
        "range": [
          5313,
          5319
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 121
          },
          "start": {
            "column": 5,
            "line": 121
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5325,
            5335
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      5326,
                      5327
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 121
                      },
                      "start": {
                        "column": 18,
                        "line": 121
                      }
                    }
                  },
                  "range": [
                    5326,
                    5327
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 121
                    },
                    "start": {
                      "column": 18,
                      "line": 121
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      5330,
                      5331
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 121
                      },
                      "start": {
                        "column": 22,
                        "line": 121
                      }
                    }
                  },
                  "range": [
                    5330,
                    5331
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 121
                    },
                    "start": {
                      "column": 22,
                      "line": 121
                    }
                  }
                }
              ],
              "range": [
                5326,
                5331
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 121
                },
                "start": {
                  "column": 18,
                  "line": 121
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  5333,
                  5334
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 121
                  },
                  "start": {
                    "column": 25,
                    "line": 121
                  }
                }
              },
              "range": [
                5333,
                5334
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 121
                },
                "start": {
                  "column": 25,
                  "line": 121
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 121
            },
            "start": {
              "column": 17,
              "line": 121
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "range": [
            5322,
            5325
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 121
            },
            "start": {
              "column": 14,
              "line": 121
            }
          }
        },
        "range": [
          5322,
          5335
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 121
          },
          "start": {
            "column": 14,
            "line": 121
          }
        }
      },
      "range": [
        5308,
        5336
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IfEquals",
        "optional": false,
        "range": [
          5369,
          5377
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 124
          },
          "start": {
            "column": 5,
            "line": 124
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 124
              },
              "start": {
                "column": 35,
                "line": 124
              }
            },
            "range": [
              5399,
              5421
            ],
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
                    5402,
                    5403
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 124
                    },
                    "start": {
                      "column": 38,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5402,
                  5403
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 124
                  },
                  "start": {
                    "column": 38,
                    "line": 124
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    5412,
                    5413
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 124
                    },
                    "start": {
                      "column": 48,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5412,
                  5413
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 124
                  },
                  "start": {
                    "column": 48,
                    "line": 124
                  }
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    5420,
                    5421
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 124
                    },
                    "start": {
                      "column": 56,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5420,
                  5421
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 124
                  },
                  "start": {
                    "column": 56,
                    "line": 124
                  }
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    5416,
                    5417
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 124
                    },
                    "start": {
                      "column": 52,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5416,
                  5417
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 124
                  },
                  "start": {
                    "column": 52,
                    "line": 124
                  }
                }
              },
              "range": [
                5402,
                5421
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 124
                },
                "start": {
                  "column": 38,
                  "line": 124
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 32,
                "line": 124
              },
              "start": {
                "column": 29,
                "line": 124
              }
            },
            "range": [
              5393,
              5396
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
                    5394,
                    5395
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 124
                    },
                    "start": {
                      "column": 30,
                      "line": 124
                    }
                  }
                },
                "out": false,
                "range": [
                  5394,
                  5395
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 124
                  },
                  "start": {
                    "column": 30,
                    "line": 124
                  }
                }
              }
            ]
          },
          "range": [
            5393,
            5421
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 124
            },
            "start": {
              "column": 29,
              "line": 124
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 95,
                "line": 124
              },
              "start": {
                "column": 73,
                "line": 124
              }
            },
            "range": [
              5437,
              5459
            ],
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
                    5440,
                    5441
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 124
                    },
                    "start": {
                      "column": 76,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5440,
                  5441
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 124
                  },
                  "start": {
                    "column": 76,
                    "line": 124
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    5450,
                    5451
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 124
                    },
                    "start": {
                      "column": 86,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5450,
                  5451
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 124
                  },
                  "start": {
                    "column": 86,
                    "line": 124
                  }
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    5458,
                    5459
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 124
                    },
                    "start": {
                      "column": 94,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5458,
                  5459
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 124
                  },
                  "start": {
                    "column": 94,
                    "line": 124
                  }
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    5454,
                    5455
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 124
                    },
                    "start": {
                      "column": 90,
                      "line": 124
                    }
                  }
                },
                "range": [
                  5454,
                  5455
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 124
                  },
                  "start": {
                    "column": 90,
                    "line": 124
                  }
                }
              },
              "range": [
                5440,
                5459
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 124
                },
                "start": {
                  "column": 76,
                  "line": 124
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 70,
                "line": 124
              },
              "start": {
                "column": 67,
                "line": 124
              }
            },
            "range": [
              5431,
              5434
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
                    5432,
                    5433
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 124
                    },
                    "start": {
                      "column": 68,
                      "line": 124
                    }
                  }
                },
                "out": false,
                "range": [
                  5432,
                  5433
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 124
                  },
                  "start": {
                    "column": 68,
                    "line": 124
                  }
                }
              }
            ]
          },
          "range": [
            5431,
            5459
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 124
            },
            "start": {
              "column": 67,
              "line": 124
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              5466,
              5467
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 124
              },
              "start": {
                "column": 102,
                "line": 124
              }
            }
          },
          "range": [
            5466,
            5467
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 124
            },
            "start": {
              "column": 102,
              "line": 124
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              5462,
              5463
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 124
              },
              "start": {
                "column": 98,
                "line": 124
              }
            }
          },
          "range": [
            5462,
            5463
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 124
            },
            "start": {
              "column": 98,
              "line": 124
            }
          }
        },
        "range": [
          5392,
          5467
        ],
        "loc": {
          "end": {
            "column": 103,
            "line": 124
          },
          "start": {
            "column": 28,
            "line": 124
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 124
          },
          "start": {
            "column": 13,
            "line": 124
          }
        },
        "range": [
          5377,
          5389
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                5378,
                5379
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 124
                },
                "start": {
                  "column": 14,
                  "line": 124
                }
              }
            },
            "out": false,
            "range": [
              5378,
              5379
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 124
              },
              "start": {
                "column": 14,
                "line": 124
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
              "name": "Y",
              "optional": false,
              "range": [
                5381,
                5382
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 124
                },
                "start": {
                  "column": 17,
                  "line": 124
                }
              }
            },
            "out": false,
            "range": [
              5381,
              5382
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 124
              },
              "start": {
                "column": 17,
                "line": 124
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
              "name": "A",
              "optional": false,
              "range": [
                5384,
                5385
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 124
                },
                "start": {
                  "column": 20,
                  "line": 124
                }
              }
            },
            "out": false,
            "range": [
              5384,
              5385
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 124
              },
              "start": {
                "column": 20,
                "line": 124
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
              "name": "B",
              "optional": false,
              "range": [
                5387,
                5388
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 124
                },
                "start": {
                  "column": 23,
                  "line": 124
                }
              }
            },
            "out": false,
            "range": [
              5387,
              5388
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 124
              },
              "start": {
                "column": 23,
                "line": 124
              }
            }
          }
        ]
      },
      "range": [
        5364,
        5468
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 124
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 126
                },
                "start": {
                  "column": 16,
                  "line": 126
                }
              },
              "range": [
                5486,
                5539
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 126
                    },
                    "start": {
                      "column": 24,
                      "line": 126
                    }
                  },
                  "range": [
                    5494,
                    5539
                  ],
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
                          5498,
                          5499
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 126
                          },
                          "start": {
                            "column": 28,
                            "line": 126
                          }
                        }
                      },
                      "range": [
                        5498,
                        5499
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 126
                        },
                        "start": {
                          "column": 28,
                          "line": 126
                        }
                      }
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "constraint": {
                          "type": "TSNumberKeyword",
                          "range": [
                            5524,
                            5530
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 126
                            },
                            "start": {
                              "column": 54,
                              "line": 126
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            5514,
                            5515
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 126
                            },
                            "start": {
                              "column": 44,
                              "line": 126
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          5514,
                          5530
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 126
                          },
                          "start": {
                            "column": 44,
                            "line": 126
                          }
                        }
                      },
                      "range": [
                        5508,
                        5530
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 126
                        },
                        "start": {
                          "column": 38,
                          "line": 126
                        }
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          5537,
                          5538
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 126
                          },
                          "start": {
                            "column": 67,
                            "line": 126
                          }
                        }
                      },
                      "range": [
                        5537,
                        5538
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 126
                        },
                        "start": {
                          "column": 67,
                          "line": 126
                        }
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          5533,
                          5534
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 126
                          },
                          "start": {
                            "column": 63,
                            "line": 126
                          }
                        }
                      },
                      "range": [
                        5533,
                        5534
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 126
                        },
                        "start": {
                          "column": 63,
                          "line": 126
                        }
                      }
                    },
                    "range": [
                      5498,
                      5538
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 126
                      },
                      "start": {
                        "column": 28,
                        "line": 126
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 126
                    },
                    "start": {
                      "column": 18,
                      "line": 126
                    }
                  },
                  "range": [
                    5488,
                    5491
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
                          5489,
                          5490
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 126
                          },
                          "start": {
                            "column": 19,
                            "line": 126
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        5489,
                        5490
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 126
                        },
                        "start": {
                          "column": 19,
                          "line": 126
                        }
                      }
                    }
                  ]
                },
                "range": [
                  5488,
                  5539
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 126
                  },
                  "start": {
                    "column": 18,
                    "line": 126
                  }
                }
              }
            },
            "range": [
              5484,
              5539
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 126
              },
              "start": {
                "column": 14,
                "line": 126
              }
            }
          },
          "init": null,
          "range": [
            5484,
            5539
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 126
            },
            "start": {
              "column": 14,
              "line": 126
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        5470,
        5540
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 126
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
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "range": [
                5568,
                5570
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 128
                },
                "start": {
                  "column": 11,
                  "line": 128
                }
              }
            },
            "range": [
              5561,
              5571
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 128
              }
            }
          }
        ],
        "range": [
          5555,
          5573
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 129
          },
          "start": {
            "column": 14,
            "line": 127
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          5550,
          5552
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 127
          },
          "start": {
            "column": 9,
            "line": 127
          }
        }
      },
      "params": [],
      "range": [
        5541,
        5573
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 127
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpectNumber",
        "optional": false,
        "range": [
          5580,
          5592
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 131
          },
          "start": {
            "column": 5,
            "line": 131
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            5613,
            5614
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 131
            },
            "start": {
              "column": 38,
              "line": 131
            }
          }
        },
        "range": [
          5613,
          5614
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 131
          },
          "start": {
            "column": 38,
            "line": 131
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 131
          },
          "start": {
            "column": 17,
            "line": 131
          }
        },
        "range": [
          5592,
          5610
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                5603,
                5609
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 131
                },
                "start": {
                  "column": 28,
                  "line": 131
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
                5593,
                5594
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 131
                },
                "start": {
                  "column": 18,
                  "line": 131
                }
              }
            },
            "out": false,
            "range": [
              5593,
              5609
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 131
              },
              "start": {
                "column": 18,
                "line": 131
              }
            }
          }
        ]
      },
      "range": [
        5575,
        5615
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 131
        },
        "start": {
          "column": 0,
          "line": 131
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
                  "column": 68,
                  "line": 132
                },
                "start": {
                  "column": 16,
                  "line": 132
                }
              },
              "range": [
                5632,
                5684
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 132
                    },
                    "start": {
                      "column": 24,
                      "line": 132
                    }
                  },
                  "range": [
                    5640,
                    5684
                  ],
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
                          5644,
                          5645
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 132
                          },
                          "start": {
                            "column": 28,
                            "line": 132
                          }
                        }
                      },
                      "range": [
                        5644,
                        5645
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 132
                        },
                        "start": {
                          "column": 28,
                          "line": 132
                        }
                      }
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          5666,
                          5675
                        ],
                        "params": [
                          {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "const": false,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  5673,
                                  5674
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 132
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 132
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                5673,
                                5674
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 132
                                },
                                "start": {
                                  "column": 57,
                                  "line": 132
                                }
                              }
                            },
                            "range": [
                              5667,
                              5674
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 132
                              },
                              "start": {
                                "column": 51,
                                "line": 132
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 132
                          },
                          "start": {
                            "column": 50,
                            "line": 132
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExpectNumber",
                        "optional": false,
                        "range": [
                          5654,
                          5666
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 132
                          },
                          "start": {
                            "column": 38,
                            "line": 132
                          }
                        }
                      },
                      "range": [
                        5654,
                        5675
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 132
                        },
                        "start": {
                          "column": 38,
                          "line": 132
                        }
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          5682,
                          5683
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 132
                          },
                          "start": {
                            "column": 66,
                            "line": 132
                          }
                        }
                      },
                      "range": [
                        5682,
                        5683
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 132
                        },
                        "start": {
                          "column": 66,
                          "line": 132
                        }
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          5678,
                          5679
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 132
                          },
                          "start": {
                            "column": 62,
                            "line": 132
                          }
                        }
                      },
                      "range": [
                        5678,
                        5679
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 132
                        },
                        "start": {
                          "column": 62,
                          "line": 132
                        }
                      }
                    },
                    "range": [
                      5644,
                      5683
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 132
                      },
                      "start": {
                        "column": 28,
                        "line": 132
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 132
                    },
                    "start": {
                      "column": 18,
                      "line": 132
                    }
                  },
                  "range": [
                    5634,
                    5637
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
                          5635,
                          5636
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 132
                          },
                          "start": {
                            "column": 19,
                            "line": 132
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        5635,
                        5636
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 132
                        },
                        "start": {
                          "column": 19,
                          "line": 132
                        }
                      }
                    }
                  ]
                },
                "range": [
                  5634,
                  5684
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 132
                  },
                  "start": {
                    "column": 18,
                    "line": 132
                  }
                }
              }
            },
            "range": [
              5630,
              5684
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 132
              },
              "start": {
                "column": 14,
                "line": 132
              }
            }
          },
          "init": null,
          "range": [
            5630,
            5684
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 132
            },
            "start": {
              "column": 14,
              "line": 132
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        5616,
        5685
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 132
        },
        "start": {
          "column": 0,
          "line": 132
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
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "range": [
                5713,
                5715
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 134
                },
                "start": {
                  "column": 11,
                  "line": 134
                }
              }
            },
            "range": [
              5706,
              5716
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 134
              },
              "start": {
                "column": 4,
                "line": 134
              }
            }
          }
        ],
        "range": [
          5700,
          5718
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 135
          },
          "start": {
            "column": 14,
            "line": 133
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          5695,
          5697
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 133
          },
          "start": {
            "column": 9,
            "line": 133
          }
        }
      },
      "params": [],
      "range": [
        5686,
        5718
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 133
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 135
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
