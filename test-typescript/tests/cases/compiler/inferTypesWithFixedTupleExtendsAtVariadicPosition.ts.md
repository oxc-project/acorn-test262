__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    2125
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2FixedLength",
        "optional": false,
        "range": [
          22,
          40
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              64,
              65
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 3
              },
              "start": {
                "column": 47,
                "line": 3
              }
            }
          },
          "range": [
            64,
            65
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 3
            },
            "start": {
              "column": 47,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          98,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 22,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          103,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      97,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      87,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    87,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "range": [
                  81,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                }
              },
              "range": [
                78,
                107
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                111,
                114
              ],
              "loc": {
                "end": {
                  "column": 5,
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
            74,
            116
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 57,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            127,
            132
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              121,
              122
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "range": [
            121,
            122
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "range": [
          64,
          132
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 47,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        },
        "range": [
          40,
          61
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  51,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              },
              "range": [
                51,
                60
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 34,
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
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              41,
              60
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        17,
        133
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2FixedLengthTest",
        "optional": false,
        "range": [
          140,
          162
        ],
        "loc": {
          "end": {
            "column": 27,
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
            183,
            203
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        188,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 10
                        },
                        "start": {
                          "column": 53,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      188,
                      189
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 10
                      },
                      "start": {
                        "column": 53,
                        "line": 10
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      185,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 10
                      },
                      "start": {
                        "column": 50,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    185,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 10
                    },
                    "start": {
                      "column": 50,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        194,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 10
                        },
                        "start": {
                          "column": 59,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      194,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 10
                      },
                      "start": {
                        "column": 59,
                        "line": 10
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      191,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 10
                      },
                      "start": {
                        "column": 56,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    191,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 10
                    },
                    "start": {
                      "column": 56,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        200,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 10
                        },
                        "start": {
                          "column": 65,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      200,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 10
                      },
                      "start": {
                        "column": 65,
                        "line": 10
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      197,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 10
                      },
                      "start": {
                        "column": 62,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    197,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 10
                    },
                    "start": {
                      "column": 62,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                184,
                202
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 10
                },
                "start": {
                  "column": 49,
                  "line": 10
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 10
            },
            "start": {
              "column": 48,
              "line": 10
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2FixedLength",
          "optional": false,
          "range": [
            165,
            183
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 10
            },
            "start": {
              "column": 30,
              "line": 10
            }
          }
        },
        "range": [
          165,
          203
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 10
          },
          "start": {
            "column": 30,
            "line": 10
          }
        }
      },
      "range": [
        135,
        204
      ],
      "loc": {
        "end": {
          "column": 69,
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
        "name": "SubTup2Variadic",
        "optional": false,
        "range": [
          211,
          226
        ],
        "loc": {
          "end": {
            "column": 20,
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
              250,
              251
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 12
              },
              "start": {
                "column": 44,
                "line": 12
              }
            }
          },
          "range": [
            250,
            251
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 12
            },
            "start": {
              "column": 44,
              "line": 12
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          284,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 22,
                            "line": 13
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          289,
                          292
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      283,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      273,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    273,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  267,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 5,
                    "line": 13
                  }
                }
              },
              "range": [
                264,
                293
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  300,
                  303
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
              "range": [
                297,
                303
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            260,
            305
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 54,
              "line": 12
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            316,
            321
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              310,
              311
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "range": [
            310,
            311
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "range": [
          250,
          321
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 44,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 12
          },
          "start": {
            "column": 20,
            "line": 12
          }
        },
        "range": [
          226,
          247
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  237,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 12
                  },
                  "start": {
                    "column": 31,
                    "line": 12
                  }
                }
              },
              "range": [
                237,
                246
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 12
                },
                "start": {
                  "column": 31,
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
                227,
                228
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              227,
              246
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        206,
        322
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 17
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
        "name": "SubTup2VariadicTest",
        "optional": false,
        "range": [
          329,
          348
        ],
        "loc": {
          "end": {
            "column": 24,
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
            366,
            391
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        371,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 19
                        },
                        "start": {
                          "column": 47,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      371,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 19
                      },
                      "start": {
                        "column": 47,
                        "line": 19
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      368,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 19
                      },
                      "start": {
                        "column": 44,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    368,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 19
                    },
                    "start": {
                      "column": 44,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        377,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 19
                        },
                        "start": {
                          "column": 53,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      377,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 19
                      },
                      "start": {
                        "column": 53,
                        "line": 19
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      374,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 19
                      },
                      "start": {
                        "column": 50,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    374,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 19
                    },
                    "start": {
                      "column": 50,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            386,
                            387
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 19
                            },
                            "start": {
                              "column": 62,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          386,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 19
                          },
                          "start": {
                            "column": 62,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        386,
                        389
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 19
                        },
                        "start": {
                          "column": 62,
                          "line": 19
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        383,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 19
                        },
                        "start": {
                          "column": 59,
                          "line": 19
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      383,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 19
                      },
                      "start": {
                        "column": 59,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    380,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 19
                    },
                    "start": {
                      "column": 56,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                367,
                390
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 19
                },
                "start": {
                  "column": 43,
                  "line": 19
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 19
            },
            "start": {
              "column": 42,
              "line": 19
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "range": [
            351,
            366
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 19
            },
            "start": {
              "column": 27,
              "line": 19
            }
          }
        },
        "range": [
          351,
          391
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 19
          },
          "start": {
            "column": 27,
            "line": 19
          }
        }
      },
      "range": [
        324,
        392
      ],
      "loc": {
        "end": {
          "column": 68,
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
        "name": "SubTup2VariadicTest2",
        "optional": false,
        "range": [
          398,
          418
        ],
        "loc": {
          "end": {
            "column": 25,
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
            436,
            467
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        441,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 20
                        },
                        "start": {
                          "column": 48,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      441,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 20
                      },
                      "start": {
                        "column": 48,
                        "line": 20
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      438,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 20
                      },
                      "start": {
                        "column": 45,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    438,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 20
                    },
                    "start": {
                      "column": 45,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        447,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 20
                        },
                        "start": {
                          "column": 54,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      447,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 20
                      },
                      "start": {
                        "column": 54,
                        "line": 20
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      444,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 20
                      },
                      "start": {
                        "column": 51,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    444,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 20
                    },
                    "start": {
                      "column": 51,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        453,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 20
                        },
                        "start": {
                          "column": 60,
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
                        "column": 61,
                        "line": 20
                      },
                      "start": {
                        "column": 60,
                        "line": 20
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      450,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 20
                      },
                      "start": {
                        "column": 57,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    450,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 20
                    },
                    "start": {
                      "column": 57,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "3",
                          "value": 3,
                          "range": [
                            462,
                            463
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 20
                            },
                            "start": {
                              "column": 69,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          462,
                          463
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 20
                          },
                          "start": {
                            "column": 69,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        462,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 20
                        },
                        "start": {
                          "column": 69,
                          "line": 20
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        459,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 20
                        },
                        "start": {
                          "column": 66,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      459,
                      465
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 20
                      },
                      "start": {
                        "column": 66,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    456,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 20
                    },
                    "start": {
                      "column": 63,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                437,
                466
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 20
                },
                "start": {
                  "column": 44,
                  "line": 20
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 20
            },
            "start": {
              "column": 43,
              "line": 20
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "range": [
            421,
            436
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 20
            },
            "start": {
              "column": 28,
              "line": 20
            }
          }
        },
        "range": [
          421,
          467
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 20
          },
          "start": {
            "column": 28,
            "line": 20
          }
        }
      },
      "range": [
        393,
        468
      ],
      "loc": {
        "end": {
          "column": 75,
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
        "name": "SubTup2VariadicAndRest",
        "optional": false,
        "range": [
          475,
          497
        ],
        "loc": {
          "end": {
            "column": 27,
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
              521,
              522
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 22
              },
              "start": {
                "column": 51,
                "line": 22
              }
            }
          },
          "range": [
            521,
            522
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 22
            },
            "start": {
              "column": 51,
              "line": 22
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          557,
                          560
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
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          562,
                          565
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 23
                          },
                          "start": {
                            "column": 29,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      556,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 23
                      },
                      "start": {
                        "column": 23,
                        "line": 23
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      546,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    546,
                    566
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  540,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                }
              },
              "range": [
                537,
                566
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        582,
                        583
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 24
                        },
                        "start": {
                          "column": 14,
                          "line": 24
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      582,
                      583
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 24
                      },
                      "start": {
                        "column": 14,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    576,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "range": [
                  575,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              },
              "range": [
                572,
                586
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
            531,
            588
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 61,
              "line": 22
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            616,
            621
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    599,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "range": [
                  599,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              },
              "range": [
                596,
                600
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 7,
                  "line": 26
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        606,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 26
                        },
                        "start": {
                          "column": 17,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      606,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  605,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 26
                  },
                  "start": {
                    "column": 16,
                    "line": 26
                  }
                }
              },
              "range": [
                602,
                608
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            }
          ],
          "range": [
            595,
            609
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        },
        "range": [
          521,
          621
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 51,
            "line": 22
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 22
          },
          "start": {
            "column": 27,
            "line": 22
          }
        },
        "range": [
          497,
          518
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  508,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 22
                  },
                  "start": {
                    "column": 38,
                    "line": 22
                  }
                }
              },
              "range": [
                508,
                517
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 22
                },
                "start": {
                  "column": 38,
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
                498,
                499
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
            "out": false,
            "range": [
              498,
              517
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 22
              },
              "start": {
                "column": 28,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        470,
        622
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 27
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
        "name": "SubTup2VariadicAndRestTest",
        "optional": false,
        "range": [
          629,
          655
        ],
        "loc": {
          "end": {
            "column": 31,
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
            680,
            705
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        685,
                        686
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 29
                        },
                        "start": {
                          "column": 61,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      685,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 29
                      },
                      "start": {
                        "column": 61,
                        "line": 29
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      682,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 29
                      },
                      "start": {
                        "column": 58,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    682,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 29
                    },
                    "start": {
                      "column": 58,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        691,
                        692
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 29
                        },
                        "start": {
                          "column": 67,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      691,
                      692
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 29
                      },
                      "start": {
                        "column": 67,
                        "line": 29
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      688,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 29
                      },
                      "start": {
                        "column": 64,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    688,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 29
                    },
                    "start": {
                      "column": 64,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            700,
                            701
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 29
                            },
                            "start": {
                              "column": 76,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          700,
                          701
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 29
                          },
                          "start": {
                            "column": 76,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        700,
                        703
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 29
                        },
                        "start": {
                          "column": 76,
                          "line": 29
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        697,
                        698
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 29
                        },
                        "start": {
                          "column": 73,
                          "line": 29
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      697,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 29
                      },
                      "start": {
                        "column": 73,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    694,
                    703
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 29
                    },
                    "start": {
                      "column": 70,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                681,
                704
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 29
                },
                "start": {
                  "column": 57,
                  "line": 29
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 29
            },
            "start": {
              "column": 56,
              "line": 29
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicAndRest",
          "optional": false,
          "range": [
            658,
            680
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 29
            },
            "start": {
              "column": 34,
              "line": 29
            }
          }
        },
        "range": [
          658,
          705
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 29
          },
          "start": {
            "column": 34,
            "line": 29
          }
        }
      },
      "range": [
        624,
        706
      ],
      "loc": {
        "end": {
          "column": 82,
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
        "name": "SubTup2TrailingVariadic",
        "optional": false,
        "range": [
          713,
          736
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
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
              760,
              761
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 31
              },
              "start": {
                "column": 52,
                "line": 31
              }
            }
          },
          "range": [
            760,
            761
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 31
            },
            "start": {
              "column": 52,
              "line": 31
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  777,
                  780
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
              "range": [
                774,
                780
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 32
                },
                "start": {
                  "column": 2,
                  "line": 32
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          804,
                          807
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 33
                          },
                          "start": {
                            "column": 22,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          809,
                          812
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 33
                          },
                          "start": {
                            "column": 27,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "range": [
                      803,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 33
                      },
                      "start": {
                        "column": 21,
                        "line": 33
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      793,
                      794
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 33
                      },
                      "start": {
                        "column": 11,
                        "line": 33
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    793,
                    813
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 33
                    }
                  }
                },
                "range": [
                  787,
                  813
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 33
                  },
                  "start": {
                    "column": 5,
                    "line": 33
                  }
                }
              },
              "range": [
                784,
                813
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            }
          ],
          "range": [
            770,
            816
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 62,
              "line": 31
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            827,
            832
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              821,
              822
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "range": [
            821,
            822
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        "range": [
          760,
          832
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 36
          },
          "start": {
            "column": 52,
            "line": 31
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 31
          },
          "start": {
            "column": 28,
            "line": 31
          }
        },
        "range": [
          736,
          757
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  747,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 31
                  },
                  "start": {
                    "column": 39,
                    "line": 31
                  }
                }
              },
              "range": [
                747,
                756
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 31
                },
                "start": {
                  "column": 39,
                  "line": 31
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
                737,
                738
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 31
                },
                "start": {
                  "column": 29,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              737,
              756
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 31
              },
              "start": {
                "column": 29,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        708,
        833
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicTest",
        "optional": false,
        "range": [
          840,
          867
        ],
        "loc": {
          "end": {
            "column": 32,
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
            893,
            918
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            901,
                            902
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 38
                            },
                            "start": {
                              "column": 66,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          901,
                          902
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 38
                          },
                          "start": {
                            "column": 66,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        901,
                        904
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 38
                        },
                        "start": {
                          "column": 66,
                          "line": 38
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        898,
                        899
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 38
                        },
                        "start": {
                          "column": 63,
                          "line": 38
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      898,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 38
                      },
                      "start": {
                        "column": 63,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    895,
                    904
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 38
                    },
                    "start": {
                      "column": 60,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        909,
                        910
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 38
                        },
                        "start": {
                          "column": 74,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      909,
                      910
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 38
                      },
                      "start": {
                        "column": 74,
                        "line": 38
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      906,
                      907
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 38
                      },
                      "start": {
                        "column": 71,
                        "line": 38
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    906,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 38
                    },
                    "start": {
                      "column": 71,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        915,
                        916
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 38
                        },
                        "start": {
                          "column": 80,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      915,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 38
                      },
                      "start": {
                        "column": 80,
                        "line": 38
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      912,
                      913
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 38
                      },
                      "start": {
                        "column": 77,
                        "line": 38
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    912,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 38
                    },
                    "start": {
                      "column": 77,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                894,
                917
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 38
                },
                "start": {
                  "column": 59,
                  "line": 38
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 38
            },
            "start": {
              "column": 58,
              "line": 38
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "range": [
            870,
            893
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 38
            },
            "start": {
              "column": 35,
              "line": 38
            }
          }
        },
        "range": [
          870,
          918
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 38
          },
          "start": {
            "column": 35,
            "line": 38
          }
        }
      },
      "range": [
        835,
        919
      ],
      "loc": {
        "end": {
          "column": 84,
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
        "name": "SubTup2TrailingVariadicTest2",
        "optional": false,
        "range": [
          925,
          953
        ],
        "loc": {
          "end": {
            "column": 33,
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
            979,
            1010
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            987,
                            988
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 39
                            },
                            "start": {
                              "column": 67,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          987,
                          988
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 39
                          },
                          "start": {
                            "column": 67,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        987,
                        990
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 39
                        },
                        "start": {
                          "column": 67,
                          "line": 39
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        984,
                        985
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 39
                        },
                        "start": {
                          "column": 64,
                          "line": 39
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      984,
                      990
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 39
                      },
                      "start": {
                        "column": 64,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    981,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 39
                    },
                    "start": {
                      "column": 61,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        995,
                        996
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 39
                        },
                        "start": {
                          "column": 75,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      995,
                      996
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 39
                      },
                      "start": {
                        "column": 75,
                        "line": 39
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      992,
                      993
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 39
                      },
                      "start": {
                        "column": 72,
                        "line": 39
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    992,
                    996
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 39
                    },
                    "start": {
                      "column": 72,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1001,
                        1002
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 39
                        },
                        "start": {
                          "column": 81,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1001,
                      1002
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 39
                      },
                      "start": {
                        "column": 81,
                        "line": 39
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      998,
                      999
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 39
                      },
                      "start": {
                        "column": 78,
                        "line": 39
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    998,
                    1002
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 39
                    },
                    "start": {
                      "column": 78,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        1007,
                        1008
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 39
                        },
                        "start": {
                          "column": 87,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1007,
                      1008
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 39
                      },
                      "start": {
                        "column": 87,
                        "line": 39
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      1004,
                      1005
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 39
                      },
                      "start": {
                        "column": 84,
                        "line": 39
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1004,
                    1008
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 39
                    },
                    "start": {
                      "column": 84,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                980,
                1009
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 39
                },
                "start": {
                  "column": 60,
                  "line": 39
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 39
            },
            "start": {
              "column": 59,
              "line": 39
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "range": [
            956,
            979
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 39
            },
            "start": {
              "column": 36,
              "line": 39
            }
          }
        },
        "range": [
          956,
          1010
        ],
        "loc": {
          "end": {
            "column": 90,
            "line": 39
          },
          "start": {
            "column": 36,
            "line": 39
          }
        }
      },
      "range": [
        920,
        1011
      ],
      "loc": {
        "end": {
          "column": 91,
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
        "name": "SubTup2RestAndTrailingVariadic2",
        "optional": false,
        "range": [
          1018,
          1049
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 41
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
              1073,
              1074
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 41
              },
              "start": {
                "column": 60,
                "line": 41
              }
            }
          },
          "range": [
            1073,
            1074
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 41
            },
            "start": {
              "column": 60,
              "line": 41
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        1099,
                        1100
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 42
                        },
                        "start": {
                          "column": 14,
                          "line": 42
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1099,
                      1100
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 42
                      },
                      "start": {
                        "column": 14,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1093,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1092,
                  1103
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 42
                  },
                  "start": {
                    "column": 7,
                    "line": 42
                  }
                }
              },
              "range": [
                1089,
                1103
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1129,
                          1132
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 43
                          },
                          "start": {
                            "column": 24,
                            "line": 43
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1134,
                          1137
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 43
                          },
                          "start": {
                            "column": 29,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "range": [
                      1128,
                      1138
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 43
                      },
                      "start": {
                        "column": 23,
                        "line": 43
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      1118,
                      1119
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 43
                      },
                      "start": {
                        "column": 13,
                        "line": 43
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1118,
                    1138
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 43
                    },
                    "start": {
                      "column": 13,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1112,
                  1138
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 43
                  },
                  "start": {
                    "column": 7,
                    "line": 43
                  }
                }
              },
              "range": [
                1109,
                1138
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            1083,
            1141
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 44
            },
            "start": {
              "column": 70,
              "line": 41
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1164,
            1169
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
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
                "name": "C",
                "optional": false,
                "range": [
                  1149,
                  1150
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 45
                  },
                  "start": {
                    "column": 7,
                    "line": 45
                  }
                }
              },
              "range": [
                1149,
                1150
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 45
                },
                "start": {
                  "column": 7,
                  "line": 45
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
                  "name": "B",
                  "optional": false,
                  "range": [
                    1155,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 45
                    },
                    "start": {
                      "column": 13,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1155,
                  1156
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 45
                  },
                  "start": {
                    "column": 13,
                    "line": 45
                  }
                }
              },
              "range": [
                1152,
                1156
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 45
                },
                "start": {
                  "column": 10,
                  "line": 45
                }
              }
            }
          ],
          "range": [
            1148,
            1157
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        },
        "range": [
          1073,
          1169
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 46
          },
          "start": {
            "column": 60,
            "line": 41
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 41
          },
          "start": {
            "column": 36,
            "line": 41
          }
        },
        "range": [
          1049,
          1070
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  1060,
                  1067
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 41
                  },
                  "start": {
                    "column": 47,
                    "line": 41
                  }
                }
              },
              "range": [
                1060,
                1069
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 41
                },
                "start": {
                  "column": 47,
                  "line": 41
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
                1050,
                1051
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 41
                },
                "start": {
                  "column": 37,
                  "line": 41
                }
              }
            },
            "out": false,
            "range": [
              1050,
              1069
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 41
              },
              "start": {
                "column": 37,
                "line": 41
              }
            }
          }
        ]
      },
      "range": [
        1013,
        1170
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2RestAndTrailingVariadic2Test",
        "optional": false,
        "range": [
          1177,
          1212
        ],
        "loc": {
          "end": {
            "column": 40,
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
            1246,
            1271
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1254,
                            1255
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 48
                            },
                            "start": {
                              "column": 82,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          1254,
                          1255
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 48
                          },
                          "start": {
                            "column": 82,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1254,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 48
                        },
                        "start": {
                          "column": 82,
                          "line": 48
                        }
                      }
                    },
                    "label": {
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
                          "column": 80,
                          "line": 48
                        },
                        "start": {
                          "column": 79,
                          "line": 48
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1251,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 48
                      },
                      "start": {
                        "column": 79,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1248,
                    1257
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 48
                    },
                    "start": {
                      "column": 76,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1262,
                        1263
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 48
                        },
                        "start": {
                          "column": 90,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1262,
                      1263
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 48
                      },
                      "start": {
                        "column": 90,
                        "line": 48
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1259,
                      1260
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 48
                      },
                      "start": {
                        "column": 87,
                        "line": 48
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1259,
                    1263
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 48
                    },
                    "start": {
                      "column": 87,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1268,
                        1269
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 48
                        },
                        "start": {
                          "column": 96,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1268,
                      1269
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 48
                      },
                      "start": {
                        "column": 96,
                        "line": 48
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      1265,
                      1266
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 48
                      },
                      "start": {
                        "column": 93,
                        "line": 48
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1265,
                    1269
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 48
                    },
                    "start": {
                      "column": 93,
                      "line": 48
                    }
                  }
                }
              ],
              "range": [
                1247,
                1270
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 48
                },
                "start": {
                  "column": 75,
                  "line": 48
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 48
            },
            "start": {
              "column": 74,
              "line": 48
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2RestAndTrailingVariadic2",
          "optional": false,
          "range": [
            1215,
            1246
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 48
            },
            "start": {
              "column": 43,
              "line": 48
            }
          }
        },
        "range": [
          1215,
          1271
        ],
        "loc": {
          "end": {
            "column": 99,
            "line": 48
          },
          "start": {
            "column": 43,
            "line": 48
          }
        }
      },
      "range": [
        1172,
        1272
      ],
      "loc": {
        "end": {
          "column": 100,
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
        "name": "SubTup2VariadicWithLeadingFixedElements",
        "optional": false,
        "range": [
          1279,
          1318
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
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
              1342,
              1343
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 50
              },
              "start": {
                "column": 68,
                "line": 50
              }
            }
          },
          "range": [
            1342,
            1343
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 50
            },
            "start": {
              "column": 68,
              "line": 50
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "range": [
                1356,
                1359
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 2,
                  "line": 51
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1383,
                          1386
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 52
                          },
                          "start": {
                            "column": 22,
                            "line": 52
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1388,
                          1391
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 52
                          },
                          "start": {
                            "column": 27,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "range": [
                      1382,
                      1392
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 52
                      },
                      "start": {
                        "column": 21,
                        "line": 52
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      1372,
                      1373
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 52
                      },
                      "start": {
                        "column": 11,
                        "line": 52
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1372,
                    1392
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 52
                    },
                    "start": {
                      "column": 11,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1366,
                  1392
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 52
                  },
                  "start": {
                    "column": 5,
                    "line": 52
                  }
                }
              },
              "range": [
                1363,
                1392
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 52
                },
                "start": {
                  "column": 2,
                  "line": 52
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1399,
                  1402
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 53
                  },
                  "start": {
                    "column": 5,
                    "line": 53
                  }
                }
              },
              "range": [
                1396,
                1402
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 53
                },
                "start": {
                  "column": 2,
                  "line": 53
                }
              }
            }
          ],
          "range": [
            1352,
            1404
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 54
            },
            "start": {
              "column": 78,
              "line": 50
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1415,
            1420
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 56
            },
            "start": {
              "column": 4,
              "line": 56
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              1409,
              1410
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          "range": [
            1409,
            1410
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 55
            },
            "start": {
              "column": 4,
              "line": 55
            }
          }
        },
        "range": [
          1342,
          1420
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 56
          },
          "start": {
            "column": 68,
            "line": 50
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 50
          },
          "start": {
            "column": 44,
            "line": 50
          }
        },
        "range": [
          1318,
          1339
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  1329,
                  1336
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 50
                  },
                  "start": {
                    "column": 55,
                    "line": 50
                  }
                }
              },
              "range": [
                1329,
                1338
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 50
                },
                "start": {
                  "column": 55,
                  "line": 50
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
                1319,
                1320
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 50
                },
                "start": {
                  "column": 45,
                  "line": 50
                }
              }
            },
            "out": false,
            "range": [
              1319,
              1338
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 50
              },
              "start": {
                "column": 45,
                "line": 50
              }
            }
          }
        ]
      },
      "range": [
        1274,
        1421
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElementsTest",
        "optional": false,
        "range": [
          1428,
          1471
        ],
        "loc": {
          "end": {
            "column": 48,
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
            1513,
            1544
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1518,
                        1519
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 58
                        },
                        "start": {
                          "column": 95,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1518,
                      1519
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 58
                      },
                      "start": {
                        "column": 95,
                        "line": 58
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1515,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 58
                      },
                      "start": {
                        "column": 92,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1515,
                    1519
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 58
                    },
                    "start": {
                      "column": 92,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1524,
                        1525
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 58
                        },
                        "start": {
                          "column": 101,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1524,
                      1525
                    ],
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 58
                      },
                      "start": {
                        "column": 101,
                        "line": 58
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1521,
                      1522
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 58
                      },
                      "start": {
                        "column": 98,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1521,
                    1525
                  ],
                  "loc": {
                    "end": {
                      "column": 102,
                      "line": 58
                    },
                    "start": {
                      "column": 98,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1530,
                        1531
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 58
                        },
                        "start": {
                          "column": 107,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1530,
                      1531
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 58
                      },
                      "start": {
                        "column": 107,
                        "line": 58
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      1527,
                      1528
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 58
                      },
                      "start": {
                        "column": 104,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1527,
                    1531
                  ],
                  "loc": {
                    "end": {
                      "column": 108,
                      "line": 58
                    },
                    "start": {
                      "column": 104,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "3",
                          "value": 3,
                          "range": [
                            1539,
                            1540
                          ],
                          "loc": {
                            "end": {
                              "column": 117,
                              "line": 58
                            },
                            "start": {
                              "column": 116,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          1539,
                          1540
                        ],
                        "loc": {
                          "end": {
                            "column": 117,
                            "line": 58
                          },
                          "start": {
                            "column": 116,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1539,
                        1542
                      ],
                      "loc": {
                        "end": {
                          "column": 119,
                          "line": 58
                        },
                        "start": {
                          "column": 116,
                          "line": 58
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        1536,
                        1537
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 58
                        },
                        "start": {
                          "column": 113,
                          "line": 58
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1536,
                      1542
                    ],
                    "loc": {
                      "end": {
                        "column": 119,
                        "line": 58
                      },
                      "start": {
                        "column": 113,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1533,
                    1542
                  ],
                  "loc": {
                    "end": {
                      "column": 119,
                      "line": 58
                    },
                    "start": {
                      "column": 110,
                      "line": 58
                    }
                  }
                }
              ],
              "range": [
                1514,
                1543
              ],
              "loc": {
                "end": {
                  "column": 120,
                  "line": 58
                },
                "start": {
                  "column": 91,
                  "line": 58
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 121,
              "line": 58
            },
            "start": {
              "column": 90,
              "line": 58
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "range": [
            1474,
            1513
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 58
            },
            "start": {
              "column": 51,
              "line": 58
            }
          }
        },
        "range": [
          1474,
          1544
        ],
        "loc": {
          "end": {
            "column": 121,
            "line": 58
          },
          "start": {
            "column": 51,
            "line": 58
          }
        }
      },
      "range": [
        1423,
        1545
      ],
      "loc": {
        "end": {
          "column": 122,
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
        "name": "SubTup2VariadicWithLeadingFixedElementsTest2",
        "optional": false,
        "range": [
          1551,
          1595
        ],
        "loc": {
          "end": {
            "column": 49,
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
            1637,
            1674
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1642,
                        1643
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 59
                        },
                        "start": {
                          "column": 96,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1642,
                      1643
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 59
                      },
                      "start": {
                        "column": 96,
                        "line": 59
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1639,
                      1640
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 59
                      },
                      "start": {
                        "column": 93,
                        "line": 59
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1639,
                    1643
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 59
                    },
                    "start": {
                      "column": 93,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1648,
                        1649
                      ],
                      "loc": {
                        "end": {
                          "column": 103,
                          "line": 59
                        },
                        "start": {
                          "column": 102,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1648,
                      1649
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 59
                      },
                      "start": {
                        "column": 102,
                        "line": 59
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1645,
                      1646
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 59
                      },
                      "start": {
                        "column": 99,
                        "line": 59
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1645,
                    1649
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 59
                    },
                    "start": {
                      "column": 99,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1654,
                        1655
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 59
                        },
                        "start": {
                          "column": 108,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1654,
                      1655
                    ],
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 59
                      },
                      "start": {
                        "column": 108,
                        "line": 59
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      1651,
                      1652
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 59
                      },
                      "start": {
                        "column": 105,
                        "line": 59
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1651,
                    1655
                  ],
                  "loc": {
                    "end": {
                      "column": 109,
                      "line": 59
                    },
                    "start": {
                      "column": 105,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        1660,
                        1661
                      ],
                      "loc": {
                        "end": {
                          "column": 115,
                          "line": 59
                        },
                        "start": {
                          "column": 114,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1660,
                      1661
                    ],
                    "loc": {
                      "end": {
                        "column": 115,
                        "line": 59
                      },
                      "start": {
                        "column": 114,
                        "line": 59
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      1657,
                      1658
                    ],
                    "loc": {
                      "end": {
                        "column": 112,
                        "line": 59
                      },
                      "start": {
                        "column": 111,
                        "line": 59
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1657,
                    1661
                  ],
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 59
                    },
                    "start": {
                      "column": 111,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "4",
                          "value": 4,
                          "range": [
                            1669,
                            1670
                          ],
                          "loc": {
                            "end": {
                              "column": 124,
                              "line": 59
                            },
                            "start": {
                              "column": 123,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1669,
                          1670
                        ],
                        "loc": {
                          "end": {
                            "column": 124,
                            "line": 59
                          },
                          "start": {
                            "column": 123,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1669,
                        1672
                      ],
                      "loc": {
                        "end": {
                          "column": 126,
                          "line": 59
                        },
                        "start": {
                          "column": 123,
                          "line": 59
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "range": [
                        1666,
                        1667
                      ],
                      "loc": {
                        "end": {
                          "column": 121,
                          "line": 59
                        },
                        "start": {
                          "column": 120,
                          "line": 59
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1666,
                      1672
                    ],
                    "loc": {
                      "end": {
                        "column": 126,
                        "line": 59
                      },
                      "start": {
                        "column": 120,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1663,
                    1672
                  ],
                  "loc": {
                    "end": {
                      "column": 126,
                      "line": 59
                    },
                    "start": {
                      "column": 117,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                1638,
                1673
              ],
              "loc": {
                "end": {
                  "column": 127,
                  "line": 59
                },
                "start": {
                  "column": 92,
                  "line": 59
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 128,
              "line": 59
            },
            "start": {
              "column": 91,
              "line": 59
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "range": [
            1598,
            1637
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 59
            },
            "start": {
              "column": 52,
              "line": 59
            }
          }
        },
        "range": [
          1598,
          1674
        ],
        "loc": {
          "end": {
            "column": 128,
            "line": 59
          },
          "start": {
            "column": 52,
            "line": 59
          }
        }
      },
      "range": [
        1546,
        1675
      ],
      "loc": {
        "end": {
          "column": 129,
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
        "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
        "optional": false,
        "range": [
          1682,
          1730
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 61
          },
          "start": {
            "column": 5,
            "line": 61
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
              1754,
              1755
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 61
              },
              "start": {
                "column": 77,
                "line": 61
              }
            }
          },
          "range": [
            1754,
            1755
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 61
            },
            "start": {
              "column": 77,
              "line": 61
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1771,
                  1774
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 62
                  },
                  "start": {
                    "column": 5,
                    "line": 62
                  }
                }
              },
              "range": [
                1768,
                1774
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 62
                },
                "start": {
                  "column": 2,
                  "line": 62
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1798,
                          1801
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 63
                          },
                          "start": {
                            "column": 22,
                            "line": 63
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1803,
                          1806
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 63
                          },
                          "start": {
                            "column": 27,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "range": [
                      1797,
                      1807
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 63
                      },
                      "start": {
                        "column": 21,
                        "line": 63
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      1787,
                      1788
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 63
                      },
                      "start": {
                        "column": 11,
                        "line": 63
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1787,
                    1807
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 63
                    },
                    "start": {
                      "column": 11,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1781,
                  1807
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 63
                  },
                  "start": {
                    "column": 5,
                    "line": 63
                  }
                }
              },
              "range": [
                1778,
                1807
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 63
                },
                "start": {
                  "column": 2,
                  "line": 63
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                1811,
                1814
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 2,
                  "line": 64
                }
              }
            }
          ],
          "range": [
            1764,
            1817
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 65
            },
            "start": {
              "column": 87,
              "line": 61
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1828,
            1833
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 67
            },
            "start": {
              "column": 4,
              "line": 67
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              1822,
              1823
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          "range": [
            1822,
            1823
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 66
            },
            "start": {
              "column": 4,
              "line": 66
            }
          }
        },
        "range": [
          1754,
          1833
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 67
          },
          "start": {
            "column": 77,
            "line": 61
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 74,
            "line": 61
          },
          "start": {
            "column": 53,
            "line": 61
          }
        },
        "range": [
          1730,
          1751
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  1741,
                  1748
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 61
                  },
                  "start": {
                    "column": 64,
                    "line": 61
                  }
                }
              },
              "range": [
                1741,
                1750
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 61
                },
                "start": {
                  "column": 64,
                  "line": 61
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
                1731,
                1732
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 61
                },
                "start": {
                  "column": 54,
                  "line": 61
                }
              }
            },
            "out": false,
            "range": [
              1731,
              1750
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 61
              },
              "start": {
                "column": 54,
                "line": 61
              }
            }
          }
        ]
      },
      "range": [
        1677,
        1834
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest",
        "optional": false,
        "range": [
          1841,
          1893
        ],
        "loc": {
          "end": {
            "column": 57,
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
            1944,
            1975
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1952,
                            1953
                          ],
                          "loc": {
                            "end": {
                              "column": 117,
                              "line": 69
                            },
                            "start": {
                              "column": 116,
                              "line": 69
                            }
                          }
                        },
                        "range": [
                          1952,
                          1953
                        ],
                        "loc": {
                          "end": {
                            "column": 117,
                            "line": 69
                          },
                          "start": {
                            "column": 116,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1952,
                        1955
                      ],
                      "loc": {
                        "end": {
                          "column": 119,
                          "line": 69
                        },
                        "start": {
                          "column": 116,
                          "line": 69
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        1949,
                        1950
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 69
                        },
                        "start": {
                          "column": 113,
                          "line": 69
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1949,
                      1955
                    ],
                    "loc": {
                      "end": {
                        "column": 119,
                        "line": 69
                      },
                      "start": {
                        "column": 113,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1946,
                    1955
                  ],
                  "loc": {
                    "end": {
                      "column": 119,
                      "line": 69
                    },
                    "start": {
                      "column": 110,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1960,
                        1961
                      ],
                      "loc": {
                        "end": {
                          "column": 125,
                          "line": 69
                        },
                        "start": {
                          "column": 124,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      1960,
                      1961
                    ],
                    "loc": {
                      "end": {
                        "column": 125,
                        "line": 69
                      },
                      "start": {
                        "column": 124,
                        "line": 69
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1957,
                      1958
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 69
                      },
                      "start": {
                        "column": 121,
                        "line": 69
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1957,
                    1961
                  ],
                  "loc": {
                    "end": {
                      "column": 125,
                      "line": 69
                    },
                    "start": {
                      "column": 121,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1966,
                        1967
                      ],
                      "loc": {
                        "end": {
                          "column": 131,
                          "line": 69
                        },
                        "start": {
                          "column": 130,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      1966,
                      1967
                    ],
                    "loc": {
                      "end": {
                        "column": 131,
                        "line": 69
                      },
                      "start": {
                        "column": 130,
                        "line": 69
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      1963,
                      1964
                    ],
                    "loc": {
                      "end": {
                        "column": 128,
                        "line": 69
                      },
                      "start": {
                        "column": 127,
                        "line": 69
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1963,
                    1967
                  ],
                  "loc": {
                    "end": {
                      "column": 131,
                      "line": 69
                    },
                    "start": {
                      "column": 127,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        1972,
                        1973
                      ],
                      "loc": {
                        "end": {
                          "column": 137,
                          "line": 69
                        },
                        "start": {
                          "column": 136,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      1972,
                      1973
                    ],
                    "loc": {
                      "end": {
                        "column": 137,
                        "line": 69
                      },
                      "start": {
                        "column": 136,
                        "line": 69
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      1969,
                      1970
                    ],
                    "loc": {
                      "end": {
                        "column": 134,
                        "line": 69
                      },
                      "start": {
                        "column": 133,
                        "line": 69
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1969,
                    1973
                  ],
                  "loc": {
                    "end": {
                      "column": 137,
                      "line": 69
                    },
                    "start": {
                      "column": 133,
                      "line": 69
                    }
                  }
                }
              ],
              "range": [
                1945,
                1974
              ],
              "loc": {
                "end": {
                  "column": 138,
                  "line": 69
                },
                "start": {
                  "column": 109,
                  "line": 69
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 139,
              "line": 69
            },
            "start": {
              "column": 108,
              "line": 69
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "range": [
            1896,
            1944
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 69
            },
            "start": {
              "column": 60,
              "line": 69
            }
          }
        },
        "range": [
          1896,
          1975
        ],
        "loc": {
          "end": {
            "column": 139,
            "line": 69
          },
          "start": {
            "column": 60,
            "line": 69
          }
        }
      },
      "range": [
        1836,
        1976
      ],
      "loc": {
        "end": {
          "column": 140,
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
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest2",
        "optional": false,
        "range": [
          1982,
          2035
        ],
        "loc": {
          "end": {
            "column": 58,
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
            2086,
            2123
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            2094,
                            2095
                          ],
                          "loc": {
                            "end": {
                              "column": 118,
                              "line": 70
                            },
                            "start": {
                              "column": 117,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          2094,
                          2095
                        ],
                        "loc": {
                          "end": {
                            "column": 118,
                            "line": 70
                          },
                          "start": {
                            "column": 117,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        2094,
                        2097
                      ],
                      "loc": {
                        "end": {
                          "column": 120,
                          "line": 70
                        },
                        "start": {
                          "column": 117,
                          "line": 70
                        }
                      }
                    },
                    "label": {
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
                          "column": 115,
                          "line": 70
                        },
                        "start": {
                          "column": 114,
                          "line": 70
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2091,
                      2097
                    ],
                    "loc": {
                      "end": {
                        "column": 120,
                        "line": 70
                      },
                      "start": {
                        "column": 114,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    2088,
                    2097
                  ],
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 70
                    },
                    "start": {
                      "column": 111,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2102,
                        2103
                      ],
                      "loc": {
                        "end": {
                          "column": 126,
                          "line": 70
                        },
                        "start": {
                          "column": 125,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      2102,
                      2103
                    ],
                    "loc": {
                      "end": {
                        "column": 126,
                        "line": 70
                      },
                      "start": {
                        "column": 125,
                        "line": 70
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      2099,
                      2100
                    ],
                    "loc": {
                      "end": {
                        "column": 123,
                        "line": 70
                      },
                      "start": {
                        "column": 122,
                        "line": 70
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2099,
                    2103
                  ],
                  "loc": {
                    "end": {
                      "column": 126,
                      "line": 70
                    },
                    "start": {
                      "column": 122,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        2108,
                        2109
                      ],
                      "loc": {
                        "end": {
                          "column": 132,
                          "line": 70
                        },
                        "start": {
                          "column": 131,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      2108,
                      2109
                    ],
                    "loc": {
                      "end": {
                        "column": 132,
                        "line": 70
                      },
                      "start": {
                        "column": 131,
                        "line": 70
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      2105,
                      2106
                    ],
                    "loc": {
                      "end": {
                        "column": 129,
                        "line": 70
                      },
                      "start": {
                        "column": 128,
                        "line": 70
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2105,
                    2109
                  ],
                  "loc": {
                    "end": {
                      "column": 132,
                      "line": 70
                    },
                    "start": {
                      "column": 128,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        2114,
                        2115
                      ],
                      "loc": {
                        "end": {
                          "column": 138,
                          "line": 70
                        },
                        "start": {
                          "column": 137,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      2114,
                      2115
                    ],
                    "loc": {
                      "end": {
                        "column": 138,
                        "line": 70
                      },
                      "start": {
                        "column": 137,
                        "line": 70
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      2111,
                      2112
                    ],
                    "loc": {
                      "end": {
                        "column": 135,
                        "line": 70
                      },
                      "start": {
                        "column": 134,
                        "line": 70
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2111,
                    2115
                  ],
                  "loc": {
                    "end": {
                      "column": 138,
                      "line": 70
                    },
                    "start": {
                      "column": 134,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        2120,
                        2121
                      ],
                      "loc": {
                        "end": {
                          "column": 144,
                          "line": 70
                        },
                        "start": {
                          "column": 143,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      2120,
                      2121
                    ],
                    "loc": {
                      "end": {
                        "column": 144,
                        "line": 70
                      },
                      "start": {
                        "column": 143,
                        "line": 70
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "range": [
                      2117,
                      2118
                    ],
                    "loc": {
                      "end": {
                        "column": 141,
                        "line": 70
                      },
                      "start": {
                        "column": 140,
                        "line": 70
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2117,
                    2121
                  ],
                  "loc": {
                    "end": {
                      "column": 144,
                      "line": 70
                    },
                    "start": {
                      "column": 140,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                2087,
                2122
              ],
              "loc": {
                "end": {
                  "column": 145,
                  "line": 70
                },
                "start": {
                  "column": 110,
                  "line": 70
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 146,
              "line": 70
            },
            "start": {
              "column": 109,
              "line": 70
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "range": [
            2038,
            2086
          ],
          "loc": {
            "end": {
              "column": 109,
              "line": 70
            },
            "start": {
              "column": 61,
              "line": 70
            }
          }
        },
        "range": [
          2038,
          2123
        ],
        "loc": {
          "end": {
            "column": 146,
            "line": 70
          },
          "start": {
            "column": 61,
            "line": 70
          }
        }
      },
      "range": [
        1977,
        2124
      ],
      "loc": {
        "end": {
          "column": 147,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 71
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
