__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1346
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            70,
            104
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      78,
                      93
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K1",
                          "optional": false,
                          "range": [
                            79,
                            81
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 2
                            },
                            "start": {
                              "column": 22,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          79,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 22,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            89,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 2
                            },
                            "start": {
                              "column": 32,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          83,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "range": [
                      71,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    71,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      96,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 2
                      },
                      "start": {
                        "column": 39,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    96,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 39,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "range": [
                      101,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 44,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    101,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 2
                    },
                    "start": {
                      "column": 44,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                71,
                103
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MustBeKey",
          "optional": false,
          "range": [
            61,
            70
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          61,
          104
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 2
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          54
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  28,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              },
              "range": [
                22,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                11,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              11,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  50,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              "range": [
                44,
                53
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 44,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "range": [
                33,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              33,
              53
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        105
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 2
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
        "name": "Test2",
        "optional": false,
        "range": [
          112,
          117
        ],
        "loc": {
          "end": {
            "column": 10,
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
            177,
            211
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "range": [
                      178,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    178,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "range": [
                      183,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    183,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      195,
                      210
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K1",
                          "optional": false,
                          "range": [
                            196,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          196,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 5
                          },
                          "start": {
                            "column": 32,
                            "line": 5
                          }
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            206,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 5
                            },
                            "start": {
                              "column": 42,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          200,
                          209
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
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 5
                      },
                      "start": {
                        "column": 31,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "range": [
                      188,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    188,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                178,
                210
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 14,
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
              "column": 13,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MustBeKey",
          "optional": false,
          "range": [
            168,
            177
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        "range": [
          168,
          211
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        },
        "range": [
          117,
          161
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  135,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              },
              "range": [
                129,
                138
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "range": [
                118,
                120
              ],
              "loc": {
                "end": {
                  "column": 13,
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
              118,
              138
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  157,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 4
                  },
                  "start": {
                    "column": 50,
                    "line": 4
                  }
                }
              },
              "range": [
                151,
                160
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 4
                },
                "start": {
                  "column": 44,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "range": [
                140,
                142
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              140,
              160
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        107,
        212
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 5
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
        "name": "MustBeKey",
        "optional": false,
        "range": [
          219,
          228
        ],
        "loc": {
          "end": {
            "column": 14,
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
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            252,
            253
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 7
            },
            "start": {
              "column": 38,
              "line": 7
            }
          }
        },
        "range": [
          252,
          253
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 7
          },
          "start": {
            "column": 38,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 7
          },
          "start": {
            "column": 14,
            "line": 7
          }
        },
        "range": [
          228,
          249
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  245,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              },
              "range": [
                239,
                248
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              229,
              248
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        214,
        254
      ],
      "loc": {
        "end": {
          "column": 40,
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
        "name": "AnyKey",
        "optional": false,
        "range": [
          318,
          324
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              327,
              333
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              336,
              342
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            }
          },
          {
            "type": "TSSymbolKeyword",
            "range": [
              345,
              351
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 32,
                "line": 11
              }
            }
          }
        ],
        "range": [
          327,
          351
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 11
          },
          "start": {
            "column": 14,
            "line": 11
          }
        }
      },
      "range": [
        313,
        352
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "name": "ReturnTypeKeyof",
        "optional": false,
        "range": [
          359,
          374
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
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
            "name": "Obj",
            "optional": false,
            "range": [
              397,
              400
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 13
              },
              "start": {
                "column": 43,
                "line": 13
              }
            }
          },
          "range": [
            397,
            400
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 13
            },
            "start": {
              "column": 43,
              "line": 13
            }
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "range": [
            409,
            415
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 13
            },
            "start": {
              "column": 55,
              "line": 13
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            536,
            541
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "range": [
                      429,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    429,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "range": [
                  423,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              422,
              433
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNeverKeyword",
                "range": [
                  443,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              442,
              449
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 26,
                "line": 14
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSStringKeyword",
              "range": [
                522,
                528
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 16
                },
                "start": {
                  "column": 56,
                  "line": 16
                }
              }
            },
            "objectType": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "range": [
                      492,
                      495
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 26,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    492,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 26,
                      "line": 16
                    }
                  }
                },
                "range": [
                  486,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 20,
                    "line": 16
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "range": [
                  479,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 13,
                    "line": 16
                  }
                }
              },
              "nameType": {
                "type": "TSStringKeyword",
                "range": [
                  499,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 16
                  },
                  "start": {
                    "column": 33,
                    "line": 16
                  }
                }
              },
              "optional": "-",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 16
                    },
                    "start": {
                      "column": 47,
                      "line": 16
                    }
                  },
                  "range": [
                    513,
                    519
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "range": [
                        516,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 16
                        },
                        "start": {
                          "column": 50,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      516,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 16
                      },
                      "start": {
                        "column": 50,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  510,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 16
                  },
                  "start": {
                    "column": 44,
                    "line": 16
                  }
                }
              },
              "range": [
                476,
                521
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "range": [
              476,
              529
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "range": [
              460,
              465
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 15
              },
              "start": {
                "column": 10,
                "line": 15
              }
            }
          },
          "range": [
            422,
            529
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        },
        "range": [
          397,
          541
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 43,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 13
          },
          "start": {
            "column": 20,
            "line": 13
          }
        },
        "range": [
          374,
          394
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                387,
                393
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "range": [
                375,
                378
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              375,
              393
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 13
              },
              "start": {
                "column": 21,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        354,
        542
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 17
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
        "name": "KeyIfSignatureOfObject",
        "optional": false,
        "range": [
          549,
          571
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
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
            "name": "ReturnTypeKeys",
            "optional": false,
            "range": [
              668,
              682
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "range": [
            668,
            682
          ],
          "loc": {
            "end": {
              "column": 18,
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
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 23
              },
              "start": {
                "column": 30,
                "line": 23
              }
            },
            "range": [
              694,
              700
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "range": [
                  697,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 33,
                    "line": 23
                  }
                }
              },
              "range": [
                697,
                700
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 33,
                  "line": 23
                }
              }
            }
          },
          "range": [
            691,
            700
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 23
            },
            "start": {
              "column": 27,
              "line": 23
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            756,
            761
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 23
            },
            "start": {
              "column": 92,
              "line": 23
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSFunctionType",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 23
                },
                "start": {
                  "column": 44,
                  "line": 23
                }
              },
              "range": [
                708,
                714
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "range": [
                    711,
                    714
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 23
                    },
                    "start": {
                      "column": 47,
                      "line": 23
                    }
                  }
                },
                "range": [
                  711,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 23
                  },
                  "start": {
                    "column": 47,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              705,
              714
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 23
              },
              "start": {
                "column": 41,
                "line": 23
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false,
              "range": [
                724,
                738
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 23
                },
                "start": {
                  "column": 60,
                  "line": 23
                }
              }
            },
            "range": [
              724,
              738
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 23
              },
              "start": {
                "column": 60,
                "line": 23
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              747,
              752
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 23
              },
              "start": {
                "column": 83,
                "line": 23
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "range": [
                741,
                744
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 23
                },
                "start": {
                  "column": 77,
                  "line": 23
                }
              }
            },
            "range": [
              741,
              744
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 23
              },
              "start": {
                "column": 77,
                "line": 23
              }
            }
          },
          "range": [
            704,
            752
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 23
            },
            "start": {
              "column": 40,
              "line": 23
            }
          }
        },
        "range": [
          668,
          761
        ],
        "loc": {
          "end": {
            "column": 97,
            "line": 23
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
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 27,
            "line": 19
          }
        },
        "range": [
          571,
          665
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                589,
                595
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "range": [
                577,
                580
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              577,
              595
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyKey",
                "optional": false,
                "range": [
                  613,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 21
                  },
                  "start": {
                    "column": 16,
                    "line": 21
                  }
                }
              },
              "range": [
                613,
                619
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "range": [
                601,
                604
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              601,
              619
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  657,
                  662
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        658,
                        661
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
                    "range": [
                      658,
                      661
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 22
                  },
                  "start": {
                    "column": 36,
                    "line": 22
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnTypeKeyof",
                "optional": false,
                "range": [
                  642,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 22
                  },
                  "start": {
                    "column": 21,
                    "line": 22
                  }
                }
              },
              "range": [
                642,
                662
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 22
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false,
              "range": [
                625,
                639
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              625,
              662
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        544,
        762
      ],
      "loc": {
        "end": {
          "column": 98,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        764,
        1024
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reduced1",
          "optional": false,
          "range": [
            776,
            784
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 25
            },
            "start": {
              "column": 12,
              "line": 25
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
              "name": "Key",
              "optional": false,
              "range": [
                877,
                880
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              877,
              880
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                911,
                921
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "range": [
                      912,
                      915
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 26
                      },
                      "start": {
                        "column": 39,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    912,
                    915
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 26
                    },
                    "start": {
                      "column": 39,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      917,
                      920
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 26
                      },
                      "start": {
                        "column": 44,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    917,
                    920
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 26
                    },
                    "start": {
                      "column": 44,
                      "line": 26
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 26
                },
                "start": {
                  "column": 38,
                  "line": 26
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyIfSignatureOfObject",
              "optional": false,
              "range": [
                889,
                911
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 26
                },
                "start": {
                  "column": 16,
                  "line": 26
                }
              }
            },
            "range": [
              889,
              921
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 26
              },
              "start": {
                "column": 16,
                "line": 26
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1018,
              1023
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 30
              },
              "start": {
                "column": 10,
                "line": 30
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
                "name": "Key",
                "optional": false,
                "range": [
                  932,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              },
              "range": [
                932,
                935
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 10,
                  "line": 27
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "range": [
                  944,
                  951
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 22,
                    "line": 27
                  }
                }
              },
              "range": [
                944,
                951
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                1002,
                1007
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              }
            },
            "trueType": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "range": [
                    974,
                    977
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 28
                    },
                    "start": {
                      "column": 22,
                      "line": 28
                    }
                  }
                },
                "range": [
                  974,
                  977
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 22,
                    "line": 28
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  969,
                  970
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 17,
                    "line": 28
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "range": [
                    980,
                    985
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 28
                    },
                    "start": {
                      "column": 28,
                      "line": 28
                    }
                  }
                },
                "range": [
                  980,
                  985
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 28
                  },
                  "start": {
                    "column": 28,
                    "line": 28
                  }
                }
              },
              "range": [
                966,
                987
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 28
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            "range": [
              932,
              1007
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 10,
                "line": 27
              }
            }
          },
          "range": [
            877,
            1023
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 106,
              "line": 25
            },
            "start": {
              "column": 20,
              "line": 25
            }
          },
          "range": [
            784,
            870
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  797,
                  803
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 25
                  },
                  "start": {
                    "column": 33,
                    "line": 25
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "range": [
                  785,
                  788
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 25
                  },
                  "start": {
                    "column": 21,
                    "line": 25
                  }
                }
              },
              "out": false,
              "range": [
                785,
                803
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 25
                },
                "start": {
                  "column": 21,
                  "line": 25
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false,
                  "range": [
                    817,
                    823
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 25
                    },
                    "start": {
                      "column": 53,
                      "line": 25
                    }
                  }
                },
                "range": [
                  817,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 25
                  },
                  "start": {
                    "column": 53,
                    "line": 25
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "range": [
                  805,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 25
                  },
                  "start": {
                    "column": 41,
                    "line": 25
                  }
                }
              },
              "out": false,
              "range": [
                805,
                823
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 25
                },
                "start": {
                  "column": 41,
                  "line": 25
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
                "name": "Value",
                "optional": false,
                "range": [
                  825,
                  830
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 25
                  },
                  "start": {
                    "column": 61,
                    "line": 25
                  }
                }
              },
              "out": false,
              "range": [
                825,
                830
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 25
                },
                "start": {
                  "column": 61,
                  "line": 25
                }
              }
            },
            {
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
                    "name": "Obj",
                    "optional": false,
                    "range": [
                      854,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 25
                      },
                      "start": {
                        "column": 90,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    854,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 25
                    },
                    "start": {
                      "column": 90,
                      "line": 25
                    }
                  }
                },
                "range": [
                  848,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 25
                  },
                  "start": {
                    "column": 84,
                    "line": 25
                  }
                }
              },
              "default": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "range": [
                      866,
                      869
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 25
                      },
                      "start": {
                        "column": 102,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    866,
                    869
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 25
                    },
                    "start": {
                      "column": 102,
                      "line": 25
                    }
                  }
                },
                "range": [
                  860,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 25
                  },
                  "start": {
                    "column": 96,
                    "line": 25
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "range": [
                  832,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 25
                  },
                  "start": {
                    "column": 68,
                    "line": 25
                  }
                }
              },
              "out": false,
              "range": [
                832,
                869
              ],
              "loc": {
                "end": {
                  "column": 105,
                  "line": 25
                },
                "start": {
                  "column": 68,
                  "line": 25
                }
              }
            }
          ]
        },
        "range": [
          771,
          1024
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 16,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1026,
        1345
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reduced2",
          "optional": false,
          "range": [
            1038,
            1046
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 32
            },
            "start": {
              "column": 12,
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
              "name": "Key",
              "optional": false,
              "range": [
                1139,
                1142
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              1139,
              1142
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnyKey",
              "optional": false,
              "range": [
                1151,
                1157
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 33
                },
                "start": {
                  "column": 16,
                  "line": 33
                }
              }
            },
            "range": [
              1151,
              1157
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 33
              },
              "start": {
                "column": 16,
                "line": 33
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1339,
              1344
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 39
              },
              "start": {
                "column": 10,
                "line": 39
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
                "name": "Key",
                "optional": false,
                "range": [
                  1168,
                  1171
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 34
                  }
                }
              },
              "range": [
                1168,
                1171
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 34
                },
                "start": {
                  "column": 10,
                  "line": 34
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1202,
                  1212
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        1203,
                        1206
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 34
                        },
                        "start": {
                          "column": 45,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1203,
                      1206
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 34
                      },
                      "start": {
                        "column": 45,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "range": [
                        1208,
                        1211
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 34
                        },
                        "start": {
                          "column": 50,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1208,
                      1211
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 34
                      },
                      "start": {
                        "column": 50,
                        "line": 34
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 34
                  },
                  "start": {
                    "column": 44,
                    "line": 34
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeyIfSignatureOfObject",
                "optional": false,
                "range": [
                  1180,
                  1202
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 34
                  },
                  "start": {
                    "column": 22,
                    "line": 34
                  }
                }
              },
              "range": [
                1180,
                1212
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 34
                },
                "start": {
                  "column": 22,
                  "line": 34
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                1323,
                1328
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 38
                },
                "start": {
                  "column": 14,
                  "line": 38
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
                  "name": "Key",
                  "optional": false,
                  "range": [
                    1227,
                    1230
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 35
                    },
                    "start": {
                      "column": 14,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1227,
                  1230
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 14,
                    "line": 35
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjKeys",
                  "optional": false,
                  "range": [
                    1239,
                    1246
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 35
                    },
                    "start": {
                      "column": 26,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1239,
                  1246
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 35
                  },
                  "start": {
                    "column": 26,
                    "line": 35
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  1303,
                  1308
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 37
                  },
                  "start": {
                    "column": 17,
                    "line": 37
                  }
                }
              },
              "trueType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      1272,
                      1275
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 36
                      },
                      "start": {
                        "column": 25,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1272,
                    1275
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 36
                    },
                    "start": {
                      "column": 25,
                      "line": 36
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1267,
                    1268
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 36
                    },
                    "start": {
                      "column": 20,
                      "line": 36
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "range": [
                      1278,
                      1283
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 36
                      },
                      "start": {
                        "column": 31,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1278,
                    1283
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 36
                    },
                    "start": {
                      "column": 31,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1264,
                  1285
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 36
                  },
                  "start": {
                    "column": 17,
                    "line": 36
                  }
                }
              },
              "range": [
                1227,
                1308
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 37
                },
                "start": {
                  "column": 14,
                  "line": 35
                }
              }
            },
            "range": [
              1168,
              1328
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 10,
                "line": 34
              }
            }
          },
          "range": [
            1139,
            1344
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 39
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
              "column": 106,
              "line": 32
            },
            "start": {
              "column": 20,
              "line": 32
            }
          },
          "range": [
            1046,
            1132
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  1059,
                  1065
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 32
                  },
                  "start": {
                    "column": 33,
                    "line": 32
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "range": [
                  1047,
                  1050
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 32
                  },
                  "start": {
                    "column": 21,
                    "line": 32
                  }
                }
              },
              "out": false,
              "range": [
                1047,
                1065
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 32
                },
                "start": {
                  "column": 21,
                  "line": 32
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false,
                  "range": [
                    1079,
                    1085
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 32
                    },
                    "start": {
                      "column": 53,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1079,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 32
                  },
                  "start": {
                    "column": 53,
                    "line": 32
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "range": [
                  1067,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 32
                  },
                  "start": {
                    "column": 41,
                    "line": 32
                  }
                }
              },
              "out": false,
              "range": [
                1067,
                1085
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 32
                },
                "start": {
                  "column": 41,
                  "line": 32
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
                "name": "Value",
                "optional": false,
                "range": [
                  1087,
                  1092
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 32
                  },
                  "start": {
                    "column": 61,
                    "line": 32
                  }
                }
              },
              "out": false,
              "range": [
                1087,
                1092
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 32
                },
                "start": {
                  "column": 61,
                  "line": 32
                }
              }
            },
            {
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
                    "name": "Obj",
                    "optional": false,
                    "range": [
                      1116,
                      1119
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 32
                      },
                      "start": {
                        "column": 90,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    1116,
                    1119
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 32
                    },
                    "start": {
                      "column": 90,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1110,
                  1119
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 32
                  },
                  "start": {
                    "column": 84,
                    "line": 32
                  }
                }
              },
              "default": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "range": [
                      1128,
                      1131
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 32
                      },
                      "start": {
                        "column": 102,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    1128,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 32
                    },
                    "start": {
                      "column": 102,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1122,
                  1131
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 32
                  },
                  "start": {
                    "column": 96,
                    "line": 32
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "range": [
                  1094,
                  1101
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 32
                  },
                  "start": {
                    "column": 68,
                    "line": 32
                  }
                }
              },
              "out": false,
              "range": [
                1094,
                1131
              ],
              "loc": {
                "end": {
                  "column": 105,
                  "line": 32
                },
                "start": {
                  "column": 68,
                  "line": 32
                }
              }
            }
          ]
        },
        "range": [
          1033,
          1345
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 16,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
