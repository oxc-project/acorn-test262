__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    504
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnNullify",
        "optional": false,
        "range": [
          27,
          36
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            },
            "range": [
              56,
              57
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 34,
                "line": 3
              }
            }
          },
          "range": [
            50,
            57
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            45,
            46
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              71,
              77
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
                      74,
                      75
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
                    74,
                    75
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
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
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
                        "column": 51,
                        "line": 3
                      },
                      "start": {
                        "column": 50,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    72,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 3
                    },
                    "start": {
                      "column": 50,
                      "line": 3
                    }
                  }
                },
                "range": [
                  72,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 3
                  },
                  "start": {
                    "column": 50,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 3
              },
              "start": {
                "column": 49,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NonNullable",
            "optional": false,
            "range": [
              60,
              71
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 3
              },
              "start": {
                "column": 38,
                "line": 3
              }
            }
          },
          "range": [
            60,
            77
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 3
            },
            "start": {
              "column": 38,
              "line": 3
            }
          }
        },
        "range": [
          42,
          79
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          36,
          39
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
                37,
                38
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
              37,
              38
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
          }
        ]
      },
      "range": [
        22,
        80
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 3
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
        "name": "Foo",
        "optional": false,
        "range": [
          87,
          90
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
            102,
            129
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
                      "raw": "1",
                      "value": 1,
                      "range": [
                        107,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 5
                        },
                        "start": {
                          "column": 25,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      107,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      104,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    104,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            114,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          114,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 5
                          },
                          "start": {
                            "column": 32,
                            "line": 5
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          118,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 5
                          },
                          "start": {
                            "column": 36,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      114,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
                      }
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      110,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 5
                      },
                      "start": {
                        "column": 28,
                        "line": 5
                      }
                    }
                  },
                  "optional": true,
                  "range": [
                    110,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 28,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                103,
                128
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnNullify",
          "optional": false,
          "range": [
            93,
            102
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 5
            },
            "start": {
              "column": 11,
              "line": 5
            }
          }
        },
        "range": [
          93,
          129
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "range": [
        82,
        130
      ],
      "loc": {
        "end": {
          "column": 48,
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
        "name": "Test",
        "optional": false,
        "range": [
          137,
          141
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "elementType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    148,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                },
                "range": [
                  148,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  145,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                145,
                149
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
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
                    155,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  }
                },
                "range": [
                  155,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  151,
                  152
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
              "optional": true,
              "range": [
                151,
                156
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
            }
          ],
          "range": [
            144,
            157
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              166,
              169
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            }
          },
          "range": [
            166,
            169
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 34,
              "line": 7
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
              179,
              184
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 7
              },
              "start": {
                "column": 47,
                "line": 7
              }
            }
          },
          "range": [
            179,
            184
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 7
            },
            "start": {
              "column": 47,
              "line": 7
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
              172,
              176
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 7
              },
              "start": {
                "column": 40,
                "line": 7
              }
            }
          },
          "range": [
            172,
            176
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 7
            },
            "start": {
              "column": 40,
              "line": 7
            }
          }
        },
        "range": [
          144,
          184
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 7
          },
          "start": {
            "column": 12,
            "line": 7
          }
        }
      },
      "range": [
        132,
        185
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              },
              "range": [
                261,
                270
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        264,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      264,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          267,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 11
                          },
                          "start": {
                            "column": 11,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        267,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 11
                        },
                        "start": {
                          "column": 11,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      267,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 11
                      },
                      "start": {
                        "column": 11,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  263,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 7,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              260,
              270
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            260,
            270
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        256,
        271
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 11
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                277,
                300
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        280,
                        281
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
                    "range": [
                      280,
                      281
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
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              284,
                              285
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            284,
                            285
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            288,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 12
                            },
                            "start": {
                              "column": 16,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        284,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
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
                        "column": 27,
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
                  279,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              276,
              300
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            276,
            300
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        272,
        301
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                307,
                322
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          313,
                          314
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
                      "range": [
                        313,
                        314
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
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        310,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      310,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                          320,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 13
                          },
                          "start": {
                            "column": 18,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        320,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 13
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        316,
                        317
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    },
                    "optional": true,
                    "range": [
                      316,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  309,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              306,
              322
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            306,
            322
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        302,
        323
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                329,
                356
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          335,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 14
                          },
                          "start": {
                            "column": 11,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        335,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        332,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      332,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              342,
                              343
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 14
                              },
                              "start": {
                                "column": 18,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            342,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            346,
                            355
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 14
                            },
                            "start": {
                              "column": 22,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        342,
                        355
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 14
                        },
                        "start": {
                          "column": 18,
                          "line": 14
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        338,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    },
                    "optional": true,
                    "range": [
                      338,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                  331,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              328,
              356
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            328,
            356
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        324,
        357
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              },
              "range": [
                363,
                383
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    374,
                    383
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
                              376,
                              377
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 15
                              },
                              "start": {
                                "column": 18,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            376,
                            377
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 18,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "TSOptionalType",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                379,
                                380
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 15
                                },
                                "start": {
                                  "column": 21,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              379,
                              380
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 15
                              },
                              "start": {
                                "column": 21,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            379,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 15
                            },
                            "start": {
                              "column": 21,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        375,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 15
                        },
                        "start": {
                          "column": 17,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "range": [
                    365,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  365,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              362,
              383
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            362,
            383
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        358,
        384
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 16
                },
                "start": {
                  "column": 5,
                  "line": 16
                }
              },
              "range": [
                390,
                424
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    401,
                    424
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
                              403,
                              404
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 16
                              },
                              "start": {
                                "column": 18,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            403,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 16
                            },
                            "start": {
                              "column": 18,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSOptionalType",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "2",
                                  "value": 2,
                                  "range": [
                                    407,
                                    408
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  407,
                                  408
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 16
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  411,
                                  420
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 16
                                  }
                                }
                              }
                            ],
                            "range": [
                              407,
                              420
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 16
                              },
                              "start": {
                                "column": 22,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            406,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 16
                            },
                            "start": {
                              "column": 21,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        402,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 16
                        },
                        "start": {
                          "column": 17,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "range": [
                    392,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  392,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              389,
              424
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            389,
            424
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        385,
        425
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                431,
                457
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    442,
                    457
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
                              "raw": "1",
                              "value": 1,
                              "range": [
                                447,
                                448
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 17
                                },
                                "start": {
                                  "column": 21,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              447,
                              448
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 17
                              },
                              "start": {
                                "column": 21,
                                "line": 17
                              }
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              444,
                              445
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 17
                              },
                              "start": {
                                "column": 18,
                                "line": 17
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
                              "column": 22,
                              "line": 17
                            },
                            "start": {
                              "column": 18,
                              "line": 17
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
                                454,
                                455
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 17
                                },
                                "start": {
                                  "column": 28,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              454,
                              455
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 17
                              },
                              "start": {
                                "column": 28,
                                "line": 17
                              }
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              450,
                              451
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 17
                              },
                              "start": {
                                "column": 24,
                                "line": 17
                              }
                            }
                          },
                          "optional": true,
                          "range": [
                            450,
                            455
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 17
                            },
                            "start": {
                              "column": 24,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        443,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 16,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "range": [
                    433,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                },
                "range": [
                  433,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              430,
              457
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            430,
            457
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        426,
        458
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                464,
                502
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    475,
                    502
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
                              "raw": "1",
                              "value": 1,
                              "range": [
                                480,
                                481
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 18
                                },
                                "start": {
                                  "column": 21,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              480,
                              481
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 18
                              },
                              "start": {
                                "column": 21,
                                "line": 18
                              }
                            }
                          },
                          "label": {
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
                                "column": 19,
                                "line": 18
                              },
                              "start": {
                                "column": 18,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            477,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 18
                            },
                            "start": {
                              "column": 18,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "elementType": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "2",
                                  "value": 2,
                                  "range": [
                                    487,
                                    488
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  487,
                                  488
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 18
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  491,
                                  500
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 18
                                  }
                                }
                              }
                            ],
                            "range": [
                              487,
                              500
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 18
                              },
                              "start": {
                                "column": 28,
                                "line": 18
                              }
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              483,
                              484
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 18
                              },
                              "start": {
                                "column": 24,
                                "line": 18
                              }
                            }
                          },
                          "optional": true,
                          "range": [
                            483,
                            500
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 18
                            },
                            "start": {
                              "column": 24,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        476,
                        501
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 18
                        },
                        "start": {
                          "column": 17,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "range": [
                    466,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                },
                "range": [
                  466,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              463,
              502
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            463,
            502
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        459,
        503
      ],
      "loc": {
        "end": {
          "column": 44,
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
      "line": 3
    }
  },
  "hashbang": null
}
```
