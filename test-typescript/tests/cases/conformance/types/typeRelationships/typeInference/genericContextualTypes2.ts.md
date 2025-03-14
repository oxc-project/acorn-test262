__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    844
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LowInfer",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              23,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ],
        "range": [
          19,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          16
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "name": "PartialAssigner",
        "optional": false,
        "range": [
          33,
          48
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                101,
                111
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "range": [
                    103,
                    111
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
                  103,
                  111
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
              }
            },
            "range": [
              94,
              111
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 19,
              "line": 5
            },
            "start": {
              "column": 2,
              "line": 5
            }
          },
          "range": [
            114,
            131
          ],
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TKey",
                "optional": false,
                "range": [
                  126,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              "range": [
                126,
                130
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "range": [
                  117,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              },
              "range": [
                117,
                125
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              }
            },
            "range": [
              117,
              131
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 5,
                "line": 5
              }
            }
          }
        },
        "range": [
          90,
          131
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 62,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 3
          }
        },
        "range": [
          48,
          87
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                49,
                57
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              49,
              57
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
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
                  "name": "TContext",
                  "optional": false,
                  "range": [
                    78,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 3
                    },
                    "start": {
                      "column": 50,
                      "line": 3
                    }
                  }
                },
                "range": [
                  78,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 58,
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
                86
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 3
                },
                "start": {
                  "column": 44,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "range": [
                59,
                63
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              59,
              86
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        28,
        132
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 5
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
        "name": "PropertyAssigner",
        "optional": false,
        "range": [
          139,
          155
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
              "name": "TContext",
              "optional": false,
              "range": [
                184,
                192
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "range": [
              184,
              192
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "range": [
            178,
            192
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 8
            },
            "start": {
              "column": 8,
              "line": 8
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            173,
            174
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 8
            },
            "start": {
              "column": 3,
              "line": 8
            }
          }
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  211,
                  224
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "range": [
                        212,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 8
                        },
                        "start": {
                          "column": 42,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      212,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 8
                      },
                      "start": {
                        "column": 42,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        222,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 8
                        },
                        "start": {
                          "column": 52,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      222,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 8
                      },
                      "start": {
                        "column": 52,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 8
                  },
                  "start": {
                    "column": 41,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PartialAssigner",
                "optional": false,
                "range": [
                  196,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 26,
                    "line": 8
                  }
                }
              },
              "range": [
                196,
                224
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 8
                },
                "start": {
                  "column": 26,
                  "line": 8
                }
              }
            },
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
                    236,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 8
                    },
                    "start": {
                      "column": 66,
                      "line": 8
                    }
                  }
                },
                "range": [
                  236,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 8
                  },
                  "start": {
                    "column": 66,
                    "line": 8
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "range": [
                    227,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 8
                    },
                    "start": {
                      "column": 57,
                      "line": 8
                    }
                  }
                },
                "range": [
                  227,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 8
                  },
                  "start": {
                    "column": 57,
                    "line": 8
                  }
                }
              },
              "range": [
                227,
                238
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 8
                },
                "start": {
                  "column": 57,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            196,
            238
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 8
            },
            "start": {
              "column": 26,
              "line": 8
            }
          }
        },
        "range": [
          168,
          241
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 34,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 7
          },
          "start": {
            "column": 21,
            "line": 7
          }
        },
        "range": [
          155,
          165
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                156,
                164
              ],
              "loc": {
                "end": {
                  "column": 30,
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
              156,
              164
            ],
            "loc": {
              "end": {
                "column": 30,
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
        134,
        242
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
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
        "name": "Meta",
        "optional": false,
        "range": [
          249,
          253
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
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
              "name": "action",
              "optional": false,
              "range": [
                270,
                276
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
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
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              },
              "range": [
                276,
                301
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      },
                      "range": [
                        282,
                        292
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TContext",
                          "optional": false,
                          "range": [
                            284,
                            292
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 12
                            },
                            "start": {
                              "column": 16,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          284,
                          292
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      279,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 26,
                      "line": 12
                    }
                  },
                  "range": [
                    294,
                    301
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      297,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 29,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  278,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              270,
              301
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "range": [
          266,
          303
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 22,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        },
        "range": [
          253,
          263
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                254,
                262
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              254,
              262
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        244,
        303
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          338,
          421
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                342,
                346
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
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
                  "column": 23,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
                }
              },
              "range": [
                346,
                363
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"xstate.assign\"",
                  "value": "xstate.assign",
                  "range": [
                    348,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "range": [
                  348,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              342,
              364
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "exec",
              "optional": false,
              "range": [
                367,
                371
              ],
              "loc": {
                "end": {
                  "column": 6,
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
                  "column": 53,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              },
              "range": [
                371,
                418
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 17
                        },
                        "start": {
                          "column": 12,
                          "line": 17
                        }
                      },
                      "range": [
                        377,
                        387
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TContext",
                          "optional": false,
                          "range": [
                            379,
                            387
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          379,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      374,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 17
                        },
                        "start": {
                          "column": 28,
                          "line": 17
                        }
                      },
                      "range": [
                        393,
                        409
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            399,
                            409
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TContext",
                                "optional": false,
                                "range": [
                                  400,
                                  408
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                400,
                                408
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 17
                                },
                                "start": {
                                  "column": 35,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 17
                            },
                            "start": {
                              "column": 34,
                              "line": 17
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Meta",
                          "optional": false,
                          "range": [
                            395,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 17
                            },
                            "start": {
                              "column": 30,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          395,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 17
                          },
                          "start": {
                            "column": 30,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      389,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 17
                    },
                    "start": {
                      "column": 46,
                      "line": 17
                    }
                  },
                  "range": [
                    411,
                    418
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      414,
                      418
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 17
                      },
                      "start": {
                        "column": 49,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  373,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              367,
              419
            ],
            "loc": {
              "end": {
                "column": 54,
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
            "column": 33,
            "line": 15
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssignAction",
        "optional": false,
        "range": [
          315,
          327
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 15
          },
          "start": {
            "column": 22,
            "line": 15
          }
        },
        "range": [
          327,
          337
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                328,
                336
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 23,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              328,
              336
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        305,
        421
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
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
        "name": "assign",
        "optional": false,
        "range": [
          440,
          446
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "assignment",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 21
              }
            },
            "range": [
              470,
              508
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  488,
                  508
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        497,
                        507
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TContext",
                            "optional": false,
                            "range": [
                              498,
                              506
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 21
                              },
                              "start": {
                                "column": 40,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            498,
                            506
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 21
                            },
                            "start": {
                              "column": 40,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 21
                        },
                        "start": {
                          "column": 39,
                          "line": 21
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LowInfer",
                      "optional": false,
                      "range": [
                        489,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 21
                        },
                        "start": {
                          "column": 31,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      489,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 21
                      },
                      "start": {
                        "column": 31,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 21
                  },
                  "start": {
                    "column": 30,
                    "line": 21
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyAssigner",
                "optional": false,
                "range": [
                  472,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              },
              "range": [
                472,
                508
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 21
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              }
            }
          },
          "range": [
            460,
            508
          ],
          "loc": {
            "end": {
              "column": 50,
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
            "column": 25,
            "line": 22
          },
          "start": {
            "column": 1,
            "line": 22
          }
        },
        "range": [
          510,
          534
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              524,
              534
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "range": [
                    525,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                },
                "range": [
                  525,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 22
                  },
                  "start": {
                    "column": 16,
                    "line": 22
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 22
              },
              "start": {
                "column": 15,
                "line": 22
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AssignAction",
            "optional": false,
            "range": [
              512,
              524
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
              }
            }
          },
          "range": [
            512,
            534
          ],
          "loc": {
            "end": {
              "column": 25,
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
            "column": 33,
            "line": 20
          },
          "start": {
            "column": 23,
            "line": 20
          }
        },
        "range": [
          446,
          456
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                447,
                455
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              447,
              455
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 20
              },
              "start": {
                "column": 24,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        423,
        535
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 22
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
        "name": "Config",
        "optional": false,
        "range": [
          542,
          548
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
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
              "name": "context",
              "optional": false,
              "range": [
                565,
                572
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 25
                },
                "start": {
                  "column": 2,
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
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              },
              "range": [
                572,
                582
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "range": [
                    574,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 25
                    },
                    "start": {
                      "column": 11,
                      "line": 25
                    }
                  }
                },
                "range": [
                  574,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 25
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              565,
              583
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "entry",
              "optional": false,
              "range": [
                586,
                591
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 26
                },
                "start": {
                  "column": 2,
                  "line": 26
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
                  "column": 32,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              },
              "range": [
                592,
                616
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    606,
                    616
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TContext",
                        "optional": false,
                        "range": [
                          607,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 26
                          },
                          "start": {
                            "column": 23,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        607,
                        615
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 26
                        },
                        "start": {
                          "column": 23,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 26
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AssignAction",
                  "optional": false,
                  "range": [
                    594,
                    606
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "range": [
                  594,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              586,
              617
            ],
            "loc": {
              "end": {
                "column": 33,
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
          561,
          619
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 24,
            "line": 24
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 24
          },
          "start": {
            "column": 11,
            "line": 24
          }
        },
        "range": [
          548,
          558
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                549,
                557
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              549,
              557
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 12,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        537,
        620
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 24
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
        "name": "createMachine",
        "optional": false,
        "range": [
          639,
          652
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 29
          },
          "start": {
            "column": 17,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 29
              },
              "start": {
                "column": 47,
                "line": 29
              }
            },
            "range": [
              669,
              687
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  677,
                  687
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "range": [
                        678,
                        686
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 29
                        },
                        "start": {
                          "column": 56,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      678,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 29
                      },
                      "start": {
                        "column": 56,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 29
                  },
                  "start": {
                    "column": 55,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Config",
                "optional": false,
                "range": [
                  671,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 29
                  },
                  "start": {
                    "column": 49,
                    "line": 29
                  }
                }
              },
              "range": [
                671,
                687
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 29
                },
                "start": {
                  "column": 49,
                  "line": 29
                }
              }
            }
          },
          "range": [
            663,
            687
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 29
            },
            "start": {
              "column": 41,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 72,
            "line": 29
          },
          "start": {
            "column": 66,
            "line": 29
          }
        },
        "range": [
          688,
          694
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            690,
            694
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 29
            },
            "start": {
              "column": 68,
              "line": 29
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 29
          },
          "start": {
            "column": 30,
            "line": 29
          }
        },
        "range": [
          652,
          662
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                653,
                661
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 29
                },
                "start": {
                  "column": 31,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              653,
              661
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 29
              },
              "start": {
                "column": 31,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        622,
        695
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "context",
                  "optional": false,
                  "range": [
                    734,
                    741
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
                        "name": "count",
                        "optional": false,
                        "range": [
                          749,
                          754
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
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
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          756,
                          757
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
                      "range": [
                        749,
                        757
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
                    }
                  ],
                  "range": [
                    743,
                    762
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
                  734,
                  762
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
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "range": [
                    766,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 35
                    },
                    "start": {
                      "column": 2,
                      "line": 35
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
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
                            "name": "count",
                            "optional": false,
                            "range": [
                              786,
                              791
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
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "UpdateExpression",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ctx",
                                  "optional": false,
                                  "range": [
                                    823,
                                    826
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 36
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "count",
                                  "optional": false,
                                  "range": [
                                    827,
                                    832
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 36
                                    }
                                  }
                                },
                                "range": [
                                  823,
                                  832
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 36
                                  }
                                }
                              },
                              "operator": "++",
                              "prefix": true,
                              "range": [
                                821,
                                832
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 36
                                },
                                "start": {
                                  "column": 39,
                                  "line": 36
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
                                "name": "ctx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 36
                                    }
                                  },
                                  "range": [
                                    797,
                                    816
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
                                          "name": "count",
                                          "optional": false,
                                          "range": [
                                            801,
                                            806
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 24,
                                              "line": 36
                                            },
                                            "start": {
                                              "column": 19,
                                              "line": 36
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
                                              "line": 36
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 36
                                            }
                                          },
                                          "range": [
                                            806,
                                            814
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "range": [
                                              808,
                                              814
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 36
                                              },
                                              "start": {
                                                "column": 26,
                                                "line": 36
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          801,
                                          814
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 36
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 36
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      799,
                                      816
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 36
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  794,
                                  816
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 36
                                  }
                                }
                              }
                            ],
                            "range": [
                              793,
                              832
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 36
                              },
                              "start": {
                                "column": 11,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            786,
                            832
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 36
                            },
                            "start": {
                              "column": 4,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        780,
                        837
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 37
                        },
                        "start": {
                          "column": 16,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "range": [
                      773,
                      779
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 35
                      },
                      "start": {
                        "column": 9,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    773,
                    838
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 37
                    },
                    "start": {
                      "column": 9,
                      "line": 35
                    }
                  }
                },
                "range": [
                  766,
                  838
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 37
                  },
                  "start": {
                    "column": 2,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              730,
              841
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 38
              },
              "start": {
                "column": 33,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "range": [
            697,
            710
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            710,
            729
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "range": [
                      713,
                      718
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 31
                      },
                      "start": {
                        "column": 16,
                        "line": 31
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
                        "column": 29,
                        "line": 31
                      },
                      "start": {
                        "column": 21,
                        "line": 31
                      }
                    },
                    "range": [
                      718,
                      726
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        720,
                        726
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
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
                    713,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                711,
                728
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 31
                },
                "start": {
                  "column": 14,
                  "line": 31
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 31
            },
            "start": {
              "column": 13,
              "line": 31
            }
          }
        },
        "range": [
          697,
          842
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        697,
        843
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 39
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
