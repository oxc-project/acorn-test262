__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    836
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
          413
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
            "type": "TSCallSignatureDeclaration",
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
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 6,
                      "line": 17
                    }
                  },
                  "range": [
                    371,
                    381
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "range": [
                        373,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      373,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
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
                  368,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 17
                  },
                  "start": {
                    "column": 3,
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
                      "column": 38,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  },
                  "range": [
                    387,
                    403
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        393,
                        403
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
                              394,
                              402
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
                          },
                          "range": [
                            394,
                            402
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
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 17
                        },
                        "start": {
                          "column": 28,
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
                        389,
                        393
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      389,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  383,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 17
                },
                "start": {
                  "column": 39,
                  "line": 17
                }
              },
              "range": [
                404,
                410
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  406,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 17
                  },
                  "start": {
                    "column": 41,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              367,
              411
            ],
            "loc": {
              "end": {
                "column": 46,
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
        413
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
          432,
          438
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
              462,
              500
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  480,
                  500
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        489,
                        499
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
                              490,
                              498
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
                            490,
                            498
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
                        481,
                        489
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
                      481,
                      499
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
                  464,
                  480
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
                464,
                500
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
            452,
            500
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
          502,
          526
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              516,
              526
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
                    517,
                    525
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
                  517,
                  525
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
              504,
              516
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
            504,
            526
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
          438,
          448
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
                439,
                447
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
              439,
              447
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
        415,
        527
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
          534,
          540
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
                557,
                564
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
                564,
                574
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "range": [
                    566,
                    574
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
                  566,
                  574
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
              557,
              575
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
                578,
                583
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
                584,
                608
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    598,
                    608
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
                          599,
                          607
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
                        599,
                        607
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
                    586,
                    598
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
                  586,
                  608
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
              578,
              609
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
          553,
          611
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
          540,
          550
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
                541,
                549
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
              541,
              549
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
        529,
        612
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
          631,
          644
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
              661,
              679
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  669,
                  679
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
                        670,
                        678
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
                      670,
                      678
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
                  663,
                  669
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
                663,
                679
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
            655,
            679
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
          680,
          686
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            682,
            686
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
          644,
          654
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
                645,
                653
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
              645,
              653
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
        614,
        687
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
                    726,
                    733
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
                          741,
                          746
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
                          748,
                          749
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
                        741,
                        749
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
                    735,
                    754
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
                  726,
                  754
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
                    758,
                    763
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
                              778,
                              783
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
                                    815,
                                    818
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
                                    819,
                                    824
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
                                  815,
                                  824
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
                                813,
                                824
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
                                    789,
                                    808
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
                                            793,
                                            798
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
                                            798,
                                            806
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "range": [
                                              800,
                                              806
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
                                          793,
                                          806
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
                                      791,
                                      808
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
                                  786,
                                  808
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
                              785,
                              824
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
                            778,
                            824
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
                        772,
                        829
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
                      765,
                      771
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
                    765,
                    830
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
                  758,
                  830
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
              722,
              833
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
            689,
            702
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
            702,
            721
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
                      705,
                      710
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
                      710,
                      718
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        712,
                        718
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
                    705,
                    718
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
                703,
                720
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
          689,
          834
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
        689,
        835
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
