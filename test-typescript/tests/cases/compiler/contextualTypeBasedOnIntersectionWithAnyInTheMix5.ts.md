__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1229
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComputedGetter",
        "optional": false,
        "range": [
          5,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "oldValue",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              },
              "range": [
                35,
                38
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
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
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                },
                "range": [
                  37,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              26,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 44,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          },
          "range": [
            40,
            44
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 43,
                  "line": 1
                }
              }
            },
            "range": [
              43,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          }
        },
        "range": [
          25,
          44
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        },
        "range": [
          19,
          22
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
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              20,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        45
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "name": "ComputedOptions",
        "optional": false,
        "range": [
          51,
          66
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            75,
            104
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                76,
                82
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 30,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  98,
                  103
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      99,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 2
                      },
                      "start": {
                        "column": 53,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 2
                  },
                  "start": {
                    "column": 52,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedGetter",
                "optional": false,
                "range": [
                  84,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 2
                  },
                  "start": {
                    "column": 38,
                    "line": 2
                  }
                }
              },
              "range": [
                84,
                103
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 2
                },
                "start": {
                  "column": 38,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 2
            },
            "start": {
              "column": 29,
              "line": 2
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            69,
            75
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        },
        "range": [
          69,
          104
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "range": [
        46,
        105
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractComputedReturns",
        "optional": false,
        "range": [
          112,
          134
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
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
                170,
                171
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              170,
              171
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            164,
            171
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 10,
              "line": 5
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            157,
            160
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 5
            },
            "start": {
              "column": 3,
              "line": 5
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  176,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              },
              "range": [
                176,
                179
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
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
                  174,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "range": [
                174,
                175
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              174,
              180
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 5
              },
              "start": {
                "column": 20,
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
                    193,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 5
                    },
                    "start": {
                      "column": 39,
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
                      "column": 50,
                      "line": 5
                    },
                    "start": {
                      "column": 43,
                      "line": 5
                    }
                  },
                  "range": [
                    197,
                    204
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        199,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 5
                        },
                        "start": {
                          "column": 45,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      199,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 5
                      },
                      "start": {
                        "column": 45,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  190,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 5
                },
                "start": {
                  "column": 52,
                  "line": 5
                }
              },
              "range": [
                206,
                222
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
                    "name": "TReturn",
                    "optional": false,
                    "range": [
                      215,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 5
                      },
                      "start": {
                        "column": 61,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    215,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 5
                    },
                    "start": {
                      "column": 61,
                      "line": 5
                    }
                  }
                },
                "range": [
                  209,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 5
                  },
                  "start": {
                    "column": 55,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              189,
              222
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 5
              },
              "start": {
                "column": 35,
                "line": 5
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              243,
              248
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TReturn",
              "optional": false,
              "range": [
                229,
                236
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              }
            },
            "range": [
              229,
              236
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "range": [
            174,
            248
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 7
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        },
        "range": [
          152,
          251
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 45,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 4
          },
          "start": {
            "column": 27,
            "line": 4
          }
        },
        "range": [
          134,
          149
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSAnyKeyword",
              "range": [
                145,
                148
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 4
                },
                "start": {
                  "column": 38,
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
                135,
                136
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              135,
              148
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 28,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        107,
        252
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          315,
          346
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                319,
                323
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
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
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              },
              "range": [
                324,
                327
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    326,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "range": [
                  326,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              319,
              328
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "computed",
              "optional": false,
              "range": [
                331,
                339
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
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
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              },
              "range": [
                340,
                343
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    342,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "range": [
                  342,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 13,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              331,
              344
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 61,
            "line": 10
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptionsBase",
        "optional": false,
        "range": [
          264,
          284
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 60,
            "line": 10
          },
          "start": {
            "column": 30,
            "line": 10
          }
        },
        "range": [
          284,
          314
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                285,
                286
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 10
                },
                "start": {
                  "column": 31,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              285,
              286
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 31,
                "line": 10
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
                "name": "ComputedOptions",
                "optional": false,
                "range": [
                  298,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 10
                  },
                  "start": {
                    "column": 44,
                    "line": 10
                  }
                }
              },
              "range": [
                298,
                313
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 10
                },
                "start": {
                  "column": 44,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                288,
                289
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 10
                },
                "start": {
                  "column": 34,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              288,
              313
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 10
              },
              "start": {
                "column": 34,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        254,
        346
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
        "name": "ComponentPublicInstance",
        "optional": false,
        "range": [
          353,
          376
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
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
              "name": "D",
              "optional": false,
              "range": [
                419,
                420
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 15
                },
                "start": {
                  "column": 71,
                  "line": 15
                }
              }
            },
            "range": [
              419,
              420
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 15
              },
              "start": {
                "column": 71,
                "line": 15
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                447,
                450
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      448,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 25,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    448,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 25,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 24,
                  "line": 16
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtractComputedReturns",
              "optional": false,
              "range": [
                425,
                447
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
            "range": [
              425,
              450
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          }
        ],
        "range": [
          419,
          450
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 16
          },
          "start": {
            "column": 71,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 68,
            "line": 15
          },
          "start": {
            "column": 28,
            "line": 15
          }
        },
        "range": [
          376,
          416
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                381,
                383
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                377,
                378
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 29,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              377,
              383
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 15
              },
              "start": {
                "column": 29,
                "line": 15
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
                "name": "ComputedOptions",
                "optional": false,
                "range": [
                  395,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 15
                  },
                  "start": {
                    "column": 47,
                    "line": 15
                  }
                }
              },
              "range": [
                395,
                410
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 15
                },
                "start": {
                  "column": 47,
                  "line": 15
                }
              }
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                413,
                415
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 15
                },
                "start": {
                  "column": 65,
                  "line": 15
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                385,
                386
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 37,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              385,
              415
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 15
              },
              "start": {
                "column": 37,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        348,
        451
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "range": [
          458,
          474
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                546,
                552
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "range": [
                      547,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 25,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    547,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 25,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      550,
                      551
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 28,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    550,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 21
                    },
                    "start": {
                      "column": 28,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 21
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentOptionsBase",
              "optional": false,
              "range": [
                526,
                546
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              526,
              552
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                563,
                594
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      587,
                      593
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            588,
                            589
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 21
                            },
                            "start": {
                              "column": 66,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          588,
                          589
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 21
                          },
                          "start": {
                            "column": 66,
                            "line": 21
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            591,
                            592
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 21
                            },
                            "start": {
                              "column": 69,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          591,
                          592
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 21
                          },
                          "start": {
                            "column": 69,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 21
                      },
                      "start": {
                        "column": 65,
                        "line": 21
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentPublicInstance",
                    "optional": false,
                    "range": [
                      564,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 21
                      },
                      "start": {
                        "column": 42,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    564,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 21
                    },
                    "start": {
                      "column": 42,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 21
                },
                "start": {
                  "column": 41,
                  "line": 21
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "range": [
                555,
                563
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 21
                },
                "start": {
                  "column": 33,
                  "line": 21
                }
              }
            },
            "range": [
              555,
              594
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 21
              },
              "start": {
                "column": 33,
                "line": 21
              }
            }
          }
        ],
        "range": [
          526,
          594
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 21,
            "line": 18
          }
        },
        "range": [
          474,
          523
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                482,
                485
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                478,
                479
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 19
                },
                "start": {
                  "column": 2,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              478,
              485
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
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
                "name": "ComputedOptions",
                "optional": false,
                "range": [
                  499,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              },
              "range": [
                499,
                514
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                517,
                520
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                489,
                490
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              489,
              520
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        453,
        595
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          611,
          654
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixin",
              "optional": false,
              "range": [
                615,
                620
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 24
                },
                "start": {
                  "column": 2,
                  "line": 24
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mixin",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  },
                  "range": [
                    626,
                    644
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentOptions",
                      "optional": false,
                      "range": [
                        628,
                        644
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      628,
                      644
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  621,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 24
                },
                "start": {
                  "column": 32,
                  "line": 24
                }
              },
              "range": [
                645,
                651
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  647,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 24
                  },
                  "start": {
                    "column": 34,
                    "line": 24
                  }
                }
              }
            },
            "static": false,
            "range": [
              615,
              652
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 14,
            "line": 23
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "range": [
          607,
          610
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "range": [
        597,
        654
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          697,
          699
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 43,
            "line": 27
          },
          "start": {
            "column": 41,
            "line": 27
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
            "name": "Symbol",
            "optional": false,
            "range": [
              690,
              696
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 27
              },
              "start": {
                "column": 34,
                "line": 27
              }
            }
          },
          "range": [
            690,
            696
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 27
            },
            "start": {
              "column": 34,
              "line": 27
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InjectionKey",
        "optional": false,
        "range": [
          666,
          678
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 27
          },
          "start": {
            "column": 22,
            "line": 27
          }
        },
        "range": [
          678,
          681
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
                679,
                680
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              679,
              680
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 27
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        656,
        699
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          718,
          730
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_v",
              "optional": false,
              "range": [
                722,
                724
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 30
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
                  "column": 7,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              },
              "range": [
                724,
                727
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    726,
                    727
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 30
                    },
                    "start": {
                      "column": 6,
                      "line": 30
                    }
                  }
                },
                "range": [
                  726,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 30
                  },
                  "start": {
                    "column": 6,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              722,
              728
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 17,
            "line": 29
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "range": [
          711,
          714
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 29
          },
          "start": {
            "column": 10,
            "line": 29
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 29
          },
          "start": {
            "column": 13,
            "line": 29
          }
        },
        "range": [
          714,
          717
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
                715,
                716
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              715,
              716
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 29
              },
              "start": {
                "column": 14,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        701,
        730
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reactive",
        "optional": false,
        "range": [
          749,
          757
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 33
          },
          "start": {
            "column": 17,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 33
              },
              "start": {
                "column": 50,
                "line": 33
              }
            },
            "range": [
              782,
              785
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  784,
                  785
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 33
                  },
                  "start": {
                    "column": 52,
                    "line": 33
                  }
                }
              },
              "range": [
                784,
                785
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 33
                },
                "start": {
                  "column": 52,
                  "line": 33
                }
              }
            }
          },
          "range": [
            776,
            785
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 33
            },
            "start": {
              "column": 44,
              "line": 33
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 33
          },
          "start": {
            "column": 54,
            "line": 33
          }
        },
        "range": [
          786,
          794
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              791,
              794
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
                    792,
                    793
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 33
                    },
                    "start": {
                      "column": 60,
                      "line": 33
                    }
                  }
                },
                "range": [
                  792,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 33
                  },
                  "start": {
                    "column": 60,
                    "line": 33
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 33
              },
              "start": {
                "column": 59,
                "line": 33
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ref",
            "optional": false,
            "range": [
              788,
              791
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 33
              },
              "start": {
                "column": 56,
                "line": 33
              }
            }
          },
          "range": [
            788,
            794
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 33
            },
            "start": {
              "column": 56,
              "line": 33
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 33
          },
          "start": {
            "column": 25,
            "line": 33
          }
        },
        "range": [
          757,
          775
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                768,
                774
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 33
                },
                "start": {
                  "column": 36,
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
                758,
                759
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 33
                },
                "start": {
                  "column": 26,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              758,
              774
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 33
              },
              "start": {
                "column": 26,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        732,
        795
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          821,
          864
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                834,
                838
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 36
                },
                "start": {
                  "column": 15,
                  "line": 36
                }
              },
              "range": [
                838,
                861
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    848,
                    861
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          852,
                          860
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              853,
                              859
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 36
                              },
                              "start": {
                                "column": 30,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 36
                          },
                          "start": {
                            "column": 29,
                            "line": 36
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "range": [
                          849,
                          852
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 36
                          },
                          "start": {
                            "column": 26,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        849,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 36
                        },
                        "start": {
                          "column": 26,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 36
                    },
                    "start": {
                      "column": 25,
                      "line": 36
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    840,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 36
                    },
                    "start": {
                      "column": 17,
                      "line": 36
                    }
                  }
                },
                "range": [
                  840,
                  861
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
              }
            },
            "range": [
              825,
              862
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 36
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 24,
            "line": 35
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThemeInstance",
        "optional": false,
        "range": [
          807,
          820
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 35
          }
        }
      },
      "range": [
        797,
        864
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "ThemeSymbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 39
                },
                "start": {
                  "column": 25,
                  "line": 39
                }
              },
              "range": [
                891,
                920
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    905,
                    920
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThemeInstance",
                        "optional": false,
                        "range": [
                          906,
                          919
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 39
                          },
                          "start": {
                            "column": 40,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        906,
                        919
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 39
                        },
                        "start": {
                          "column": 40,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 39
                    },
                    "start": {
                      "column": 39,
                      "line": 39
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InjectionKey",
                  "optional": false,
                  "range": [
                    893,
                    905
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 39
                    },
                    "start": {
                      "column": 27,
                      "line": 39
                    }
                  }
                },
                "range": [
                  893,
                  920
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 39
                  },
                  "start": {
                    "column": 27,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              880,
              920
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 39
              },
              "start": {
                "column": 14,
                "line": 39
              }
            }
          },
          "init": null,
          "range": [
            880,
            920
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 39
            },
            "start": {
              "column": 14,
              "line": 39
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        866,
        921
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
        "name": "inject",
        "optional": false,
        "range": [
          940,
          946
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 41
          },
          "start": {
            "column": 17,
            "line": 41
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            },
            "range": [
              954,
              979
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentPublicInstance",
                "optional": false,
                "range": [
                  956,
                  979
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              },
              "range": [
                956,
                979
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              }
            }
          },
          "range": [
            950,
            979
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 42
            },
            "start": {
              "column": 2,
              "line": 42
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 43
              },
              "start": {
                "column": 5,
                "line": 43
              }
            },
            "range": [
              986,
              1014
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1000,
                      1005
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1001,
                          1004
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 43
                          },
                          "start": {
                            "column": 20,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 43
                      },
                      "start": {
                        "column": 19,
                        "line": 43
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InjectionKey",
                    "optional": false,
                    "range": [
                      988,
                      1000
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 43
                      },
                      "start": {
                        "column": 7,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    988,
                    1005
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 43
                    },
                    "start": {
                      "column": 7,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1008,
                    1014
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 43
                    },
                    "start": {
                      "column": 27,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                988,
                1014
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
            }
          },
          "range": [
            983,
            1014
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 43
            },
            "start": {
              "column": 2,
              "line": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 6,
            "line": 44
          },
          "start": {
            "column": 1,
            "line": 44
          }
        },
        "range": [
          1017,
          1022
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            1019,
            1022
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 44
            },
            "start": {
              "column": 3,
              "line": 44
            }
          }
        }
      },
      "range": [
        923,
        1023
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "app",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 46
                }
              },
              "range": [
                1042,
                1047
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "App",
                  "optional": false,
                  "range": [
                    1044,
                    1047
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 46
                    },
                    "start": {
                      "column": 19,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1044,
                  1047
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 46
                  },
                  "start": {
                    "column": 19,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1039,
              1047
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 46
              },
              "start": {
                "column": 14,
                "line": 46
              }
            }
          },
          "init": null,
          "range": [
            1039,
            1047
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 46
            },
            "start": {
              "column": 14,
              "line": 46
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1025,
        1048
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
                  "name": "computed",
                  "optional": false,
                  "range": [
                    1063,
                    1071
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 48
                    },
                    "start": {
                      "column": 2,
                      "line": 48
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
                        "name": "$vuetify",
                        "optional": false,
                        "range": [
                          1079,
                          1087
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 49
                          },
                          "start": {
                            "column": 4,
                            "line": 49
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          1087,
                          1218
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
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
                                          "name": "theme",
                                          "optional": false,
                                          "range": [
                                            1164,
                                            1169
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 13,
                                              "line": 52
                                            },
                                            "start": {
                                              "column": 8,
                                              "line": 52
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
                                              "type": "ThisExpression",
                                              "range": [
                                                1183,
                                                1187
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 31,
                                                  "line": 52
                                                },
                                                "start": {
                                                  "column": 27,
                                                  "line": 52
                                                }
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ThemeSymbol",
                                              "optional": false,
                                              "range": [
                                                1189,
                                                1200
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 44,
                                                  "line": 52
                                                },
                                                "start": {
                                                  "column": 33,
                                                  "line": 52
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "inject",
                                              "optional": false,
                                              "range": [
                                                1171,
                                                1177
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 21,
                                                  "line": 52
                                                },
                                                "start": {
                                                  "column": 15,
                                                  "line": 52
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "call",
                                              "optional": false,
                                              "range": [
                                                1178,
                                                1182
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 26,
                                                  "line": 52
                                                },
                                                "start": {
                                                  "column": 22,
                                                  "line": 52
                                                }
                                              }
                                            },
                                            "range": [
                                              1171,
                                              1182
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 26,
                                                "line": 52
                                              },
                                              "start": {
                                                "column": 15,
                                                "line": 52
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            1171,
                                            1201
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 45,
                                              "line": 52
                                            },
                                            "start": {
                                              "column": 15,
                                              "line": 52
                                            }
                                          }
                                        },
                                        "range": [
                                          1164,
                                          1201
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 45,
                                            "line": 52
                                          },
                                          "start": {
                                            "column": 8,
                                            "line": 52
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1154,
                                      1210
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 7,
                                        "line": 53
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 51
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "reactive",
                                  "optional": false,
                                  "range": [
                                    1145,
                                    1153
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 51
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  1145,
                                  1211
                                ],
                                "loc": {
                                  "end": {
                                    "column": 8,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 51
                                  }
                                }
                              },
                              "range": [
                                1138,
                                1212
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 53
                                },
                                "start": {
                                  "column": 6,
                                  "line": 51
                                }
                              }
                            }
                          ],
                          "range": [
                            1090,
                            1218
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 54
                            },
                            "start": {
                              "column": 15,
                              "line": 49
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 54
                          },
                          "start": {
                            "column": 12,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        1079,
                        1218
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 54
                        },
                        "start": {
                          "column": 4,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "range": [
                    1073,
                    1223
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1063,
                  1223
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 55
                  },
                  "start": {
                    "column": 2,
                    "line": 48
                  }
                }
              }
            ],
            "range": [
              1059,
              1226
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 56
              },
              "start": {
                "column": 10,
                "line": 47
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "range": [
              1049,
              1052
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 47
              },
              "start": {
                "column": 0,
                "line": 47
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixin",
            "optional": false,
            "range": [
              1053,
              1058
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "range": [
            1049,
            1058
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "optional": false,
        "range": [
          1049,
          1227
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        1049,
        1228
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 57
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
