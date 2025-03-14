__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    797
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          55,
          78
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                69,
                72
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
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
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                72,
                75
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    74,
                    75
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
                "range": [
                  74,
                  75
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
              }
            },
            "value": null,
            "range": [
              61,
              76
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 3
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
          50,
          51
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
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
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        },
        "range": [
          51,
          54
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
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              52,
              53
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        44,
        78
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          104,
          107
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 24,
            "line": 7
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
          86,
          87
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          99,
          100
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
          }
        }
      },
      "superTypeArguments": {
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
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "range": [
              101,
              102
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        },
        "range": [
          87,
          90
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
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        80,
        107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          118,
          122
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
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
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            },
            "range": [
              124,
              135
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  127,
                  135
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      128,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  126,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "range": [
                126,
                135
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            }
          },
          "range": [
            123,
            135
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 10
            }
          }
        }
      ],
      "range": [
        109,
        137
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          147,
          151
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
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
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            },
            "range": [
              153,
              164
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  156,
                  164
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      157,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 19,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
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
                  155,
                  156
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
              "range": [
                155,
                164
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              }
            }
          },
          "range": [
            152,
            164
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "range": [
        138,
        166
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
          195,
          198
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 12
          },
          "start": {
            "column": 22,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          182,
          186
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
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
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 15,
                "line": 12
              }
            },
            "range": [
              188,
              193
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                190,
                193
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              }
            }
          },
          "range": [
            187,
            193
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 12
            },
            "start": {
              "column": 14,
              "line": 12
            }
          }
        }
      ],
      "range": [
        173,
        198
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          209,
          213
        ],
        "loc": {
          "end": {
            "column": 13,
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
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 15,
                "line": 14
              }
            },
            "range": [
              215,
              226
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  218,
                  226
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      219,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  217,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              },
              "range": [
                217,
                226
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              }
            }
          },
          "range": [
            214,
            226
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 14
            },
            "start": {
              "column": 14,
              "line": 14
            }
          }
        }
      ],
      "range": [
        200,
        228
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          238,
          242
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
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            },
            "range": [
              244,
              255
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  247,
                  255
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      248,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
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
                    "column": 26,
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
                "name": "D",
                "optional": false,
                "range": [
                  246,
                  247
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
                246,
                255
              ],
              "loc": {
                "end": {
                  "column": 26,
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
            243,
            255
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        }
      ],
      "range": [
        229,
        257
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
          286,
          289
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 16
          },
          "start": {
            "column": 22,
            "line": 16
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
          273,
          277
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
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
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 15,
                "line": 16
              }
            },
            "range": [
              279,
              284
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                281,
                284
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              }
            }
          },
          "range": [
            278,
            284
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 16
            },
            "start": {
              "column": 14,
              "line": 16
            }
          }
        }
      ],
      "range": [
        264,
        289
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          300,
          304
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
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
                "column": 26,
                "line": 18
              },
              "start": {
                "column": 15,
                "line": 18
              }
            },
            "range": [
              306,
              317
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  309,
                  317
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      310,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 18
                      },
                      "start": {
                        "column": 19,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  308,
                  309
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
                308,
                317
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            }
          },
          "range": [
            305,
            317
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        }
      ],
      "range": [
        291,
        319
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          329,
          333
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
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
                "column": 26,
                "line": 19
              },
              "start": {
                "column": 15,
                "line": 19
              }
            },
            "range": [
              335,
              346
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  338,
                  346
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      339,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
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
                    "column": 26,
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
                "name": "D",
                "optional": false,
                "range": [
                  337,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 19
                  },
                  "start": {
                    "column": 17,
                    "line": 19
                  }
                }
              },
              "range": [
                337,
                346
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
          },
          "range": [
            334,
            346
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "range": [
        320,
        348
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
          377,
          380
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          364,
          368
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 20
              },
              "start": {
                "column": 15,
                "line": 20
              }
            },
            "range": [
              370,
              375
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                372,
                375
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            }
          },
          "range": [
            369,
            375
          ],
          "loc": {
            "end": {
              "column": 20,
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
        355,
        380
      ],
      "loc": {
        "end": {
          "column": 25,
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          391,
          395
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
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
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 15,
                "line": 22
              }
            },
            "range": [
              397,
              408
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  400,
                  408
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      401,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 22
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  399,
                  400
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
              "range": [
                399,
                408
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            }
          },
          "range": [
            396,
            408
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 22
          },
          "start": {
            "column": 27,
            "line": 22
          }
        },
        "range": [
          409,
          417
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            411,
            417
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 22
            },
            "start": {
              "column": 29,
              "line": 22
            }
          }
        }
      },
      "range": [
        382,
        418
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          429,
          433
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
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
                "column": 26,
                "line": 23
              },
              "start": {
                "column": 15,
                "line": 23
              }
            },
            "range": [
              435,
              446
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  438,
                  446
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      439,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
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
                    "column": 26,
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
                "name": "D",
                "optional": false,
                "range": [
                  437,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              },
              "range": [
                437,
                446
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 23
                }
              }
            }
          },
          "range": [
            434,
            446
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 23
          },
          "start": {
            "column": 27,
            "line": 23
          }
        },
        "range": [
          447,
          455
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            449,
            455
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 23
            },
            "start": {
              "column": 29,
              "line": 23
            }
          }
        }
      },
      "range": [
        420,
        456
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
          498,
          501
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 24
          },
          "start": {
            "column": 27,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          480,
          484
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
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
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 15,
                "line": 24
              }
            },
            "range": [
              486,
              491
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                488,
                491
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 24
                },
                "start": {
                  "column": 17,
                  "line": 24
                }
              }
            }
          },
          "range": [
            485,
            491
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 24
            },
            "start": {
              "column": 14,
              "line": 24
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 24
          },
          "start": {
            "column": 21,
            "line": 24
          }
        },
        "range": [
          492,
          497
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            494,
            497
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 24
            },
            "start": {
              "column": 23,
              "line": 24
            }
          }
        }
      },
      "range": [
        471,
        501
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r",
            "optional": false,
            "range": [
              507,
              508
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    520,
                    521
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    521,
                    529
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        522,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 26
                        },
                        "start": {
                          "column": 19,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 26
                    },
                    "start": {
                      "column": 18,
                      "line": 26
                    }
                  }
                },
                "range": [
                  516,
                  531
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "range": [
                511,
                515
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              511,
              532
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            507,
            532
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        503,
        533
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "r",
            "optional": false,
            "range": [
              538,
              539
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    551,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 27
                    },
                    "start": {
                      "column": 17,
                      "line": 27
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    552,
                    560
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        553,
                        559
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 27
                        },
                        "start": {
                          "column": 19,
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
                      "column": 18,
                      "line": 27
                    }
                  }
                },
                "range": [
                  547,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 27
                  },
                  "start": {
                    "column": 13,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "range": [
                542,
                546
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              542,
              563
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "range": [
            538,
            563
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        534,
        564
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          575,
          579
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
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
                "column": 26,
                "line": 29
              },
              "start": {
                "column": 15,
                "line": 29
              }
            },
            "range": [
              581,
              592
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  584,
                  592
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      585,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 29
                      },
                      "start": {
                        "column": 19,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 29
                  },
                  "start": {
                    "column": 18,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  583,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                }
              },
              "range": [
                583,
                592
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 29
                }
              }
            }
          },
          "range": [
            580,
            592
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 29
            },
            "start": {
              "column": 14,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 29
          },
          "start": {
            "column": 27,
            "line": 29
          }
        },
        "range": [
          593,
          601
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            595,
            601
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 29
            },
            "start": {
              "column": 29,
              "line": 29
            }
          }
        }
      },
      "range": [
        566,
        602
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          612,
          616
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
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
                "column": 26,
                "line": 30
              },
              "start": {
                "column": 15,
                "line": 30
              }
            },
            "range": [
              618,
              629
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  621,
                  629
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      622,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 30
                      },
                      "start": {
                        "column": 19,
                        "line": 30
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  620,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 17,
                    "line": 30
                  }
                }
              },
              "range": [
                620,
                629
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              }
            }
          },
          "range": [
            617,
            629
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 30
            },
            "start": {
              "column": 14,
              "line": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 30
          },
          "start": {
            "column": 27,
            "line": 30
          }
        },
        "range": [
          630,
          638
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            632,
            638
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 30
            },
            "start": {
              "column": 29,
              "line": 30
            }
          }
        }
      },
      "range": [
        603,
        639
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "body": [],
        "range": [
          676,
          679
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 31
          },
          "start": {
            "column": 27,
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
        "name": "foo5",
        "optional": false,
        "range": [
          658,
          662
        ],
        "loc": {
          "end": {
            "column": 13,
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
                "column": 20,
                "line": 31
              },
              "start": {
                "column": 15,
                "line": 31
              }
            },
            "range": [
              664,
              669
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                666,
                669
              ],
              "loc": {
                "end": {
                  "column": 20,
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
            663,
            669
          ],
          "loc": {
            "end": {
              "column": 20,
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
            "column": 26,
            "line": 31
          },
          "start": {
            "column": 21,
            "line": 31
          }
        },
        "range": [
          670,
          675
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            672,
            675
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 31
            },
            "start": {
              "column": 23,
              "line": 31
            }
          }
        }
      },
      "range": [
        649,
        679
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          690,
          694
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
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
                "column": 26,
                "line": 33
              },
              "start": {
                "column": 15,
                "line": 33
              }
            },
            "range": [
              696,
              707
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  699,
                  707
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      700,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 33
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 33
                  },
                  "start": {
                    "column": 18,
                    "line": 33
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  698,
                  699
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 33
                  },
                  "start": {
                    "column": 17,
                    "line": 33
                  }
                }
              },
              "range": [
                698,
                707
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            }
          },
          "range": [
            695,
            707
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 33
          },
          "start": {
            "column": 27,
            "line": 33
          }
        },
        "range": [
          708,
          716
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            710,
            716
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
      },
      "range": [
        681,
        717
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          727,
          731
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
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
                "column": 26,
                "line": 34
              },
              "start": {
                "column": 15,
                "line": 34
              }
            },
            "range": [
              733,
              744
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  736,
                  744
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      737,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
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
                    "column": 26,
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
                "name": "D",
                "optional": false,
                "range": [
                  735,
                  736
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 34
                  },
                  "start": {
                    "column": 17,
                    "line": 34
                  }
                }
              },
              "range": [
                735,
                744
              ],
              "loc": {
                "end": {
                  "column": 26,
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
            732,
            744
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 34
            },
            "start": {
              "column": 14,
              "line": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 34
          },
          "start": {
            "column": 27,
            "line": 34
          }
        },
        "range": [
          745,
          753
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            747,
            753
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 34
            },
            "start": {
              "column": 29,
              "line": 34
            }
          }
        }
      },
      "range": [
        718,
        754
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
          791,
          794
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          773,
          777
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
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
                "column": 20,
                "line": 35
              },
              "start": {
                "column": 15,
                "line": 35
              }
            },
            "range": [
              779,
              784
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                781,
                784
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 35
                },
                "start": {
                  "column": 17,
                  "line": 35
                }
              }
            }
          },
          "range": [
            778,
            784
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 35
            },
            "start": {
              "column": 14,
              "line": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 35
          },
          "start": {
            "column": 21,
            "line": 35
          }
        },
        "range": [
          785,
          790
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            787,
            790
          ],
          "loc": {
            "end": {
              "column": 26,
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
        764,
        794
      ],
      "loc": {
        "end": {
          "column": 30,
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
      "column": 0,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
