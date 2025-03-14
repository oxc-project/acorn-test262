__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    497
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                16,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
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
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              },
              "range": [
                21,
                24
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    23,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                },
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              16,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "range": [
          14,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        },
        "range": [
          8,
          11
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
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "name": "Boxify",
        "optional": false,
        "range": [
          33,
          39
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
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
              "name": "T",
              "optional": false,
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 31,
                  "line": 2
                }
              }
            },
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 31,
                "line": 2
              }
            }
          },
          "range": [
            53,
            60
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            48,
            49
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              66,
              72
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      69,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 2
                      },
                      "start": {
                        "column": 41,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    69,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 41,
                      "line": 2
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      67,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 39,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    67,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 2
                    },
                    "start": {
                      "column": 39,
                      "line": 2
                    }
                  }
                },
                "range": [
                  67,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 2
                  },
                  "start": {
                    "column": 39,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 2
              },
              "start": {
                "column": 38,
                "line": 2
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              63,
              66
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 2
              },
              "start": {
                "column": 35,
                "line": 2
              }
            }
          },
          "range": [
            63,
            72
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 2
            },
            "start": {
              "column": 35,
              "line": 2
            }
          }
        },
        "range": [
          45,
          74
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        },
        "range": [
          39,
          42
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
                40,
                41
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
            "out": false,
            "range": [
              40,
              41
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
        ]
      },
      "range": [
        28,
        75
      ],
      "loc": {
        "end": {
          "column": 47,
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
        "name": "T1",
        "optional": false,
        "range": [
          82,
          84
        ],
        "loc": {
          "end": {
            "column": 7,
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
            93,
            103
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  94,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "range": [
                94,
                102
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "range": [
            87,
            93
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 4
            },
            "start": {
              "column": 10,
              "line": 4
            }
          }
        },
        "range": [
          87,
          103
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        77,
        104
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "name": "T2",
        "optional": false,
        "range": [
          110,
          112
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            121,
            139
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    123,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    131,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                122,
                138
              ],
              "loc": {
                "end": {
                  "column": 33,
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
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "range": [
            115,
            121
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 5
            },
            "start": {
              "column": 10,
              "line": 5
            }
          }
        },
        "range": [
          115,
          139
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        105,
        140
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "range": [
          146,
          148
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            157,
            179
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      158,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    158,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      169,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    169,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
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
                158,
                178
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "range": [
            151,
            157
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 6
            },
            "start": {
              "column": 10,
              "line": 6
            }
          }
        },
        "range": [
          151,
          179
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        141,
        180
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "name": "T4",
        "optional": false,
        "range": [
          186,
          188
        ],
        "loc": {
          "end": {
            "column": 7,
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
            197,
            226
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      198,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    198,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        210,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 7
                        },
                        "start": {
                          "column": 29,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        218,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 7
                        },
                        "start": {
                          "column": 37,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    209,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                198,
                225
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "range": [
            191,
            197
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 7
            },
            "start": {
              "column": 10,
              "line": 7
            }
          }
        },
        "range": [
          191,
          226
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        181,
        227
      ],
      "loc": {
        "end": {
          "column": 46,
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
        "name": "T5",
        "optional": false,
        "range": [
          233,
          235
        ],
        "loc": {
          "end": {
            "column": 7,
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
            244,
            270
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      245,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    245,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 17,
                      "line": 8
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          258,
                          259
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
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 8
                          },
                          "start": {
                            "column": 31,
                            "line": 8
                          }
                        },
                        "range": [
                          259,
                          267
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            261,
                            267
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 8
                            },
                            "start": {
                              "column": 33,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        258,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 8
                        },
                        "start": {
                          "column": 30,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    256,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                245,
                269
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "range": [
            238,
            244
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
        },
        "range": [
          238,
          270
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        228,
        271
      ],
      "loc": {
        "end": {
          "column": 43,
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
        "name": "MustBeArray",
        "optional": false,
        "range": [
          335,
          346
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
            366,
            367
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 12
            },
            "start": {
              "column": 36,
              "line": 12
            }
          }
        },
        "range": [
          366,
          367
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 12
          },
          "start": {
            "column": 36,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 12
          },
          "start": {
            "column": 16,
            "line": 12
          }
        },
        "range": [
          346,
          363
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
                  357,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 12
                  }
                }
              },
              "range": [
                357,
                362
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 12
                },
                "start": {
                  "column": 27,
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
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              347,
              362
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 12
              },
              "start": {
                "column": 17,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        330,
        368
      ],
      "loc": {
        "end": {
          "column": 38,
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
        "name": "Hmm",
        "optional": false,
        "range": [
          375,
          378
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
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
              398,
              399
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 14
              },
              "start": {
                "column": 28,
                "line": 14
              }
            }
          },
          "range": [
            398,
            399
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 14
            },
            "start": {
              "column": 28,
              "line": 14
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSNumberKeyword",
            "range": [
              408,
              414
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 14
              },
              "start": {
                "column": 38,
                "line": 14
              }
            }
          },
          "range": [
            408,
            416
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 14
            },
            "start": {
              "column": 38,
              "line": 14
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            464,
            469
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              434,
              457
            ],
            "params": [
              {
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
                        449,
                        450
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
                      449,
                      450
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
                    443,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 15
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    438,
                    439
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
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      453,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 15
                      },
                      "start": {
                        "column": 34,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    453,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 15
                    },
                    "start": {
                      "column": 34,
                      "line": 15
                    }
                  }
                },
                "range": [
                  435,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MustBeArray",
            "optional": false,
            "range": [
              423,
              434
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "range": [
            423,
            457
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "range": [
          398,
          469
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 16
          },
          "start": {
            "column": 28,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 14
          }
        },
        "range": [
          378,
          395
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
                  389,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 14
                  },
                  "start": {
                    "column": 19,
                    "line": 14
                  }
                }
              },
              "range": [
                389,
                394
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 14
                },
                "start": {
                  "column": 19,
                  "line": 14
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
                379,
                380
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              379,
              394
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
        ]
      },
      "range": [
        370,
        470
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          477,
          478
        ],
        "loc": {
          "end": {
            "column": 6,
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
            484,
            495
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      486,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    486,
                    487
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "4",
                    "value": 4,
                    "range": [
                      489,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    489,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      492,
                      493
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
                    492,
                    493
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
              ],
              "range": [
                485,
                494
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 13,
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
              "column": 12,
              "line": 18
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Hmm",
          "optional": false,
          "range": [
            481,
            484
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 18
            },
            "start": {
              "column": 9,
              "line": 18
            }
          }
        },
        "range": [
          481,
          495
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "range": [
        472,
        496
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
