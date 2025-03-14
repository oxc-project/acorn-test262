__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    1131
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnshiftTuple",
        "optional": false,
        "range": [
          27,
          39
        ],
        "loc": {
          "end": {
            "column": 17,
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
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 42,
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
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    77,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 55,
                      "line": 3
                    }
                  }
                },
                "range": [
                  77,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 3
                  },
                  "start": {
                    "column": 55,
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
                    75,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 3
                    },
                    "start": {
                      "column": 53,
                      "line": 3
                    }
                  }
                },
                "range": [
                  75,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 3
                  },
                  "start": {
                    "column": 53,
                    "line": 3
                  }
                }
              },
              "range": [
                75,
                79
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
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "range": [
                      90,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 3
                      },
                      "start": {
                        "column": 68,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    90,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 3
                    },
                    "start": {
                      "column": 68,
                      "line": 3
                    }
                  }
                },
                "range": [
                  84,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              },
              "range": [
                81,
                94
              ],
              "loc": {
                "end": {
                  "column": 72,
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
            74,
            95
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 3
            },
            "start": {
              "column": 52,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            105,
            110
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 3
            },
            "start": {
              "column": 83,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tail",
            "optional": false,
            "range": [
              98,
              102
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 3
              },
              "start": {
                "column": 76,
                "line": 3
              }
            }
          },
          "range": [
            98,
            102
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 3
            },
            "start": {
              "column": 76,
              "line": 3
            }
          }
        },
        "range": [
          64,
          110
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 3
          },
          "start": {
            "column": 42,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        },
        "range": [
          39,
          61
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        54,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 32,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      54,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 32,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    51,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                50,
                60
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 28,
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
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              40,
              60
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        111
      ],
      "loc": {
        "end": {
          "column": 89,
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
        "name": "ExpandSmallerTuples",
        "optional": false,
        "range": [
          117,
          136
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
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
              161,
              162
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 4
              },
              "start": {
                "column": 49,
                "line": 4
              }
            }
          },
          "range": [
            161,
            162
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 4
            },
            "start": {
              "column": 49,
              "line": 4
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    174,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 4
                    },
                    "start": {
                      "column": 62,
                      "line": 4
                    }
                  }
                },
                "range": [
                  174,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 4
                  },
                  "start": {
                    "column": 62,
                    "line": 4
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
                    172,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 4
                    },
                    "start": {
                      "column": 60,
                      "line": 4
                    }
                  }
                },
                "range": [
                  172,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 4
                  },
                  "start": {
                    "column": 60,
                    "line": 4
                  }
                }
              },
              "range": [
                172,
                176
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 4
                },
                "start": {
                  "column": 60,
                  "line": 4
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
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "range": [
                      187,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 4
                      },
                      "start": {
                        "column": 75,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    187,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 4
                    },
                    "start": {
                      "column": 75,
                      "line": 4
                    }
                  }
                },
                "range": [
                  181,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 4
                  },
                  "start": {
                    "column": 69,
                    "line": 4
                  }
                }
              },
              "range": [
                178,
                191
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 4
                },
                "start": {
                  "column": 66,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            171,
            192
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 4
            },
            "start": {
              "column": 59,
              "line": 4
            }
          }
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "range": [
            227,
            229
          ],
          "loc": {
            "end": {
              "column": 117,
              "line": 4
            },
            "start": {
              "column": 115,
              "line": 4
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  195,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 4
                  },
                  "start": {
                    "column": 83,
                    "line": 4
                  }
                }
              },
              "range": [
                195,
                196
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 4
                },
                "start": {
                  "column": 83,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  218,
                  224
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tail",
                      "optional": false,
                      "range": [
                        219,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 111,
                          "line": 4
                        },
                        "start": {
                          "column": 107,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      219,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 111,
                        "line": 4
                      },
                      "start": {
                        "column": 107,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 112,
                    "line": 4
                  },
                  "start": {
                    "column": 106,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandSmallerTuples",
                "optional": false,
                "range": [
                  199,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 106,
                    "line": 4
                  },
                  "start": {
                    "column": 87,
                    "line": 4
                  }
                }
              },
              "range": [
                199,
                224
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 4
                },
                "start": {
                  "column": 87,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            195,
            224
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 4
            },
            "start": {
              "column": 83,
              "line": 4
            }
          }
        },
        "range": [
          161,
          229
        ],
        "loc": {
          "end": {
            "column": 117,
            "line": 4
          },
          "start": {
            "column": 49,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 4
          },
          "start": {
            "column": 24,
            "line": 4
          }
        },
        "range": [
          136,
          158
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        151,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 39,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      151,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 39,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    148,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                147,
                157
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 35,
                  "line": 4
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
                137,
                138
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              137,
              157
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 25,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        112,
        230
      ],
      "loc": {
        "end": {
          "column": 118,
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
        "name": "Shift",
        "optional": false,
        "range": [
          236,
          241
        ],
        "loc": {
          "end": {
            "column": 10,
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
                  271,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 5
                  },
                  "start": {
                    "column": 40,
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
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 44,
                    "line": 5
                  }
                },
                "range": [
                  275,
                  278
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      277,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 5
                      },
                      "start": {
                        "column": 46,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    277,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
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
                268,
                278
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 5
              },
              "start": {
                "column": 49,
                "line": 5
              }
            },
            "range": [
              280,
              287
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                283,
                287
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 5
                },
                "start": {
                  "column": 52,
                  "line": 5
                }
              }
            }
          },
          "range": [
            267,
            287
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 5
            },
            "start": {
              "column": 36,
              "line": 5
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
                  301,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 5
                  },
                  "start": {
                    "column": 70,
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
                    "column": 94,
                    "line": 5
                  },
                  "start": {
                    "column": 74,
                    "line": 5
                  }
                },
                "range": [
                  305,
                  325
                ],
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            310,
                            311
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 5
                            },
                            "start": {
                              "column": 79,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          310,
                          311
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 5
                          },
                          "start": {
                            "column": 79,
                            "line": 5
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            308,
                            309
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 5
                            },
                            "start": {
                              "column": 77,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          308,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 5
                          },
                          "start": {
                            "column": 77,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        308,
                        312
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 5
                        },
                        "start": {
                          "column": 77,
                          "line": 5
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
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "range": [
                              323,
                              324
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 5
                              },
                              "start": {
                                "column": 92,
                                "line": 5
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            323,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 5
                            },
                            "start": {
                              "column": 92,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          317,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 5
                          },
                          "start": {
                            "column": 86,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        314,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 5
                        },
                        "start": {
                          "column": 83,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    307,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 5
                    },
                    "start": {
                      "column": 76,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                298,
                325
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 5
                },
                "start": {
                  "column": 67,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 103,
                "line": 5
              },
              "start": {
                "column": 96,
                "line": 5
              }
            },
            "range": [
              327,
              334
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                330,
                334
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 5
                },
                "start": {
                  "column": 99,
                  "line": 5
                }
              }
            }
          },
          "range": [
            297,
            334
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 5
            },
            "start": {
              "column": 66,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            341,
            346
          ],
          "loc": {
            "end": {
              "column": 115,
              "line": 5
            },
            "start": {
              "column": 110,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              337,
              338
            ],
            "loc": {
              "end": {
                "column": 107,
                "line": 5
              },
              "start": {
                "column": 106,
                "line": 5
              }
            }
          },
          "range": [
            337,
            338
          ],
          "loc": {
            "end": {
              "column": 107,
              "line": 5
            },
            "start": {
              "column": 106,
              "line": 5
            }
          }
        },
        "range": [
          266,
          346
        ],
        "loc": {
          "end": {
            "column": 115,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        },
        "range": [
          241,
          263
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  257,
                  262
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      258,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  252,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                252,
                262
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                242,
                243
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              242,
              262
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        231,
        347
      ],
      "loc": {
        "end": {
          "column": 116,
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
        "name": "GrowExpRev",
        "optional": false,
        "range": [
          353,
          363
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'length'",
              "value": "length",
              "range": [
                437,
                445
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 6
                },
                "start": {
                  "column": 89,
                  "line": 6
                }
              }
            },
            "range": [
              437,
              445
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 6
              },
              "start": {
                "column": 89,
                "line": 6
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                435,
                436
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 6
                },
                "start": {
                  "column": 87,
                  "line": 6
                }
              }
            },
            "range": [
              435,
              436
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 6
              },
              "start": {
                "column": 87,
                "line": 6
              }
            }
          },
          "range": [
            435,
            446
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 6
            },
            "start": {
              "column": 87,
              "line": 6
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              455,
              456
            ],
            "loc": {
              "end": {
                "column": 108,
                "line": 6
              },
              "start": {
                "column": 107,
                "line": 6
              }
            }
          },
          "range": [
            455,
            456
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 6
            },
            "start": {
              "column": 107,
              "line": 6
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              473,
              546
            ],
            "params": [
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "range": [
                        490,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 143,
                          "line": 6
                        },
                        "start": {
                          "column": 142,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      490,
                      491
                    ],
                    "loc": {
                      "end": {
                        "column": 143,
                        "line": 6
                      },
                      "start": {
                        "column": 142,
                        "line": 6
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              478,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 131,
                                "line": 6
                              },
                              "start": {
                                "column": 130,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            478,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 131,
                              "line": 6
                            },
                            "start": {
                              "column": 130,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          475,
                          479
                        ],
                        "loc": {
                          "end": {
                            "column": 131,
                            "line": 6
                          },
                          "start": {
                            "column": 127,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                486,
                                487
                              ],
                              "loc": {
                                "end": {
                                  "column": 139,
                                  "line": 6
                                },
                                "start": {
                                  "column": 138,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              486,
                              487
                            ],
                            "loc": {
                              "end": {
                                "column": 139,
                                "line": 6
                              },
                              "start": {
                                "column": 138,
                                "line": 6
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "range": [
                                484,
                                485
                              ],
                              "loc": {
                                "end": {
                                  "column": 137,
                                  "line": 6
                                },
                                "start": {
                                  "column": 136,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              484,
                              485
                            ],
                            "loc": {
                              "end": {
                                "column": 137,
                                "line": 6
                              },
                              "start": {
                                "column": 136,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            484,
                            488
                          ],
                          "loc": {
                            "end": {
                              "column": 140,
                              "line": 6
                            },
                            "start": {
                              "column": 136,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          481,
                          488
                        ],
                        "loc": {
                          "end": {
                            "column": 140,
                            "line": 6
                          },
                          "start": {
                            "column": 133,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      474,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 141,
                        "line": 6
                      },
                      "start": {
                        "column": 126,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    474,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 144,
                      "line": 6
                    },
                    "start": {
                      "column": 126,
                      "line": 6
                    }
                  }
                },
                "extendsType": {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    501,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 162,
                      "line": 6
                    },
                    "start": {
                      "column": 153,
                      "line": 6
                    }
                  }
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      531,
                      532
                    ],
                    "loc": {
                      "end": {
                        "column": 184,
                        "line": 6
                      },
                      "start": {
                        "column": 183,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    531,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 184,
                      "line": 6
                    },
                    "start": {
                      "column": 183,
                      "line": 6
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
                          "name": "A",
                          "optional": false,
                          "range": [
                            517,
                            518
                          ],
                          "loc": {
                            "end": {
                              "column": 170,
                              "line": 6
                            },
                            "start": {
                              "column": 169,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          517,
                          518
                        ],
                        "loc": {
                          "end": {
                            "column": 170,
                            "line": 6
                          },
                          "start": {
                            "column": 169,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        514,
                        518
                      ],
                      "loc": {
                        "end": {
                          "column": 170,
                          "line": 6
                        },
                        "start": {
                          "column": 166,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              525,
                              526
                            ],
                            "loc": {
                              "end": {
                                "column": 178,
                                "line": 6
                              },
                              "start": {
                                "column": 177,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            525,
                            526
                          ],
                          "loc": {
                            "end": {
                              "column": 178,
                              "line": 6
                            },
                            "start": {
                              "column": 177,
                              "line": 6
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              523,
                              524
                            ],
                            "loc": {
                              "end": {
                                "column": 176,
                                "line": 6
                              },
                              "start": {
                                "column": 175,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            523,
                            524
                          ],
                          "loc": {
                            "end": {
                              "column": 176,
                              "line": 6
                            },
                            "start": {
                              "column": 175,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          523,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 179,
                            "line": 6
                          },
                          "start": {
                            "column": 175,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        520,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 179,
                          "line": 6
                        },
                        "start": {
                          "column": 172,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    513,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 180,
                      "line": 6
                    },
                    "start": {
                      "column": 165,
                      "line": 6
                    }
                  }
                },
                "range": [
                  474,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 184,
                    "line": 6
                  },
                  "start": {
                    "column": 126,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    534,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 187,
                      "line": 6
                    },
                    "start": {
                      "column": 186,
                      "line": 6
                    }
                  }
                },
                "range": [
                  534,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 187,
                    "line": 6
                  },
                  "start": {
                    "column": 186,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    542,
                    545
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          543,
                          544
                        ],
                        "loc": {
                          "end": {
                            "column": 196,
                            "line": 6
                          },
                          "start": {
                            "column": 195,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        543,
                        544
                      ],
                      "loc": {
                        "end": {
                          "column": 196,
                          "line": 6
                        },
                        "start": {
                          "column": 195,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 197,
                      "line": 6
                    },
                    "start": {
                      "column": 194,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shift",
                  "optional": false,
                  "range": [
                    537,
                    542
                  ],
                  "loc": {
                    "end": {
                      "column": 194,
                      "line": 6
                    },
                    "start": {
                      "column": 189,
                      "line": 6
                    }
                  }
                },
                "range": [
                  537,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 197,
                    "line": 6
                  },
                  "start": {
                    "column": 189,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 198,
                "line": 6
              },
              "start": {
                "column": 125,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "range": [
              463,
              473
            ],
            "loc": {
              "end": {
                "column": 125,
                "line": 6
              },
              "start": {
                "column": 115,
                "line": 6
              }
            }
          },
          "range": [
            463,
            546
          ],
          "loc": {
            "end": {
              "column": 198,
              "line": 6
            },
            "start": {
              "column": 115,
              "line": 6
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
              459,
              460
            ],
            "loc": {
              "end": {
                "column": 112,
                "line": 6
              },
              "start": {
                "column": 111,
                "line": 6
              }
            }
          },
          "range": [
            459,
            460
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 6
            },
            "start": {
              "column": 111,
              "line": 6
            }
          }
        },
        "range": [
          435,
          546
        ],
        "loc": {
          "end": {
            "column": 198,
            "line": 6
          },
          "start": {
            "column": 87,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 84,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        },
        "range": [
          363,
          432
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  379,
                  384
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      380,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 32,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 31,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  374,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "range": [
                374,
                384
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                364,
                365
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              364,
              384
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                396,
                402
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 48,
                  "line": 6
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
                386,
                387
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              386,
              402
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 6
              },
              "start": {
                "column": 38,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  419,
                  431
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        425,
                        430
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            426,
                            429
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 6
                            },
                            "start": {
                              "column": 78,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 6
                        },
                        "start": {
                          "column": 77,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "range": [
                        420,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 6
                        },
                        "start": {
                          "column": 72,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      420,
                      430
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 6
                      },
                      "start": {
                        "column": 72,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 6
                  },
                  "start": {
                    "column": 71,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  414,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 6
                  },
                  "start": {
                    "column": 66,
                    "line": 6
                  }
                }
              },
              "range": [
                414,
                431
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 6
                },
                "start": {
                  "column": 66,
                  "line": 6
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
                404,
                405
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 6
                },
                "start": {
                  "column": 56,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              404,
              431
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 6
              },
              "start": {
                "column": 56,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        348,
        547
      ],
      "loc": {
        "end": {
          "column": 199,
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
        "name": "GrowExp",
        "optional": false,
        "range": [
          553,
          560
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                645,
                646
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 7
                },
                "start": {
                  "column": 97,
                  "line": 7
                }
              }
            },
            "range": [
              645,
              646
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 7
              },
              "start": {
                "column": 97,
                "line": 7
              }
            }
          },
          "objectType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      636,
                      637
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 7
                      },
                      "start": {
                        "column": 88,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    636,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 7
                    },
                    "start": {
                      "column": 88,
                      "line": 7
                    }
                  }
                },
                "range": [
                  633,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 7
                  },
                  "start": {
                    "column": 85,
                    "line": 7
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
                    "name": "A",
                    "optional": false,
                    "range": [
                      642,
                      643
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 7
                      },
                      "start": {
                        "column": 94,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    642,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 7
                    },
                    "start": {
                      "column": 94,
                      "line": 7
                    }
                  }
                },
                "range": [
                  639,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 7
                  },
                  "start": {
                    "column": 91,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              632,
              644
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 7
              },
              "start": {
                "column": 84,
                "line": 7
              }
            }
          },
          "range": [
            632,
            647
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 7
            },
            "start": {
              "column": 84,
              "line": 7
            }
          }
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "range": [
            656,
            665
          ],
          "loc": {
            "end": {
              "column": 117,
              "line": 7
            },
            "start": {
              "column": 108,
              "line": 7
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              716,
              725
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
                    717,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 170,
                      "line": 7
                    },
                    "start": {
                      "column": 169,
                      "line": 7
                    }
                  }
                },
                "range": [
                  717,
                  718
                ],
                "loc": {
                  "end": {
                    "column": 170,
                    "line": 7
                  },
                  "start": {
                    "column": 169,
                    "line": 7
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    720,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 173,
                      "line": 7
                    },
                    "start": {
                      "column": 172,
                      "line": 7
                    }
                  }
                },
                "range": [
                  720,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 173,
                    "line": 7
                  },
                  "start": {
                    "column": 172,
                    "line": 7
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    723,
                    724
                  ],
                  "loc": {
                    "end": {
                      "column": 176,
                      "line": 7
                    },
                    "start": {
                      "column": 175,
                      "line": 7
                    }
                  }
                },
                "range": [
                  723,
                  724
                ],
                "loc": {
                  "end": {
                    "column": 176,
                    "line": 7
                  },
                  "start": {
                    "column": 175,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 177,
                "line": 7
              },
              "start": {
                "column": 168,
                "line": 7
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "range": [
              706,
              716
            ],
            "loc": {
              "end": {
                "column": 168,
                "line": 7
              },
              "start": {
                "column": 158,
                "line": 7
              }
            }
          },
          "range": [
            706,
            725
          ],
          "loc": {
            "end": {
              "column": 177,
              "line": 7
            },
            "start": {
              "column": 158,
              "line": 7
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              675,
              703
            ],
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          680,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 133,
                            "line": 7
                          },
                          "start": {
                            "column": 132,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        680,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 133,
                          "line": 7
                        },
                        "start": {
                          "column": 132,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      677,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 133,
                        "line": 7
                      },
                      "start": {
                        "column": 129,
                        "line": 7
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
                        "name": "A",
                        "optional": false,
                        "range": [
                          686,
                          687
                        ],
                        "loc": {
                          "end": {
                            "column": 139,
                            "line": 7
                          },
                          "start": {
                            "column": 138,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        686,
                        687
                      ],
                      "loc": {
                        "end": {
                          "column": 139,
                          "line": 7
                        },
                        "start": {
                          "column": 138,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      683,
                      687
                    ],
                    "loc": {
                      "end": {
                        "column": 139,
                        "line": 7
                      },
                      "start": {
                        "column": 135,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  676,
                  688
                ],
                "loc": {
                  "end": {
                    "column": 140,
                    "line": 7
                  },
                  "start": {
                    "column": 128,
                    "line": 7
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    690,
                    691
                  ],
                  "loc": {
                    "end": {
                      "column": 143,
                      "line": 7
                    },
                    "start": {
                      "column": 142,
                      "line": 7
                    }
                  }
                },
                "range": [
                  690,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 143,
                    "line": 7
                  },
                  "start": {
                    "column": 142,
                    "line": 7
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
                        694,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 147,
                          "line": 7
                        },
                        "start": {
                          "column": 146,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      694,
                      695
                    ],
                    "loc": {
                      "end": {
                        "column": 147,
                        "line": 7
                      },
                      "start": {
                        "column": 146,
                        "line": 7
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
                          700,
                          701
                        ],
                        "loc": {
                          "end": {
                            "column": 153,
                            "line": 7
                          },
                          "start": {
                            "column": 152,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        700,
                        701
                      ],
                      "loc": {
                        "end": {
                          "column": 153,
                          "line": 7
                        },
                        "start": {
                          "column": 152,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      697,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 153,
                        "line": 7
                      },
                      "start": {
                        "column": 149,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  693,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 154,
                    "line": 7
                  },
                  "start": {
                    "column": 145,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 155,
                "line": 7
              },
              "start": {
                "column": 127,
                "line": 7
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExp",
            "optional": false,
            "range": [
              668,
              675
            ],
            "loc": {
              "end": {
                "column": 127,
                "line": 7
              },
              "start": {
                "column": 120,
                "line": 7
              }
            }
          },
          "range": [
            668,
            703
          ],
          "loc": {
            "end": {
              "column": 155,
              "line": 7
            },
            "start": {
              "column": 120,
              "line": 7
            }
          }
        },
        "range": [
          632,
          725
        ],
        "loc": {
          "end": {
            "column": 177,
            "line": 7
          },
          "start": {
            "column": 84,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 81,
            "line": 7
          },
          "start": {
            "column": 12,
            "line": 7
          }
        },
        "range": [
          560,
          629
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  576,
                  581
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      577,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
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
                  571,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "range": [
                571,
                581
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                561,
                562
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
            "out": false,
            "range": [
              561,
              581
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                593,
                599
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 7
                },
                "start": {
                  "column": 45,
                  "line": 7
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
                583,
                584
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 7
                },
                "start": {
                  "column": 35,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              583,
              599
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 7
              },
              "start": {
                "column": 35,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  616,
                  628
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        622,
                        627
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            623,
                            626
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 7
                            },
                            "start": {
                              "column": 75,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 7
                        },
                        "start": {
                          "column": 74,
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
                        617,
                        622
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 7
                        },
                        "start": {
                          "column": 69,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      617,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 7
                      },
                      "start": {
                        "column": 69,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 7
                  },
                  "start": {
                    "column": 68,
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
                  611,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 7
                  },
                  "start": {
                    "column": 63,
                    "line": 7
                  }
                }
              },
              "range": [
                611,
                628
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 7
                },
                "start": {
                  "column": 63,
                  "line": 7
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
                601,
                602
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 7
                },
                "start": {
                  "column": 53,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              601,
              628
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 7
              },
              "start": {
                "column": 53,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        548,
        726
      ],
      "loc": {
        "end": {
          "column": 178,
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
        "name": "Tuple",
        "optional": false,
        "range": [
          732,
          737
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
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "range": [
            761,
            767
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 8
            },
            "start": {
              "column": 34,
              "line": 8
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              776,
              777
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 8
              },
              "start": {
                "column": 49,
                "line": 8
              }
            }
          },
          "range": [
            776,
            777
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 8
            },
            "start": {
              "column": 49,
              "line": 8
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
              "name": "N",
              "optional": false,
              "range": [
                791,
                792
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 8
                },
                "start": {
                  "column": 64,
                  "line": 8
                }
              }
            },
            "range": [
              791,
              792
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 8
              },
              "start": {
                "column": 64,
                "line": 8
              }
            }
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                801,
                802
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 8
                },
                "start": {
                  "column": 74,
                  "line": 8
                }
              }
            },
            "range": [
              801,
              802
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 8
              },
              "start": {
                "column": 74,
                "line": 8
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
                "name": "N",
                "optional": false,
                "range": [
                  810,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 8
                  },
                  "start": {
                    "column": 83,
                    "line": 8
                  }
                }
              },
              "range": [
                810,
                811
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 8
                },
                "start": {
                  "column": 83,
                  "line": 8
                }
              }
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  820,
                  821
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 8
                  },
                  "start": {
                    "column": 93,
                    "line": 8
                  }
                }
              },
              "range": [
                820,
                821
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 8
                },
                "start": {
                  "column": 93,
                  "line": 8
                }
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  837,
                  851
                ],
                "params": [
                  {
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
                            839,
                            840
                          ],
                          "loc": {
                            "end": {
                              "column": 113,
                              "line": 8
                            },
                            "start": {
                              "column": 112,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          839,
                          840
                        ],
                        "loc": {
                          "end": {
                            "column": 113,
                            "line": 8
                          },
                          "start": {
                            "column": 112,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      838,
                      841
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 8
                      },
                      "start": {
                        "column": 111,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "range": [
                        843,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 117,
                          "line": 8
                        },
                        "start": {
                          "column": 116,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      843,
                      844
                    ],
                    "loc": {
                      "end": {
                        "column": 117,
                        "line": 8
                      },
                      "start": {
                        "column": 116,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "range": [
                          847,
                          849
                        ],
                        "loc": {
                          "end": {
                            "column": 122,
                            "line": 8
                          },
                          "start": {
                            "column": 120,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      846,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 123,
                        "line": 8
                      },
                      "start": {
                        "column": 119,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 124,
                    "line": 8
                  },
                  "start": {
                    "column": 110,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GrowExp",
                "optional": false,
                "range": [
                  830,
                  837
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 8
                  },
                  "start": {
                    "column": 103,
                    "line": 8
                  }
                }
              },
              "range": [
                830,
                851
              ],
              "loc": {
                "end": {
                  "column": 124,
                  "line": 8
                },
                "start": {
                  "column": 103,
                  "line": 8
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
                      825,
                      826
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 8
                      },
                      "start": {
                        "column": 98,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    825,
                    826
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 8
                    },
                    "start": {
                      "column": 98,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                824,
                827
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 8
                },
                "start": {
                  "column": 97,
                  "line": 8
                }
              }
            },
            "range": [
              810,
              851
            ],
            "loc": {
              "end": {
                "column": 124,
                "line": 8
              },
              "start": {
                "column": 83,
                "line": 8
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [],
            "range": [
              805,
              807
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 8
              },
              "start": {
                "column": 78,
                "line": 8
              }
            }
          },
          "range": [
            791,
            851
          ],
          "loc": {
            "end": {
              "column": 124,
              "line": 8
            },
            "start": {
              "column": 64,
              "line": 8
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              785,
              788
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
                    786,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 8
                    },
                    "start": {
                      "column": 59,
                      "line": 8
                    }
                  }
                },
                "range": [
                  786,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 8
                  },
                  "start": {
                    "column": 59,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 8
              },
              "start": {
                "column": 58,
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
              780,
              785
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 8
              },
              "start": {
                "column": 53,
                "line": 8
              }
            }
          },
          "range": [
            780,
            788
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 8
            },
            "start": {
              "column": 53,
              "line": 8
            }
          }
        },
        "range": [
          761,
          851
        ],
        "loc": {
          "end": {
            "column": 124,
            "line": 8
          },
          "start": {
            "column": 34,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        },
        "range": [
          737,
          758
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
                738,
                739
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              738,
              739
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                751,
                757
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
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
                741,
                742
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              741,
              757
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        727,
        852
      ],
      "loc": {
        "end": {
          "column": 125,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          919,
          1130
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lengthRange",
              "optional": false,
              "range": [
                925,
                936
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                936,
                1128
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 11
                      },
                      "start": {
                        "column": 57,
                        "line": 11
                      }
                    },
                    "range": [
                      978,
                      981
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          980,
                          981
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 11
                          },
                          "start": {
                            "column": 59,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        980,
                        981
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 11
                        },
                        "start": {
                          "column": 59,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    973,
                    981
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 11
                    },
                    "start": {
                      "column": 52,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "endBefore",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 11
                      },
                      "start": {
                        "column": 71,
                        "line": 11
                      }
                    },
                    "range": [
                      992,
                      995
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "range": [
                          994,
                          995
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 11
                          },
                          "start": {
                            "column": 73,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        994,
                        995
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 11
                        },
                        "start": {
                          "column": 73,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    983,
                    995
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 11
                    },
                    "start": {
                      "column": 62,
                      "line": 11
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 206,
                    "line": 11
                  },
                  "start": {
                    "column": 75,
                    "line": 11
                  }
                },
                "range": [
                  996,
                  1127
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1012,
                      1127
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1020,
                            1126
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1040,
                                  1072
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        1053,
                                        1071
                                      ],
                                      "params": [
                                        {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSRestType",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "range": [
                                                    1063,
                                                    1069
                                                  ],
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "range": [
                                                          1064,
                                                          1065
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 144,
                                                            "line": 11
                                                          },
                                                          "start": {
                                                            "column": 143,
                                                            "line": 11
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        1064,
                                                        1065
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 144,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 143,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "E",
                                                        "optional": false,
                                                        "range": [
                                                          1067,
                                                          1068
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 147,
                                                            "line": 11
                                                          },
                                                          "start": {
                                                            "column": 146,
                                                            "line": 11
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        1067,
                                                        1068
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 147,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 146,
                                                          "line": 11
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 148,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 142,
                                                      "line": 11
                                                    }
                                                  }
                                                },
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "range": [
                                                    1058,
                                                    1063
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 142,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 137,
                                                      "line": 11
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  1058,
                                                  1069
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 148,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 137,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "range": [
                                                1055,
                                                1069
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 148,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 134,
                                                  "line": 11
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            1054,
                                            1070
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 149,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 133,
                                              "line": 11
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 150,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 132,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "range": [
                                        1041,
                                        1053
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 132,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 120,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      1041,
                                      1071
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 150,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 120,
                                        "line": 11
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 151,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 119,
                                    "line": 11
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "range": [
                                  1021,
                                  1040
                                ],
                                "loc": {
                                  "end": {
                                    "column": 119,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 100,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                1021,
                                1072
                              ],
                              "loc": {
                                "end": {
                                  "column": 151,
                                  "line": 11
                                },
                                "start": {
                                  "column": 100,
                                  "line": 11
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1093,
                                  1125
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        1106,
                                        1124
                                      ],
                                      "params": [
                                        {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSRestType",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "range": [
                                                    1116,
                                                    1122
                                                  ],
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "range": [
                                                          1117,
                                                          1118
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 197,
                                                            "line": 11
                                                          },
                                                          "start": {
                                                            "column": 196,
                                                            "line": 11
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        1117,
                                                        1118
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 197,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 196,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "S",
                                                        "optional": false,
                                                        "range": [
                                                          1120,
                                                          1121
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 200,
                                                            "line": 11
                                                          },
                                                          "start": {
                                                            "column": 199,
                                                            "line": 11
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        1120,
                                                        1121
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 200,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 199,
                                                          "line": 11
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 201,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 195,
                                                      "line": 11
                                                    }
                                                  }
                                                },
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "range": [
                                                    1111,
                                                    1116
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 195,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 190,
                                                      "line": 11
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  1111,
                                                  1122
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 201,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 190,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "range": [
                                                1108,
                                                1122
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 201,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 187,
                                                  "line": 11
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            1107,
                                            1123
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 202,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 186,
                                              "line": 11
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 203,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 185,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "range": [
                                        1094,
                                        1106
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 185,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 173,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      1094,
                                      1124
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 203,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 173,
                                        "line": 11
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 204,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 172,
                                    "line": 11
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "range": [
                                  1074,
                                  1093
                                ],
                                "loc": {
                                  "end": {
                                    "column": 172,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 153,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                1074,
                                1125
                              ],
                              "loc": {
                                "end": {
                                  "column": 204,
                                  "line": 11
                                },
                                "start": {
                                  "column": 153,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 205,
                              "line": 11
                            },
                            "start": {
                              "column": 99,
                              "line": 11
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "range": [
                            1013,
                            1020
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 11
                            },
                            "start": {
                              "column": 92,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          1013,
                          1126
                        ],
                        "loc": {
                          "end": {
                            "column": 205,
                            "line": 11
                          },
                          "start": {
                            "column": 92,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 206,
                        "line": 11
                      },
                      "start": {
                        "column": 91,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArrayValidator",
                    "optional": false,
                    "range": [
                      998,
                      1012
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 11
                      },
                      "start": {
                        "column": 77,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    998,
                    1127
                  ],
                  "loc": {
                    "end": {
                      "column": 206,
                      "line": 11
                    },
                    "start": {
                      "column": 77,
                      "line": 11
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                },
                "range": [
                  936,
                  972
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "range": [
                        947,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 11
                        },
                        "start": {
                          "column": 26,
                          "line": 11
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        937,
                        938
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      937,
                      953
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "range": [
                        965,
                        971
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 11
                        },
                        "start": {
                          "column": 44,
                          "line": 11
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        955,
                        956
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 11
                        },
                        "start": {
                          "column": 34,
                          "line": 11
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      955,
                      971
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 207,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              925,
              1128
            ],
            "loc": {
              "end": {
                "column": 207,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 65,
            "line": 10
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrayValidator",
        "optional": false,
        "range": [
          868,
          882
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 10
          },
          "start": {
            "column": 14,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 10
          }
        },
        "range": [
          882,
          918
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
                  893,
                  900
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 10
                  },
                  "start": {
                    "column": 39,
                    "line": 10
                  }
                }
              },
              "range": [
                893,
                902
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 10
                },
                "start": {
                  "column": 39,
                  "line": 10
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
                883,
                884
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              883,
              902
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 10
              },
              "start": {
                "column": 29,
                "line": 10
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSNumberKeyword",
                "range": [
                  910,
                  916
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 10
                  },
                  "start": {
                    "column": 56,
                    "line": 10
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
                    908,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 10
                    },
                    "start": {
                      "column": 54,
                      "line": 10
                    }
                  }
                },
                "range": [
                  908,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 10
                  },
                  "start": {
                    "column": 54,
                    "line": 10
                  }
                }
              },
              "range": [
                908,
                917
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 10
                },
                "start": {
                  "column": 54,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                904,
                905
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
            "out": false,
            "range": [
              904,
              917
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 10
              },
              "start": {
                "column": 50,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        854,
        1130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
