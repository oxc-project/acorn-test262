__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    117,
    1137
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tail",
        "optional": false,
        "range": [
          122,
          126
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                  151,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
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
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                },
                "range": [
                  155,
                  158
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      157,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 40,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    157,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 5
                    },
                    "start": {
                      "column": 40,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                148,
                158
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 43,
                "line": 5
              }
            },
            "range": [
              160,
              166
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                163,
                166
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 5
                },
                "start": {
                  "column": 46,
                  "line": 5
                }
              }
            }
          },
          "range": [
            147,
            166
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 5
            },
            "start": {
              "column": 30,
              "line": 5
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "head",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 5
                  },
                  "start": {
                    "column": 65,
                    "line": 5
                  }
                },
                "range": [
                  182,
                  187
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    184,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 5
                    },
                    "start": {
                      "column": 67,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                178,
                187
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 5
                },
                "start": {
                  "column": 61,
                  "line": 5
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "tail",
                "optional": false,
                "range": [
                  192,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 5
                  },
                  "start": {
                    "column": 75,
                    "line": 5
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 5
                  },
                  "start": {
                    "column": 79,
                    "line": 5
                  }
                },
                "range": [
                  196,
                  205
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
                        204,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 5
                        },
                        "start": {
                          "column": 87,
                          "line": 5
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      204,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 5
                      },
                      "start": {
                        "column": 87,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    198,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 5
                    },
                    "start": {
                      "column": 81,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                189,
                205
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 5
                },
                "start": {
                  "column": 72,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 96,
                "line": 5
              },
              "start": {
                "column": 90,
                "line": 5
              }
            },
            "range": [
              207,
              213
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                210,
                213
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 5
                },
                "start": {
                  "column": 93,
                  "line": 5
                }
              }
            }
          },
          "range": [
            177,
            213
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 5
            },
            "start": {
              "column": 60,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            221,
            226
          ],
          "loc": {
            "end": {
              "column": 109,
              "line": 5
            },
            "start": {
              "column": 104,
              "line": 5
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
              217,
              218
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 5
              },
              "start": {
                "column": 100,
                "line": 5
              }
            }
          },
          "range": [
            217,
            218
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 5
            },
            "start": {
              "column": 100,
              "line": 5
            }
          }
        },
        "range": [
          146,
          226
        ],
        "loc": {
          "end": {
            "column": 109,
            "line": 5
          },
          "start": {
            "column": 29,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          126,
          143
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
                  137,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "range": [
                137,
                142
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
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
                127,
                128
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              127,
              142
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        117,
        227
      ],
      "loc": {
        "end": {
          "column": 110,
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
        "name": "MyFunctionType",
        "optional": false,
        "range": [
          234,
          248
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              },
              "range": [
                255,
                263
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  257,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              252,
              263
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 23,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 7
                },
                "start": {
                  "column": 39,
                  "line": 7
                }
              },
              "range": [
                268,
                276
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  270,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 41,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              265,
              276
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 7
              },
              "start": {
                "column": 36,
                "line": 7
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 59,
              "line": 7
            },
            "start": {
              "column": 49,
              "line": 7
            }
          },
          "range": [
            278,
            288
          ],
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "range": [
              281,
              288
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 7
              },
              "start": {
                "column": 52,
                "line": 7
              }
            }
          }
        },
        "range": [
          251,
          288
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 7
          }
        }
      },
      "range": [
        229,
        289
      ],
      "loc": {
        "end": {
          "column": 60,
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
        "name": "Explicit",
        "optional": false,
        "range": [
          296,
          304
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
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
                311,
                315
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              },
              "range": [
                315,
                349
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    321,
                    349
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          332,
                          348
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyFunctionType",
                              "optional": false,
                              "range": [
                                333,
                                347
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 9
                                },
                                "start": {
                                  "column": 42,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              333,
                              347
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 9
                              },
                              "start": {
                                "column": 42,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 9
                          },
                          "start": {
                            "column": 41,
                            "line": 9
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "range": [
                          322,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 9
                          },
                          "start": {
                            "column": 31,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        322,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 9
                    },
                    "start": {
                      "column": 30,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "range": [
                    317,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  }
                },
                "range": [
                  317,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              308,
              349
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 89,
              "line": 9
            },
            "start": {
              "column": 60,
              "line": 9
            }
          },
          "range": [
            351,
            380
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                364,
                380
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyFunctionType",
                    "optional": false,
                    "range": [
                      365,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 9
                      },
                      "start": {
                        "column": 74,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    365,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 9
                    },
                    "start": {
                      "column": 74,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 9
                },
                "start": {
                  "column": 73,
                  "line": 9
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "range": [
                354,
                364
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 9
                },
                "start": {
                  "column": 63,
                  "line": 9
                }
              }
            },
            "range": [
              354,
              380
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 9
              },
              "start": {
                "column": 63,
                "line": 9
              }
            }
          }
        },
        "range": [
          307,
          380
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 9
          },
          "start": {
            "column": 16,
            "line": 9
          }
        }
      },
      "range": [
        291,
        381
      ],
      "loc": {
        "end": {
          "column": 90,
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
        "name": "Bind1",
        "optional": false,
        "range": [
          416,
          421
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
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
                474,
                478
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 11
                },
                "start": {
                  "column": 63,
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
                  "column": 88,
                  "line": 11
                },
                "start": {
                  "column": 67,
                  "line": 11
                }
              },
              "range": [
                478,
                499
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    484,
                    499
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          495,
                          498
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
                                496,
                                497
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 11
                                },
                                "start": {
                                  "column": 85,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              496,
                              497
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 11
                              },
                              "start": {
                                "column": 85,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 11
                          },
                          "start": {
                            "column": 84,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "range": [
                          485,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 11
                          },
                          "start": {
                            "column": 74,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        485,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 11
                        },
                        "start": {
                          "column": 74,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 11
                    },
                    "start": {
                      "column": 73,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "range": [
                    480,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 11
                    },
                    "start": {
                      "column": 69,
                      "line": 11
                    }
                  }
                },
                "range": [
                  480,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 11
                  },
                  "start": {
                    "column": 69,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              471,
              499
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 11
              },
              "start": {
                "column": 60,
                "line": 11
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 106,
              "line": 11
            },
            "start": {
              "column": 90,
              "line": 11
            }
          },
          "range": [
            501,
            517
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                514,
                517
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
                      515,
                      516
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 11
                      },
                      "start": {
                        "column": 104,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    515,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 11
                    },
                    "start": {
                      "column": 104,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 106,
                  "line": 11
                },
                "start": {
                  "column": 103,
                  "line": 11
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "range": [
                504,
                514
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 11
                },
                "start": {
                  "column": 93,
                  "line": 11
                }
              }
            },
            "range": [
              504,
              517
            ],
            "loc": {
              "end": {
                "column": 106,
                "line": 11
              },
              "start": {
                "column": 93,
                "line": 11
              }
            }
          }
        },
        "range": [
          470,
          517
        ],
        "loc": {
          "end": {
            "column": 106,
            "line": 11
          },
          "start": {
            "column": 59,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        },
        "range": [
          421,
          467
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "head",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
                        "line": 11
                      }
                    },
                    "range": [
                      437,
                      442
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        439,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
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
                    433,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 11
                    },
                    "start": {
                      "column": 22,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tail",
                    "optional": false,
                    "range": [
                      447,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 11
                      },
                      "start": {
                        "column": 36,
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
                        "column": 47,
                        "line": 11
                      },
                      "start": {
                        "column": 40,
                        "line": 11
                      }
                    },
                    "range": [
                      451,
                      458
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          453,
                          456
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 11
                          },
                          "start": {
                            "column": 42,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        453,
                        458
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 11
                        },
                        "start": {
                          "column": 42,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    444,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 11
                    },
                    "start": {
                      "column": 33,
                      "line": 11
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 11
                  },
                  "start": {
                    "column": 49,
                    "line": 11
                  }
                },
                "range": [
                  460,
                  466
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    463,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 11
                    },
                    "start": {
                      "column": 52,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                432,
                466
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
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
                422,
                423
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
            "out": false,
            "range": [
              422,
              466
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        411,
        518
      ],
      "loc": {
        "end": {
          "column": 107,
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
        "name": "Generic",
        "optional": false,
        "range": [
          524,
          531
        ],
        "loc": {
          "end": {
            "column": 12,
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
            539,
            555
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyFunctionType",
                "optional": false,
                "range": [
                  540,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 12
                  },
                  "start": {
                    "column": 21,
                    "line": 12
                  }
                }
              },
              "range": [
                540,
                554
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 12
            },
            "start": {
              "column": 20,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bind1",
          "optional": false,
          "range": [
            534,
            539
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          }
        },
        "range": [
          534,
          555
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 12
          },
          "start": {
            "column": 15,
            "line": 12
          }
        }
      },
      "range": [
        519,
        556
      ],
      "loc": {
        "end": {
          "column": 37,
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
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    },
                    "range": [
                      655,
                      688
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
                                "column": 25,
                                "line": 15
                              },
                              "start": {
                                "column": 17,
                                "line": 15
                              }
                            },
                            "range": [
                              659,
                              667
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                661,
                                667
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
                          },
                          "range": [
                            658,
                            667
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
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "range": [
                              672,
                              676
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 15
                              },
                              "start": {
                                "column": 30,
                                "line": 15
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
                                "line": 15
                              },
                              "start": {
                                "column": 34,
                                "line": 15
                              }
                            },
                            "range": [
                              676,
                              679
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
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
                                    "column": 37,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                678,
                                679
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 15
                                },
                                "start": {
                                  "column": 36,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            669,
                            679
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 15
                            },
                            "start": {
                              "column": 27,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 15
                          },
                          "start": {
                            "column": 39,
                            "line": 15
                          }
                        },
                        "range": [
                          681,
                          688
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            684,
                            688
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 15
                            },
                            "start": {
                              "column": 42,
                              "line": 15
                            }
                          }
                        }
                      },
                      "range": [
                        657,
                        688
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    652,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      704,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 15
                      },
                      "start": {
                        "column": 62,
                        "line": 15
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        692,
                        693
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 15
                        },
                        "start": {
                          "column": 50,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "range": [
                          698,
                          699
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 15
                          },
                          "start": {
                            "column": 56,
                            "line": 15
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "range": [
                        695,
                        699
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 15
                        },
                        "start": {
                          "column": 53,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    691,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 15
                    },
                    "start": {
                      "column": 49,
                      "line": 15
                    }
                  }
                },
                "range": [
                  652,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              646,
              706
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 15
              },
              "start": {
                "column": 4,
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
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    },
                    "range": [
                      720,
                      746
                    ],
                    "typeAnnotation": {
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
                              726,
                              730
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 16
                              },
                              "start": {
                                "column": 19,
                                "line": 16
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 16
                              },
                              "start": {
                                "column": 23,
                                "line": 16
                              }
                            },
                            "range": [
                              730,
                              737
                            ],
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "range": [
                                732,
                                737
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 16
                                },
                                "start": {
                                  "column": 25,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            723,
                            737
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 16
                            },
                            "start": {
                              "column": 16,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 16
                          },
                          "start": {
                            "column": 32,
                            "line": 16
                          }
                        },
                        "range": [
                          739,
                          746
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            742,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 16
                            },
                            "start": {
                              "column": 35,
                              "line": 16
                            }
                          }
                        }
                      },
                      "range": [
                        722,
                        746
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    717,
                    746
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "range": [
                    749,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 16
                    },
                    "start": {
                      "column": 42,
                      "line": 16
                    }
                  }
                },
                "range": [
                  717,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              711,
              753
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          640,
          755
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 54,
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
        "name": "assignmentWithComplexRest",
        "optional": false,
        "range": [
          595,
          620
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 14
          },
          "start": {
            "column": 34,
            "line": 14
          }
        },
        "range": [
          620,
          637
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
                  631,
                  634
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 14
                  },
                  "start": {
                    "column": 45,
                    "line": 14
                  }
                }
              },
              "range": [
                631,
                636
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 14
                },
                "start": {
                  "column": 45,
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
                621,
                622
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 14
                },
                "start": {
                  "column": 35,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              621,
              636
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 14
              },
              "start": {
                "column": 35,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        586,
        755
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    },
                    "range": [
                      827,
                      874
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 20
                              },
                              "start": {
                                "column": 18,
                                "line": 20
                              }
                            },
                            "range": [
                              832,
                              865
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
                                        "column": 30,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 20
                                      }
                                    },
                                    "range": [
                                      836,
                                      844
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        838,
                                        844
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 20
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    835,
                                    844
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 20
                                    }
                                  }
                                },
                                {
                                  "type": "RestElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "rest",
                                    "optional": false,
                                    "range": [
                                      849,
                                      853
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 20
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
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 20
                                      }
                                    },
                                    "range": [
                                      853,
                                      856
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "range": [
                                          855,
                                          856
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 20
                                          },
                                          "start": {
                                            "column": 41,
                                            "line": 20
                                          }
                                        }
                                      },
                                      "range": [
                                        855,
                                        856
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 20
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    846,
                                    856
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 20
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 20
                                  }
                                },
                                "range": [
                                  858,
                                  865
                                ],
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "range": [
                                    861,
                                    865
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 20
                                    }
                                  }
                                }
                              },
                              "range": [
                                834,
                                865
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 20
                                },
                                "start": {
                                  "column": 20,
                                  "line": 20
                                }
                              }
                            }
                          },
                          "range": [
                            830,
                            865
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 20
                            },
                            "start": {
                              "column": 16,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 20
                          },
                          "start": {
                            "column": 53,
                            "line": 20
                          }
                        },
                        "range": [
                          867,
                          874
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            870,
                            874
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 20
                            },
                            "start": {
                              "column": 56,
                              "line": 20
                            }
                          }
                        }
                      },
                      "range": [
                        829,
                        874
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    824,
                    874
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 20
                    },
                    "start": {
                      "column": 10,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      885,
                      887
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 20
                      },
                      "start": {
                        "column": 71,
                        "line": 20
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
                      "name": "cb",
                      "optional": false,
                      "range": [
                        878,
                        880
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 20
                        },
                        "start": {
                          "column": 64,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    877,
                    887
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 20
                    },
                    "start": {
                      "column": 63,
                      "line": 20
                    }
                  }
                },
                "range": [
                  824,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              818,
              888
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 21
                      },
                      "start": {
                        "column": 13,
                        "line": 21
                      }
                    },
                    "range": [
                      902,
                      942
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 21
                              },
                              "start": {
                                "column": 18,
                                "line": 21
                              }
                            },
                            "range": [
                              907,
                              933
                            ],
                            "typeAnnotation": {
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
                                      913,
                                      917
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 21
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
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 21
                                      }
                                    },
                                    "range": [
                                      917,
                                      924
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSNeverKeyword",
                                      "range": [
                                        919,
                                        924
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 21
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    910,
                                    924
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 21
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 21
                                  }
                                },
                                "range": [
                                  926,
                                  933
                                ],
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "range": [
                                    929,
                                    933
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 21
                                    }
                                  }
                                }
                              },
                              "range": [
                                909,
                                933
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 21
                                },
                                "start": {
                                  "column": 20,
                                  "line": 21
                                }
                              }
                            }
                          },
                          "range": [
                            905,
                            933
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 21
                            },
                            "start": {
                              "column": 16,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 21
                          },
                          "start": {
                            "column": 46,
                            "line": 21
                          }
                        },
                        "range": [
                          935,
                          942
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            938,
                            942
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 21
                            },
                            "start": {
                              "column": 49,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        904,
                        942
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 21
                        },
                        "start": {
                          "column": 15,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    899,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 21
                    },
                    "start": {
                      "column": 10,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "range": [
                    945,
                    948
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 21
                    },
                    "start": {
                      "column": 56,
                      "line": 21
                    }
                  }
                },
                "range": [
                  899,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              893,
              949
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          812,
          951
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 55,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignmentWithComplexRest2",
        "optional": false,
        "range": [
          766,
          792
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 19
          },
          "start": {
            "column": 35,
            "line": 19
          }
        },
        "range": [
          792,
          809
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
                  803,
                  806
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 19
                  },
                  "start": {
                    "column": 46,
                    "line": 19
                  }
                }
              },
              "range": [
                803,
                808
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 19
                },
                "start": {
                  "column": 46,
                  "line": 19
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
                793,
                794
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 36,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              793,
              808
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 19
              },
              "start": {
                "column": 36,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        757,
        951
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    },
                    "range": [
                      1023,
                      1056
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
                                "column": 25,
                                "line": 25
                              },
                              "start": {
                                "column": 17,
                                "line": 25
                              }
                            },
                            "range": [
                              1027,
                              1035
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                1029,
                                1035
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 25
                                },
                                "start": {
                                  "column": 19,
                                  "line": 25
                                }
                              }
                            }
                          },
                          "range": [
                            1026,
                            1035
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 25
                            },
                            "start": {
                              "column": 16,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "range": [
                              1040,
                              1044
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 25
                              },
                              "start": {
                                "column": 30,
                                "line": 25
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
                                "line": 25
                              },
                              "start": {
                                "column": 34,
                                "line": 25
                              }
                            },
                            "range": [
                              1044,
                              1047
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1046,
                                  1047
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                1046,
                                1047
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 25
                                },
                                "start": {
                                  "column": 36,
                                  "line": 25
                                }
                              }
                            }
                          },
                          "range": [
                            1037,
                            1047
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 25
                            },
                            "start": {
                              "column": 27,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 25
                          },
                          "start": {
                            "column": 39,
                            "line": 25
                          }
                        },
                        "range": [
                          1049,
                          1056
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            1052,
                            1056
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 25
                            },
                            "start": {
                              "column": 42,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        1025,
                        1056
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    1020,
                    1056
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1072,
                      1073
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 25
                      },
                      "start": {
                        "column": 62,
                        "line": 25
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1060,
                        1061
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 25
                        },
                        "start": {
                          "column": 50,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "range": [
                          1066,
                          1067
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 25
                          },
                          "start": {
                            "column": 56,
                            "line": 25
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "range": [
                        1063,
                        1067
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 25
                        },
                        "start": {
                          "column": 53,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    1059,
                    1073
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 25
                    },
                    "start": {
                      "column": 49,
                      "line": 25
                    }
                  }
                },
                "range": [
                  1020,
                  1073
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1014,
              1074
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    },
                    "range": [
                      1088,
                      1128
                    ],
                    "typeAnnotation": {
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
                              1094,
                              1098
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 26
                              },
                              "start": {
                                "column": 19,
                                "line": 26
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 26
                              },
                              "start": {
                                "column": 23,
                                "line": 26
                              }
                            },
                            "range": [
                              1098,
                              1119
                            ],
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
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
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          1101,
                                          1102
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 26,
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
                                            "column": 32,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 26
                                          }
                                        },
                                        "range": [
                                          1102,
                                          1107
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "\"a\"",
                                            "value": "a",
                                            "range": [
                                              1104,
                                              1107
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 26
                                              },
                                              "start": {
                                                "column": 29,
                                                "line": 26
                                              }
                                            }
                                          },
                                          "range": [
                                            1104,
                                            1107
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 32,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 29,
                                              "line": 26
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        1101,
                                        1107
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 26
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    1100,
                                    1108
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 26
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
                                          1112,
                                          1113
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 37,
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
                                            "column": 43,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 38,
                                            "line": 26
                                          }
                                        },
                                        "range": [
                                          1113,
                                          1118
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "\"b\"",
                                            "value": "b",
                                            "range": [
                                              1115,
                                              1118
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 43,
                                                "line": 26
                                              },
                                              "start": {
                                                "column": 40,
                                                "line": 26
                                              }
                                            }
                                          },
                                          "range": [
                                            1115,
                                            1118
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 43,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 26
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        1112,
                                        1118
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 26
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    1111,
                                    1119
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 26
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1100,
                                1119
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 26
                                },
                                "start": {
                                  "column": 25,
                                  "line": 26
                                }
                              }
                            }
                          },
                          "range": [
                            1091,
                            1119
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 26
                            },
                            "start": {
                              "column": 16,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 26
                          },
                          "start": {
                            "column": 46,
                            "line": 26
                          }
                        },
                        "range": [
                          1121,
                          1128
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            1124,
                            1128
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 26
                            },
                            "start": {
                              "column": 49,
                              "line": 26
                            }
                          }
                        }
                      },
                      "range": [
                        1090,
                        1128
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 26
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    1085,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "range": [
                    1131,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 26
                    },
                    "start": {
                      "column": 56,
                      "line": 26
                    }
                  }
                },
                "range": [
                  1085,
                  1134
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1079,
              1135
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          1008,
          1137
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 55,
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
        "name": "assignmentWithComplexRest3",
        "optional": false,
        "range": [
          962,
          988
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 24
          },
          "start": {
            "column": 35,
            "line": 24
          }
        },
        "range": [
          988,
          1005
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
                  999,
                  1002
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 24
                  },
                  "start": {
                    "column": 46,
                    "line": 24
                  }
                }
              },
              "range": [
                999,
                1004
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 24
                },
                "start": {
                  "column": 46,
                  "line": 24
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
                989,
                990
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 24
                },
                "start": {
                  "column": 36,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              989,
              1004
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 24
              },
              "start": {
                "column": 36,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        953,
        1137
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
