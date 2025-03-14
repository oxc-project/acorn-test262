__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3145
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
        "name": "Boxified",
        "optional": false,
        "range": [
          33,
          41
        ],
        "loc": {
          "end": {
            "column": 13,
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
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 2
                },
                "start": {
                  "column": 33,
                  "line": 2
                }
              }
            },
            "range": [
              61,
              62
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 33,
                "line": 2
              }
            }
          },
          "range": [
            55,
            62
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 27,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            50,
            51
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 2
            },
            "start": {
              "column": 22,
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
              68,
              74
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      71,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 2
                      },
                      "start": {
                        "column": 43,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    71,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 2
                    },
                    "start": {
                      "column": 43,
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
                "range": [
                  69,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 2
              },
              "start": {
                "column": 40,
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
              65,
              68
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
          },
          "range": [
            65,
            74
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 2
            },
            "start": {
              "column": 37,
              "line": 2
            }
          }
        },
        "range": [
          47,
          76
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
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
          41,
          44
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
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              42,
              43
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        28,
        77
      ],
      "loc": {
        "end": {
          "column": 49,
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
        "name": "T00",
        "optional": false,
        "range": [
          84,
          87
        ],
        "loc": {
          "end": {
            "column": 8,
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
            131
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    100,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      108,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    108,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 29,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        120,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 4
                        },
                        "start": {
                          "column": 41,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      120,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 4
                      },
                      "start": {
                        "column": 41,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    117,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 4
                    },
                    "start": {
                      "column": 38,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                99,
                130
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 52,
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
          "name": "Boxified",
          "optional": false,
          "range": [
            90,
            98
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 11,
              "line": 4
            }
          }
        },
        "range": [
          90,
          131
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "range": [
        79,
        132
      ],
      "loc": {
        "end": {
          "column": 53,
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
        "name": "T01",
        "optional": false,
        "range": [
          138,
          141
        ],
        "loc": {
          "end": {
            "column": 8,
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
            151,
            184
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    153,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      161,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 28,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    161,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 5
                    },
                    "start": {
                      "column": 28,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        173,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 5
                        },
                        "start": {
                          "column": 40,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      173,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 5
                      },
                      "start": {
                        "column": 40,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    170,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 5
                    },
                    "start": {
                      "column": 37,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                152,
                183
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 5
            },
            "start": {
              "column": 18,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            144,
            151
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 5
            },
            "start": {
              "column": 11,
              "line": 5
            }
          }
        },
        "range": [
          144,
          184
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "range": [
        133,
        185
      ],
      "loc": {
        "end": {
          "column": 52,
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
        "name": "T02",
        "optional": false,
        "range": [
          191,
          194
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            205,
            238
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    207,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      215,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 29,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    215,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 6
                    },
                    "start": {
                      "column": 29,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        227,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 6
                        },
                        "start": {
                          "column": 41,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      227,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 6
                      },
                      "start": {
                        "column": 41,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    224,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 6
                    },
                    "start": {
                      "column": 38,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                206,
                237
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 6
            },
            "start": {
              "column": 19,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "range": [
            197,
            205
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 6
            },
            "start": {
              "column": 11,
              "line": 6
            }
          }
        },
        "range": [
          197,
          238
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 6
          }
        }
      },
      "range": [
        186,
        239
      ],
      "loc": {
        "end": {
          "column": 53,
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
        "name": "T10",
        "optional": false,
        "range": [
          246,
          249
        ],
        "loc": {
          "end": {
            "column": 8,
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
            260,
            270
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  261,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "range": [
                261,
                269
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 8
            },
            "start": {
              "column": 19,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            252,
            260
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 8
            },
            "start": {
              "column": 11,
              "line": 8
            }
          }
        },
        "range": [
          252,
          270
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 8
          }
        }
      },
      "range": [
        241,
        271
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "name": "T11",
        "optional": false,
        "range": [
          277,
          280
        ],
        "loc": {
          "end": {
            "column": 8,
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
            290,
            300
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  291,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 9
                  }
                }
              },
              "range": [
                291,
                299
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 9
            },
            "start": {
              "column": 18,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            283,
            290
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        "range": [
          283,
          300
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        }
      },
      "range": [
        272,
        301
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "name": "T12",
        "optional": false,
        "range": [
          307,
          310
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            321,
            331
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  322,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              "range": [
                322,
                330
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 10
            },
            "start": {
              "column": 19,
              "line": 10
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "range": [
            313,
            321
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 11,
              "line": 10
            }
          }
        },
        "range": [
          313,
          331
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 10
          }
        }
      },
      "range": [
        302,
        332
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "range": [
          338,
          341
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            352,
            375
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  366,
                  374
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      367,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 11
                  },
                  "start": {
                    "column": 33,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  353,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "range": [
                353,
                374
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 11
            },
            "start": {
              "column": 19,
              "line": 11
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            344,
            352
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 11
            },
            "start": {
              "column": 11,
              "line": 11
            }
          }
        },
        "range": [
          344,
          375
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        }
      },
      "range": [
        333,
        376
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "range": [
          382,
          385
        ],
        "loc": {
          "end": {
            "column": 8,
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            395,
            418
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  409,
                  417
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      410,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 12
                      },
                      "start": {
                        "column": 33,
                        "line": 12
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 12
                  },
                  "start": {
                    "column": 32,
                    "line": 12
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  396,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 19,
                    "line": 12
                  }
                }
              },
              "range": [
                396,
                417
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 12
            },
            "start": {
              "column": 18,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            388,
            395
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 12
            },
            "start": {
              "column": 11,
              "line": 12
            }
          }
        },
        "range": [
          388,
          418
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 12
          }
        }
      },
      "range": [
        377,
        419
      ],
      "loc": {
        "end": {
          "column": 42,
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
        "name": "T15",
        "optional": false,
        "range": [
          425,
          428
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            439,
            462
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  453,
                  461
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      454,
                      460
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 13
                  },
                  "start": {
                    "column": 33,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  440,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              },
              "range": [
                440,
                461
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 13
            },
            "start": {
              "column": 19,
              "line": 13
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "range": [
            431,
            439
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 13
            },
            "start": {
              "column": 11,
              "line": 13
            }
          }
        },
        "range": [
          431,
          462
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 13
          }
        }
      },
      "range": [
        420,
        463
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "range": [
          470,
          473
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            484,
            508
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      486,
                      492
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 21,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      495,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  486,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 15
                  },
                  "start": {
                    "column": 21,
                    "line": 15
                  }
                }
              },
              "range": [
                485,
                507
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 15
            },
            "start": {
              "column": 19,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            476,
            484
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 15
            },
            "start": {
              "column": 11,
              "line": 15
            }
          }
        },
        "range": [
          476,
          508
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        }
      },
      "range": [
        465,
        509
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "range": [
          515,
          518
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            528,
            552
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      530,
                      536
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 20,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      539,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  530,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 20,
                    "line": 16
                  }
                }
              },
              "range": [
                529,
                551
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 16
            },
            "start": {
              "column": 18,
              "line": 16
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            521,
            528
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 16
            },
            "start": {
              "column": 11,
              "line": 16
            }
          }
        },
        "range": [
          521,
          552
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 16
          },
          "start": {
            "column": 11,
            "line": 16
          }
        }
      },
      "range": [
        510,
        553
      ],
      "loc": {
        "end": {
          "column": 43,
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
        "name": "T22",
        "optional": false,
        "range": [
          559,
          562
        ],
        "loc": {
          "end": {
            "column": 8,
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
            573,
            597
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      575,
                      581
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 17
                      },
                      "start": {
                        "column": 21,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      584,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 17
                      },
                      "start": {
                        "column": 30,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  575,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 17
                  },
                  "start": {
                    "column": 21,
                    "line": 17
                  }
                }
              },
              "range": [
                574,
                596
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 17
            },
            "start": {
              "column": 19,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "range": [
            565,
            573
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 17
            },
            "start": {
              "column": 11,
              "line": 17
            }
          }
        },
        "range": [
          565,
          597
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        }
      },
      "range": [
        554,
        598
      ],
      "loc": {
        "end": {
          "column": 44,
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
        "name": "T23",
        "optional": false,
        "range": [
          604,
          607
        ],
        "loc": {
          "end": {
            "column": 8,
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
            618,
            653
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  632,
                  652
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          633,
                          639
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 18
                          },
                          "start": {
                            "column": 34,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          642,
                          651
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 18
                          },
                          "start": {
                            "column": 43,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      633,
                      651
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 18
                      },
                      "start": {
                        "column": 34,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 18
                  },
                  "start": {
                    "column": 33,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  619,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
                  }
                }
              },
              "range": [
                619,
                652
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 18
            },
            "start": {
              "column": 19,
              "line": 18
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            610,
            618
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 18
            },
            "start": {
              "column": 11,
              "line": 18
            }
          }
        },
        "range": [
          610,
          653
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 18
          },
          "start": {
            "column": 11,
            "line": 18
          }
        }
      },
      "range": [
        599,
        654
      ],
      "loc": {
        "end": {
          "column": 55,
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
        "name": "T24",
        "optional": false,
        "range": [
          660,
          663
        ],
        "loc": {
          "end": {
            "column": 8,
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
            673,
            708
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  687,
                  707
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          688,
                          694
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 19
                          },
                          "start": {
                            "column": 33,
                            "line": 19
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          697,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 19
                          },
                          "start": {
                            "column": 42,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      688,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 19
                      },
                      "start": {
                        "column": 33,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 19
                  },
                  "start": {
                    "column": 32,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  674,
                  687
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 19
                  }
                }
              },
              "range": [
                674,
                707
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 19
                },
                "start": {
                  "column": 19,
                  "line": 19
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 19
            },
            "start": {
              "column": 18,
              "line": 19
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            666,
            673
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 19
            },
            "start": {
              "column": 11,
              "line": 19
            }
          }
        },
        "range": [
          666,
          708
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 19
          },
          "start": {
            "column": 11,
            "line": 19
          }
        }
      },
      "range": [
        655,
        709
      ],
      "loc": {
        "end": {
          "column": 54,
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
        "name": "T25",
        "optional": false,
        "range": [
          715,
          718
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            729,
            764
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  743,
                  763
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          744,
                          750
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 20
                          },
                          "start": {
                            "column": 34,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          753,
                          762
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 20
                          },
                          "start": {
                            "column": 43,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      744,
                      762
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 20
                      },
                      "start": {
                        "column": 34,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 20
                  },
                  "start": {
                    "column": 33,
                    "line": 20
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  730,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 20
                  }
                }
              },
              "range": [
                730,
                763
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 20
            },
            "start": {
              "column": 19,
              "line": 20
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "range": [
            721,
            729
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 20
            },
            "start": {
              "column": 11,
              "line": 20
            }
          }
        },
        "range": [
          721,
          764
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 20
          },
          "start": {
            "column": 11,
            "line": 20
          }
        }
      },
      "range": [
        710,
        765
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "range": [
          772,
          775
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            786,
            805
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  794,
                  804
                ],
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        795,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 22
                        },
                        "start": {
                          "column": 28,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      795,
                      803
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
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
                    "column": 37,
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
                "name": "Partial",
                "optional": false,
                "range": [
                  787,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 22
                  },
                  "start": {
                    "column": 20,
                    "line": 22
                  }
                }
              },
              "range": [
                787,
                804
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 22
                },
                "start": {
                  "column": 20,
                  "line": 22
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 22
            },
            "start": {
              "column": 19,
              "line": 22
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            778,
            786
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 22
            },
            "start": {
              "column": 11,
              "line": 22
            }
          }
        },
        "range": [
          778,
          805
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 22
          },
          "start": {
            "column": 11,
            "line": 22
          }
        }
      },
      "range": [
        767,
        806
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 22
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
        "name": "T31",
        "optional": false,
        "range": [
          812,
          815
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            825,
            845
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  834,
                  844
                ],
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        835,
                        841
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 23
                        },
                        "start": {
                          "column": 28,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      835,
                      843
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 28,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 23
                  },
                  "start": {
                    "column": 27,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  826,
                  834
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 23
                  },
                  "start": {
                    "column": 19,
                    "line": 23
                  }
                }
              },
              "range": [
                826,
                844
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 23
                },
                "start": {
                  "column": 19,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 23
            },
            "start": {
              "column": 18,
              "line": 23
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            818,
            825
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 23
            },
            "start": {
              "column": 11,
              "line": 23
            }
          }
        },
        "range": [
          818,
          845
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 23
          },
          "start": {
            "column": 11,
            "line": 23
          }
        }
      },
      "range": [
        807,
        846
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          853,
          854
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
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
              "name": "a",
              "optional": false,
              "range": [
                859,
                860
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
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
                  "column": 20,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              },
              "range": [
                860,
                868
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  862,
                  868
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              859,
              868
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 11,
                "line": 25
              }
            }
          }
        ],
        "range": [
          857,
          870
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "range": [
        848,
        871
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "name": "B",
        "optional": false,
        "range": [
          877,
          878
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
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
              "name": "b",
              "optional": false,
              "range": [
                883,
                884
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 11,
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
                  "column": 20,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              },
              "range": [
                884,
                892
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  886,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              883,
              892
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            }
          }
        ],
        "range": [
          881,
          894
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "range": [
        872,
        895
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "range": [
          902,
          905
        ],
        "loc": {
          "end": {
            "column": 8,
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
            916,
            973
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      917,
                      918
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 28
                      },
                      "start": {
                        "column": 20,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    917,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 20,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        921,
                        922
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 28
                        },
                        "start": {
                          "column": 24,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      921,
                      922
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 24,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    921,
                    924
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 28
                    },
                    "start": {
                      "column": 24,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      940,
                      943
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            941,
                            942
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 28
                            },
                            "start": {
                              "column": 44,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          941,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 28
                          },
                          "start": {
                            "column": 44,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 28
                      },
                      "start": {
                        "column": 43,
                        "line": 28
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReadonlyArray",
                    "optional": false,
                    "range": [
                      927,
                      940
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 28
                      },
                      "start": {
                        "column": 30,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    927,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 28
                    },
                    "start": {
                      "column": 30,
                      "line": 28
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
                        "name": "A",
                        "optional": false,
                        "range": [
                          947,
                          948
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 28
                          },
                          "start": {
                            "column": 50,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        947,
                        948
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 28
                        },
                        "start": {
                          "column": 50,
                          "line": 28
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          950,
                          951
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 28
                          },
                          "start": {
                            "column": 53,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        950,
                        951
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 28
                        },
                        "start": {
                          "column": 53,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "range": [
                    946,
                    952
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 28
                    },
                    "start": {
                      "column": 49,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    955,
                    961
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 28
                    },
                    "start": {
                      "column": 58,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      964,
                      970
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 28
                      },
                      "start": {
                        "column": 67,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    964,
                    972
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 28
                    },
                    "start": {
                      "column": 67,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                917,
                972
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 28
            },
            "start": {
              "column": 19,
              "line": 28
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            908,
            916
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 28
            },
            "start": {
              "column": 11,
              "line": 28
            }
          }
        },
        "range": [
          908,
          973
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 28
          },
          "start": {
            "column": 11,
            "line": 28
          }
        }
      },
      "range": [
        897,
        974
      ],
      "loc": {
        "end": {
          "column": 77,
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
        "name": "ReadWrite",
        "optional": false,
        "range": [
          981,
          990
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
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
                1020,
                1021
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 30
                },
                "start": {
                  "column": 44,
                  "line": 30
                }
              }
            },
            "range": [
              1020,
              1021
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 30
              },
              "start": {
                "column": 44,
                "line": 30
              }
            }
          },
          "range": [
            1014,
            1021
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 30
            },
            "start": {
              "column": 38,
              "line": 30
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1009,
            1010
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 30
            },
            "start": {
              "column": 33,
              "line": 30
            }
          }
        },
        "nameType": null,
        "readonly": "-",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                1027,
                1028
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 30
                },
                "start": {
                  "column": 51,
                  "line": 30
                }
              }
            },
            "range": [
              1027,
              1028
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 30
              },
              "start": {
                "column": 51,
                "line": 30
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
                1025,
                1026
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 30
                },
                "start": {
                  "column": 49,
                  "line": 30
                }
              }
            },
            "range": [
              1025,
              1026
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 30
              },
              "start": {
                "column": 49,
                "line": 30
              }
            }
          },
          "range": [
            1025,
            1029
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 30
            },
            "start": {
              "column": 49,
              "line": 30
            }
          }
        },
        "range": [
          996,
          1031
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 30
          },
          "start": {
            "column": 20,
            "line": 30
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 30
          },
          "start": {
            "column": 14,
            "line": 30
          }
        },
        "range": [
          990,
          993
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
                991,
                992
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 15,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              991,
              992
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 30
              },
              "start": {
                "column": 15,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        976,
        1032
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T50",
        "optional": false,
        "range": [
          1039,
          1042
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1053,
            1063
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  1054,
                  1060
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 32
                  },
                  "start": {
                    "column": 20,
                    "line": 32
                  }
                }
              },
              "range": [
                1054,
                1062
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 32
                },
                "start": {
                  "column": 20,
                  "line": 32
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 32
            },
            "start": {
              "column": 19,
              "line": 32
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "range": [
            1045,
            1053
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 32
            },
            "start": {
              "column": 11,
              "line": 32
            }
          }
        },
        "range": [
          1045,
          1063
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 32
          },
          "start": {
            "column": 11,
            "line": 32
          }
        }
      },
      "range": [
        1034,
        1064
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 32
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
        "name": "T51",
        "optional": false,
        "range": [
          1070,
          1073
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1084,
            1102
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1086,
                    1092
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1094,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 33
                    },
                    "start": {
                      "column": 29,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                1085,
                1101
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
            }
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 33
            },
            "start": {
              "column": 19,
              "line": 33
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "range": [
            1076,
            1084
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 33
            },
            "start": {
              "column": 11,
              "line": 33
            }
          }
        },
        "range": [
          1076,
          1102
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 33
          },
          "start": {
            "column": 11,
            "line": 33
          }
        }
      },
      "range": [
        1065,
        1103
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T52",
        "optional": false,
        "range": [
          1109,
          1112
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1122,
            1142
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1131,
                  1141
                ],
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        1132,
                        1138
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 34
                        },
                        "start": {
                          "column": 28,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1132,
                      1140
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 34
                      },
                      "start": {
                        "column": 28,
                        "line": 34
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 34
                  },
                  "start": {
                    "column": 27,
                    "line": 34
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "range": [
                  1123,
                  1131
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 34
                  },
                  "start": {
                    "column": 19,
                    "line": 34
                  }
                }
              },
              "range": [
                1123,
                1141
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 34
                },
                "start": {
                  "column": 19,
                  "line": 34
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 34
            },
            "start": {
              "column": 18,
              "line": 34
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            1115,
            1122
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 34
            },
            "start": {
              "column": 11,
              "line": 34
            }
          }
        },
        "range": [
          1115,
          1142
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 34
          },
          "start": {
            "column": 11,
            "line": 34
          }
        }
      },
      "range": [
        1104,
        1143
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T53",
        "optional": false,
        "range": [
          1149,
          1152
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1163,
            1182
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1171,
                  1181
                ],
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        1172,
                        1178
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 35
                        },
                        "start": {
                          "column": 28,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1172,
                      1180
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
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
                    "column": 37,
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
                "name": "Partial",
                "optional": false,
                "range": [
                  1164,
                  1171
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 35
                  },
                  "start": {
                    "column": 20,
                    "line": 35
                  }
                }
              },
              "range": [
                1164,
                1181
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 35
                },
                "start": {
                  "column": 20,
                  "line": 35
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 35
            },
            "start": {
              "column": 19,
              "line": 35
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "range": [
            1155,
            1163
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 35
            },
            "start": {
              "column": 11,
              "line": 35
            }
          }
        },
        "range": [
          1155,
          1182
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 35
          },
          "start": {
            "column": 11,
            "line": 35
          }
        }
      },
      "range": [
        1144,
        1183
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T54",
        "optional": false,
        "range": [
          1189,
          1192
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1204,
            1219
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1213,
                  1218
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T53",
                      "optional": false,
                      "range": [
                        1214,
                        1217
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 36
                        },
                        "start": {
                          "column": 30,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1214,
                      1217
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 36
                      },
                      "start": {
                        "column": 30,
                        "line": 36
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 36
                  },
                  "start": {
                    "column": 29,
                    "line": 36
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Required",
                "optional": false,
                "range": [
                  1205,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 36
                  },
                  "start": {
                    "column": 21,
                    "line": 36
                  }
                }
              },
              "range": [
                1205,
                1218
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 36
                },
                "start": {
                  "column": 21,
                  "line": 36
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 36
            },
            "start": {
              "column": 20,
              "line": 36
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadWrite",
          "optional": false,
          "range": [
            1195,
            1204
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 36
            },
            "start": {
              "column": 11,
              "line": 36
            }
          }
        },
        "range": [
          1195,
          1219
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 36
          },
          "start": {
            "column": 11,
            "line": 36
          }
        }
      },
      "range": [
        1184,
        1220
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
        "name": "unboxify",
        "optional": false,
        "range": [
          1239,
          1247
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 38
          },
          "start": {
            "column": 17,
            "line": 38
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
                "column": 43,
                "line": 38
              },
              "start": {
                "column": 30,
                "line": 38
              }
            },
            "range": [
              1252,
              1265
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1262,
                  1265
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
                        1263,
                        1264
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 38
                        },
                        "start": {
                          "column": 41,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1263,
                      1264
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 38
                      },
                      "start": {
                        "column": 41,
                        "line": 38
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 38
                  },
                  "start": {
                    "column": 40,
                    "line": 38
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  1254,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 38
                  },
                  "start": {
                    "column": 32,
                    "line": 38
                  }
                }
              },
              "range": [
                1254,
                1265
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 38
                },
                "start": {
                  "column": 32,
                  "line": 38
                }
              }
            }
          },
          "range": [
            1251,
            1265
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 38
            },
            "start": {
              "column": 29,
              "line": 38
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 38
          },
          "start": {
            "column": 44,
            "line": 38
          }
        },
        "range": [
          1266,
          1269
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1268,
              1269
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 38
              },
              "start": {
                "column": 46,
                "line": 38
              }
            }
          },
          "range": [
            1268,
            1269
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 38
            },
            "start": {
              "column": 46,
              "line": 38
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 38
          },
          "start": {
            "column": 25,
            "line": 38
          }
        },
        "range": [
          1247,
          1250
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
                1248,
                1249
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 38
                },
                "start": {
                  "column": 26,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              1248,
              1249
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 38
              },
              "start": {
                "column": 26,
                "line": 38
              }
            }
          }
        ]
      },
      "range": [
        1222,
        1270
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 38
        },
        "start": {
          "column": 0,
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
            "name": "x10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              },
              "range": [
                1287,
                1334
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1293,
                        1301
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1294,
                            1300
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 40
                            },
                            "start": {
                              "column": 22,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 40
                        },
                        "start": {
                          "column": 21,
                          "line": 40
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "range": [
                        1290,
                        1293
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 40
                        },
                        "start": {
                          "column": 18,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1290,
                      1301
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 40
                      },
                      "start": {
                        "column": 18,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1306,
                        1314
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1307,
                            1313
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 40
                            },
                            "start": {
                              "column": 35,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 40
                        },
                        "start": {
                          "column": 34,
                          "line": 40
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "range": [
                        1303,
                        1306
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 40
                        },
                        "start": {
                          "column": 31,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1303,
                      1314
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 40
                      },
                      "start": {
                        "column": 31,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1322,
                            1331
                          ],
                          "params": [
                            {
                              "type": "TSBooleanKeyword",
                              "range": [
                                1323,
                                1330
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 40
                                },
                                "start": {
                                  "column": 51,
                                  "line": 40
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 40
                            },
                            "start": {
                              "column": 50,
                              "line": 40
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            1319,
                            1322
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 40
                            },
                            "start": {
                              "column": 47,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          1319,
                          1331
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 40
                          },
                          "start": {
                            "column": 47,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        1319,
                        1333
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 40
                        },
                        "start": {
                          "column": 47,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1316,
                      1333
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 40
                      },
                      "start": {
                        "column": 44,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  1289,
                  1334
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 40
                  },
                  "start": {
                    "column": 17,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              1284,
              1334
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 40
              },
              "start": {
                "column": 12,
                "line": 40
              }
            }
          },
          "init": null,
          "range": [
            1284,
            1334
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1272,
        1335
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "y10",
            "optional": false,
            "range": [
              1340,
              1343
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x10",
                "optional": false,
                "range": [
                  1355,
                  1358
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "range": [
                1346,
                1354
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 41
                },
                "start": {
                  "column": 10,
                  "line": 41
                }
              }
            },
            "optional": false,
            "range": [
              1346,
              1359
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 41
              },
              "start": {
                "column": 10,
                "line": 41
              }
            }
          },
          "range": [
            1340,
            1359
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1336,
        1360
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "x11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 43
                },
                "start": {
                  "column": 15,
                  "line": 43
                }
              },
              "range": [
                1377,
                1392
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1382,
                      1390
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          1383,
                          1389
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 43
                          },
                          "start": {
                            "column": 21,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 43
                      },
                      "start": {
                        "column": 20,
                        "line": 43
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "range": [
                      1379,
                      1382
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 43
                      },
                      "start": {
                        "column": 17,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1379,
                    1390
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 43
                    },
                    "start": {
                      "column": 17,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1379,
                  1392
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 43
                  },
                  "start": {
                    "column": 17,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              1374,
              1392
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 43
              },
              "start": {
                "column": 12,
                "line": 43
              }
            }
          },
          "init": null,
          "range": [
            1374,
            1392
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 43
            },
            "start": {
              "column": 12,
              "line": 43
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1362,
        1393
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "y11",
            "optional": false,
            "range": [
              1398,
              1401
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x11",
                "optional": false,
                "range": [
                  1413,
                  1416
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 44
                  },
                  "start": {
                    "column": 19,
                    "line": 44
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "range": [
                1404,
                1412
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 10,
                  "line": 44
                }
              }
            },
            "optional": false,
            "range": [
              1404,
              1417
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 10,
                "line": 44
              }
            }
          },
          "range": [
            1398,
            1417
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1394,
        1418
      ],
      "loc": {
        "end": {
          "column": 24,
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
            "name": "x12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 46
                },
                "start": {
                  "column": 15,
                  "line": 46
                }
              },
              "range": [
                1435,
                1473
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
                        1439,
                        1440
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 46
                        },
                        "start": {
                          "column": 19,
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
                          "column": 33,
                          "line": 46
                        },
                        "start": {
                          "column": 20,
                          "line": 46
                        }
                      },
                      "range": [
                        1440,
                        1453
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1445,
                            1453
                          ],
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                1446,
                                1452
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 46
                                },
                                "start": {
                                  "column": 26,
                                  "line": 46
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 46
                            },
                            "start": {
                              "column": 25,
                              "line": 46
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            1442,
                            1445
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 46
                            },
                            "start": {
                              "column": 22,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1442,
                          1453
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
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
                      1439,
                      1454
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 46
                      },
                      "start": {
                        "column": 19,
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        1455,
                        1456
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 46
                        },
                        "start": {
                          "column": 35,
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
                          "column": 51,
                          "line": 46
                        },
                        "start": {
                          "column": 36,
                          "line": 46
                        }
                      },
                      "range": [
                        1456,
                        1471
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1461,
                            1471
                          ],
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1462,
                                  1468
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 46
                                  }
                                }
                              },
                              "range": [
                                1462,
                                1470
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 46
                                },
                                "start": {
                                  "column": 42,
                                  "line": 46
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 46
                            },
                            "start": {
                              "column": 41,
                              "line": 46
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            1458,
                            1461
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 46
                            },
                            "start": {
                              "column": 38,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1458,
                          1471
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 46
                          },
                          "start": {
                            "column": 38,
                            "line": 46
                          }
                        }
                      }
                    },
                    "range": [
                      1455,
                      1471
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 46
                      },
                      "start": {
                        "column": 35,
                        "line": 46
                      }
                    }
                  }
                ],
                "range": [
                  1437,
                  1473
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 46
                  },
                  "start": {
                    "column": 17,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1432,
              1473
            ],
            "loc": {
              "end": {
                "column": 53,
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
            1432,
            1473
          ],
          "loc": {
            "end": {
              "column": 53,
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
        1420,
        1474
      ],
      "loc": {
        "end": {
          "column": 54,
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
            "name": "y12",
            "optional": false,
            "range": [
              1479,
              1482
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x12",
                "optional": false,
                "range": [
                  1494,
                  1497
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 47
                  },
                  "start": {
                    "column": 19,
                    "line": 47
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "range": [
                1485,
                1493
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 47
                },
                "start": {
                  "column": 10,
                  "line": 47
                }
              }
            },
            "optional": false,
            "range": [
              1485,
              1498
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 47
              },
              "start": {
                "column": 10,
                "line": 47
              }
            }
          },
          "range": [
            1479,
            1498
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1475,
        1499
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
        "name": "nonpartial",
        "optional": false,
        "range": [
          1518,
          1528
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 49
          },
          "start": {
            "column": 17,
            "line": 49
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
                "column": 44,
                "line": 49
              },
              "start": {
                "column": 32,
                "line": 49
              }
            },
            "range": [
              1533,
              1545
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1542,
                  1545
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
                        1543,
                        1544
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 49
                        },
                        "start": {
                          "column": 42,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1543,
                      1544
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 49
                      },
                      "start": {
                        "column": 42,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 49
                  },
                  "start": {
                    "column": 41,
                    "line": 49
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  1535,
                  1542
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 49
                  },
                  "start": {
                    "column": 34,
                    "line": 49
                  }
                }
              },
              "range": [
                1535,
                1545
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 49
                },
                "start": {
                  "column": 34,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1532,
            1545
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 49
            },
            "start": {
              "column": 31,
              "line": 49
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 49
          },
          "start": {
            "column": 45,
            "line": 49
          }
        },
        "range": [
          1546,
          1549
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1548,
              1549
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 49
              },
              "start": {
                "column": 47,
                "line": 49
              }
            }
          },
          "range": [
            1548,
            1549
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 49
            },
            "start": {
              "column": 47,
              "line": 49
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 49
          },
          "start": {
            "column": 27,
            "line": 49
          }
        },
        "range": [
          1528,
          1531
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
                1529,
                1530
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 49
                },
                "start": {
                  "column": 28,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1529,
              1530
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 49
              },
              "start": {
                "column": 28,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        1501,
        1550
      ],
      "loc": {
        "end": {
          "column": 49,
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
            "name": "x20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 60,
                  "line": 51
                },
                "start": {
                  "column": 15,
                  "line": 51
                }
              },
              "range": [
                1567,
                1612
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          1570,
                          1576
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 51
                          },
                          "start": {
                            "column": 18,
                            "line": 51
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          1579,
                          1588
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 51
                          },
                          "start": {
                            "column": 27,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "range": [
                      1570,
                      1588
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 51
                      },
                      "start": {
                        "column": 18,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1590,
                        1596
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 51
                        },
                        "start": {
                          "column": 38,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1590,
                      1597
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 51
                      },
                      "start": {
                        "column": 38,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1602,
                          1609
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 51
                          },
                          "start": {
                            "column": 50,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1602,
                        1611
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 51
                        },
                        "start": {
                          "column": 50,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1599,
                      1611
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 51
                      },
                      "start": {
                        "column": 47,
                        "line": 51
                      }
                    }
                  }
                ],
                "range": [
                  1569,
                  1612
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 51
                  },
                  "start": {
                    "column": 17,
                    "line": 51
                  }
                }
              }
            },
            "range": [
              1564,
              1612
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 51
              },
              "start": {
                "column": 12,
                "line": 51
              }
            }
          },
          "init": null,
          "range": [
            1564,
            1612
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 51
            },
            "start": {
              "column": 12,
              "line": 51
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1552,
        1613
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "y20",
            "optional": false,
            "range": [
              1618,
              1621
            ],
            "loc": {
              "end": {
                "column": 7,
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
                "name": "x20",
                "optional": false,
                "range": [
                  1635,
                  1638
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 52
                  },
                  "start": {
                    "column": 21,
                    "line": 52
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "range": [
                1624,
                1634
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 52
                },
                "start": {
                  "column": 10,
                  "line": 52
                }
              }
            },
            "optional": false,
            "range": [
              1624,
              1639
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 52
              },
              "start": {
                "column": 10,
                "line": 52
              }
            }
          },
          "range": [
            1618,
            1639
          ],
          "loc": {
            "end": {
              "column": 25,
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
        1614,
        1640
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "x21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 54
                },
                "start": {
                  "column": 15,
                  "line": 54
                }
              },
              "range": [
                1657,
                1681
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1660,
                        1666
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 54
                        },
                        "start": {
                          "column": 18,
                          "line": 54
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        1669,
                        1678
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 54
                        },
                        "start": {
                          "column": 27,
                          "line": 54
                        }
                      }
                    }
                  ],
                  "range": [
                    1660,
                    1678
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 54
                    },
                    "start": {
                      "column": 18,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1659,
                  1681
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 54
                  },
                  "start": {
                    "column": 17,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1654,
              1681
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 54
              },
              "start": {
                "column": 12,
                "line": 54
              }
            }
          },
          "init": null,
          "range": [
            1654,
            1681
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 54
            },
            "start": {
              "column": 12,
              "line": 54
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1642,
        1682
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "y21",
            "optional": false,
            "range": [
              1687,
              1690
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x21",
                "optional": false,
                "range": [
                  1704,
                  1707
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 55
                  },
                  "start": {
                    "column": 21,
                    "line": 55
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "range": [
                1693,
                1703
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 55
                },
                "start": {
                  "column": 10,
                  "line": 55
                }
              }
            },
            "optional": false,
            "range": [
              1693,
              1708
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 55
              },
              "start": {
                "column": 10,
                "line": 55
              }
            }
          },
          "range": [
            1687,
            1708
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 55
            },
            "start": {
              "column": 4,
              "line": 55
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1683,
        1709
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "x22",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 57
                },
                "start": {
                  "column": 15,
                  "line": 57
                }
              },
              "range": [
                1726,
                1767
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
                        1730,
                        1731
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 57
                        },
                        "start": {
                          "column": 19,
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
                          "column": 40,
                          "line": 57
                        },
                        "start": {
                          "column": 20,
                          "line": 57
                        }
                      },
                      "range": [
                        1731,
                        1751
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              1733,
                              1739
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 57
                              },
                              "start": {
                                "column": 22,
                                "line": 57
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              1742,
                              1751
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 57
                              },
                              "start": {
                                "column": 31,
                                "line": 57
                              }
                            }
                          }
                        ],
                        "range": [
                          1733,
                          1751
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 57
                          },
                          "start": {
                            "column": 22,
                            "line": 57
                          }
                        }
                      }
                    },
                    "range": [
                      1730,
                      1752
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 57
                      },
                      "start": {
                        "column": 19,
                        "line": 57
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
                        1753,
                        1754
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 57
                        },
                        "start": {
                          "column": 42,
                          "line": 57
                        }
                      }
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 57
                        },
                        "start": {
                          "column": 44,
                          "line": 57
                        }
                      },
                      "range": [
                        1755,
                        1765
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            1757,
                            1763
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 57
                            },
                            "start": {
                              "column": 46,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          1757,
                          1765
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 57
                          },
                          "start": {
                            "column": 46,
                            "line": 57
                          }
                        }
                      }
                    },
                    "range": [
                      1753,
                      1765
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 57
                      },
                      "start": {
                        "column": 42,
                        "line": 57
                      }
                    }
                  }
                ],
                "range": [
                  1728,
                  1767
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 57
                  },
                  "start": {
                    "column": 17,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1723,
              1767
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 57
              },
              "start": {
                "column": 12,
                "line": 57
              }
            }
          },
          "init": null,
          "range": [
            1723,
            1767
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 57
            },
            "start": {
              "column": 12,
              "line": 57
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1711,
        1768
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "y22",
            "optional": false,
            "range": [
              1773,
              1776
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x22",
                "optional": false,
                "range": [
                  1790,
                  1793
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 58
                  },
                  "start": {
                    "column": 21,
                    "line": 58
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "range": [
                1779,
                1789
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 58
                },
                "start": {
                  "column": 10,
                  "line": 58
                }
              }
            },
            "optional": false,
            "range": [
              1779,
              1794
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 58
              },
              "start": {
                "column": 10,
                "line": 58
              }
            }
          },
          "range": [
            1773,
            1794
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 58
            },
            "start": {
              "column": 4,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1769,
        1795
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
        "name": "__Awaited",
        "optional": false,
        "range": [
          1802,
          1811
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 60
          },
          "start": {
            "column": 5,
            "line": 60
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
              1817,
              1818
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 60
              },
              "start": {
                "column": 20,
                "line": 60
              }
            }
          },
          "range": [
            1817,
            1818
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 60
            },
            "start": {
              "column": 20,
              "line": 60
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1838,
              1847
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
                      1845,
                      1846
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 60
                      },
                      "start": {
                        "column": 48,
                        "line": 60
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1845,
                    1846
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 60
                    },
                    "start": {
                      "column": 48,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1839,
                  1846
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 60
                  },
                  "start": {
                    "column": 42,
                    "line": 60
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 60
              },
              "start": {
                "column": 41,
                "line": 60
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "range": [
              1827,
              1838
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 60
              },
              "start": {
                "column": 30,
                "line": 60
              }
            }
          },
          "range": [
            1827,
            1847
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 60
            },
            "start": {
              "column": 30,
              "line": 60
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
              1854,
              1855
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 60
              },
              "start": {
                "column": 57,
                "line": 60
              }
            }
          },
          "range": [
            1854,
            1855
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 60
            },
            "start": {
              "column": 57,
              "line": 60
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              1850,
              1851
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 60
              },
              "start": {
                "column": 53,
                "line": 60
              }
            }
          },
          "range": [
            1850,
            1851
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 60
            },
            "start": {
              "column": 53,
              "line": 60
            }
          }
        },
        "range": [
          1817,
          1855
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 60
          },
          "start": {
            "column": 20,
            "line": 60
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 60
          },
          "start": {
            "column": 14,
            "line": 60
          }
        },
        "range": [
          1811,
          1814
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
                1812,
                1813
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 60
                },
                "start": {
                  "column": 15,
                  "line": 60
                }
              }
            },
            "out": false,
            "range": [
              1812,
              1813
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 60
              },
              "start": {
                "column": 15,
                "line": 60
              }
            }
          }
        ]
      },
      "range": [
        1797,
        1856
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Awaitified",
        "optional": false,
        "range": [
          1862,
          1872
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 61
          },
          "start": {
            "column": 5,
            "line": 61
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
                1892,
                1893
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 61
                },
                "start": {
                  "column": 35,
                  "line": 61
                }
              }
            },
            "range": [
              1892,
              1893
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 61
              },
              "start": {
                "column": 35,
                "line": 61
              }
            }
          },
          "range": [
            1886,
            1893
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 61
            },
            "start": {
              "column": 29,
              "line": 61
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1881,
            1882
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 61
            },
            "start": {
              "column": 24,
              "line": 61
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1905,
              1911
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      1908,
                      1909
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 61
                      },
                      "start": {
                        "column": 51,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1908,
                    1909
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 61
                    },
                    "start": {
                      "column": 51,
                      "line": 61
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
                      1906,
                      1907
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 61
                      },
                      "start": {
                        "column": 49,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1906,
                    1907
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 61
                    },
                    "start": {
                      "column": 49,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1906,
                  1910
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 61
                  },
                  "start": {
                    "column": 49,
                    "line": 61
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 61
              },
              "start": {
                "column": 48,
                "line": 61
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "__Awaited",
            "optional": false,
            "range": [
              1896,
              1905
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 61
              },
              "start": {
                "column": 39,
                "line": 61
              }
            }
          },
          "range": [
            1896,
            1911
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 61
            },
            "start": {
              "column": 39,
              "line": 61
            }
          }
        },
        "range": [
          1878,
          1913
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 61
          },
          "start": {
            "column": 21,
            "line": 61
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 61
          },
          "start": {
            "column": 15,
            "line": 61
          }
        },
        "range": [
          1872,
          1875
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
                1873,
                1874
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 61
                },
                "start": {
                  "column": 16,
                  "line": 61
                }
              }
            },
            "out": false,
            "range": [
              1873,
              1874
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 61
              },
              "start": {
                "column": 16,
                "line": 61
              }
            }
          }
        ]
      },
      "range": [
        1857,
        1914
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
        "name": "all",
        "optional": false,
        "range": [
          1933,
          1936
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 63
          },
          "start": {
            "column": 17,
            "line": 63
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "range": [
              1957,
              1963
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 63
              },
              "start": {
                "column": 41,
                "line": 63
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 63
              },
              "start": {
                "column": 47,
                "line": 63
              }
            },
            "range": [
              1963,
              1966
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1965,
                  1966
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 63
                  },
                  "start": {
                    "column": 49,
                    "line": 63
                  }
                }
              },
              "range": [
                1965,
                1966
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 63
                },
                "start": {
                  "column": 49,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1954,
            1966
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 63
            },
            "start": {
              "column": 38,
              "line": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 63
          },
          "start": {
            "column": 51,
            "line": 63
          }
        },
        "range": [
          1967,
          1991
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1976,
              1991
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1987,
                    1990
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
                          1988,
                          1989
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 63
                          },
                          "start": {
                            "column": 72,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1988,
                        1989
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 63
                        },
                        "start": {
                          "column": 72,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 63
                    },
                    "start": {
                      "column": 71,
                      "line": 63
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Awaitified",
                  "optional": false,
                  "range": [
                    1977,
                    1987
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 63
                    },
                    "start": {
                      "column": 61,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1977,
                  1990
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 63
                  },
                  "start": {
                    "column": 61,
                    "line": 63
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 63
              },
              "start": {
                "column": 60,
                "line": 63
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              1969,
              1976
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 63
              },
              "start": {
                "column": 53,
                "line": 63
              }
            }
          },
          "range": [
            1969,
            1991
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 63
            },
            "start": {
              "column": 53,
              "line": 63
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 63
          },
          "start": {
            "column": 20,
            "line": 63
          }
        },
        "range": [
          1936,
          1953
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
                  1947,
                  1950
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 63
                  },
                  "start": {
                    "column": 31,
                    "line": 63
                  }
                }
              },
              "range": [
                1947,
                1952
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 63
                },
                "start": {
                  "column": 31,
                  "line": 63
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
                1937,
                1938
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 63
                },
                "start": {
                  "column": 21,
                  "line": 63
                }
              }
            },
            "out": false,
            "range": [
              1937,
              1952
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 63
              },
              "start": {
                "column": 21,
                "line": 63
              }
            }
          }
        ]
      },
      "range": [
        1916,
        1992
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
                  "name": "x1",
                  "optional": false,
                  "range": [
                    2082,
                    2084
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2091,
                        2092
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 66
                        },
                        "start": {
                          "column": 17,
                          "line": 66
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "range": [
                      2087,
                      2090
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 66
                      },
                      "start": {
                        "column": 13,
                        "line": 66
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2087,
                    2093
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 66
                    },
                    "start": {
                      "column": 13,
                      "line": 66
                    }
                  }
                },
                "range": [
                  2082,
                  2093
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              2078,
              2094
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
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
                    2103,
                    2105
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2112,
                        2113
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 67
                        },
                        "start": {
                          "column": 17,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        2115,
                        2116
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 67
                        },
                        "start": {
                          "column": 20,
                          "line": 67
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "range": [
                      2108,
                      2111
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 67
                      },
                      "start": {
                        "column": 13,
                        "line": 67
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2108,
                    2117
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 67
                    },
                    "start": {
                      "column": 13,
                      "line": 67
                    }
                  }
                },
                "range": [
                  2103,
                  2117
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 67
                  },
                  "start": {
                    "column": 8,
                    "line": 67
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2099,
              2118
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
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
                  "name": "x3",
                  "optional": false,
                  "range": [
                    2127,
                    2129
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2136,
                        2137
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 68
                        },
                        "start": {
                          "column": 17,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        2139,
                        2140
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 68
                        },
                        "start": {
                          "column": 20,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        2142,
                        2143
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 68
                        },
                        "start": {
                          "column": 23,
                          "line": 68
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "range": [
                      2132,
                      2135
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 68
                      },
                      "start": {
                        "column": 13,
                        "line": 68
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2132,
                    2144
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 68
                    },
                    "start": {
                      "column": 13,
                      "line": 68
                    }
                  }
                },
                "range": [
                  2127,
                  2144
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2123,
              2145
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
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
                  "name": "x4",
                  "optional": false,
                  "range": [
                    2154,
                    2156
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2163,
                        2164
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 69
                        },
                        "start": {
                          "column": 17,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        2166,
                        2167
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 69
                        },
                        "start": {
                          "column": 20,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        2169,
                        2170
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 69
                        },
                        "start": {
                          "column": 23,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        2172,
                        2173
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 69
                        },
                        "start": {
                          "column": 26,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "range": [
                      2159,
                      2162
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 69
                      },
                      "start": {
                        "column": 13,
                        "line": 69
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2159,
                    2174
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 69
                    },
                    "start": {
                      "column": 13,
                      "line": 69
                    }
                  }
                },
                "range": [
                  2154,
                  2174
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2150,
              2175
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "range": [
          2072,
          2177
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 78,
            "line": 65
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
          2003,
          2005
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 65
          },
          "start": {
            "column": 9,
            "line": 65
          }
        }
      },
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
                "line": 65
              },
              "start": {
                "column": 13,
                "line": 65
              }
            },
            "range": [
              2007,
              2015
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2009,
                2015
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 65
                },
                "start": {
                  "column": 15,
                  "line": 65
                }
              }
            }
          },
          "range": [
            2006,
            2015
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 65
            },
            "start": {
              "column": 12,
              "line": 65
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 65
              },
              "start": {
                "column": 24,
                "line": 65
              }
            },
            "range": [
              2018,
              2035
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2027,
                  2035
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      2028,
                      2034
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 65
                      },
                      "start": {
                        "column": 34,
                        "line": 65
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 65
                  },
                  "start": {
                    "column": 33,
                    "line": 65
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  2020,
                  2027
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 65
                  },
                  "start": {
                    "column": 26,
                    "line": 65
                  }
                }
              },
              "range": [
                2020,
                2035
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 65
                },
                "start": {
                  "column": 26,
                  "line": 65
                }
              }
            }
          },
          "range": [
            2017,
            2035
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 65
            },
            "start": {
              "column": 23,
              "line": 65
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 65
              },
              "start": {
                "column": 44,
                "line": 65
              }
            },
            "range": [
              2038,
              2048
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  2040,
                  2046
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 65
                  },
                  "start": {
                    "column": 46,
                    "line": 65
                  }
                }
              },
              "range": [
                2040,
                2048
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 65
                },
                "start": {
                  "column": 46,
                  "line": 65
                }
              }
            }
          },
          "range": [
            2037,
            2048
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 65
            },
            "start": {
              "column": 43,
              "line": 65
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 76,
                "line": 65
              },
              "start": {
                "column": 57,
                "line": 65
              }
            },
            "range": [
              2051,
              2070
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2060,
                  2070
                ],
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        2061,
                        2067
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 65
                        },
                        "start": {
                          "column": 67,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      2061,
                      2069
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 65
                      },
                      "start": {
                        "column": 67,
                        "line": 65
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 65
                  },
                  "start": {
                    "column": 66,
                    "line": 65
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  2053,
                  2060
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 65
                  },
                  "start": {
                    "column": 59,
                    "line": 65
                  }
                }
              },
              "range": [
                2053,
                2070
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 65
                },
                "start": {
                  "column": 59,
                  "line": 65
                }
              }
            }
          },
          "range": [
            2050,
            2070
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 65
            },
            "start": {
              "column": 56,
              "line": 65
            }
          }
        }
      ],
      "range": [
        1994,
        2177
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 65
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
                        "column": 31,
                        "line": 73
                      },
                      "start": {
                        "column": 9,
                        "line": 73
                      }
                    },
                    "range": [
                      2235,
                      2257
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              2240,
                              2245
                            ],
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "range": [
                                  2241,
                                  2244
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 73
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 73
                              },
                              "start": {
                                "column": 14,
                                "line": 73
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Box",
                            "optional": false,
                            "range": [
                              2237,
                              2240
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 73
                              },
                              "start": {
                                "column": 11,
                                "line": 73
                              }
                            }
                          },
                          "range": [
                            2237,
                            2245
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 73
                            },
                            "start": {
                              "column": 11,
                              "line": 73
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            2248,
                            2257
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 73
                            },
                            "start": {
                              "column": 22,
                              "line": 73
                            }
                          }
                        }
                      ],
                      "range": [
                        2237,
                        2257
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 73
                        },
                        "start": {
                          "column": 11,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    2234,
                    2257
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2260,
                        2261
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 73
                        },
                        "start": {
                          "column": 34,
                          "line": 73
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pop",
                      "optional": false,
                      "range": [
                        2262,
                        2265
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 73
                        },
                        "start": {
                          "column": 36,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      2260,
                      2265
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 73
                      },
                      "start": {
                        "column": 34,
                        "line": 73
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2260,
                    2267
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 73
                    },
                    "start": {
                      "column": 34,
                      "line": 73
                    }
                  }
                },
                "range": [
                  2234,
                  2267
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2230,
              2268
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 73
              },
              "start": {
                "column": 4,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 74
                      },
                      "start": {
                        "column": 9,
                        "line": 74
                      }
                    },
                    "range": [
                      2278,
                      2290
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            2283,
                            2288
                          ],
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "range": [
                                2284,
                                2287
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 74
                                },
                                "start": {
                                  "column": 15,
                                  "line": 74
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 74
                            },
                            "start": {
                              "column": 14,
                              "line": 74
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            2280,
                            2283
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 74
                            },
                            "start": {
                              "column": 11,
                              "line": 74
                            }
                          }
                        },
                        "range": [
                          2280,
                          2288
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 74
                          },
                          "start": {
                            "column": 11,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        2280,
                        2290
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 74
                        },
                        "start": {
                          "column": 11,
                          "line": 74
                        }
                      }
                    }
                  },
                  "range": [
                    2277,
                    2290
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2302,
                        2303
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 74
                        },
                        "start": {
                          "column": 33,
                          "line": 74
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        2293,
                        2294
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 74
                        },
                        "start": {
                          "column": 24,
                          "line": 74
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "range": [
                        2295,
                        2301
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 74
                        },
                        "start": {
                          "column": 26,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      2293,
                      2301
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 74
                      },
                      "start": {
                        "column": 24,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2293,
                    2304
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 74
                    },
                    "start": {
                      "column": 24,
                      "line": 74
                    }
                  }
                },
                "range": [
                  2277,
                  2304
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2273,
              2305
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "range": [
          2224,
          2307
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 45,
            "line": 72
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
          2188,
          2190
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 72
          },
          "start": {
            "column": 9,
            "line": 72
          }
        }
      },
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
                "column": 43,
                "line": 72
              },
              "start": {
                "column": 30,
                "line": 72
              }
            },
            "range": [
              2209,
              2222
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2219,
                  2222
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
                        2220,
                        2221
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 72
                        },
                        "start": {
                          "column": 41,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      2220,
                      2221
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 72
                      },
                      "start": {
                        "column": 41,
                        "line": 72
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 72
                  },
                  "start": {
                    "column": 40,
                    "line": 72
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  2211,
                  2219
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 72
                  },
                  "start": {
                    "column": 32,
                    "line": 72
                  }
                }
              },
              "range": [
                2211,
                2222
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 72
                },
                "start": {
                  "column": 32,
                  "line": 72
                }
              }
            }
          },
          "range": [
            2208,
            2222
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 72
            },
            "start": {
              "column": 29,
              "line": 72
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 72
          },
          "start": {
            "column": 11,
            "line": 72
          }
        },
        "range": [
          2190,
          2207
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
                  2201,
                  2204
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 72
                  },
                  "start": {
                    "column": 22,
                    "line": 72
                  }
                }
              },
              "range": [
                2201,
                2206
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 72
                },
                "start": {
                  "column": 22,
                  "line": 72
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
                2191,
                2192
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 72
                },
                "start": {
                  "column": 12,
                  "line": 72
                }
              }
            },
            "out": false,
            "range": [
              2191,
              2206
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 72
              },
              "start": {
                "column": 12,
                "line": 72
              }
            }
          }
        ]
      },
      "range": [
        2179,
        2307
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementType",
        "optional": false,
        "range": [
          2336,
          2347
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 79
          },
          "start": {
            "column": 5,
            "line": 79
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
              2353,
              2354
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 79
              },
              "start": {
                "column": 22,
                "line": 79
              }
            }
          },
          "range": [
            2353,
            2354
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 79
            },
            "start": {
              "column": 22,
              "line": 79
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2368,
              2377
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
                      2375,
                      2376
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 79
                      },
                      "start": {
                        "column": 44,
                        "line": 79
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2375,
                    2376
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 79
                    },
                    "start": {
                      "column": 44,
                      "line": 79
                    }
                  }
                },
                "range": [
                  2369,
                  2376
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 79
                  },
                  "start": {
                    "column": 38,
                    "line": 79
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 79
              },
              "start": {
                "column": 37,
                "line": 79
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              2363,
              2368
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 79
              },
              "start": {
                "column": 32,
                "line": 79
              }
            }
          },
          "range": [
            2363,
            2377
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 79
            },
            "start": {
              "column": 32,
              "line": 79
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2384,
            2389
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 79
            },
            "start": {
              "column": 53,
              "line": 79
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              2380,
              2381
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 79
              },
              "start": {
                "column": 49,
                "line": 79
              }
            }
          },
          "range": [
            2380,
            2381
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 79
            },
            "start": {
              "column": 49,
              "line": 79
            }
          }
        },
        "range": [
          2353,
          2389
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 79
          },
          "start": {
            "column": 22,
            "line": 79
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 79
          },
          "start": {
            "column": 16,
            "line": 79
          }
        },
        "range": [
          2347,
          2350
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
                2348,
                2349
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 79
                },
                "start": {
                  "column": 17,
                  "line": 79
                }
              }
            },
            "out": false,
            "range": [
              2348,
              2349
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 79
              },
              "start": {
                "column": 17,
                "line": 79
              }
            }
          }
        ]
      },
      "range": [
        2331,
        2390
      ],
      "loc": {
        "end": {
          "column": 59,
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
        "name": "Mapped",
        "optional": false,
        "range": [
          2396,
          2402
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 80
          },
          "start": {
            "column": 5,
            "line": 80
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
                2422,
                2423
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 80
                },
                "start": {
                  "column": 31,
                  "line": 80
                }
              }
            },
            "range": [
              2422,
              2423
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 80
              },
              "start": {
                "column": 31,
                "line": 80
              }
            }
          },
          "range": [
            2416,
            2423
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 80
            },
            "start": {
              "column": 25,
              "line": 80
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            2411,
            2412
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 80
            },
            "start": {
              "column": 20,
              "line": 80
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                2428,
                2429
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 80
                },
                "start": {
                  "column": 37,
                  "line": 80
                }
              }
            },
            "range": [
              2428,
              2429
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 80
              },
              "start": {
                "column": 37,
                "line": 80
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
                2426,
                2427
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 80
                },
                "start": {
                  "column": 35,
                  "line": 80
                }
              }
            },
            "range": [
              2426,
              2427
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 80
              },
              "start": {
                "column": 35,
                "line": 80
              }
            }
          },
          "range": [
            2426,
            2430
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 80
            },
            "start": {
              "column": 35,
              "line": 80
            }
          }
        },
        "range": [
          2408,
          2432
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 80
          },
          "start": {
            "column": 17,
            "line": 80
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 80
          },
          "start": {
            "column": 11,
            "line": 80
          }
        },
        "range": [
          2402,
          2405
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
                2403,
                2404
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 80
                },
                "start": {
                  "column": 12,
                  "line": 80
                }
              }
            },
            "out": false,
            "range": [
              2403,
              2404
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 80
              },
              "start": {
                "column": 12,
                "line": 80
              }
            }
          }
        ]
      },
      "range": [
        2391,
        2433
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
        "name": "F",
        "optional": false,
        "range": [
          2440,
          2441
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 82
          },
          "start": {
            "column": 5,
            "line": 82
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2458,
            2469
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2465,
                  2468
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
                        2466,
                        2467
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 82
                        },
                        "start": {
                          "column": 31,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      2466,
                      2467
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 82
                      },
                      "start": {
                        "column": 31,
                        "line": 82
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 82
                  },
                  "start": {
                    "column": 30,
                    "line": 82
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "range": [
                  2459,
                  2465
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 82
                  },
                  "start": {
                    "column": 24,
                    "line": 82
                  }
                }
              },
              "range": [
                2459,
                2468
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 82
                },
                "start": {
                  "column": 24,
                  "line": 82
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 82
            },
            "start": {
              "column": 23,
              "line": 82
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "range": [
            2447,
            2458
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 82
            },
            "start": {
              "column": 12,
              "line": 82
            }
          }
        },
        "range": [
          2447,
          2469
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 82
          },
          "start": {
            "column": 12,
            "line": 82
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 82
          },
          "start": {
            "column": 6,
            "line": 82
          }
        },
        "range": [
          2441,
          2444
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
                2442,
                2443
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 82
                },
                "start": {
                  "column": 7,
                  "line": 82
                }
              }
            },
            "out": false,
            "range": [
              2442,
              2443
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 82
              },
              "start": {
                "column": 7,
                "line": 82
              }
            }
          }
        ]
      },
      "range": [
        2435,
        2470
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R1",
        "optional": false,
        "range": [
          2476,
          2478
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 83
          },
          "start": {
            "column": 5,
            "line": 83
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2482,
            2509
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2484,
                    2490
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 83
                    },
                    "start": {
                      "column": 13,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2492,
                    2498
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 83
                    },
                    "start": {
                      "column": 21,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2500,
                    2507
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 83
                    },
                    "start": {
                      "column": 29,
                      "line": 83
                    }
                  }
                }
              ],
              "range": [
                2483,
                2508
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 83
                },
                "start": {
                  "column": 12,
                  "line": 83
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 83
            },
            "start": {
              "column": 11,
              "line": 83
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "range": [
            2481,
            2482
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 83
            },
            "start": {
              "column": 10,
              "line": 83
            }
          }
        },
        "range": [
          2481,
          2509
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 83
          },
          "start": {
            "column": 10,
            "line": 83
          }
        }
      },
      "range": [
        2471,
        2510
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "range": [
          2546,
          2548
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
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2562,
            2597
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2569,
                  2596
                ],
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          2571,
                          2577
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 84
                          },
                          "start": {
                            "column": 30,
                            "line": 84
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          2579,
                          2585
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 84
                          },
                          "start": {
                            "column": 38,
                            "line": 84
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2587,
                          2594
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 84
                          },
                          "start": {
                            "column": 46,
                            "line": 84
                          }
                        }
                      }
                    ],
                    "range": [
                      2570,
                      2595
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 84
                      },
                      "start": {
                        "column": 29,
                        "line": 84
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 84
                  },
                  "start": {
                    "column": 28,
                    "line": 84
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "range": [
                  2563,
                  2569
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 84
                  },
                  "start": {
                    "column": 22,
                    "line": 84
                  }
                }
              },
              "range": [
                2563,
                2596
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 84
                },
                "start": {
                  "column": 22,
                  "line": 84
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 84
            },
            "start": {
              "column": 21,
              "line": 84
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "range": [
            2551,
            2562
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 84
            },
            "start": {
              "column": 10,
              "line": 84
            }
          }
        },
        "range": [
          2551,
          2597
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 84
          },
          "start": {
            "column": 10,
            "line": 84
          }
        }
      },
      "range": [
        2541,
        2598
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
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
        "name": "acceptArray",
        "optional": false,
        "range": [
          2669,
          2680
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 88
          },
          "start": {
            "column": 17,
            "line": 88
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 88
              },
              "start": {
                "column": 32,
                "line": 88
              }
            },
            "range": [
              2684,
              2691
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  2686,
                  2689
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 88
                  },
                  "start": {
                    "column": 34,
                    "line": 88
                  }
                }
              },
              "range": [
                2686,
                2691
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 88
                },
                "start": {
                  "column": 34,
                  "line": 88
                }
              }
            }
          },
          "range": [
            2681,
            2691
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 88
            },
            "start": {
              "column": 29,
              "line": 88
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 88
          },
          "start": {
            "column": 40,
            "line": 88
          }
        },
        "range": [
          2692,
          2698
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            2694,
            2698
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 88
            },
            "start": {
              "column": 42,
              "line": 88
            }
          }
        }
      },
      "range": [
        2652,
        2699
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
        "name": "mapArray",
        "optional": false,
        "range": [
          2717,
          2725
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 89
          },
          "start": {
            "column": 17,
            "line": 89
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 89
              },
              "start": {
                "column": 46,
                "line": 89
              }
            },
            "range": [
              2746,
              2749
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2748,
                  2749
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 89
                  },
                  "start": {
                    "column": 48,
                    "line": 89
                  }
                }
              },
              "range": [
                2748,
                2749
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 89
                },
                "start": {
                  "column": 48,
                  "line": 89
                }
              }
            }
          },
          "range": [
            2743,
            2749
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 89
            },
            "start": {
              "column": 43,
              "line": 89
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 89
          },
          "start": {
            "column": 50,
            "line": 89
          }
        },
        "range": [
          2750,
          2761
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2758,
              2761
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
                    2759,
                    2760
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 89
                    },
                    "start": {
                      "column": 59,
                      "line": 89
                    }
                  }
                },
                "range": [
                  2759,
                  2760
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 89
                  },
                  "start": {
                    "column": 59,
                    "line": 89
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 89
              },
              "start": {
                "column": 58,
                "line": 89
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "range": [
              2752,
              2758
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 89
              },
              "start": {
                "column": 52,
                "line": 89
              }
            }
          },
          "range": [
            2752,
            2761
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 89
            },
            "start": {
              "column": 52,
              "line": 89
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 89
          },
          "start": {
            "column": 25,
            "line": 89
          }
        },
        "range": [
          2725,
          2742
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
                  2736,
                  2739
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 89
                  },
                  "start": {
                    "column": 36,
                    "line": 89
                  }
                }
              },
              "range": [
                2736,
                2741
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 89
                },
                "start": {
                  "column": 36,
                  "line": 89
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
                2726,
                2727
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
            "out": false,
            "range": [
              2726,
              2741
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 89
              },
              "start": {
                "column": 26,
                "line": 89
              }
            }
          }
        ]
      },
      "range": [
        2700,
        2762
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "range": [
                        2842,
                        2845
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 91
                        },
                        "start": {
                          "column": 25,
                          "line": 91
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapArray",
                    "optional": false,
                    "range": [
                      2833,
                      2841
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 91
                      },
                      "start": {
                        "column": 16,
                        "line": 91
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2833,
                    2846
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 91
                    },
                    "start": {
                      "column": 16,
                      "line": 91
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptArray",
                "optional": false,
                "range": [
                  2821,
                  2832
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              },
              "optional": false,
              "range": [
                2821,
                2847
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "range": [
              2821,
              2848
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          }
        ],
        "range": [
          2815,
          2850
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 52,
            "line": 90
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptMappedArray",
        "optional": false,
        "range": [
          2772,
          2789
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 90
          },
          "start": {
            "column": 9,
            "line": 90
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 90
              },
              "start": {
                "column": 47,
                "line": 90
              }
            },
            "range": [
              2810,
              2813
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2812,
                  2813
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 90
                  },
                  "start": {
                    "column": 49,
                    "line": 90
                  }
                }
              },
              "range": [
                2812,
                2813
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 90
                },
                "start": {
                  "column": 49,
                  "line": 90
                }
              }
            }
          },
          "range": [
            2807,
            2813
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 90
            },
            "start": {
              "column": 44,
              "line": 90
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 90
          },
          "start": {
            "column": 26,
            "line": 90
          }
        },
        "range": [
          2789,
          2806
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
                  2800,
                  2803
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 90
                  },
                  "start": {
                    "column": 37,
                    "line": 90
                  }
                }
              },
              "range": [
                2800,
                2805
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 90
                },
                "start": {
                  "column": 37,
                  "line": 90
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
                2790,
                2791
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
            "out": false,
            "range": [
              2790,
              2805
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 90
              },
              "start": {
                "column": 27,
                "line": 90
              }
            }
          }
        ]
      },
      "range": [
        2763,
        2850
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 92
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
        "name": "Unconstrained",
        "optional": false,
        "range": [
          2879,
          2892
        ],
        "loc": {
          "end": {
            "column": 18,
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
            2909,
            2920
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2916,
                  2919
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
                        2917,
                        2918
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 96
                        },
                        "start": {
                          "column": 43,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      2917,
                      2918
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 96
                      },
                      "start": {
                        "column": 43,
                        "line": 96
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 96
                  },
                  "start": {
                    "column": 42,
                    "line": 96
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "range": [
                  2910,
                  2916
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 96
                  },
                  "start": {
                    "column": 36,
                    "line": 96
                  }
                }
              },
              "range": [
                2910,
                2919
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 96
                },
                "start": {
                  "column": 36,
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
              "column": 35,
              "line": 96
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "range": [
            2898,
            2909
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 96
            },
            "start": {
              "column": 24,
              "line": 96
            }
          }
        },
        "range": [
          2898,
          2920
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 96
          },
          "start": {
            "column": 24,
            "line": 96
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 96
          },
          "start": {
            "column": 18,
            "line": 96
          }
        },
        "range": [
          2892,
          2895
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
                2893,
                2894
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 96
                },
                "start": {
                  "column": 19,
                  "line": 96
                }
              }
            },
            "out": false,
            "range": [
              2893,
              2894
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 96
              },
              "start": {
                "column": 19,
                "line": 96
              }
            }
          }
        ]
      },
      "range": [
        2874,
        2921
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
        "name": "T1",
        "optional": false,
        "range": [
          2927,
          2929
        ],
        "loc": {
          "end": {
            "column": 7,
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
            2945,
            2972
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2947,
                    2953
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 97
                    },
                    "start": {
                      "column": 25,
                      "line": 97
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2955,
                    2961
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 97
                    },
                    "start": {
                      "column": 33,
                      "line": 97
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2963,
                    2970
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 97
                    },
                    "start": {
                      "column": 41,
                      "line": 97
                    }
                  }
                }
              ],
              "range": [
                2946,
                2971
              ],
              "loc": {
                "end": {
                  "column": 49,
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
              "column": 50,
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
          "name": "Unconstrained",
          "optional": false,
          "range": [
            2932,
            2945
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 97
            },
            "start": {
              "column": 10,
              "line": 97
            }
          }
        },
        "range": [
          2932,
          2972
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 97
          },
          "start": {
            "column": 10,
            "line": 97
          }
        }
      },
      "range": [
        2922,
        2973
      ],
      "loc": {
        "end": {
          "column": 51,
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
        "name": "Constrained",
        "optional": false,
        "range": [
          3010,
          3021
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 99
          },
          "start": {
            "column": 5,
            "line": 99
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3052,
            3063
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3059,
                  3062
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
                        3060,
                        3061
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 99
                        },
                        "start": {
                          "column": 55,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      3060,
                      3061
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 99
                      },
                      "start": {
                        "column": 55,
                        "line": 99
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 99
                  },
                  "start": {
                    "column": 54,
                    "line": 99
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "range": [
                  3053,
                  3059
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 99
                  },
                  "start": {
                    "column": 48,
                    "line": 99
                  }
                }
              },
              "range": [
                3053,
                3062
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 99
                },
                "start": {
                  "column": 48,
                  "line": 99
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 99
            },
            "start": {
              "column": 47,
              "line": 99
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "range": [
            3041,
            3052
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 99
            },
            "start": {
              "column": 36,
              "line": 99
            }
          }
        },
        "range": [
          3041,
          3063
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 99
          },
          "start": {
            "column": 36,
            "line": 99
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 99
          },
          "start": {
            "column": 16,
            "line": 99
          }
        },
        "range": [
          3021,
          3038
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
                  3032,
                  3035
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 99
                  },
                  "start": {
                    "column": 27,
                    "line": 99
                  }
                }
              },
              "range": [
                3032,
                3037
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 99
                },
                "start": {
                  "column": 27,
                  "line": 99
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
                3022,
                3023
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 99
                },
                "start": {
                  "column": 17,
                  "line": 99
                }
              }
            },
            "out": false,
            "range": [
              3022,
              3037
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 99
              },
              "start": {
                "column": 17,
                "line": 99
              }
            }
          }
        ]
      },
      "range": [
        3005,
        3064
      ],
      "loc": {
        "end": {
          "column": 59,
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
        "name": "T2",
        "optional": false,
        "range": [
          3070,
          3072
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 100
          },
          "start": {
            "column": 5,
            "line": 100
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3086,
            3113
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3088,
                    3094
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 100
                    },
                    "start": {
                      "column": 23,
                      "line": 100
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    3096,
                    3102
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 100
                    },
                    "start": {
                      "column": 31,
                      "line": 100
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    3104,
                    3111
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 100
                    },
                    "start": {
                      "column": 39,
                      "line": 100
                    }
                  }
                }
              ],
              "range": [
                3087,
                3112
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 100
                },
                "start": {
                  "column": 22,
                  "line": 100
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 100
            },
            "start": {
              "column": 21,
              "line": 100
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constrained",
          "optional": false,
          "range": [
            3075,
            3086
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 100
            },
            "start": {
              "column": 10,
              "line": 100
            }
          }
        },
        "range": [
          3075,
          3113
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 100
          },
          "start": {
            "column": 10,
            "line": 100
          }
        }
      },
      "range": [
        3065,
        3114
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 101
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
