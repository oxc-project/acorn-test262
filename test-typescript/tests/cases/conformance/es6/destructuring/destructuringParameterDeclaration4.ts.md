__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    205,
    1387
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "range": [
          210,
          221
        ],
        "loc": {
          "end": {
            "column": 16,
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
            229,
            237
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "range": [
                  230,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "range": [
                230,
                236
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "range": [
            224,
            229
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 7
            },
            "start": {
              "column": 19,
              "line": 7
            }
          }
        },
        "range": [
          224,
          237
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
          }
        }
      },
      "range": [
        205,
        237
      ],
      "loc": {
        "end": {
          "column": 32,
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
        "name": "someArray",
        "optional": false,
        "range": [
          243,
          252
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
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
                260,
                268
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "range": [
                      261,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    261,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "range": [
                255,
                260
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 8
                }
              }
            },
            "range": [
              255,
              268
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            }
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSNumberKeyword",
              "range": [
                271,
                277
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
            },
            "range": [
              271,
              279
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 8
              },
              "start": {
                "column": 33,
                "line": 8
              }
            }
          }
        ],
        "range": [
          255,
          279
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
      },
      "range": [
        238,
        280
      ],
      "loc": {
        "end": {
          "column": 42,
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
        "name": "stringOrNumArray",
        "optional": false,
        "range": [
          286,
          302
        ],
        "loc": {
          "end": {
            "column": 21,
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
            310,
            325
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
                    "name": "String",
                    "optional": false,
                    "range": [
                      311,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 30,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    311,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
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
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "range": [
                      318,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 9
                      },
                      "start": {
                        "column": 37,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    318,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 9
                    },
                    "start": {
                      "column": 37,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                311,
                324
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 9
            },
            "start": {
              "column": 29,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "range": [
            305,
            310
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 24,
              "line": 9
            }
          }
        },
        "range": [
          305,
          325
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 9
          },
          "start": {
            "column": 24,
            "line": 9
          }
        }
      },
      "range": [
        281,
        326
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
          372,
          375
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 11
          },
          "start": {
            "column": 44,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a0",
        "optional": false,
        "range": [
          337,
          339
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              343,
              344
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            },
            "range": [
              344,
              370
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    347,
                    353
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
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    355,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 27,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    363,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 35,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                346,
                370
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            }
          },
          "range": [
            340,
            370
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        }
      ],
      "range": [
        328,
        375
      ],
      "loc": {
        "end": {
          "column": 47,
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
          458,
          461
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 12
          },
          "start": {
            "column": 37,
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
        "name": "a1",
        "optional": false,
        "range": [
          430,
          432
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              436,
              437
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 12
              },
              "start": {
                "column": 15,
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
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 16,
                "line": 12
              }
            },
            "range": [
              437,
              456
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      440,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 19,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      447,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 12
                      },
                      "start": {
                        "column": 26,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  440,
                  453
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
                439,
                456
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 12
                }
              }
            }
          },
          "range": [
            433,
            456
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 12
            },
            "start": {
              "column": 12,
              "line": 12
            }
          }
        }
      ],
      "range": [
        421,
        461
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
          491,
          494
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 13
          },
          "start": {
            "column": 29,
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
        "name": "a2",
        "optional": false,
        "range": [
          471,
          473
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              477,
              478
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
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 16,
                "line": 13
              }
            },
            "range": [
              478,
              489
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "someArray",
                "optional": false,
                "range": [
                  480,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              },
              "range": [
                480,
                489
              ],
              "loc": {
                "end": {
                  "column": 27,
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
            474,
            489
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        }
      ],
      "range": [
        462,
        494
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
          559,
          562
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "range": [
          549,
          551
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              555,
              556
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 15,
                "line": 14
              }
            }
          },
          "decorators": [],
          "optional": true,
          "range": [
            552,
            557
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        }
      ],
      "range": [
        540,
        562
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
          630,
          633
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 28,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "range": [
          611,
          613
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              617,
              618
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            }
          },
          "decorators": [],
          "optional": false,
          "range": [
            614,
            628
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "range": [
        602,
        633
      ],
      "loc": {
        "end": {
          "column": 31,
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
          696,
          699
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 16
          },
          "start": {
            "column": 27,
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
        "name": "a5",
        "optional": false,
        "range": [
          678,
          680
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
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
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                685,
                686
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 16,
                  "line": 16
                }
              }
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        690,
                        691
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 21,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    689,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                688,
                693
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              }
            }
          ],
          "optional": false,
          "range": [
            681,
            694
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 16
            }
          }
        }
      ],
      "range": [
        669,
        699
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
          739,
          742
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 17
          },
          "start": {
            "column": 39,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a6",
        "optional": false,
        "range": [
          709,
          711
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                713,
                714
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                716,
                717
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                719,
                720
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 19,
                  "line": 17
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  725,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 17
                  },
                  "start": {
                    "column": 25,
                    "line": 17
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                722,
                726
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 17
              },
              "start": {
                "column": 27,
                "line": 17
              }
            },
            "range": [
              727,
              737
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  729,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 17
                  },
                  "start": {
                    "column": 29,
                    "line": 17
                  }
                }
              },
              "range": [
                729,
                737
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 17
                },
                "start": {
                  "column": 29,
                  "line": 17
                }
              }
            }
          },
          "range": [
            712,
            737
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
            }
          }
        }
      ],
      "range": [
        700,
        742
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
              748,
              749
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 20
              },
              "start": {
                "column": 3,
                "line": 20
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              751,
              752
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              754,
              761
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          },
          {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              763,
              767
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 18,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "range": [
            745,
            747
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          745,
          768
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        745,
        769
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "array2",
              "optional": false,
              "range": [
                823,
                829
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              }
            },
            "range": [
              820,
              829
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 3,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "range": [
            817,
            819
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          817,
          830
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        817,
        831
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  892,
                  893
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  895,
                  896
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  898,
                  906
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  908,
                  913
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 22
                  },
                  "start": {
                    "column": 20,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  915,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 22
                  },
                  "start": {
                    "column": 27,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              891,
              920
            ],
            "loc": {
              "end": {
                "column": 32,
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
          "name": "a5",
          "optional": false,
          "range": [
            888,
            890
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
          888,
          921
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        888,
        922
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  981,
                  982
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
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  984,
                  985
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              980,
              986
            ],
            "loc": {
              "end": {
                "column": 9,
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
          "name": "a5",
          "optional": false,
          "range": [
            977,
            979
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
          977,
          987
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        977,
        988
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
                  1070,
                  1071
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
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  1073,
                  1074
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1076,
                  1084
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              1069,
              1085
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 3,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "range": [
            1066,
            1068
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
        "optional": false,
        "range": [
          1066,
          1086
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        1066,
        1087
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "temp",
            "optional": false,
            "range": [
              1149,
              1153
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1157,
                  1158
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 12,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  1160,
                  1161
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 27
                  },
                  "start": {
                    "column": 15,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  1163,
                  1164
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 27
                  },
                  "start": {
                    "column": 18,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              1156,
              1165
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          },
          "range": [
            1149,
            1165
          ],
          "loc": {
            "end": {
              "column": 20,
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
        1145,
        1166
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1175,
          1262
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1181,
                1192
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1192,
                1212
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1209,
                  1212
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 29
                  },
                  "start": {
                    "column": 32,
                    "line": 29
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "temp",
                      "optional": false,
                      "range": [
                        1203,
                        1207
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 29
                        },
                        "start": {
                          "column": 26,
                          "line": 29
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "range": [
                      1193,
                      1207
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 29
                      },
                      "start": {
                        "column": 16,
                        "line": 29
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    1193,
                    1207
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
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
                  "column": 35,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            },
            "range": [
              1181,
              1212
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 8,
            "line": 28
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
          1173,
          1174
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1167,
        1262
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
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
          1338,
          1341
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 33
          },
          "start": {
            "column": 43,
            "line": 33
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
          1304,
          1308
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              1330,
              1331
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 33
              },
              "start": {
                "column": 35,
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
                "column": 41,
                "line": 33
              },
              "start": {
                "column": 36,
                "line": 33
              }
            },
            "range": [
              1331,
              1336
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
                    1333,
                    1334
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 33
                    },
                    "start": {
                      "column": 38,
                      "line": 33
                    }
                  }
                },
                "range": [
                  1333,
                  1334
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 33
                  },
                  "start": {
                    "column": 38,
                    "line": 33
                  }
                }
              },
              "range": [
                1333,
                1336
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 33
                },
                "start": {
                  "column": 38,
                  "line": 33
                }
              }
            }
          },
          "range": [
            1327,
            1336
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 33
            },
            "start": {
              "column": 32,
              "line": 33
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 33
          },
          "start": {
            "column": 13,
            "line": 33
          }
        },
        "range": [
          1308,
          1326
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
                "name": "Number",
                "optional": false,
                "range": [
                  1319,
                  1325
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 33
                  },
                  "start": {
                    "column": 24,
                    "line": 33
                  }
                }
              },
              "range": [
                1319,
                1325
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 33
                },
                "start": {
                  "column": 24,
                  "line": 33
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
                1309,
                1310
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
            "out": false,
            "range": [
              1309,
              1325
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 33
              },
              "start": {
                "column": 14,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        1295,
        1341
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
              1347,
              1348
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 34
              },
              "start": {
                "column": 5,
                "line": 34
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              1350,
              1351
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 34
              },
              "start": {
                "column": 8,
                "line": 34
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"string\"",
            "value": "string",
            "range": [
              1353,
              1361
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 34
              },
              "start": {
                "column": 11,
                "line": 34
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "range": [
                1363,
                1365
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 34
                },
                "start": {
                  "column": 21,
                  "line": 34
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1366,
                1367
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 34
                },
                "start": {
                  "column": 24,
                  "line": 34
                }
              }
            },
            "range": [
              1363,
              1367
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 34
              },
              "start": {
                "column": 21,
                "line": 34
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                1369,
                1370
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 34
                },
                "start": {
                  "column": 27,
                  "line": 34
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1371,
                1372
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 34
                },
                "start": {
                  "column": 29,
                  "line": 34
                }
              }
            },
            "range": [
              1369,
              1372
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 34
              },
              "start": {
                "column": 27,
                "line": 34
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
            1342,
            1346
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "optional": false,
        "range": [
          1342,
          1373
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1342,
        1374
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 7
    }
  },
  "hashbang": null
}
```
