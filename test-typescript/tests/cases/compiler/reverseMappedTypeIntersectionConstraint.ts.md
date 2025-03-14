__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4245
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateConfig",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
              "name": "entry",
              "optional": false,
              "range": [
                47,
                52
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
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
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                53,
                62
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TAction",
                  "optional": false,
                  "range": [
                    55,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "range": [
                  55,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              47,
              62
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "states",
              "optional": false,
              "range": [
                65,
                71
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
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
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              },
              "range": [
                72,
                110
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    80,
                    110
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        81,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          100,
                          109
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TAction",
                              "optional": false,
                              "range": [
                                101,
                                108
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 3
                                },
                                "start": {
                                  "column": 38,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              101,
                              108
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 3
                              },
                              "start": {
                                "column": 38,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 3
                          },
                          "start": {
                            "column": 37,
                            "line": 3
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StateConfig",
                        "optional": false,
                        "range": [
                          89,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 3
                          },
                          "start": {
                            "column": 26,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        89,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    74,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "range": [
                  74,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              65,
              111
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          43,
          113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 43,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          40
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                33,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAction",
              "optional": false,
              "range": [
                17,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        114
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 4
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
        "name": "StateSchema",
        "optional": false,
        "range": [
          121,
          132
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
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
              "name": "states",
              "optional": false,
              "range": [
                139,
                145
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
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
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              },
              "range": [
                146,
                175
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    154,
                    175
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        155,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 18,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StateSchema",
                        "optional": false,
                        "range": [
                          163,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 7
                          },
                          "start": {
                            "column": 26,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        163,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 7
                        },
                        "start": {
                          "column": 26,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    148,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                "range": [
                  148,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              139,
              176
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "range": [
          135,
          178
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 19,
            "line": 6
          }
        }
      },
      "range": [
        116,
        179
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
          198,
          211
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
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
                "column": 71,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            },
            "range": [
              349,
              412
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TConfig",
                        "optional": false,
                        "range": [
                          365,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 13
                          },
                          "start": {
                            "column": 24,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        365,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      359,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          392,
                          397
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              393,
                              396
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 13
                              },
                              "start": {
                                "column": 52,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 13
                          },
                          "start": {
                            "column": 51,
                            "line": 13
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StateConfig",
                        "optional": false,
                        "range": [
                          381,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 13
                          },
                          "start": {
                            "column": 40,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        381,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 13
                        },
                        "start": {
                          "column": 40,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      375,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 13
                      },
                      "start": {
                        "column": 34,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  359,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
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
                  354,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      408,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 13
                      },
                      "start": {
                        "column": 67,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    408,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 13
                    },
                    "start": {
                      "column": 67,
                      "line": 13
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "range": [
                      400,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 13
                      },
                      "start": {
                        "column": 59,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    400,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 13
                    },
                    "start": {
                      "column": 59,
                      "line": 13
                    }
                  }
                },
                "range": [
                  400,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 13
                  },
                  "start": {
                    "column": 59,
                    "line": 13
                  }
                }
              },
              "range": [
                351,
                412
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            }
          },
          "range": [
            343,
            412
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 13
            },
            "start": {
              "column": 2,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 92,
            "line": 13
          },
          "start": {
            "column": 72,
            "line": 13
          }
        },
        "range": [
          413,
          433
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAction",
                "optional": false,
                "range": [
                  416,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 13
                  },
                  "start": {
                    "column": 75,
                    "line": 13
                  }
                }
              },
              "range": [
                416,
                423
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 13
                },
                "start": {
                  "column": 75,
                  "line": 13
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TConfig",
                "optional": false,
                "range": [
                  425,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 13
                  },
                  "start": {
                    "column": 84,
                    "line": 13
                  }
                }
              },
              "range": [
                425,
                432
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 13
                },
                "start": {
                  "column": 84,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            415,
            433
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 13
            },
            "start": {
              "column": 74,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 30,
            "line": 10
          }
        },
        "range": [
          211,
          342
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
                  242,
                  251
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TAction",
                      "optional": false,
                      "range": [
                        243,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      243,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 30,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StateConfig",
                "optional": false,
                "range": [
                  231,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              },
              "range": [
                231,
                251
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TConfig",
              "optional": false,
              "range": [
                215,
                222
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              215,
              251
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                271,
                277
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 12
                }
              }
            },
            "default": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"entry\"",
                    "value": "entry",
                    "range": [
                      288,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 12
                      },
                      "start": {
                        "column": 35,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    288,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 12
                    },
                    "start": {
                      "column": 35,
                      "line": 12
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "range": [
                      280,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 27,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    280,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                },
                "range": [
                  280,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 12
                  }
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "range": [
                  305,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 12
                  },
                  "start": {
                    "column": 52,
                    "line": 12
                  }
                }
              },
              "falseType": {
                "type": "TSStringKeyword",
                "range": [
                  333,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 12
                  },
                  "start": {
                    "column": 80,
                    "line": 12
                  }
                }
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"entry\"",
                    "value": "entry",
                    "range": [
                      322,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 12
                      },
                      "start": {
                        "column": 69,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    322,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 12
                    },
                    "start": {
                      "column": 69,
                      "line": 12
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "range": [
                      314,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 12
                      },
                      "start": {
                        "column": 61,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    314,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 12
                    },
                    "start": {
                      "column": 61,
                      "line": 12
                    }
                  }
                },
                "range": [
                  314,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 12
                  },
                  "start": {
                    "column": 61,
                    "line": 12
                  }
                }
              },
              "range": [
                280,
                339
              ],
              "loc": {
                "end": {
                  "column": 86,
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
              "name": "TAction",
              "optional": false,
              "range": [
                255,
                262
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              255,
              339
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        181,
        434
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "inferredParams1",
            "optional": false,
            "range": [
              442,
              457
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
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
                      "name": "entry",
                      "optional": false,
                      "range": [
                        478,
                        483
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 16
                        },
                        "start": {
                          "column": 2,
                          "line": 16
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        485,
                        490
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 16
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      478,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 2,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "states",
                      "optional": false,
                      "range": [
                        494,
                        500
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 17
                        },
                        "start": {
                          "column": 2,
                          "line": 17
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              508,
                              509
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 18
                              },
                              "start": {
                                "column": 4,
                                "line": 18
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
                                  "name": "entry",
                                  "optional": false,
                                  "range": [
                                    519,
                                    524
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 11,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 19
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"bar\"",
                                  "value": "bar",
                                  "range": [
                                    526,
                                    531
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  519,
                                  531
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "range": [
                              511,
                              538
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 20
                              },
                              "start": {
                                "column": 7,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            508,
                            538
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 20
                            },
                            "start": {
                              "column": 4,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        502,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 21
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      494,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 21
                      },
                      "start": {
                        "column": 2,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        547,
                        552
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 22
                        },
                        "start": {
                          "column": 2,
                          "line": 22
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        554,
                        556
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 22
                        },
                        "start": {
                          "column": 9,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      547,
                      556
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 22
                      },
                      "start": {
                        "column": 2,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  474,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 23
                  },
                  "start": {
                    "column": 38,
                    "line": 15
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
                460,
                473
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              460,
              560
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 23
              },
              "start": {
                "column": 24,
                "line": 15
              }
            }
          },
          "range": [
            442,
            560
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        436,
        561
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 23
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
            "name": "inferredParams2",
            "optional": false,
            "range": [
              569,
              584
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
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
                      "name": "entry",
                      "optional": false,
                      "range": [
                        605,
                        610
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        612,
                        617
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 26
                        },
                        "start": {
                          "column": 9,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      605,
                      617
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 26
                      },
                      "start": {
                        "column": 2,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "states",
                      "optional": false,
                      "range": [
                        621,
                        627
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 27
                        },
                        "start": {
                          "column": 2,
                          "line": 27
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              635,
                              636
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 28
                              },
                              "start": {
                                "column": 4,
                                "line": 28
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
                                  "name": "entry",
                                  "optional": false,
                                  "range": [
                                    646,
                                    651
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 11,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 29
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"foo\"",
                                  "value": "foo",
                                  "range": [
                                    653,
                                    658
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 29
                                    }
                                  }
                                },
                                "range": [
                                  646,
                                  658
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 29
                                  }
                                }
                              }
                            ],
                            "range": [
                              638,
                              665
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 30
                              },
                              "start": {
                                "column": 7,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            635,
                            665
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 30
                            },
                            "start": {
                              "column": 4,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "range": [
                        629,
                        670
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 31
                        },
                        "start": {
                          "column": 10,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      621,
                      670
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 31
                      },
                      "start": {
                        "column": 2,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        674,
                        679
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
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
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        681,
                        683
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 32
                        },
                        "start": {
                          "column": 9,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      674,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 32
                      },
                      "start": {
                        "column": 2,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  601,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 33
                  },
                  "start": {
                    "column": 38,
                    "line": 25
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
                587,
                600
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              587,
              687
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          },
          "range": [
            569,
            687
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        563,
        688
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 33
        },
        "start": {
          "column": 0,
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
            "name": "checkType",
            "optional": false,
            "range": [
              791,
              800
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  872,
                  877
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 38
                  },
                  "start": {
                    "column": 87,
                    "line": 38
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 38
                      },
                      "start": {
                        "column": 46,
                        "line": 38
                      }
                    },
                    "range": [
                      831,
                      867
                    ],
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "constraint": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  847,
                                  848
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                847,
                                848
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 38
                                },
                                "start": {
                                  "column": 62,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              841,
                              848
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 38
                              },
                              "start": {
                                "column": 56,
                                "line": 38
                              }
                            }
                          },
                          {
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
                                  857,
                                  858
                                ],
                                "loc": {
                                  "end": {
                                    "column": 73,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 72,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                857,
                                858
                              ],
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 38
                                },
                                "start": {
                                  "column": 72,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              851,
                              858
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 38
                              },
                              "start": {
                                "column": 66,
                                "line": 38
                              }
                            }
                          }
                        ],
                        "range": [
                          841,
                          858
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 38
                          },
                          "start": {
                            "column": 56,
                            "line": 38
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          836,
                          837
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 38
                          },
                          "start": {
                            "column": 51,
                            "line": 38
                          }
                        }
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              863,
                              864
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 38
                              },
                              "start": {
                                "column": 78,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            863,
                            864
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 38
                            },
                            "start": {
                              "column": 78,
                              "line": 38
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              861,
                              862
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 38
                              },
                              "start": {
                                "column": 76,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            861,
                            862
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 38
                            },
                            "start": {
                              "column": 76,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          861,
                          865
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 38
                          },
                          "start": {
                            "column": 76,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        833,
                        867
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 38
                        },
                        "start": {
                          "column": 48,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    826,
                    867
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 38
                    },
                    "start": {
                      "column": 41,
                      "line": 38
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 38
                  },
                  "start": {
                    "column": 27,
                    "line": 38
                  }
                },
                "range": [
                  812,
                  825
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
                        "name": "T",
                        "optional": false,
                        "range": [
                          823,
                          824
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 38
                          },
                          "start": {
                            "column": 38,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        823,
                        824
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 38
                        },
                        "start": {
                          "column": 38,
                          "line": 38
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        813,
                        814
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 38
                        },
                        "start": {
                          "column": 28,
                          "line": 38
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      813,
                      824
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 38
                      },
                      "start": {
                        "column": 28,
                        "line": 38
                      }
                    }
                  }
                ]
              },
              "range": [
                812,
                877
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 38
                },
                "start": {
                  "column": 27,
                  "line": 38
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 38
                },
                "start": {
                  "column": 18,
                  "line": 38
                }
              },
              "range": [
                803,
                806
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
                      804,
                      805
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 38
                      },
                      "start": {
                        "column": 19,
                        "line": 38
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    804,
                    805
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 38
                    },
                    "start": {
                      "column": 19,
                      "line": 38
                    }
                  }
                }
              ]
            },
            "range": [
              803,
              877
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 38
              },
              "start": {
                "column": 18,
                "line": 38
              }
            }
          },
          "range": [
            791,
            877
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        785,
        878
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "checked",
            "optional": false,
            "range": [
              886,
              893
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        936,
                        937
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 41
                        },
                        "start": {
                          "column": 2,
                          "line": 41
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          939,
                          940
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 41
                          },
                          "start": {
                            "column": 5,
                            "line": 41
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          944,
                          950
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 41
                          },
                          "start": {
                            "column": 10,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        939,
                        950
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 41
                        },
                        "start": {
                          "column": 5,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      936,
                      950
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 41
                      },
                      "start": {
                        "column": 2,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        954,
                        955
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 42
                        },
                        "start": {
                          "column": 2,
                          "line": 42
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"y\"",
                      "value": "y",
                      "range": [
                        957,
                        960
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 42
                        },
                        "start": {
                          "column": 5,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      954,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 42
                      },
                      "start": {
                        "column": 2,
                        "line": 42
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        964,
                        965
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 43
                        },
                        "start": {
                          "column": 2,
                          "line": 43
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"z\"",
                      "value": "z",
                      "range": [
                        967,
                        970
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 43
                        },
                        "start": {
                          "column": 5,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      964,
                      970
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 43
                      },
                      "start": {
                        "column": 2,
                        "line": 43
                      }
                    }
                  }
                ],
                "range": [
                  932,
                  1016
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 44
                  },
                  "start": {
                    "column": 52,
                    "line": 40
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "checkType",
                "optional": false,
                "range": [
                  896,
                  905
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 40
                  },
                  "start": {
                    "column": 16,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  905,
                  929
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            907,
                            908
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 40
                            },
                            "start": {
                              "column": 27,
                              "line": 40
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
                              "column": 36,
                              "line": 40
                            },
                            "start": {
                              "column": 28,
                              "line": 40
                            }
                          },
                          "range": [
                            908,
                            916
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              910,
                              916
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 40
                              },
                              "start": {
                                "column": 30,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          907,
                          917
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 40
                          },
                          "start": {
                            "column": 27,
                            "line": 40
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            918,
                            919
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 40
                            },
                            "start": {
                              "column": 38,
                              "line": 40
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
                              "column": 47,
                              "line": 40
                            },
                            "start": {
                              "column": 39,
                              "line": 40
                            }
                          },
                          "range": [
                            919,
                            927
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              921,
                              927
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 40
                              },
                              "start": {
                                "column": 41,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          918,
                          927
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 40
                          },
                          "start": {
                            "column": 38,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "range": [
                      906,
                      928
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 40
                      },
                      "start": {
                        "column": 26,
                        "line": 40
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 40
                  },
                  "start": {
                    "column": 25,
                    "line": 40
                  }
                }
              },
              "range": [
                896,
                931
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 40
                },
                "start": {
                  "column": 16,
                  "line": 40
                }
              }
            },
            "optional": false,
            "range": [
              896,
              1017
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 44
              },
              "start": {
                "column": 16,
                "line": 40
              }
            }
          },
          "range": [
            886,
            1017
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        880,
        1018
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "checked",
        "optional": false,
        "range": [
          1020,
          1027
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1020,
        1028
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1140,
          1188
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "range": [
                1146,
                1151
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
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
                  "column": 17,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              },
              "range": [
                1151,
                1159
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1153,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 51
                  },
                  "start": {
                    "column": 11,
                    "line": 51
                  }
                }
              }
            },
            "range": [
              1146,
              1160
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "anotherField",
              "optional": false,
              "range": [
                1165,
                1177
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
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
                  "column": 24,
                  "line": 52
                },
                "start": {
                  "column": 16,
                  "line": 52
                }
              },
              "range": [
                1177,
                1185
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1179,
                  1185
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 52
                  },
                  "start": {
                    "column": 18,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              1165,
              1186
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 16,
            "line": 50
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stuff",
        "optional": false,
        "range": [
          1134,
          1139
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 50
          },
          "start": {
            "column": 10,
            "line": 50
          }
        }
      },
      "range": [
        1124,
        1188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 50
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      1358,
                      1359
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 59
                      },
                      "start": {
                        "column": 13,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1351,
                    1359
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 59
                    },
                    "start": {
                      "column": 6,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                1343,
                1365
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 11,
                  "line": 58
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        1325,
                        1326
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 57
                        },
                        "start": {
                          "column": 13,
                          "line": 57
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1330,
                          1331
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 57
                          },
                          "start": {
                            "column": 18,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1330,
                        1331
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 57
                        },
                        "start": {
                          "column": 18,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1325,
                      1331
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 57
                      },
                      "start": {
                        "column": 13,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1318,
                    1331
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 57
                    },
                    "start": {
                      "column": 6,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                1310,
                1337
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 58
                },
                "start": {
                  "column": 28,
                  "line": 56
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      1289,
                      1293
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 56
                      },
                      "start": {
                        "column": 7,
                        "line": 56
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      1294,
                      1300
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1289,
                    1300
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 7,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "range": [
                  1289,
                  1302
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 56
                  },
                  "start": {
                    "column": 7,
                    "line": 56
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  1305,
                  1308
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 56
                  },
                  "start": {
                    "column": 23,
                    "line": 56
                  }
                }
              },
              "range": [
                1289,
                1308
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 56
                },
                "start": {
                  "column": 7,
                  "line": 56
                }
              }
            },
            "range": [
              1286,
              1365
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1280,
          1367
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 90,
            "line": 55
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuffWithStuff",
        "optional": false,
        "range": [
          1199,
          1215
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 84,
                "line": 55
              },
              "start": {
                "column": 44,
                "line": 55
              }
            },
            "range": [
              1234,
              1274
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          1250,
                          1251
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 55
                          },
                          "start": {
                            "column": 60,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1250,
                        1251
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 55
                        },
                        "start": {
                          "column": 60,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1244,
                      1251
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 55
                      },
                      "start": {
                        "column": 54,
                        "line": 55
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Stuff",
                        "optional": false,
                        "range": [
                          1260,
                          1265
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 55
                          },
                          "start": {
                            "column": 70,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1260,
                        1265
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 55
                        },
                        "start": {
                          "column": 70,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1254,
                      1265
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 55
                      },
                      "start": {
                        "column": 64,
                        "line": 55
                      }
                    }
                  }
                ],
                "range": [
                  1244,
                  1265
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 55
                  },
                  "start": {
                    "column": 54,
                    "line": 55
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1239,
                  1240
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 55
                  },
                  "start": {
                    "column": 49,
                    "line": 55
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      1270,
                      1271
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 55
                      },
                      "start": {
                        "column": 80,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1270,
                    1271
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 55
                    },
                    "start": {
                      "column": 80,
                      "line": 55
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
                      1268,
                      1269
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 55
                      },
                      "start": {
                        "column": 78,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1268,
                    1269
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 55
                    },
                    "start": {
                      "column": 78,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1268,
                  1272
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 55
                  },
                  "start": {
                    "column": 78,
                    "line": 55
                  }
                }
              },
              "range": [
                1236,
                1274
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 55
                },
                "start": {
                  "column": 46,
                  "line": 55
                }
              }
            }
          },
          "range": [
            1233,
            1274
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 55
            },
            "start": {
              "column": 43,
              "line": 55
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 89,
            "line": 55
          },
          "start": {
            "column": 86,
            "line": 55
          }
        },
        "range": [
          1276,
          1279
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1278,
              1279
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 55
              },
              "start": {
                "column": 88,
                "line": 55
              }
            }
          },
          "range": [
            1278,
            1279
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 55
            },
            "start": {
              "column": 88,
              "line": 55
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 55
          },
          "start": {
            "column": 25,
            "line": 55
          }
        },
        "range": [
          1215,
          1232
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
                "name": "Stuff",
                "optional": false,
                "range": [
                  1226,
                  1231
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 55
                  },
                  "start": {
                    "column": 36,
                    "line": 55
                  }
                }
              },
              "range": [
                1226,
                1231
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 55
                },
                "start": {
                  "column": 36,
                  "line": 55
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
                1216,
                1217
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 55
                },
                "start": {
                  "column": 26,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              1216,
              1231
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 55
              },
              "start": {
                "column": 26,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        1190,
        1367
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 55
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
                  "name": "field",
                  "optional": false,
                  "range": [
                    1388,
                    1393
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 63
                    },
                    "start": {
                      "column": 19,
                      "line": 63
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1395,
                    1396
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 63
                    },
                    "start": {
                      "column": 26,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1388,
                  1396
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 63
                  },
                  "start": {
                    "column": 19,
                    "line": 63
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherField",
                  "optional": false,
                  "range": [
                    1398,
                    1410
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 63
                    },
                    "start": {
                      "column": 29,
                      "line": 63
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    1412,
                    1415
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 63
                    },
                    "start": {
                      "column": 43,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1398,
                  1415
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 63
                  },
                  "start": {
                    "column": 29,
                    "line": 63
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "range": [
                    1417,
                    1422
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 63
                    },
                    "start": {
                      "column": 48,
                      "line": 63
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    1424,
                    1427
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 63
                    },
                    "start": {
                      "column": 55,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1417,
                  1427
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 63
                  },
                  "start": {
                    "column": 48,
                    "line": 63
                  }
                }
              }
            ],
            "range": [
              1386,
              1429
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 63
              },
              "start": {
                "column": 17,
                "line": 63
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doStuffWithStuff",
          "optional": false,
          "range": [
            1369,
            1385
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
            }
          }
        },
        "optional": false,
        "range": [
          1369,
          1430
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 63
          },
          "start": {
            "column": 0,
            "line": 63
          }
        }
      },
      "range": [
        1369,
        1430
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "range": [
                      1612,
                      1615
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 69
                      },
                      "start": {
                        "column": 13,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1605,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 69
                    },
                    "start": {
                      "column": 6,
                      "line": 69
                    }
                  }
                }
              ],
              "range": [
                1597,
                1621
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 11,
                  "line": 68
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "range": [
                        1575,
                        1578
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 67
                        },
                        "start": {
                          "column": 13,
                          "line": 67
                        }
                      }
                    },
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
                            1582,
                            1583
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 67
                            },
                            "start": {
                              "column": 20,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1582,
                          1583
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 67
                          },
                          "start": {
                            "column": 20,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1582,
                        1585
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 67
                        },
                        "start": {
                          "column": 20,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1575,
                      1585
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 67
                      },
                      "start": {
                        "column": 13,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1568,
                    1585
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 67
                    },
                    "start": {
                      "column": 6,
                      "line": 67
                    }
                  }
                }
              ],
              "range": [
                1560,
                1591
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 28,
                  "line": 66
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      1539,
                      1543
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 66
                      },
                      "start": {
                        "column": 7,
                        "line": 66
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      1544,
                      1550
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 66
                      },
                      "start": {
                        "column": 12,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1539,
                    1550
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 66
                    },
                    "start": {
                      "column": 7,
                      "line": 66
                    }
                  }
                },
                "optional": false,
                "range": [
                  1539,
                  1552
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 66
                  },
                  "start": {
                    "column": 7,
                    "line": 66
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  1555,
                  1558
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 66
                  },
                  "start": {
                    "column": 23,
                    "line": 66
                  }
                }
              },
              "range": [
                1539,
                1558
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 66
                },
                "start": {
                  "column": 7,
                  "line": 66
                }
              }
            },
            "range": [
              1536,
              1621
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          1530,
          1623
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 98,
            "line": 65
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuffWithStuffArr",
        "optional": false,
        "range": [
          1441,
          1460
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 65
          },
          "start": {
            "column": 9,
            "line": 65
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 91,
                "line": 65
              },
              "start": {
                "column": 49,
                "line": 65
              }
            },
            "range": [
              1481,
              1523
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
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
                            1497,
                            1498
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 65
                            },
                            "start": {
                              "column": 65,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1497,
                          1498
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 65
                          },
                          "start": {
                            "column": 65,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1491,
                        1498
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 65
                        },
                        "start": {
                          "column": 59,
                          "line": 65
                        }
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Stuff",
                          "optional": false,
                          "range": [
                            1507,
                            1512
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 65
                            },
                            "start": {
                              "column": 75,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1507,
                          1512
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 65
                          },
                          "start": {
                            "column": 75,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1501,
                        1512
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 65
                        },
                        "start": {
                          "column": 69,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "range": [
                    1491,
                    1512
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 65
                    },
                    "start": {
                      "column": 59,
                      "line": 65
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1486,
                    1487
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 65
                    },
                    "start": {
                      "column": 54,
                      "line": 65
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        1517,
                        1518
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 65
                        },
                        "start": {
                          "column": 85,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1517,
                      1518
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 65
                      },
                      "start": {
                        "column": 85,
                        "line": 65
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
                        1515,
                        1516
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 65
                        },
                        "start": {
                          "column": 83,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1515,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 65
                      },
                      "start": {
                        "column": 83,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1515,
                    1519
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 65
                    },
                    "start": {
                      "column": 83,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1483,
                  1521
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 65
                  },
                  "start": {
                    "column": 51,
                    "line": 65
                  }
                }
              },
              "range": [
                1483,
                1523
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 65
                },
                "start": {
                  "column": 51,
                  "line": 65
                }
              }
            }
          },
          "range": [
            1478,
            1523
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 65
            },
            "start": {
              "column": 46,
              "line": 65
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 97,
            "line": 65
          },
          "start": {
            "column": 92,
            "line": 65
          }
        },
        "range": [
          1524,
          1529
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
                1526,
                1527
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 65
                },
                "start": {
                  "column": 94,
                  "line": 65
                }
              }
            },
            "range": [
              1526,
              1527
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 65
              },
              "start": {
                "column": 94,
                "line": 65
              }
            }
          },
          "range": [
            1526,
            1529
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 65
            },
            "start": {
              "column": 94,
              "line": 65
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 45,
            "line": 65
          },
          "start": {
            "column": 28,
            "line": 65
          }
        },
        "range": [
          1460,
          1477
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
                "name": "Stuff",
                "optional": false,
                "range": [
                  1471,
                  1476
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 65
                  },
                  "start": {
                    "column": 39,
                    "line": 65
                  }
                }
              },
              "range": [
                1471,
                1476
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 65
                },
                "start": {
                  "column": 39,
                  "line": 65
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
                1461,
                1462
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 65
                },
                "start": {
                  "column": 29,
                  "line": 65
                }
              }
            },
            "out": false,
            "range": [
              1461,
              1476
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 65
              },
              "start": {
                "column": 29,
                "line": 65
              }
            }
          }
        ]
      },
      "range": [
        1432,
        1623
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 65
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
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "field",
                      "optional": false,
                      "range": [
                        1653,
                        1658
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 74
                        },
                        "start": {
                          "column": 6,
                          "line": 74
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1660,
                        1661
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 74
                        },
                        "start": {
                          "column": 13,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1653,
                      1661
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 74
                      },
                      "start": {
                        "column": 6,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anotherField",
                      "optional": false,
                      "range": [
                        1663,
                        1675
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 74
                        },
                        "start": {
                          "column": 16,
                          "line": 74
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        1677,
                        1680
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 74
                        },
                        "start": {
                          "column": 30,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1663,
                      1680
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 74
                      },
                      "start": {
                        "column": 16,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        1682,
                        1687
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 74
                        },
                        "start": {
                          "column": 35,
                          "line": 74
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        1689,
                        1692
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 74
                        },
                        "start": {
                          "column": 42,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1682,
                      1692
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 74
                      },
                      "start": {
                        "column": 35,
                        "line": 74
                      }
                    }
                  }
                ],
                "range": [
                  1651,
                  1694
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              }
            ],
            "range": [
              1645,
              1697
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 75
              },
              "start": {
                "column": 20,
                "line": 73
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doStuffWithStuffArr",
          "optional": false,
          "range": [
            1625,
            1644
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
            }
          }
        },
        "optional": false,
        "range": [
          1625,
          1698
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 75
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        1625,
        1698
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XNumber",
        "optional": false,
        "range": [
          1799,
          1806
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 79
          },
          "start": {
            "column": 5,
            "line": 79
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
              "name": "x",
              "optional": false,
              "range": [
                1811,
                1812
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 79
                },
                "start": {
                  "column": 17,
                  "line": 79
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
                  "column": 26,
                  "line": 79
                },
                "start": {
                  "column": 18,
                  "line": 79
                }
              },
              "range": [
                1812,
                1820
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1814,
                  1820
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 79
                  },
                  "start": {
                    "column": 20,
                    "line": 79
                  }
                }
              }
            },
            "range": [
              1811,
              1820
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 79
              },
              "start": {
                "column": 17,
                "line": 79
              }
            }
          }
        ],
        "range": [
          1809,
          1822
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 79
          },
          "start": {
            "column": 15,
            "line": 79
          }
        }
      },
      "range": [
        1794,
        1822
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
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
        "name": "foo",
        "optional": false,
        "range": [
          1841,
          1844
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 81
          },
          "start": {
            "column": 17,
            "line": 81
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 85,
                "line": 81
              },
              "start": {
                "column": 45,
                "line": 81
              }
            },
            "range": [
              1869,
              1909
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          1884,
                          1885
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 81
                          },
                          "start": {
                            "column": 60,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        1884,
                        1885
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 81
                        },
                        "start": {
                          "column": 60,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1878,
                      1885
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 81
                      },
                      "start": {
                        "column": 54,
                        "line": 81
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XNumber",
                        "optional": false,
                        "range": [
                          1894,
                          1901
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 81
                          },
                          "start": {
                            "column": 70,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        1894,
                        1901
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 81
                        },
                        "start": {
                          "column": 70,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1888,
                      1901
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 81
                      },
                      "start": {
                        "column": 64,
                        "line": 81
                      }
                    }
                  }
                ],
                "range": [
                  1878,
                  1901
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 81
                  },
                  "start": {
                    "column": 54,
                    "line": 81
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1873,
                  1874
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 81
                  },
                  "start": {
                    "column": 49,
                    "line": 81
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      1906,
                      1907
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 81
                      },
                      "start": {
                        "column": 82,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1906,
                    1907
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 81
                    },
                    "start": {
                      "column": 82,
                      "line": 81
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
                      1904,
                      1905
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 81
                      },
                      "start": {
                        "column": 80,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1904,
                    1905
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 81
                    },
                    "start": {
                      "column": 80,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1904,
                  1908
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 81
                  },
                  "start": {
                    "column": 80,
                    "line": 81
                  }
                }
              },
              "range": [
                1871,
                1909
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 81
                },
                "start": {
                  "column": 47,
                  "line": 81
                }
              }
            }
          },
          "range": [
            1864,
            1909
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 81
            },
            "start": {
              "column": 40,
              "line": 81
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 92,
            "line": 81
          },
          "start": {
            "column": 86,
            "line": 81
          }
        },
        "range": [
          1910,
          1916
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1912,
            1916
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 81
            },
            "start": {
              "column": 88,
              "line": 81
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 81
          },
          "start": {
            "column": 20,
            "line": 81
          }
        },
        "range": [
          1844,
          1863
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
                "name": "XNumber",
                "optional": false,
                "range": [
                  1855,
                  1862
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 81
                  },
                  "start": {
                    "column": 31,
                    "line": 81
                  }
                }
              },
              "range": [
                1855,
                1862
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 81
                },
                "start": {
                  "column": 31,
                  "line": 81
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
                1845,
                1846
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 81
                },
                "start": {
                  "column": 21,
                  "line": 81
                }
              }
            },
            "out": false,
            "range": [
              1845,
              1862
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 81
              },
              "start": {
                "column": 21,
                "line": 81
              }
            }
          }
        ]
      },
      "range": [
        1824,
        1917
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "range": [
                    1978,
                    1983
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 84
                    },
                    "start": {
                      "column": 13,
                      "line": 84
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  1974,
                  1977
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 84
                  },
                  "start": {
                    "column": 9,
                    "line": 84
                  }
                }
              },
              "optional": false,
              "range": [
                1974,
                1984
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 84
                },
                "start": {
                  "column": 9,
                  "line": 84
                }
              }
            },
            "range": [
              1967,
              1985
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 84
              },
              "start": {
                "column": 2,
                "line": 84
              }
            }
          }
        ],
        "range": [
          1963,
          2047
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 44,
            "line": 83
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          1928,
          1931
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 83
          },
          "start": {
            "column": 9,
            "line": 83
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 83
              },
              "start": {
                "column": 18,
                "line": 83
              }
            },
            "range": [
              1937,
              1961
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      1940,
                      1941
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 83
                      },
                      "start": {
                        "column": 21,
                        "line": 83
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
                        "column": 30,
                        "line": 83
                      },
                      "start": {
                        "column": 22,
                        "line": 83
                      }
                    },
                    "range": [
                      1941,
                      1949
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1943,
                        1949
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 83
                        },
                        "start": {
                          "column": 24,
                          "line": 83
                        }
                      }
                    }
                  },
                  "range": [
                    1940,
                    1950
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 83
                    },
                    "start": {
                      "column": 21,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1951,
                      1952
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 83
                      },
                      "start": {
                        "column": 32,
                        "line": 83
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
                        "column": 41,
                        "line": 83
                      },
                      "start": {
                        "column": 33,
                        "line": 83
                      }
                    },
                    "range": [
                      1952,
                      1960
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1954,
                        1960
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 83
                        },
                        "start": {
                          "column": 35,
                          "line": 83
                        }
                      }
                    }
                  },
                  "range": [
                    1951,
                    1960
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 83
                    },
                    "start": {
                      "column": 32,
                      "line": 83
                    }
                  }
                }
              ],
              "range": [
                1939,
                1961
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 83
                },
                "start": {
                  "column": 20,
                  "line": 83
                }
              }
            }
          },
          "range": [
            1932,
            1961
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 83
            },
            "start": {
              "column": 13,
              "line": 83
            }
          }
        }
      ],
      "range": [
        1919,
        2047
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 83
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2054,
                    2055
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 87
                    },
                    "start": {
                      "column": 5,
                      "line": 87
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2057,
                    2058
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2054,
                  2058
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 87
                  },
                  "start": {
                    "column": 5,
                    "line": 87
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    2060,
                    2061
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 87
                    },
                    "start": {
                      "column": 11,
                      "line": 87
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    2063,
                    2068
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 87
                    },
                    "start": {
                      "column": 14,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2060,
                  2068
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 87
                  },
                  "start": {
                    "column": 11,
                    "line": 87
                  }
                }
              }
            ],
            "range": [
              2053,
              2069
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            2049,
            2052
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 87
            },
            "start": {
              "column": 0,
              "line": 87
            }
          }
        },
        "optional": false,
        "range": [
          2049,
          2070
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 87
          },
          "start": {
            "column": 0,
            "line": 87
          }
        }
      },
      "range": [
        2049,
        2071
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
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
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2082,
                          2083
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 89
                          },
                          "start": {
                            "column": 9,
                            "line": 89
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2085,
                          2086
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 89
                          },
                          "start": {
                            "column": 12,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        2082,
                        2086
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 89
                        },
                        "start": {
                          "column": 9,
                          "line": 89
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          2088,
                          2089
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 89
                          },
                          "start": {
                            "column": 15,
                            "line": 89
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "'foo'",
                        "value": "foo",
                        "range": [
                          2091,
                          2096
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 89
                          },
                          "start": {
                            "column": 18,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        2088,
                        2096
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 89
                        },
                        "start": {
                          "column": 15,
                          "line": 89
                        }
                      }
                    }
                  ],
                  "range": [
                    2081,
                    2097
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                },
                "range": [
                  2078,
                  2097
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 89
                  },
                  "start": {
                    "column": 5,
                    "line": 89
                  }
                }
              }
            ],
            "range": [
              2077,
              2098
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            2073,
            2076
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 89
            },
            "start": {
              "column": 0,
              "line": 89
            }
          }
        },
        "optional": false,
        "range": [
          2073,
          2099
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 89
          },
          "start": {
            "column": 0,
            "line": 89
          }
        }
      },
      "range": [
        2073,
        2100
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoErrWithOptProps",
        "optional": false,
        "range": [
          2261,
          2278
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 93
          },
          "start": {
            "column": 5,
            "line": 93
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
              "name": "x",
              "optional": false,
              "range": [
                2283,
                2284
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 93
                },
                "start": {
                  "column": 27,
                  "line": 93
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
                  "column": 36,
                  "line": 93
                },
                "start": {
                  "column": 28,
                  "line": 93
                }
              },
              "range": [
                2284,
                2292
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2286,
                  2292
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 93
                  },
                  "start": {
                    "column": 30,
                    "line": 93
                  }
                }
              }
            },
            "range": [
              2283,
              2293
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 93
              },
              "start": {
                "column": 27,
                "line": 93
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                2294,
                2295
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 93
                },
                "start": {
                  "column": 38,
                  "line": 93
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
                  "column": 48,
                  "line": 93
                },
                "start": {
                  "column": 40,
                  "line": 93
                }
              },
              "range": [
                2296,
                2304
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2298,
                  2304
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 93
                  },
                  "start": {
                    "column": 42,
                    "line": 93
                  }
                }
              }
            },
            "range": [
              2294,
              2304
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 93
              },
              "start": {
                "column": 38,
                "line": 93
              }
            }
          }
        ],
        "range": [
          2281,
          2306
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 93
          },
          "start": {
            "column": 25,
            "line": 93
          }
        }
      },
      "range": [
        2256,
        2306
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
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
        "name": "baz",
        "optional": false,
        "range": [
          2325,
          2328
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 95
          },
          "start": {
            "column": 17,
            "line": 95
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 105,
                "line": 95
              },
              "start": {
                "column": 55,
                "line": 95
              }
            },
            "range": [
              2363,
              2413
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          2378,
                          2379
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 95
                          },
                          "start": {
                            "column": 70,
                            "line": 95
                          }
                        }
                      },
                      "range": [
                        2378,
                        2379
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 95
                        },
                        "start": {
                          "column": 70,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      2372,
                      2379
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 95
                      },
                      "start": {
                        "column": 64,
                        "line": 95
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoErrWithOptProps",
                        "optional": false,
                        "range": [
                          2388,
                          2405
                        ],
                        "loc": {
                          "end": {
                            "column": 97,
                            "line": 95
                          },
                          "start": {
                            "column": 80,
                            "line": 95
                          }
                        }
                      },
                      "range": [
                        2388,
                        2405
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 95
                        },
                        "start": {
                          "column": 80,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      2382,
                      2405
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 95
                      },
                      "start": {
                        "column": 74,
                        "line": 95
                      }
                    }
                  }
                ],
                "range": [
                  2372,
                  2405
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 95
                  },
                  "start": {
                    "column": 64,
                    "line": 95
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  2367,
                  2368
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 95
                  },
                  "start": {
                    "column": 59,
                    "line": 95
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      2410,
                      2411
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 95
                      },
                      "start": {
                        "column": 102,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2410,
                    2411
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 95
                    },
                    "start": {
                      "column": 102,
                      "line": 95
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
                      2408,
                      2409
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 95
                      },
                      "start": {
                        "column": 100,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2408,
                    2409
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 95
                    },
                    "start": {
                      "column": 100,
                      "line": 95
                    }
                  }
                },
                "range": [
                  2408,
                  2412
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 95
                  },
                  "start": {
                    "column": 100,
                    "line": 95
                  }
                }
              },
              "range": [
                2365,
                2413
              ],
              "loc": {
                "end": {
                  "column": 105,
                  "line": 95
                },
                "start": {
                  "column": 57,
                  "line": 95
                }
              }
            }
          },
          "range": [
            2358,
            2413
          ],
          "loc": {
            "end": {
              "column": 105,
              "line": 95
            },
            "start": {
              "column": 50,
              "line": 95
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 112,
            "line": 95
          },
          "start": {
            "column": 106,
            "line": 95
          }
        },
        "range": [
          2414,
          2420
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            2416,
            2420
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 95
            },
            "start": {
              "column": 108,
              "line": 95
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 95
          },
          "start": {
            "column": 20,
            "line": 95
          }
        },
        "range": [
          2328,
          2357
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
                "name": "NoErrWithOptProps",
                "optional": false,
                "range": [
                  2339,
                  2356
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 95
                  },
                  "start": {
                    "column": 31,
                    "line": 95
                  }
                }
              },
              "range": [
                2339,
                2356
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 95
                },
                "start": {
                  "column": 31,
                  "line": 95
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
                2329,
                2330
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 95
                },
                "start": {
                  "column": 21,
                  "line": 95
                }
              }
            },
            "out": false,
            "range": [
              2329,
              2356
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 95
              },
              "start": {
                "column": 21,
                "line": 95
              }
            }
          }
        ]
      },
      "range": [
        2308,
        2421
      ],
      "loc": {
        "end": {
          "column": 113,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2428,
                    2429
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 97
                    },
                    "start": {
                      "column": 5,
                      "line": 97
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2431,
                    2432
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 97
                    },
                    "start": {
                      "column": 8,
                      "line": 97
                    }
                  }
                },
                "range": [
                  2428,
                  2432
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 97
                  },
                  "start": {
                    "column": 5,
                    "line": 97
                  }
                }
              }
            ],
            "range": [
              2427,
              2433
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "range": [
            2423,
            2426
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 97
            },
            "start": {
              "column": 0,
              "line": 97
            }
          }
        },
        "optional": false,
        "range": [
          2423,
          2434
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 97
          },
          "start": {
            "column": 0,
            "line": 97
          }
        }
      },
      "range": [
        2423,
        2435
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2441,
                    2442
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 98
                    },
                    "start": {
                      "column": 5,
                      "line": 98
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2444,
                    2445
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 98
                    },
                    "start": {
                      "column": 8,
                      "line": 98
                    }
                  }
                },
                "range": [
                  2441,
                  2445
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 98
                  },
                  "start": {
                    "column": 5,
                    "line": 98
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    2447,
                    2448
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 98
                    },
                    "start": {
                      "column": 11,
                      "line": 98
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    2450,
                    2453
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 98
                    },
                    "start": {
                      "column": 14,
                      "line": 98
                    }
                  }
                },
                "range": [
                  2447,
                  2453
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 98
                  },
                  "start": {
                    "column": 11,
                    "line": 98
                  }
                }
              }
            ],
            "range": [
              2440,
              2454
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "range": [
            2436,
            2439
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 98
            },
            "start": {
              "column": 0,
              "line": 98
            }
          }
        },
        "optional": false,
        "range": [
          2436,
          2455
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 98
          },
          "start": {
            "column": 0,
            "line": 98
          }
        }
      },
      "range": [
        2436,
        2456
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2462,
                    2463
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 99
                    },
                    "start": {
                      "column": 5,
                      "line": 99
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2465,
                    2466
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 99
                    }
                  }
                },
                "range": [
                  2462,
                  2466
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 99
                  },
                  "start": {
                    "column": 5,
                    "line": 99
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    2468,
                    2469
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 99
                    },
                    "start": {
                      "column": 11,
                      "line": 99
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    2471,
                    2476
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 99
                    },
                    "start": {
                      "column": 14,
                      "line": 99
                    }
                  }
                },
                "range": [
                  2468,
                  2476
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 99
                  },
                  "start": {
                    "column": 11,
                    "line": 99
                  }
                }
              }
            ],
            "range": [
              2461,
              2477
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "range": [
            2457,
            2460
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 99
            },
            "start": {
              "column": 0,
              "line": 99
            }
          }
        },
        "optional": false,
        "range": [
          2457,
          2478
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 99
          },
          "start": {
            "column": 0,
            "line": 99
          }
        }
      },
      "range": [
        2457,
        2479
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2485,
                    2486
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 100
                    },
                    "start": {
                      "column": 5,
                      "line": 100
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2488,
                    2489
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 100
                    },
                    "start": {
                      "column": 8,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2485,
                  2489
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 100
                  },
                  "start": {
                    "column": 5,
                    "line": 100
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    2491,
                    2492
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 100
                    },
                    "start": {
                      "column": 11,
                      "line": 100
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    2494,
                    2499
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 100
                    },
                    "start": {
                      "column": 14,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2491,
                  2499
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 100
                  },
                  "start": {
                    "column": 11,
                    "line": 100
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    2501,
                    2502
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 100
                    },
                    "start": {
                      "column": 21,
                      "line": 100
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    2504,
                    2507
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 100
                    },
                    "start": {
                      "column": 24,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2501,
                  2507
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 100
                  },
                  "start": {
                    "column": 21,
                    "line": 100
                  }
                }
              }
            ],
            "range": [
              2484,
              2508
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "range": [
            2480,
            2483
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 100
            },
            "start": {
              "column": 0,
              "line": 100
            }
          }
        },
        "optional": false,
        "range": [
          2480,
          2509
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 100
          },
          "start": {
            "column": 0,
            "line": 100
          }
        }
      },
      "range": [
        2480,
        2510
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2631,
          2684
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                2635,
                2639
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 105
                },
                "start": {
                  "column": 2,
                  "line": 105
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
                  "column": 14,
                  "line": 105
                },
                "start": {
                  "column": 6,
                  "line": 105
                }
              },
              "range": [
                2639,
                2647
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2641,
                  2647
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 105
                  },
                  "start": {
                    "column": 8,
                    "line": 105
                  }
                }
              }
            },
            "range": [
              2635,
              2648
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 105
              },
              "start": {
                "column": 2,
                "line": 105
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "range": [
                2651,
                2657
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 106
                },
                "start": {
                  "column": 2,
                  "line": 106
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
                  "column": 3,
                  "line": 108
                },
                "start": {
                  "column": 8,
                  "line": 106
                }
              },
              "range": [
                2657,
                2682
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        2665,
                        2669
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 107
                        },
                        "start": {
                          "column": 4,
                          "line": 107
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
                          "column": 16,
                          "line": 107
                        },
                        "start": {
                          "column": 8,
                          "line": 107
                        }
                      },
                      "range": [
                        2669,
                        2677
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2671,
                          2677
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 107
                          },
                          "start": {
                            "column": 10,
                            "line": 107
                          }
                        }
                      }
                    },
                    "range": [
                      2665,
                      2678
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 107
                      },
                      "start": {
                        "column": 4,
                        "line": 107
                      }
                    }
                  }
                ],
                "range": [
                  2659,
                  2682
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 108
                  },
                  "start": {
                    "column": 10,
                    "line": 106
                  }
                }
              }
            },
            "range": [
              2651,
              2682
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 108
              },
              "start": {
                "column": 2,
                "line": 106
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 25,
            "line": 104
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithNestedProp",
        "optional": false,
        "range": [
          2616,
          2630
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 104
          },
          "start": {
            "column": 10,
            "line": 104
          }
        }
      },
      "range": [
        2606,
        2684
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 104
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
        "name": "withNestedProp",
        "optional": false,
        "range": [
          2703,
          2717
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 111
          },
          "start": {
            "column": 17,
            "line": 111
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 110,
                "line": 111
              },
              "start": {
                "column": 63,
                "line": 111
              }
            },
            "range": [
              2749,
              2796
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          2764,
                          2765
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 111
                          },
                          "start": {
                            "column": 78,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        2764,
                        2765
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 111
                        },
                        "start": {
                          "column": 78,
                          "line": 111
                        }
                      }
                    },
                    "range": [
                      2758,
                      2765
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 111
                      },
                      "start": {
                        "column": 72,
                        "line": 111
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WithNestedProp",
                        "optional": false,
                        "range": [
                          2774,
                          2788
                        ],
                        "loc": {
                          "end": {
                            "column": 102,
                            "line": 111
                          },
                          "start": {
                            "column": 88,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        2774,
                        2788
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 111
                        },
                        "start": {
                          "column": 88,
                          "line": 111
                        }
                      }
                    },
                    "range": [
                      2768,
                      2788
                    ],
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 111
                      },
                      "start": {
                        "column": 82,
                        "line": 111
                      }
                    }
                  }
                ],
                "range": [
                  2758,
                  2788
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 111
                  },
                  "start": {
                    "column": 72,
                    "line": 111
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  2753,
                  2754
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 111
                  },
                  "start": {
                    "column": 67,
                    "line": 111
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      2793,
                      2794
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 111
                      },
                      "start": {
                        "column": 107,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    2793,
                    2794
                  ],
                  "loc": {
                    "end": {
                      "column": 108,
                      "line": 111
                    },
                    "start": {
                      "column": 107,
                      "line": 111
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
                      2791,
                      2792
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 111
                      },
                      "start": {
                        "column": 105,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    2791,
                    2792
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 111
                    },
                    "start": {
                      "column": 105,
                      "line": 111
                    }
                  }
                },
                "range": [
                  2791,
                  2795
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 111
                  },
                  "start": {
                    "column": 105,
                    "line": 111
                  }
                }
              },
              "range": [
                2751,
                2796
              ],
              "loc": {
                "end": {
                  "column": 110,
                  "line": 111
                },
                "start": {
                  "column": 65,
                  "line": 111
                }
              }
            }
          },
          "range": [
            2744,
            2796
          ],
          "loc": {
            "end": {
              "column": 110,
              "line": 111
            },
            "start": {
              "column": 58,
              "line": 111
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 114,
            "line": 111
          },
          "start": {
            "column": 111,
            "line": 111
          }
        },
        "range": [
          2797,
          2800
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2799,
              2800
            ],
            "loc": {
              "end": {
                "column": 114,
                "line": 111
              },
              "start": {
                "column": 113,
                "line": 111
              }
            }
          },
          "range": [
            2799,
            2800
          ],
          "loc": {
            "end": {
              "column": 114,
              "line": 111
            },
            "start": {
              "column": 113,
              "line": 111
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 111
          },
          "start": {
            "column": 31,
            "line": 111
          }
        },
        "range": [
          2717,
          2743
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
                "name": "WithNestedProp",
                "optional": false,
                "range": [
                  2728,
                  2742
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 111
                  },
                  "start": {
                    "column": 42,
                    "line": 111
                  }
                }
              },
              "range": [
                2728,
                2742
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 111
                },
                "start": {
                  "column": 42,
                  "line": 111
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
                2718,
                2719
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 111
                },
                "start": {
                  "column": 32,
                  "line": 111
                }
              }
            },
            "out": false,
            "range": [
              2718,
              2742
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 111
              },
              "start": {
                "column": 32,
                "line": 111
              }
            }
          }
        ]
      },
      "range": [
        2686,
        2801
      ],
      "loc": {
        "end": {
          "column": 115,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
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
            "name": "wnp",
            "optional": false,
            "range": [
              2809,
              2812
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 113
              },
              "start": {
                "column": 6,
                "line": 113
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        2831,
                        2835
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 113
                        },
                        "start": {
                          "column": 28,
                          "line": 113
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'foo'",
                      "value": "foo",
                      "range": [
                        2837,
                        2842
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 113
                        },
                        "start": {
                          "column": 34,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      2831,
                      2842
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 113
                      },
                      "start": {
                        "column": 28,
                        "line": 113
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "range": [
                        2844,
                        2850
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 113
                        },
                        "start": {
                          "column": 41,
                          "line": 113
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
                            "name": "prop",
                            "optional": false,
                            "range": [
                              2854,
                              2858
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 113
                              },
                              "start": {
                                "column": 51,
                                "line": 113
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              2860,
                              2865
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 113
                              },
                              "start": {
                                "column": 57,
                                "line": 113
                              }
                            }
                          },
                          "range": [
                            2854,
                            2865
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 113
                            },
                            "start": {
                              "column": 51,
                              "line": 113
                            }
                          }
                        }
                      ],
                      "range": [
                        2852,
                        2867
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 113
                        },
                        "start": {
                          "column": 49,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      2844,
                      2867
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 113
                      },
                      "start": {
                        "column": 41,
                        "line": 113
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        2869,
                        2874
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 113
                        },
                        "start": {
                          "column": 66,
                          "line": 113
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        2876,
                        2878
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 113
                        },
                        "start": {
                          "column": 73,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      2869,
                      2878
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 113
                      },
                      "start": {
                        "column": 66,
                        "line": 113
                      }
                    }
                  }
                ],
                "range": [
                  2830,
                  2880
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 113
                  },
                  "start": {
                    "column": 27,
                    "line": 113
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withNestedProp",
              "optional": false,
              "range": [
                2815,
                2829
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 113
                },
                "start": {
                  "column": 12,
                  "line": 113
                }
              }
            },
            "optional": false,
            "range": [
              2815,
              2881
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 113
              },
              "start": {
                "column": 12,
                "line": 113
              }
            }
          },
          "range": [
            2809,
            2881
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 113
            },
            "start": {
              "column": 6,
              "line": 113
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2803,
        2882
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsLiteralString",
        "optional": false,
        "range": [
          2983,
          2998
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 117
          },
          "start": {
            "column": 5,
            "line": 117
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "range": [
            3019,
            3025
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 117
            },
            "start": {
              "column": 41,
              "line": 117
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3034,
              3035
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 117
              },
              "start": {
                "column": 56,
                "line": 117
              }
            }
          },
          "range": [
            3034,
            3035
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 117
            },
            "start": {
              "column": 56,
              "line": 117
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              3046,
              3050
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 117
              },
              "start": {
                "column": 68,
                "line": 117
              }
            }
          },
          "range": [
            3046,
            3050
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 117
            },
            "start": {
              "column": 68,
              "line": 117
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              3038,
              3043
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 117
              },
              "start": {
                "column": 60,
                "line": 117
              }
            }
          },
          "range": [
            3038,
            3043
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 117
            },
            "start": {
              "column": 60,
              "line": 117
            }
          }
        },
        "range": [
          3019,
          3050
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 117
          },
          "start": {
            "column": 41,
            "line": 117
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 117
          },
          "start": {
            "column": 20,
            "line": 117
          }
        },
        "range": [
          2998,
          3016
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3009,
                3015
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 117
                },
                "start": {
                  "column": 31,
                  "line": 117
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
                2999,
                3000
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 117
                },
                "start": {
                  "column": 21,
                  "line": 117
                }
              }
            },
            "out": false,
            "range": [
              2999,
              3015
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 117
              },
              "start": {
                "column": 21,
                "line": 117
              }
            }
          }
        ]
      },
      "range": [
        2978,
        3051
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepWritable",
        "optional": false,
        "range": [
          3058,
          3070
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 119
          },
          "start": {
            "column": 5,
            "line": 119
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
              3076,
              3077
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 119
              },
              "start": {
                "column": 23,
                "line": 119
              }
            }
          },
          "range": [
            3076,
            3077
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 119
            },
            "start": {
              "column": 23,
              "line": 119
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "range": [
              3086,
              3094
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 119
              },
              "start": {
                "column": 33,
                "line": 119
              }
            }
          },
          "range": [
            3086,
            3094
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 119
            },
            "start": {
              "column": 33,
              "line": 119
            }
          }
        },
        "falseType": {
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
                  3125,
                  3126
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 119
                  },
                  "start": {
                    "column": 72,
                    "line": 119
                  }
                }
              },
              "range": [
                3125,
                3126
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 119
                },
                "start": {
                  "column": 72,
                  "line": 119
                }
              }
            },
            "range": [
              3119,
              3126
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 119
              },
              "start": {
                "column": 66,
                "line": 119
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              3114,
              3115
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 119
              },
              "start": {
                "column": 61,
                "line": 119
              }
            }
          },
          "nameType": null,
          "readonly": "-",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3141,
                3147
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
                        3144,
                        3145
                      ],
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 119
                        },
                        "start": {
                          "column": 91,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      3144,
                      3145
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 119
                      },
                      "start": {
                        "column": 91,
                        "line": 119
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
                        3142,
                        3143
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 119
                        },
                        "start": {
                          "column": 89,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      3142,
                      3143
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 119
                      },
                      "start": {
                        "column": 89,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    3142,
                    3146
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 119
                    },
                    "start": {
                      "column": 89,
                      "line": 119
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 119
                },
                "start": {
                  "column": 88,
                  "line": 119
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DeepWritable",
              "optional": false,
              "range": [
                3129,
                3141
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 119
                },
                "start": {
                  "column": 76,
                  "line": 119
                }
              }
            },
            "range": [
              3129,
              3147
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 119
              },
              "start": {
                "column": 76,
                "line": 119
              }
            }
          },
          "range": [
            3101,
            3149
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 119
            },
            "start": {
              "column": 48,
              "line": 119
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3097,
              3098
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 119
              },
              "start": {
                "column": 44,
                "line": 119
              }
            }
          },
          "range": [
            3097,
            3098
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 119
            },
            "start": {
              "column": 44,
              "line": 119
            }
          }
        },
        "range": [
          3076,
          3149
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 119
          },
          "start": {
            "column": 23,
            "line": 119
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 119
          },
          "start": {
            "column": 17,
            "line": 119
          }
        },
        "range": [
          3070,
          3073
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
                3071,
                3072
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 119
                },
                "start": {
                  "column": 18,
                  "line": 119
                }
              }
            },
            "out": false,
            "range": [
              3071,
              3072
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 119
              },
              "start": {
                "column": 18,
                "line": 119
              }
            }
          }
        ]
      },
      "range": [
        3053,
        3149
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3175,
          3226
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "src",
              "optional": false,
              "range": [
                3179,
                3182
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 122
                },
                "start": {
                  "column": 2,
                  "line": 122
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
                  "column": 13,
                  "line": 122
                },
                "start": {
                  "column": 5,
                  "line": 122
                }
              },
              "range": [
                3182,
                3190
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  3184,
                  3190
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 122
                  },
                  "start": {
                    "column": 7,
                    "line": 122
                  }
                }
              }
            },
            "range": [
              3179,
              3191
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 122
              },
              "start": {
                "column": 2,
                "line": 122
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "logic",
              "optional": false,
              "range": [
                3194,
                3199
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 123
                },
                "start": {
                  "column": 2,
                  "line": 123
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
                  "column": 31,
                  "line": 123
                },
                "start": {
                  "column": 7,
                  "line": 123
                }
              },
              "range": [
                3199,
                3223
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 123
                    },
                    "start": {
                      "column": 12,
                      "line": 123
                    }
                  },
                  "range": [
                    3204,
                    3223
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3214,
                        3223
                      ],
                      "params": [
                        {
                          "type": "TSUnknownKeyword",
                          "range": [
                            3215,
                            3222
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 123
                            },
                            "start": {
                              "column": 23,
                              "line": 123
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 123
                        },
                        "start": {
                          "column": 22,
                          "line": 123
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        3207,
                        3214
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 123
                        },
                        "start": {
                          "column": 15,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      3207,
                      3223
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 123
                      },
                      "start": {
                        "column": 15,
                        "line": 123
                      }
                    }
                  }
                },
                "range": [
                  3201,
                  3223
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 123
                  },
                  "start": {
                    "column": 9,
                    "line": 123
                  }
                }
              }
            },
            "range": [
              3194,
              3224
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 123
              },
              "start": {
                "column": 2,
                "line": 123
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 124
          },
          "start": {
            "column": 24,
            "line": 121
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProvidedActor",
        "optional": false,
        "range": [
          3161,
          3174
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 121
          },
          "start": {
            "column": 10,
            "line": 121
          }
        }
      },
      "range": [
        3151,
        3226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DistributeActors",
        "optional": false,
        "range": [
          3233,
          3249
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 126
          },
          "start": {
            "column": 5,
            "line": 126
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
            "name": "TActor",
            "optional": false,
            "range": [
              3260,
              3266
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 126
              },
              "start": {
                "column": 32,
                "line": 126
              }
            }
          },
          "range": [
            3260,
            3266
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 126
            },
            "start": {
              "column": 32,
              "line": 126
            }
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "src",
                "optional": false,
                "range": [
                  3277,
                  3280
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 126
                  },
                  "start": {
                    "column": 49,
                    "line": 126
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
                    "column": 64,
                    "line": 126
                  },
                  "start": {
                    "column": 52,
                    "line": 126
                  }
                },
                "range": [
                  3280,
                  3292
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
                      "name": "TSrc",
                      "optional": false,
                      "range": [
                        3288,
                        3292
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 126
                        },
                        "start": {
                          "column": 60,
                          "line": 126
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3288,
                      3292
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 126
                      },
                      "start": {
                        "column": 60,
                        "line": 126
                      }
                    }
                  },
                  "range": [
                    3282,
                    3292
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 126
                    },
                    "start": {
                      "column": 54,
                      "line": 126
                    }
                  }
                }
              },
              "range": [
                3277,
                3292
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 126
                },
                "start": {
                  "column": 49,
                  "line": 126
                }
              }
            }
          ],
          "range": [
            3275,
            3294
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 126
            },
            "start": {
              "column": 47,
              "line": 126
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3328,
            3333
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 130
            },
            "start": {
              "column": 4,
              "line": 130
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "src",
                "optional": false,
                "range": [
                  3307,
                  3310
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 128
                  },
                  "start": {
                    "column": 6,
                    "line": 128
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
                    "column": 15,
                    "line": 128
                  },
                  "start": {
                    "column": 9,
                    "line": 128
                  }
                },
                "range": [
                  3310,
                  3316
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TSrc",
                    "optional": false,
                    "range": [
                      3312,
                      3316
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 128
                      },
                      "start": {
                        "column": 11,
                        "line": 128
                      }
                    }
                  },
                  "range": [
                    3312,
                    3316
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 128
                    },
                    "start": {
                      "column": 11,
                      "line": 128
                    }
                  }
                }
              },
              "range": [
                3307,
                3317
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 128
                },
                "start": {
                  "column": 6,
                  "line": 128
                }
              }
            }
          ],
          "range": [
            3299,
            3323
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 129
            },
            "start": {
              "column": 4,
              "line": 127
            }
          }
        },
        "range": [
          3260,
          3333
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 130
          },
          "start": {
            "column": 32,
            "line": 126
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 126
          },
          "start": {
            "column": 21,
            "line": 126
          }
        },
        "range": [
          3249,
          3257
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "range": [
                3250,
                3256
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 126
                },
                "start": {
                  "column": 22,
                  "line": 126
                }
              }
            },
            "out": false,
            "range": [
              3250,
              3256
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 126
              },
              "start": {
                "column": 22,
                "line": 126
              }
            }
          }
        ]
      },
      "range": [
        3228,
        3334
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 126
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3390,
          3554
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "types",
              "optional": false,
              "range": [
                3394,
                3399
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 133
                },
                "start": {
                  "column": 2,
                  "line": 133
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
                  "column": 3,
                  "line": 135
                },
                "start": {
                  "column": 8,
                  "line": 133
                }
              },
              "range": [
                3400,
                3428
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
                      "name": "actors",
                      "optional": false,
                      "range": [
                        3408,
                        3414
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 134
                        },
                        "start": {
                          "column": 4,
                          "line": 134
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
                          "column": 19,
                          "line": 134
                        },
                        "start": {
                          "column": 11,
                          "line": 134
                        }
                      },
                      "range": [
                        3415,
                        3423
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TActor",
                          "optional": false,
                          "range": [
                            3417,
                            3423
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 134
                            },
                            "start": {
                              "column": 13,
                              "line": 134
                            }
                          }
                        },
                        "range": [
                          3417,
                          3423
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 134
                          },
                          "start": {
                            "column": 13,
                            "line": 134
                          }
                        }
                      }
                    },
                    "range": [
                      3408,
                      3424
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 134
                      },
                      "start": {
                        "column": 4,
                        "line": 134
                      }
                    }
                  }
                ],
                "range": [
                  3402,
                  3428
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 135
                  },
                  "start": {
                    "column": 10,
                    "line": 133
                  }
                }
              }
            },
            "range": [
              3394,
              3429
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 135
              },
              "start": {
                "column": 2,
                "line": 133
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invoke",
              "optional": false,
              "range": [
                3432,
                3438
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 136
                },
                "start": {
                  "column": 2,
                  "line": 136
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
                  "line": 140
                },
                "start": {
                  "column": 8,
                  "line": 136
                }
              },
              "range": [
                3438,
                3551
              ],
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3455,
                      3470
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"src\"",
                            "value": "src",
                            "range": [
                              3463,
                              3468
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 136
                              },
                              "start": {
                                "column": 33,
                                "line": 136
                              }
                            }
                          },
                          "range": [
                            3463,
                            3468
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 136
                            },
                            "start": {
                              "column": 33,
                              "line": 136
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActor",
                            "optional": false,
                            "range": [
                              3456,
                              3462
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 136
                              },
                              "start": {
                                "column": 26,
                                "line": 136
                              }
                            }
                          },
                          "range": [
                            3456,
                            3462
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 136
                            },
                            "start": {
                              "column": 26,
                              "line": 136
                            }
                          }
                        },
                        "range": [
                          3456,
                          3469
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 136
                          },
                          "start": {
                            "column": 26,
                            "line": 136
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 136
                      },
                      "start": {
                        "column": 25,
                        "line": 136
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsLiteralString",
                    "optional": false,
                    "range": [
                      3440,
                      3455
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 136
                      },
                      "start": {
                        "column": 10,
                        "line": 136
                      }
                    }
                  },
                  "range": [
                    3440,
                    3470
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 136
                    },
                    "start": {
                      "column": 10,
                      "line": 136
                    }
                  }
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      3479,
                      3483
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 136
                      },
                      "start": {
                        "column": 49,
                        "line": 136
                      }
                    }
                  },
                  "range": [
                    3479,
                    3483
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 136
                    },
                    "start": {
                      "column": 49,
                      "line": 136
                    }
                  }
                },
                "falseType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "src",
                        "optional": false,
                        "range": [
                          3531,
                          3534
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 139
                          },
                          "start": {
                            "column": 8,
                            "line": 139
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
                            "line": 139
                          },
                          "start": {
                            "column": 11,
                            "line": 139
                          }
                        },
                        "range": [
                          3534,
                          3542
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3536,
                            3542
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 139
                            },
                            "start": {
                              "column": 13,
                              "line": 139
                            }
                          }
                        }
                      },
                      "range": [
                        3531,
                        3543
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 139
                        },
                        "start": {
                          "column": 8,
                          "line": 139
                        }
                      }
                    }
                  ],
                  "range": [
                    3521,
                    3551
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 140
                    },
                    "start": {
                      "column": 6,
                      "line": 138
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3506,
                      3514
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TActor",
                          "optional": false,
                          "range": [
                            3507,
                            3513
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 137
                            },
                            "start": {
                              "column": 23,
                              "line": 137
                            }
                          }
                        },
                        "range": [
                          3507,
                          3513
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 137
                          },
                          "start": {
                            "column": 23,
                            "line": 137
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 137
                      },
                      "start": {
                        "column": 22,
                        "line": 137
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DistributeActors",
                    "optional": false,
                    "range": [
                      3490,
                      3506
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 137
                      },
                      "start": {
                        "column": 6,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    3490,
                    3514
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 137
                    },
                    "start": {
                      "column": 6,
                      "line": 137
                    }
                  }
                },
                "range": [
                  3440,
                  3551
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 140
                  },
                  "start": {
                    "column": 10,
                    "line": 136
                  }
                }
              }
            },
            "range": [
              3432,
              3552
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 140
              },
              "start": {
                "column": 2,
                "line": 136
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 141
          },
          "start": {
            "column": 54,
            "line": 132
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "range": [
          3346,
          3359
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 132
          },
          "start": {
            "column": 10,
            "line": 132
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 132
          },
          "start": {
            "column": 23,
            "line": 132
          }
        },
        "range": [
          3359,
          3389
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
                "name": "ProvidedActor",
                "optional": false,
                "range": [
                  3375,
                  3388
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 132
                  },
                  "start": {
                    "column": 39,
                    "line": 132
                  }
                }
              },
              "range": [
                3375,
                3388
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 132
                },
                "start": {
                  "column": 39,
                  "line": 132
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "range": [
                3360,
                3366
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 132
                },
                "start": {
                  "column": 24,
                  "line": 132
                }
              }
            },
            "out": false,
            "range": [
              3360,
              3388
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 132
              },
              "start": {
                "column": 24,
                "line": 132
              }
            }
          }
        ]
      },
      "range": [
        3336,
        3554
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 141
        },
        "start": {
          "column": 0,
          "line": 132
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoExtra",
        "optional": false,
        "range": [
          3561,
          3568
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 143
          },
          "start": {
            "column": 5,
            "line": 143
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
                3590,
                3591
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 144
                },
                "start": {
                  "column": 14,
                  "line": 144
                }
              }
            },
            "range": [
              3590,
              3591
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 144
              },
              "start": {
                "column": 14,
                "line": 144
              }
            }
          },
          "range": [
            3584,
            3591
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 144
            },
            "start": {
              "column": 8,
              "line": 144
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            3579,
            3580
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 144
            },
            "start": {
              "column": 3,
              "line": 144
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                3594,
                3595
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 144
                },
                "start": {
                  "column": 18,
                  "line": 144
                }
              }
            },
            "range": [
              3594,
              3595
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 144
              },
              "start": {
                "column": 18,
                "line": 144
              }
            }
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3623,
                  3628
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      3624,
                      3627
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 144
                      },
                      "start": {
                        "column": 48,
                        "line": 144
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 144
                  },
                  "start": {
                    "column": 47,
                    "line": 144
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MachineConfig",
                "optional": false,
                "range": [
                  3610,
                  3623
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 144
                  },
                  "start": {
                    "column": 34,
                    "line": 144
                  }
                }
              },
              "range": [
                3610,
                3628
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 144
                },
                "start": {
                  "column": 34,
                  "line": 144
                }
              }
            },
            "range": [
              3604,
              3628
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 144
              },
              "start": {
                "column": 28,
                "line": 144
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              3638,
              3643
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 144
              },
              "start": {
                "column": 62,
                "line": 144
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  3633,
                  3634
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 144
                  },
                  "start": {
                    "column": 57,
                    "line": 144
                  }
                }
              },
              "range": [
                3633,
                3634
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 144
                },
                "start": {
                  "column": 57,
                  "line": 144
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
                  3631,
                  3632
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 144
                  },
                  "start": {
                    "column": 55,
                    "line": 144
                  }
                }
              },
              "range": [
                3631,
                3632
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 144
                },
                "start": {
                  "column": 55,
                  "line": 144
                }
              }
            },
            "range": [
              3631,
              3635
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 144
              },
              "start": {
                "column": 55,
                "line": 144
              }
            }
          },
          "range": [
            3594,
            3643
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 144
            },
            "start": {
              "column": 18,
              "line": 144
            }
          }
        },
        "range": [
          3574,
          3645
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 145
          },
          "start": {
            "column": 18,
            "line": 143
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 143
          },
          "start": {
            "column": 12,
            "line": 143
          }
        },
        "range": [
          3568,
          3571
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
                3569,
                3570
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 143
                },
                "start": {
                  "column": 13,
                  "line": 143
                }
              }
            },
            "out": false,
            "range": [
              3569,
              3570
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 143
              },
              "start": {
                "column": 13,
                "line": 143
              }
            }
          }
        ]
      },
      "range": [
        3556,
        3645
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 145
        },
        "start": {
          "column": 0,
          "line": 143
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
        "name": "createXMachine",
        "optional": false,
        "range": [
          3664,
          3678
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 147
          },
          "start": {
            "column": 17,
            "line": 147
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
                "column": 72,
                "line": 150
              },
              "start": {
                "column": 8,
                "line": 150
              }
            },
            "range": [
              3866,
              3930
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3894,
                          3899
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              3895,
                              3898
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 150
                              },
                              "start": {
                                "column": 37,
                                "line": 150
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 150
                          },
                          "start": {
                            "column": 36,
                            "line": 150
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MachineConfig",
                        "optional": false,
                        "range": [
                          3881,
                          3894
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 150
                          },
                          "start": {
                            "column": 23,
                            "line": 150
                          }
                        }
                      },
                      "range": [
                        3881,
                        3899
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 150
                        },
                        "start": {
                          "column": 23,
                          "line": 150
                        }
                      }
                    },
                    "range": [
                      3875,
                      3899
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 150
                      },
                      "start": {
                        "column": 17,
                        "line": 150
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TConfig",
                        "optional": false,
                        "range": [
                          3908,
                          3915
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 150
                          },
                          "start": {
                            "column": 50,
                            "line": 150
                          }
                        }
                      },
                      "range": [
                        3908,
                        3915
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 150
                        },
                        "start": {
                          "column": 50,
                          "line": 150
                        }
                      }
                    },
                    "range": [
                      3902,
                      3915
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 150
                      },
                      "start": {
                        "column": 44,
                        "line": 150
                      }
                    }
                  }
                ],
                "range": [
                  3875,
                  3915
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 150
                  },
                  "start": {
                    "column": 17,
                    "line": 150
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  3870,
                  3871
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 150
                  },
                  "start": {
                    "column": 12,
                    "line": 150
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3926,
                      3927
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 150
                      },
                      "start": {
                        "column": 68,
                        "line": 150
                      }
                    }
                  },
                  "range": [
                    3926,
                    3927
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 150
                    },
                    "start": {
                      "column": 68,
                      "line": 150
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "range": [
                      3918,
                      3925
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 150
                      },
                      "start": {
                        "column": 60,
                        "line": 150
                      }
                    }
                  },
                  "range": [
                    3918,
                    3925
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 150
                    },
                    "start": {
                      "column": 60,
                      "line": 150
                    }
                  }
                },
                "range": [
                  3918,
                  3928
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 150
                  },
                  "start": {
                    "column": 60,
                    "line": 150
                  }
                }
              },
              "range": [
                3868,
                3930
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 150
                },
                "start": {
                  "column": 10,
                  "line": 150
                }
              }
            }
          },
          "range": [
            3860,
            3930
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 150
            },
            "start": {
              "column": 2,
              "line": 150
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 150
          },
          "start": {
            "column": 73,
            "line": 150
          }
        },
        "range": [
          3931,
          3940
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TConfig",
            "optional": false,
            "range": [
              3933,
              3940
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 150
              },
              "start": {
                "column": 75,
                "line": 150
              }
            }
          },
          "range": [
            3933,
            3940
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 150
            },
            "start": {
              "column": 75,
              "line": 150
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 150
          },
          "start": {
            "column": 31,
            "line": 147
          }
        },
        "range": [
          3678,
          3859
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3717,
                  3725
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TActor",
                      "optional": false,
                      "range": [
                        3718,
                        3724
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 148
                        },
                        "start": {
                          "column": 38,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3718,
                      3724
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 148
                      },
                      "start": {
                        "column": 38,
                        "line": 148
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 148
                  },
                  "start": {
                    "column": 37,
                    "line": 148
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MachineConfig",
                "optional": false,
                "range": [
                  3704,
                  3717
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 148
                  },
                  "start": {
                    "column": 24,
                    "line": 148
                  }
                }
              },
              "range": [
                3704,
                3725
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 148
                },
                "start": {
                  "column": 24,
                  "line": 148
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TConfig",
              "optional": false,
              "range": [
                3688,
                3695
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 148
                },
                "start": {
                  "column": 8,
                  "line": 148
                }
              }
            },
            "out": false,
            "range": [
              3682,
              3725
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 148
              },
              "start": {
                "column": 2,
                "line": 148
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
                "name": "ProvidedActor",
                "optional": false,
                "range": [
                  3744,
                  3757
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 149
                  },
                  "start": {
                    "column": 17,
                    "line": 149
                  }
                }
              },
              "range": [
                3744,
                3757
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 149
                },
                "start": {
                  "column": 17,
                  "line": 149
                }
              }
            },
            "default": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TConfig",
                  "optional": false,
                  "range": [
                    3760,
                    3767
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 149
                    },
                    "start": {
                      "column": 33,
                      "line": 149
                    }
                  }
                },
                "range": [
                  3760,
                  3767
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 149
                  },
                  "start": {
                    "column": 33,
                    "line": 149
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "types",
                      "optional": false,
                      "range": [
                        3778,
                        3783
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 149
                        },
                        "start": {
                          "column": 51,
                          "line": 149
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
                          "column": 82,
                          "line": 149
                        },
                        "start": {
                          "column": 56,
                          "line": 149
                        }
                      },
                      "range": [
                        3783,
                        3809
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
                              "name": "actors",
                              "optional": false,
                              "range": [
                                3787,
                                3793
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 149
                                },
                                "start": {
                                  "column": 60,
                                  "line": 149
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
                                  "column": 81,
                                  "line": 149
                                },
                                "start": {
                                  "column": 66,
                                  "line": 149
                                }
                              },
                              "range": [
                                3793,
                                3808
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ProvidedActor",
                                  "optional": false,
                                  "range": [
                                    3795,
                                    3808
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 149
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 149
                                    }
                                  }
                                },
                                "range": [
                                  3795,
                                  3808
                                ],
                                "loc": {
                                  "end": {
                                    "column": 81,
                                    "line": 149
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 149
                                  }
                                }
                              }
                            },
                            "range": [
                              3787,
                              3808
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 149
                              },
                              "start": {
                                "column": 60,
                                "line": 149
                              }
                            }
                          }
                        ],
                        "range": [
                          3785,
                          3809
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 149
                          },
                          "start": {
                            "column": 58,
                            "line": 149
                          }
                        }
                      }
                    },
                    "range": [
                      3778,
                      3809
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 149
                      },
                      "start": {
                        "column": 51,
                        "line": 149
                      }
                    }
                  }
                ],
                "range": [
                  3776,
                  3811
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 149
                  },
                  "start": {
                    "column": 49,
                    "line": 149
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ProvidedActor",
                  "optional": false,
                  "range": [
                    3843,
                    3856
                  ],
                  "loc": {
                    "end": {
                      "column": 129,
                      "line": 149
                    },
                    "start": {
                      "column": 116,
                      "line": 149
                    }
                  }
                },
                "range": [
                  3843,
                  3856
                ],
                "loc": {
                  "end": {
                    "column": 129,
                    "line": 149
                  },
                  "start": {
                    "column": 116,
                    "line": 149
                  }
                }
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"actors\"",
                    "value": "actors",
                    "range": [
                      3831,
                      3839
                    ],
                    "loc": {
                      "end": {
                        "column": 112,
                        "line": 149
                      },
                      "start": {
                        "column": 104,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    3831,
                    3839
                  ],
                  "loc": {
                    "end": {
                      "column": 112,
                      "line": 149
                    },
                    "start": {
                      "column": 104,
                      "line": 149
                    }
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"types\"",
                      "value": "types",
                      "range": [
                        3822,
                        3829
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 149
                        },
                        "start": {
                          "column": 95,
                          "line": 149
                        }
                      }
                    },
                    "range": [
                      3822,
                      3829
                    ],
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 149
                      },
                      "start": {
                        "column": 95,
                        "line": 149
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TConfig",
                      "optional": false,
                      "range": [
                        3814,
                        3821
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 149
                        },
                        "start": {
                          "column": 87,
                          "line": 149
                        }
                      }
                    },
                    "range": [
                      3814,
                      3821
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 149
                      },
                      "start": {
                        "column": 87,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    3814,
                    3830
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 149
                    },
                    "start": {
                      "column": 87,
                      "line": 149
                    }
                  }
                },
                "range": [
                  3814,
                  3840
                ],
                "loc": {
                  "end": {
                    "column": 113,
                    "line": 149
                  },
                  "start": {
                    "column": 87,
                    "line": 149
                  }
                }
              },
              "range": [
                3760,
                3856
              ],
              "loc": {
                "end": {
                  "column": 129,
                  "line": 149
                },
                "start": {
                  "column": 33,
                  "line": 149
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "range": [
                3729,
                3735
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 149
                },
                "start": {
                  "column": 2,
                  "line": 149
                }
              }
            },
            "out": false,
            "range": [
              3729,
              3856
            ],
            "loc": {
              "end": {
                "column": 129,
                "line": 149
              },
              "start": {
                "column": 2,
                "line": 149
              }
            }
          }
        ]
      },
      "range": [
        3647,
        3941
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 150
        },
        "start": {
          "column": 0,
          "line": 147
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
            "name": "child",
            "optional": false,
            "range": [
              3949,
              3954
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 152
              },
              "start": {
                "column": 6,
                "line": 152
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    3979,
                    3984
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 152
                    },
                    "start": {
                      "column": 36,
                      "line": 152
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
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    3963,
                    3970
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 152
                    },
                    "start": {
                      "column": 20,
                      "line": 152
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "range": [
                    3971,
                    3978
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 152
                    },
                    "start": {
                      "column": 28,
                      "line": 152
                    }
                  }
                },
                "range": [
                  3963,
                  3978
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 152
                  },
                  "start": {
                    "column": 20,
                    "line": 152
                  }
                }
              },
              "optional": false,
              "range": [
                3963,
                3985
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 152
                },
                "start": {
                  "column": 20,
                  "line": 152
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              3957,
              3985
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 152
              },
              "start": {
                "column": 14,
                "line": 152
              }
            }
          },
          "range": [
            3949,
            3985
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 152
            },
            "start": {
              "column": 6,
              "line": 152
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3943,
        3986
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 152
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
            "name": "config",
            "optional": false,
            "range": [
              3994,
              4000
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 154
              },
              "start": {
                "column": 6,
                "line": 154
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
                      "name": "types",
                      "optional": false,
                      "range": [
                        4022,
                        4027
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 155
                        },
                        "start": {
                          "column": 2,
                          "line": 155
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "range": [
                          4029,
                          4031
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 155
                          },
                          "start": {
                            "column": 9,
                            "line": 155
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
                              "name": "actors",
                              "optional": false,
                              "range": [
                                4041,
                                4047
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 156
                                },
                                "start": {
                                  "column": 4,
                                  "line": 156
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
                                  "column": 5,
                                  "line": 159
                                },
                                "start": {
                                  "column": 10,
                                  "line": 156
                                }
                              },
                              "range": [
                                4047,
                                4101
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
                                      "name": "src",
                                      "optional": false,
                                      "range": [
                                        4057,
                                        4060
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 9,
                                          "line": 157
                                        },
                                        "start": {
                                          "column": 6,
                                          "line": 157
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
                                          "column": 16,
                                          "line": 157
                                        },
                                        "start": {
                                          "column": 9,
                                          "line": 157
                                        }
                                      },
                                      "range": [
                                        4060,
                                        4067
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "raw": "\"str\"",
                                          "value": "str",
                                          "range": [
                                            4062,
                                            4067
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 16,
                                              "line": 157
                                            },
                                            "start": {
                                              "column": 11,
                                              "line": 157
                                            }
                                          }
                                        },
                                        "range": [
                                          4062,
                                          4067
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 157
                                          },
                                          "start": {
                                            "column": 11,
                                            "line": 157
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      4057,
                                      4068
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 157
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 157
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logic",
                                      "optional": false,
                                      "range": [
                                        4075,
                                        4080
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 11,
                                          "line": 158
                                        },
                                        "start": {
                                          "column": 6,
                                          "line": 158
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
                                          "column": 25,
                                          "line": 158
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 158
                                        }
                                      },
                                      "range": [
                                        4080,
                                        4094
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeQuery",
                                        "exprName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "child",
                                          "optional": false,
                                          "range": [
                                            4089,
                                            4094
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 25,
                                              "line": 158
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 158
                                            }
                                          }
                                        },
                                        "range": [
                                          4082,
                                          4094
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 158
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 158
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      4075,
                                      4095
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 158
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 158
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  4049,
                                  4101
                                ],
                                "loc": {
                                  "end": {
                                    "column": 5,
                                    "line": 159
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 156
                                  }
                                }
                              }
                            },
                            "range": [
                              4041,
                              4102
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 159
                              },
                              "start": {
                                "column": 4,
                                "line": 156
                              }
                            }
                          }
                        ],
                        "range": [
                          4035,
                          4106
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 160
                          },
                          "start": {
                            "column": 15,
                            "line": 155
                          }
                        }
                      },
                      "range": [
                        4029,
                        4106
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 160
                        },
                        "start": {
                          "column": 9,
                          "line": 155
                        }
                      }
                    },
                    "range": [
                      4022,
                      4106
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 160
                      },
                      "start": {
                        "column": 2,
                        "line": 155
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "invoke",
                      "optional": false,
                      "range": [
                        4110,
                        4116
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 161
                        },
                        "start": {
                          "column": 2,
                          "line": 161
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
                            "name": "src",
                            "optional": false,
                            "range": [
                              4124,
                              4127
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 162
                              },
                              "start": {
                                "column": 4,
                                "line": 162
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"str\"",
                            "value": "str",
                            "range": [
                              4129,
                              4134
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 162
                              },
                              "start": {
                                "column": 9,
                                "line": 162
                              }
                            }
                          },
                          "range": [
                            4124,
                            4134
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 162
                            },
                            "start": {
                              "column": 4,
                              "line": 162
                            }
                          }
                        }
                      ],
                      "range": [
                        4118,
                        4139
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 163
                        },
                        "start": {
                          "column": 10,
                          "line": 161
                        }
                      }
                    },
                    "range": [
                      4110,
                      4139
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 163
                      },
                      "start": {
                        "column": 2,
                        "line": 161
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        4143,
                        4148
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 164
                        },
                        "start": {
                          "column": 2,
                          "line": 164
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        4150,
                        4152
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 164
                        },
                        "start": {
                          "column": 9,
                          "line": 164
                        }
                      }
                    },
                    "range": [
                      4143,
                      4152
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 164
                      },
                      "start": {
                        "column": 2,
                        "line": 164
                      }
                    }
                  }
                ],
                "range": [
                  4018,
                  4154
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 165
                  },
                  "start": {
                    "column": 30,
                    "line": 154
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createXMachine",
              "optional": false,
              "range": [
                4003,
                4017
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 154
                },
                "start": {
                  "column": 15,
                  "line": 154
                }
              }
            },
            "optional": false,
            "range": [
              4003,
              4155
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 165
              },
              "start": {
                "column": 15,
                "line": 154
              }
            }
          },
          "range": [
            3994,
            4155
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 165
            },
            "start": {
              "column": 6,
              "line": 154
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3988,
        4156
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 165
        },
        "start": {
          "column": 0,
          "line": 154
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
            "name": "config2",
            "optional": false,
            "range": [
              4164,
              4171
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 167
              },
              "start": {
                "column": 6,
                "line": 167
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
                      "name": "invoke",
                      "optional": false,
                      "range": [
                        4193,
                        4199
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 168
                        },
                        "start": {
                          "column": 2,
                          "line": 168
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
                            "name": "src",
                            "optional": false,
                            "range": [
                              4207,
                              4210
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 169
                              },
                              "start": {
                                "column": 4,
                                "line": 169
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"whatever\"",
                            "value": "whatever",
                            "range": [
                              4212,
                              4222
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 169
                              },
                              "start": {
                                "column": 9,
                                "line": 169
                              }
                            }
                          },
                          "range": [
                            4207,
                            4222
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 169
                            },
                            "start": {
                              "column": 4,
                              "line": 169
                            }
                          }
                        }
                      ],
                      "range": [
                        4201,
                        4227
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 170
                        },
                        "start": {
                          "column": 10,
                          "line": 168
                        }
                      }
                    },
                    "range": [
                      4193,
                      4227
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 170
                      },
                      "start": {
                        "column": 2,
                        "line": 168
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        4231,
                        4236
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 171
                        },
                        "start": {
                          "column": 2,
                          "line": 171
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        4238,
                        4240
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 171
                        },
                        "start": {
                          "column": 9,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      4231,
                      4240
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 171
                      },
                      "start": {
                        "column": 2,
                        "line": 171
                      }
                    }
                  }
                ],
                "range": [
                  4189,
                  4242
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 172
                  },
                  "start": {
                    "column": 31,
                    "line": 167
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createXMachine",
              "optional": false,
              "range": [
                4174,
                4188
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 167
                },
                "start": {
                  "column": 16,
                  "line": 167
                }
              }
            },
            "optional": false,
            "range": [
              4174,
              4243
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 172
              },
              "start": {
                "column": 16,
                "line": 167
              }
            }
          },
          "range": [
            4164,
            4243
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 172
            },
            "start": {
              "column": 6,
              "line": 167
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4158,
        4244
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 167
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 173
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
