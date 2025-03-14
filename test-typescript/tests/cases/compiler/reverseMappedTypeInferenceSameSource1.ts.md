__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    849
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "range": [
          5,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
              "name": "type",
              "optional": false,
              "range": [
                45,
                49
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
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
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                49,
                52
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    51,
                    52
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
                "range": [
                  51,
                  52
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
              }
            },
            "range": [
              45,
              53
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          41,
          55
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 41,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          38
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                22,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "default": {
              "type": "TSStringKeyword",
              "range": [
                31,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
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
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        56
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          96,
          132
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "extraProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  },
                  "range": [
                    111,
                    119
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      113,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  101,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 3,
                    "line": 5
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              },
              "range": [
                120,
                129
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  122,
                  129
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
              }
            },
            "range": [
              100,
              130
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 39,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Action",
            "optional": false,
            "range": [
              89,
              95
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          },
          "range": [
            89,
            95
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 4
            },
            "start": {
              "column": 32,
              "line": 4
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownAction",
        "optional": false,
        "range": [
          67,
          80
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        57,
        132
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
        "name": "Reducer",
        "optional": false,
        "range": [
          138,
          145
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
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                200,
                215
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        202,
                        203
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      202,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      206,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  202,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              195,
              215
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "action",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              },
              "range": [
                225,
                228
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    227,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 9
                    },
                    "start": {
                      "column": 10,
                      "line": 9
                    }
                  }
                },
                "range": [
                  227,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              219,
              228
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 6,
              "line": 10
            },
            "start": {
              "column": 2,
              "line": 10
            }
          },
          "range": [
            232,
            236
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                235,
                236
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              }
            },
            "range": [
              235,
              236
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 5,
                "line": 10
              }
            }
          }
        },
        "range": [
          191,
          236
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 58,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 7
          },
          "start": {
            "column": 12,
            "line": 7
          }
        },
        "range": [
          145,
          188
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                150,
                153
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                146,
                147
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
              146,
              153
            ],
            "loc": {
              "end": {
                "column": 20,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "range": [
                  165,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              },
              "range": [
                165,
                171
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "range": [
                  174,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 7
                  },
                  "start": {
                    "column": 41,
                    "line": 7
                  }
                }
              },
              "range": [
                174,
                187
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 7
                },
                "start": {
                  "column": 41,
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
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              155,
              187
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        133,
        237
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 10
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
        "name": "ReducersMapObject",
        "optional": false,
        "range": [
          244,
          261
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
              "name": "S",
              "optional": false,
              "range": [
                323,
                324
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
            "range": [
              323,
              324
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
          "range": [
            317,
            324
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 13
            },
            "start": {
              "column": 8,
              "line": 13
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            312,
            313
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 13
            },
            "start": {
              "column": 3,
              "line": 13
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              334,
              343
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
                      337,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 28,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    337,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 13
                    },
                    "start": {
                      "column": 28,
                      "line": 13
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      335,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 13
                      },
                      "start": {
                        "column": 26,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    335,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                },
                "range": [
                  335,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 26,
                    "line": 13
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    341,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 13
                    },
                    "start": {
                      "column": 32,
                      "line": 13
                    }
                  }
                },
                "range": [
                  341,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 13
                  },
                  "start": {
                    "column": 32,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 13
              },
              "start": {
                "column": 25,
                "line": 13
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reducer",
            "optional": false,
            "range": [
              327,
              334
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 18,
                "line": 13
              }
            }
          },
          "range": [
            327,
            343
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 13
            },
            "start": {
              "column": 18,
              "line": 13
            }
          }
        },
        "range": [
          307,
          346
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 68,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 12
          },
          "start": {
            "column": 22,
            "line": 12
          }
        },
        "range": [
          261,
          304
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                266,
                269
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                262,
                263
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              262,
              269
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
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
                "name": "Action",
                "optional": false,
                "range": [
                  281,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 12
                  },
                  "start": {
                    "column": 42,
                    "line": 12
                  }
                }
              },
              "range": [
                281,
                287
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 12
                },
                "start": {
                  "column": 42,
                  "line": 12
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "range": [
                  290,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 12
                  },
                  "start": {
                    "column": 51,
                    "line": 12
                  }
                }
              },
              "range": [
                290,
                303
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 12
                },
                "start": {
                  "column": 51,
                  "line": 12
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
                271,
                272
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 12
                },
                "start": {
                  "column": 32,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              271,
              303
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 12
              },
              "start": {
                "column": 32,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        239,
        347
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          424,
          479
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reducer",
              "optional": false,
              "range": [
                428,
                435
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
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
                  "column": 50,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              },
              "range": [
                435,
                476
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        444,
                        450
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              445,
                              446
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
                          "range": [
                            445,
                            446
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              448,
                              449
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 17
                              },
                              "start": {
                                "column": 22,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            448,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 17
                            },
                            "start": {
                              "column": 22,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Reducer",
                      "optional": false,
                      "range": [
                        437,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 17
                        },
                        "start": {
                          "column": 11,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      437,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 17
                      },
                      "start": {
                        "column": 11,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        470,
                        476
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              471,
                              472
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 17
                              },
                              "start": {
                                "column": 45,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            471,
                            472
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 17
                            },
                            "start": {
                              "column": 45,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              474,
                              475
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 17
                              },
                              "start": {
                                "column": 48,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            474,
                            475
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 17
                            },
                            "start": {
                              "column": 48,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 17
                        },
                        "start": {
                          "column": 44,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReducersMapObject",
                      "optional": false,
                      "range": [
                        453,
                        470
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 17
                        },
                        "start": {
                          "column": 27,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      453,
                      476
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  437,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              428,
              477
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 75,
            "line": 16
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigureStoreOptions",
        "optional": false,
        "range": [
          359,
          380
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 74,
            "line": 16
          },
          "start": {
            "column": 31,
            "line": 16
          }
        },
        "range": [
          380,
          423
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                385,
                388
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 16
                },
                "start": {
                  "column": 36,
                  "line": 16
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
                381,
                382
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              381,
              388
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 16
              },
              "start": {
                "column": 32,
                "line": 16
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
                "name": "Action",
                "optional": false,
                "range": [
                  400,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 16
                  },
                  "start": {
                    "column": 51,
                    "line": 16
                  }
                }
              },
              "range": [
                400,
                406
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 16
                },
                "start": {
                  "column": 51,
                  "line": 16
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "range": [
                  409,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 16
                  },
                  "start": {
                    "column": 60,
                    "line": 16
                  }
                }
              },
              "range": [
                409,
                422
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 16
                },
                "start": {
                  "column": 60,
                  "line": 16
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
                390,
                391
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 16
                },
                "start": {
                  "column": 41,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              390,
              422
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 16
              },
              "start": {
                "column": 41,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        349,
        479
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "configureStore",
        "optional": false,
        "range": [
          498,
          512
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            },
            "range": [
              566,
              595
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  589,
                  595
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        590,
                        591
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 21
                        },
                        "start": {
                          "column": 33,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      590,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 33,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        593,
                        594
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 21
                        },
                        "start": {
                          "column": 36,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      593,
                      594
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 21
                      },
                      "start": {
                        "column": 36,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 32,
                    "line": 21
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConfigureStoreOptions",
                "optional": false,
                "range": [
                  568,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              },
              "range": [
                568,
                595
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            }
          },
          "range": [
            559,
            595
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 21
            },
            "start": {
              "column": 2,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 22
          },
          "start": {
            "column": 1,
            "line": 22
          }
        },
        "range": [
          598,
          604
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            600,
            604
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 22
            },
            "start": {
              "column": 3,
              "line": 22
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 74,
            "line": 20
          },
          "start": {
            "column": 31,
            "line": 20
          }
        },
        "range": [
          512,
          555
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                517,
                520
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 20
                },
                "start": {
                  "column": 36,
                  "line": 20
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
                513,
                514
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 20
                },
                "start": {
                  "column": 32,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              513,
              520
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 20
              },
              "start": {
                "column": 32,
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
                "name": "Action",
                "optional": false,
                "range": [
                  532,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 20
                  },
                  "start": {
                    "column": 51,
                    "line": 20
                  }
                }
              },
              "range": [
                532,
                538
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 20
                },
                "start": {
                  "column": 51,
                  "line": 20
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "range": [
                  541,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 20
                  },
                  "start": {
                    "column": 60,
                    "line": 20
                  }
                }
              },
              "range": [
                541,
                554
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 20
                },
                "start": {
                  "column": 60,
                  "line": 20
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
                522,
                523
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
            "out": false,
            "range": [
              522,
              554
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 20
              },
              "start": {
                "column": 41,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        481,
        605
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
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
                "name": "reducer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 25
                    },
                    "start": {
                      "column": 15,
                      "line": 25
                    }
                  },
                  "range": [
                    624,
                    641
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        633,
                        641
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            634,
                            640
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 25
                            },
                            "start": {
                              "column": 25,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 25
                        },
                        "start": {
                          "column": 24,
                          "line": 25
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Reducer",
                      "optional": false,
                      "range": [
                        626,
                        633
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 25
                        },
                        "start": {
                          "column": 17,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      626,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  617,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    650,
                    651
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 25
                    },
                    "start": {
                      "column": 41,
                      "line": 25
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  644,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 25
                  },
                  "start": {
                    "column": 35,
                    "line": 25
                  }
                }
              },
              "range": [
                617,
                651
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            611,
            652
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 25
            },
            "start": {
              "column": 2,
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
                "name": "store1",
                "optional": false,
                "range": [
                  661,
                  667
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "init": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "range": [
                            687,
                            694
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 26
                            },
                            "start": {
                              "column": 34,
                              "line": 26
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "range": [
                            687,
                            694
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 26
                            },
                            "start": {
                              "column": 34,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          687,
                          694
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 26
                          },
                          "start": {
                            "column": 34,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "range": [
                      685,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 26
                      },
                      "start": {
                        "column": 32,
                        "line": 26
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "configureStore",
                  "optional": false,
                  "range": [
                    670,
                    684
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 26
                    },
                    "start": {
                      "column": 17,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "range": [
                  670,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 26
                  },
                  "start": {
                    "column": 17,
                    "line": 26
                  }
                }
              },
              "range": [
                661,
                697
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            655,
            698
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 26
            },
            "start": {
              "column": 2,
              "line": 26
            }
          }
        }
      ],
      "range": [
        607,
        700
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
            "name": "counterReducer1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 29
                },
                "start": {
                  "column": 21,
                  "line": 29
                }
              },
              "range": [
                723,
                740
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    732,
                    740
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        733,
                        739
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 29
                        },
                        "start": {
                          "column": 31,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 29
                    },
                    "start": {
                      "column": 30,
                      "line": 29
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "range": [
                    725,
                    732
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 29
                    },
                    "start": {
                      "column": 23,
                      "line": 29
                    }
                  }
                },
                "range": [
                  725,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 23,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              708,
              740
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                749,
                750
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 29
                },
                "start": {
                  "column": 47,
                  "line": 29
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              743,
              750
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 29
              },
              "start": {
                "column": 41,
                "line": 29
              }
            }
          },
          "range": [
            708,
            750
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        702,
        751
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "store2",
            "optional": false,
            "range": [
              759,
              765
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reducer",
                      "optional": false,
                      "range": [
                        787,
                        794
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 32
                        },
                        "start": {
                          "column": 2,
                          "line": 32
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counter1",
                            "optional": false,
                            "range": [
                              802,
                              810
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 33
                              },
                              "start": {
                                "column": 4,
                                "line": 33
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counterReducer1",
                            "optional": false,
                            "range": [
                              812,
                              827
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 33
                              },
                              "start": {
                                "column": 14,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            802,
                            827
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 33
                            },
                            "start": {
                              "column": 4,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        796,
                        832
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 34
                        },
                        "start": {
                          "column": 11,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      787,
                      832
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 34
                      },
                      "start": {
                        "column": 2,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  783,
                  835
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 35
                  },
                  "start": {
                    "column": 30,
                    "line": 31
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "configureStore",
              "optional": false,
              "range": [
                768,
                782
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              768,
              836
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 35
              },
              "start": {
                "column": 15,
                "line": 31
              }
            }
          },
          "range": [
            759,
            836
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        753,
        837
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        839,
        848
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
      "line": 1
    }
  },
  "hashbang": null
}
```
