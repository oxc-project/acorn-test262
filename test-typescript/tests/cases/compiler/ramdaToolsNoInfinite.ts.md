__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    205,
    3490
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Head",
              "optional": false,
              "range": [
                240,
                244
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
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
                    272,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "range": [
                  272,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      283,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          291,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 6
                          },
                          "start": {
                            "column": 27,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        291,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      288,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  282,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  323,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              },
              "trueType": {
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
                        "column": 13,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    310,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
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
                      308,
                      309
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    308,
                    309
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  }
                },
                "range": [
                  308,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "range": [
                272,
                328
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              },
              "range": [
                244,
                261
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
                        255,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 5
                        },
                        "start": {
                          "column": 24,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      255,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
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
                      245,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    245,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              235,
              329
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 4,
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
              "name": "Tail",
              "optional": false,
              "range": [
                340,
                344
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        377,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
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
                          "column": 17,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      },
                      "range": [
                        378,
                        381
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            380,
                            381
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
                        "range": [
                          380,
                          381
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
                      }
                    },
                    "range": [
                      374,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 10,
                        "line": 11
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  },
                  "range": [
                    383,
                    389
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      386,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  373,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "extendsType": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 11
                        },
                        "start": {
                          "column": 38,
                          "line": 11
                        }
                      },
                      "range": [
                        402,
                        407
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          404,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 11
                          },
                          "start": {
                            "column": 40,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      401,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 11
                      },
                      "start": {
                        "column": 37,
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
                        412,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 11
                        },
                        "start": {
                          "column": 48,
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
                          "column": 62,
                          "line": 11
                        },
                        "start": {
                          "column": 52,
                          "line": 11
                        }
                      },
                      "range": [
                        416,
                        426
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
                            "name": "TT",
                            "optional": false,
                            "range": [
                              424,
                              426
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 11
                              },
                              "start": {
                                "column": 60,
                                "line": 11
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            424,
                            426
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 11
                            },
                            "start": {
                              "column": 60,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          418,
                          426
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 11
                          },
                          "start": {
                            "column": 54,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      409,
                      426
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 11
                      },
                      "start": {
                        "column": 45,
                        "line": 11
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 11
                    },
                    "start": {
                      "column": 64,
                      "line": 11
                    }
                  },
                  "range": [
                    428,
                    434
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      431,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 11
                      },
                      "start": {
                        "column": 67,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  400,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 11
                  },
                  "start": {
                    "column": 36,
                    "line": 11
                  }
                }
              },
              "falseType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "range": [
                  459,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TT",
                  "optional": false,
                  "range": [
                    446,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "range": [
                  446,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              },
              "range": [
                372,
                461
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              },
              "range": [
                344,
                361
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
                        355,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 10
                        },
                        "start": {
                          "column": 24,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      355,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
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
                      345,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    345,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
                    }
                  }
                }
              ]
            },
            "range": [
              335,
              462
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 4,
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
              "name": "HasTail",
              "optional": false,
              "range": [
                473,
                480
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
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
                    508,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "range": [
                  508,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      519,
                      521
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          525,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 16
                          },
                          "start": {
                            "column": 25,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      524,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  519,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
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
                    557,
                    561
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                },
                "range": [
                  557,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
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
                    541,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "range": [
                  541,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              },
              "range": [
                508,
                561
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              },
              "range": [
                480,
                497
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
                        491,
                        494
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 15
                        },
                        "start": {
                          "column": 27,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      491,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
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
                      481,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 15
                      },
                      "start": {
                        "column": 17,
                        "line": 15
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    481,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                }
              ]
            },
            "range": [
              468,
              562
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 4,
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
              "name": "Last",
              "optional": false,
              "range": [
                573,
                577
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      667,
                      670
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
                            668,
                            669
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 24
                            },
                            "start": {
                              "column": 16,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          668,
                          669
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 24
                          },
                          "start": {
                            "column": 16,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HasTail",
                    "optional": false,
                    "range": [
                      660,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    660,
                    670
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
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
                      679,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 24
                      },
                      "start": {
                        "column": 27,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    679,
                    683
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 24
                    },
                    "start": {
                      "column": 27,
                      "line": 24
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      706,
                      707
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 26
                      },
                      "start": {
                        "column": 10,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    706,
                    707
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      694,
                      695
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 25
                      },
                      "start": {
                        "column": 10,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    694,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                },
                "range": [
                  660,
                  707
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        607,
                        608
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
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
                          "line": 21
                        },
                        "start": {
                          "column": 9,
                          "line": 21
                        }
                      },
                      "range": [
                        608,
                        623
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            614,
                            623
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  619,
                                  622
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
                                        620,
                                        621
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "range": [
                                      620,
                                      621
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 21
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 21
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tail",
                                "optional": false,
                                "range": [
                                  615,
                                  619
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                615,
                                622
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 21
                                },
                                "start": {
                                  "column": 16,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Last",
                          "optional": false,
                          "range": [
                            610,
                            614
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 21
                            },
                            "start": {
                              "column": 11,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          610,
                          623
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
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
                      607,
                      624
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        633,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
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
                          "column": 18,
                          "line": 22
                        },
                        "start": {
                          "column": 9,
                          "line": 22
                        }
                      },
                      "range": [
                        634,
                        643
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            640,
                            643
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
                                  641,
                                  642
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                641,
                                642
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
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
                              "column": 18,
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
                          "name": "Head",
                          "optional": false,
                          "range": [
                            636,
                            640
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 22
                            },
                            "start": {
                              "column": 11,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          636,
                          643
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 22
                          },
                          "start": {
                            "column": 11,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      633,
                      644
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  597,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 33,
                    "line": 20
                  }
                }
              },
              "range": [
                597,
                713
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 33,
                  "line": 20
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              },
              "range": [
                577,
                594
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
                        588,
                        591
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 20
                        },
                        "start": {
                          "column": 24,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      588,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 24,
                        "line": 20
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
                      578,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 20
                      },
                      "start": {
                        "column": 14,
                        "line": 20
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    578,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                }
              ]
            },
            "range": [
              568,
              714
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
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
              "name": "Length",
              "optional": false,
              "range": [
                725,
                731
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'length'",
                  "value": "length",
                  "range": [
                    761,
                    769
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 30
                    },
                    "start": {
                      "column": 10,
                      "line": 30
                    }
                  }
                },
                "range": [
                  761,
                  769
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
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
                    759,
                    760
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "range": [
                  759,
                  760
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              },
              "range": [
                759,
                770
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              },
              "range": [
                731,
                748
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
                        742,
                        745
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 29
                        },
                        "start": {
                          "column": 26,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      742,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 29
                      },
                      "start": {
                        "column": 26,
                        "line": 29
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
                      732,
                      733
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 29
                      },
                      "start": {
                        "column": 16,
                        "line": 29
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    732,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 29
                    },
                    "start": {
                      "column": 16,
                      "line": 29
                    }
                  }
                }
              ]
            },
            "range": [
              720,
              771
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prepend",
              "optional": false,
              "range": [
                782,
                789
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
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
                          "column": 17,
                          "line": 33
                        },
                        "start": {
                          "column": 14,
                          "line": 33
                        }
                      },
                      "range": [
                        826,
                        829
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            828,
                            829
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 33
                            },
                            "start": {
                              "column": 16,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          828,
                          829
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 33
                          },
                          "start": {
                            "column": 16,
                            "line": 33
                          }
                        }
                      }
                    },
                    "range": [
                      822,
                      829
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 33
                      },
                      "start": {
                        "column": 10,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "range": [
                        834,
                        838
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 33
                        },
                        "start": {
                          "column": 22,
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
                          "column": 29,
                          "line": 33
                        },
                        "start": {
                          "column": 26,
                          "line": 33
                        }
                      },
                      "range": [
                        838,
                        841
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            840,
                            841
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 33
                            },
                            "start": {
                              "column": 28,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          840,
                          841
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 33
                          },
                          "start": {
                            "column": 28,
                            "line": 33
                          }
                        }
                      }
                    },
                    "range": [
                      831,
                      841
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 33
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 33
                    },
                    "start": {
                      "column": 31,
                      "line": 33
                    }
                  },
                  "range": [
                    843,
                    849
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      846,
                      849
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 33
                      },
                      "start": {
                        "column": 34,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  821,
                  849
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
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
                        864,
                        868
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 33
                        },
                        "start": {
                          "column": 52,
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
                          "column": 65,
                          "line": 33
                        },
                        "start": {
                          "column": 56,
                          "line": 33
                        }
                      },
                      "range": [
                        868,
                        877
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
                              876,
                              877
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 33
                              },
                              "start": {
                                "column": 64,
                                "line": 33
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            876,
                            877
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 33
                            },
                            "start": {
                              "column": 64,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          870,
                          877
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 33
                          },
                          "start": {
                            "column": 58,
                            "line": 33
                          }
                        }
                      }
                    },
                    "range": [
                      861,
                      877
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 33
                      },
                      "start": {
                        "column": 49,
                        "line": 33
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 33
                    },
                    "start": {
                      "column": 67,
                      "line": 33
                    }
                  },
                  "range": [
                    879,
                    885
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      882,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 33
                      },
                      "start": {
                        "column": 70,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  860,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 33
                  },
                  "start": {
                    "column": 48,
                    "line": 33
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    909,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 35
                    },
                    "start": {
                      "column": 10,
                      "line": 35
                    }
                  }
                },
                "range": [
                  909,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 35
                  },
                  "start": {
                    "column": 10,
                    "line": 35
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
                    897,
                    898
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                },
                "range": [
                  897,
                  898
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 34
                  }
                }
              },
              "range": [
                820,
                910
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 32
                },
                "start": {
                  "column": 16,
                  "line": 32
                }
              },
              "range": [
                789,
                809
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      790,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 17,
                        "line": 32
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    790,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 17,
                      "line": 32
                    }
                  }
                },
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
                          "column": 33,
                          "line": 32
                        },
                        "start": {
                          "column": 30,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      803,
                      808
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 30,
                        "line": 32
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
                        "column": 21,
                        "line": 32
                      },
                      "start": {
                        "column": 20,
                        "line": 32
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
                      "column": 35,
                      "line": 32
                    },
                    "start": {
                      "column": 20,
                      "line": 32
                    }
                  }
                }
              ]
            },
            "range": [
              777,
              911
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Drop",
              "optional": false,
              "range": [
                922,
                926
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1069,
                      1072
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
                            1070,
                            1071
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 41
                            },
                            "start": {
                              "column": 15,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1070,
                          1071
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 41
                          },
                          "start": {
                            "column": 15,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 41
                      },
                      "start": {
                        "column": 14,
                        "line": 41
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "range": [
                      1063,
                      1069
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1063,
                    1072
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
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
                      1081,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 41
                      },
                      "start": {
                        "column": 26,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1081,
                    1082
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 41
                    },
                    "start": {
                      "column": 26,
                      "line": 41
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1105,
                      1106
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 43
                      },
                      "start": {
                        "column": 10,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1105,
                    1106
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1093,
                      1094
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 42
                      },
                      "start": {
                        "column": 10,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1093,
                    1094
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 42
                    },
                    "start": {
                      "column": 10,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1063,
                  1106
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 43
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              },
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        996,
                        997
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 38
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
                          "column": 44,
                          "line": 38
                        },
                        "start": {
                          "column": 9,
                          "line": 38
                        }
                      },
                      "range": [
                        997,
                        1032
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1003,
                            1032
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "N",
                                "optional": false,
                                "range": [
                                  1004,
                                  1005
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                1004,
                                1005
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 38
                                },
                                "start": {
                                  "column": 16,
                                  "line": 38
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1011,
                                  1014
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
                                        1012,
                                        1013
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 38
                                        }
                                      }
                                    },
                                    "range": [
                                      1012,
                                      1013
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 38
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 38
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tail",
                                "optional": false,
                                "range": [
                                  1007,
                                  1011
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                1007,
                                1014
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 38
                                },
                                "start": {
                                  "column": 19,
                                  "line": 38
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1023,
                                  1031
                                ],
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1024,
                                      1027
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 38
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "range": [
                                        1029,
                                        1030
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 38
                                        }
                                      }
                                    },
                                    "range": [
                                      1029,
                                      1030
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 38
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 38
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Prepend",
                                "optional": false,
                                "range": [
                                  1016,
                                  1023
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                1016,
                                1031
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 38
                                },
                                "start": {
                                  "column": 28,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 38
                            },
                            "start": {
                              "column": 15,
                              "line": 38
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Drop",
                          "optional": false,
                          "range": [
                            999,
                            1003
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 38
                            },
                            "start": {
                              "column": 11,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          999,
                          1032
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 38
                          },
                          "start": {
                            "column": 11,
                            "line": 38
                          }
                        }
                      }
                    },
                    "range": [
                      996,
                      1033
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1042,
                        1043
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
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
                          "column": 12,
                          "line": 39
                        },
                        "start": {
                          "column": 9,
                          "line": 39
                        }
                      },
                      "range": [
                        1043,
                        1046
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1045,
                            1046
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 39
                            },
                            "start": {
                              "column": 11,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1045,
                          1046
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 39
                          },
                          "start": {
                            "column": 11,
                            "line": 39
                          }
                        }
                      }
                    },
                    "range": [
                      1042,
                      1047
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  986,
                  1053
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 73,
                    "line": 37
                  }
                }
              },
              "range": [
                986,
                1112
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 73,
                  "line": 37
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              },
              "range": [
                926,
                983
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "range": [
                      937,
                      943
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 37
                      },
                      "start": {
                        "column": 24,
                        "line": 37
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
                      927,
                      928
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 37
                      },
                      "start": {
                        "column": 14,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    927,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 37
                    },
                    "start": {
                      "column": 14,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        955,
                        958
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 37
                        },
                        "start": {
                          "column": 42,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      955,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 37
                      },
                      "start": {
                        "column": 42,
                        "line": 37
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
                      945,
                      946
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 37
                      },
                      "start": {
                        "column": 32,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    945,
                    960
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 37
                    },
                    "start": {
                      "column": 32,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        972,
                        975
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 37
                        },
                        "start": {
                          "column": 59,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      972,
                      977
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 37
                      },
                      "start": {
                        "column": 59,
                        "line": 37
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      980,
                      982
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 37
                      },
                      "start": {
                        "column": 67,
                        "line": 37
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
                      962,
                      963
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 37
                      },
                      "start": {
                        "column": 49,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    962,
                    982
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 37
                    },
                    "start": {
                      "column": 49,
                      "line": 37
                    }
                  }
                }
              ]
            },
            "range": [
              917,
              1113
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cast",
              "optional": false,
              "range": [
                1124,
                1128
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 46
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
                  "name": "X",
                  "optional": false,
                  "range": [
                    1137,
                    1138
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 46
                    },
                    "start": {
                      "column": 22,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1137,
                  1138
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    1147,
                    1148
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 46
                    },
                    "start": {
                      "column": 32,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1147,
                  1148
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 46
                  },
                  "start": {
                    "column": 32,
                    "line": 46
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    1155,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 46
                    },
                    "start": {
                      "column": 40,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1155,
                  1156
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 46
                  },
                  "start": {
                    "column": 40,
                    "line": 46
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    1151,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 46
                    },
                    "start": {
                      "column": 36,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1151,
                  1152
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 46
                  },
                  "start": {
                    "column": 36,
                    "line": 46
                  }
                }
              },
              "range": [
                1137,
                1156
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 46
                },
                "start": {
                  "column": 22,
                  "line": 46
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 46
                },
                "start": {
                  "column": 13,
                  "line": 46
                }
              },
              "range": [
                1128,
                1134
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      1129,
                      1130
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 46
                      },
                      "start": {
                        "column": 14,
                        "line": 46
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1129,
                    1130
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 46
                    },
                    "start": {
                      "column": 14,
                      "line": 46
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
                    "name": "Y",
                    "optional": false,
                    "range": [
                      1132,
                      1133
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 46
                      },
                      "start": {
                        "column": 17,
                        "line": 46
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1132,
                    1133
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 46
                    },
                    "start": {
                      "column": 17,
                      "line": 46
                    }
                  }
                }
              ]
            },
            "range": [
              1119,
              1157
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pos",
              "optional": false,
              "range": [
                1168,
                1171
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 48
                },
                "start": {
                  "column": 9,
                  "line": 48
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1205,
                  1208
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
                        1206,
                        1207
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 49
                        },
                        "start": {
                          "column": 15,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1206,
                      1207
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 49
                      },
                      "start": {
                        "column": 15,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 49
                  },
                  "start": {
                    "column": 14,
                    "line": 49
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "range": [
                  1199,
                  1205
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              },
              "range": [
                1199,
                1208
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 49
                },
                "start": {
                  "column": 8,
                  "line": 49
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              },
              "range": [
                1171,
                1188
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
                        1182,
                        1185
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 48
                        },
                        "start": {
                          "column": 23,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1182,
                      1187
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 48
                      },
                      "start": {
                        "column": 23,
                        "line": 48
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
                      1172,
                      1173
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 48
                      },
                      "start": {
                        "column": 13,
                        "line": 48
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1172,
                    1187
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 48
                    },
                    "start": {
                      "column": 13,
                      "line": 48
                    }
                  }
                }
              ]
            },
            "range": [
              1163,
              1209
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Next",
              "optional": false,
              "range": [
                1220,
                1224
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1259,
                  1267
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1260,
                      1263
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 52
                      },
                      "start": {
                        "column": 16,
                        "line": 52
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "range": [
                        1265,
                        1266
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 52
                        },
                        "start": {
                          "column": 21,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1265,
                      1266
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 52
                      },
                      "start": {
                        "column": 21,
                        "line": 52
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 52
                  },
                  "start": {
                    "column": 15,
                    "line": 52
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prepend",
                "optional": false,
                "range": [
                  1252,
                  1259
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              },
              "range": [
                1252,
                1267
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 52
                },
                "start": {
                  "column": 8,
                  "line": 52
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 51
                },
                "start": {
                  "column": 13,
                  "line": 51
                }
              },
              "range": [
                1224,
                1241
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
                        1235,
                        1238
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 51
                        },
                        "start": {
                          "column": 24,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1235,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 51
                      },
                      "start": {
                        "column": 24,
                        "line": 51
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
                      1225,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 51
                      },
                      "start": {
                        "column": 14,
                        "line": 51
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1225,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 51
                    },
                    "start": {
                      "column": 14,
                      "line": 51
                    }
                  }
                }
              ]
            },
            "range": [
              1215,
              1268
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prev",
              "optional": false,
              "range": [
                1279,
                1283
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 54
                },
                "start": {
                  "column": 9,
                  "line": 54
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1315,
                  1318
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
                        1316,
                        1317
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 55
                        },
                        "start": {
                          "column": 13,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1316,
                      1317
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 55
                      },
                      "start": {
                        "column": 13,
                        "line": 55
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 55
                  },
                  "start": {
                    "column": 12,
                    "line": 55
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tail",
                "optional": false,
                "range": [
                  1311,
                  1315
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              },
              "range": [
                1311,
                1318
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 55
                },
                "start": {
                  "column": 8,
                  "line": 55
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 54
                },
                "start": {
                  "column": 13,
                  "line": 54
                }
              },
              "range": [
                1283,
                1300
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
                        1294,
                        1297
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 54
                        },
                        "start": {
                          "column": 24,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1294,
                      1299
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 54
                      },
                      "start": {
                        "column": 24,
                        "line": 54
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
                      1284,
                      1285
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 54
                      },
                      "start": {
                        "column": 14,
                        "line": 54
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1284,
                    1299
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 54
                    },
                    "start": {
                      "column": 14,
                      "line": 54
                    }
                  }
                }
              ]
            },
            "range": [
              1274,
              1319
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterator",
              "optional": false,
              "range": [
                1330,
                1338
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 57
                },
                "start": {
                  "column": 9,
                  "line": 57
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1500,
                      1503
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
                            1501,
                            1502
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 61
                            },
                            "start": {
                              "column": 12,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          1501,
                          1502
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 61
                      },
                      "start": {
                        "column": 11,
                        "line": 61
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pos",
                    "optional": false,
                    "range": [
                      1497,
                      1500
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1497,
                    1503
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Index",
                    "optional": false,
                    "range": [
                      1512,
                      1517
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 61
                      },
                      "start": {
                        "column": 23,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1512,
                    1517
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 61
                    },
                    "start": {
                      "column": 23,
                      "line": 61
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1540,
                      1541
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 63
                      },
                      "start": {
                        "column": 10,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1540,
                    1541
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 63
                    },
                    "start": {
                      "column": 10,
                      "line": 63
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1528,
                      1529
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 62
                      },
                      "start": {
                        "column": 10,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1528,
                    1529
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 62
                    },
                    "start": {
                      "column": 10,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1497,
                  1541
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 61
                  }
                }
              },
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1424,
                        1425
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
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
                          "line": 58
                        },
                        "start": {
                          "column": 9,
                          "line": 58
                        }
                      },
                      "range": [
                        1425,
                        1463
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1435,
                            1463
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Index",
                                "optional": false,
                                "range": [
                                  1436,
                                  1441
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 58
                                  }
                                }
                              },
                              "range": [
                                1436,
                                1441
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 58
                                },
                                "start": {
                                  "column": 20,
                                  "line": 58
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1447,
                                  1453
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "From",
                                      "optional": false,
                                      "range": [
                                        1448,
                                        1452
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 58
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 58
                                        }
                                      }
                                    },
                                    "range": [
                                      1448,
                                      1452
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 58
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 58
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 58
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "range": [
                                  1443,
                                  1447
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 58
                                  }
                                }
                              },
                              "range": [
                                1443,
                                1453
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 58
                                },
                                "start": {
                                  "column": 27,
                                  "line": 58
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1459,
                                  1462
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
                                        1460,
                                        1461
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 58
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 58
                                        }
                                      }
                                    },
                                    "range": [
                                      1460,
                                      1461
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 58
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 58
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 58
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "range": [
                                  1455,
                                  1459
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 58
                                  }
                                }
                              },
                              "range": [
                                1455,
                                1462
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 58
                                },
                                "start": {
                                  "column": 39,
                                  "line": 58
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 58
                            },
                            "start": {
                              "column": 19,
                              "line": 58
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false,
                          "range": [
                            1427,
                            1435
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 58
                            },
                            "start": {
                              "column": 11,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          1427,
                          1463
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 58
                          },
                          "start": {
                            "column": 11,
                            "line": 58
                          }
                        }
                      }
                    },
                    "range": [
                      1424,
                      1464
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1473,
                        1474
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
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
                          "line": 59
                        },
                        "start": {
                          "column": 9,
                          "line": 59
                        }
                      },
                      "range": [
                        1474,
                        1480
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "From",
                          "optional": false,
                          "range": [
                            1476,
                            1480
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 59
                            },
                            "start": {
                              "column": 11,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1476,
                          1480
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 59
                          },
                          "start": {
                            "column": 11,
                            "line": 59
                          }
                        }
                      }
                    },
                    "range": [
                      1473,
                      1481
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  1414,
                  1487
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 93,
                    "line": 57
                  }
                }
              },
              "range": [
                1414,
                1547
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 93,
                  "line": 57
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 90,
                  "line": 57
                },
                "start": {
                  "column": 17,
                  "line": 57
                }
              },
              "range": [
                1338,
                1411
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1353,
                      1359
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 57
                      },
                      "start": {
                        "column": 32,
                        "line": 57
                      }
                    }
                  },
                  "default": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1362,
                        1363
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 57
                        },
                        "start": {
                          "column": 41,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1362,
                      1363
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 57
                      },
                      "start": {
                        "column": 41,
                        "line": 57
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Index",
                    "optional": false,
                    "range": [
                      1339,
                      1344
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 57
                      },
                      "start": {
                        "column": 18,
                        "line": 57
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1339,
                    1363
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 57
                    },
                    "start": {
                      "column": 18,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1378,
                        1381
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 57
                        },
                        "start": {
                          "column": 57,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1378,
                      1383
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 57
                      },
                      "start": {
                        "column": 57,
                        "line": 57
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      1386,
                      1388
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 57
                      },
                      "start": {
                        "column": 65,
                        "line": 57
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "From",
                    "optional": false,
                    "range": [
                      1365,
                      1369
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 57
                      },
                      "start": {
                        "column": 44,
                        "line": 57
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1365,
                    1388
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 57
                    },
                    "start": {
                      "column": 44,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1400,
                        1403
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 57
                        },
                        "start": {
                          "column": 79,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1400,
                      1405
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 57
                      },
                      "start": {
                        "column": 79,
                        "line": 57
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      1408,
                      1410
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 57
                      },
                      "start": {
                        "column": 87,
                        "line": 57
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
                      1390,
                      1391
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 57
                      },
                      "start": {
                        "column": 69,
                        "line": 57
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1390,
                    1410
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 57
                    },
                    "start": {
                      "column": 69,
                      "line": 57
                    }
                  }
                }
              ]
            },
            "range": [
              1325,
              1548
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Reverse",
              "optional": false,
              "range": [
                1559,
                1566
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 66
                },
                "start": {
                  "column": 9,
                  "line": 66
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1719,
                      1722
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
                            1720,
                            1721
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 70
                            },
                            "start": {
                              "column": 12,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1720,
                          1721
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 70
                          },
                          "start": {
                            "column": 12,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 70
                      },
                      "start": {
                        "column": 11,
                        "line": 70
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pos",
                    "optional": false,
                    "range": [
                      1716,
                      1719
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1716,
                    1722
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1737,
                      1740
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
                            1738,
                            1739
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 70
                            },
                            "start": {
                              "column": 30,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1738,
                          1739
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 70
                          },
                          "start": {
                            "column": 30,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 70
                      },
                      "start": {
                        "column": 29,
                        "line": 70
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "range": [
                      1731,
                      1737
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 70
                      },
                      "start": {
                        "column": 23,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1731,
                    1740
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 70
                    },
                    "start": {
                      "column": 23,
                      "line": 70
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1763,
                      1764
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 72
                      },
                      "start": {
                        "column": 10,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1763,
                    1764
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 72
                    },
                    "start": {
                      "column": 10,
                      "line": 72
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1751,
                      1752
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 71
                      },
                      "start": {
                        "column": 10,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1751,
                    1752
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1716,
                  1764
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              },
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1640,
                        1641
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
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
                          "line": 67
                        },
                        "start": {
                          "column": 9,
                          "line": 67
                        }
                      },
                      "range": [
                        1641,
                        1685
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1650,
                            1685
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
                                  1651,
                                  1652
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 67
                                  }
                                }
                              },
                              "range": [
                                1651,
                                1652
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 67
                                },
                                "start": {
                                  "column": 19,
                                  "line": 67
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1661,
                                  1675
                                ],
                                "params": [
                                  {
                                    "type": "TSIndexedAccessType",
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          1667,
                                          1670
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
                                                1668,
                                                1669
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 67
                                                },
                                                "start": {
                                                  "column": 36,
                                                  "line": 67
                                                }
                                              }
                                            },
                                            "range": [
                                              1668,
                                              1669
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 37,
                                                "line": 67
                                              },
                                              "start": {
                                                "column": 36,
                                                "line": 67
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 67
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 67
                                          }
                                        }
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Pos",
                                        "optional": false,
                                        "range": [
                                          1664,
                                          1667
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 67
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 67
                                          }
                                        }
                                      },
                                      "range": [
                                        1664,
                                        1670
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 67
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 67
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
                                          1662,
                                          1663
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 67
                                          },
                                          "start": {
                                            "column": 30,
                                            "line": 67
                                          }
                                        }
                                      },
                                      "range": [
                                        1662,
                                        1663
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 67
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 67
                                        }
                                      }
                                    },
                                    "range": [
                                      1662,
                                      1671
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 67
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "range": [
                                        1673,
                                        1674
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 67
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 67
                                        }
                                      }
                                    },
                                    "range": [
                                      1673,
                                      1674
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 67
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 67
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Prepend",
                                "optional": false,
                                "range": [
                                  1654,
                                  1661
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 67
                                  }
                                }
                              },
                              "range": [
                                1654,
                                1675
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 67
                                },
                                "start": {
                                  "column": 22,
                                  "line": 67
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1681,
                                  1684
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
                                        1682,
                                        1683
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 67
                                        },
                                        "start": {
                                          "column": 50,
                                          "line": 67
                                        }
                                      }
                                    },
                                    "range": [
                                      1682,
                                      1683
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 67
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 67
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "range": [
                                  1677,
                                  1681
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 67
                                  }
                                }
                              },
                              "range": [
                                1677,
                                1684
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 67
                                },
                                "start": {
                                  "column": 45,
                                  "line": 67
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 67
                            },
                            "start": {
                              "column": 18,
                              "line": 67
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Reverse",
                          "optional": false,
                          "range": [
                            1643,
                            1650
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 67
                            },
                            "start": {
                              "column": 11,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1643,
                          1685
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 67
                          },
                          "start": {
                            "column": 11,
                            "line": 67
                          }
                        }
                      }
                    },
                    "range": [
                      1640,
                      1686
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1695,
                        1696
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 68
                        },
                        "start": {
                          "column": 8,
                          "line": 68
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
                          "column": 12,
                          "line": 68
                        },
                        "start": {
                          "column": 9,
                          "line": 68
                        }
                      },
                      "range": [
                        1696,
                        1699
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            1698,
                            1699
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 68
                            },
                            "start": {
                              "column": 11,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1698,
                          1699
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 68
                          },
                          "start": {
                            "column": 11,
                            "line": 68
                          }
                        }
                      }
                    },
                    "range": [
                      1695,
                      1700
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1630,
                  1706
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 69
                  },
                  "start": {
                    "column": 80,
                    "line": 66
                  }
                }
              },
              "range": [
                1630,
                1770
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 80,
                  "line": 66
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 77,
                  "line": 66
                },
                "start": {
                  "column": 16,
                  "line": 66
                }
              },
              "range": [
                1566,
                1627
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
                        1577,
                        1580
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 66
                        },
                        "start": {
                          "column": 27,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1577,
                      1582
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 66
                      },
                      "start": {
                        "column": 27,
                        "line": 66
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
                      1567,
                      1568
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 66
                      },
                      "start": {
                        "column": 17,
                        "line": 66
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1567,
                    1582
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 66
                    },
                    "start": {
                      "column": 17,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1594,
                        1597
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 66
                        },
                        "start": {
                          "column": 44,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1594,
                      1599
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 66
                      },
                      "start": {
                        "column": 44,
                        "line": 66
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      1602,
                      1604
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 66
                      },
                      "start": {
                        "column": 52,
                        "line": 66
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      1584,
                      1585
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 66
                      },
                      "start": {
                        "column": 34,
                        "line": 66
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1584,
                    1604
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 66
                    },
                    "start": {
                      "column": 34,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1616,
                        1619
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 66
                        },
                        "start": {
                          "column": 66,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1616,
                      1621
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 66
                      },
                      "start": {
                        "column": 66,
                        "line": 66
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      1624,
                      1626
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 66
                      },
                      "start": {
                        "column": 74,
                        "line": 66
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
                      1606,
                      1607
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 66
                      },
                      "start": {
                        "column": 56,
                        "line": 66
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1606,
                    1626
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 66
                    },
                    "start": {
                      "column": 56,
                      "line": 66
                    }
                  }
                }
              ]
            },
            "range": [
              1554,
              1771
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Concat",
              "optional": false,
              "range": [
                1782,
                1788
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 75
                },
                "start": {
                  "column": 9,
                  "line": 75
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1842,
                  1900
                ],
                "params": [
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1850,
                          1854
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "range": [
                                1851,
                                1853
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 76
                                },
                                "start": {
                                  "column": 24,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              1851,
                              1853
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 76
                              },
                              "start": {
                                "column": 24,
                                "line": 76
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 76
                          },
                          "start": {
                            "column": 23,
                            "line": 76
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Reverse",
                        "optional": false,
                        "range": [
                          1843,
                          1850
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 76
                          },
                          "start": {
                            "column": 16,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1843,
                        1854
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 76
                        },
                        "start": {
                          "column": 16,
                          "line": 76
                        }
                      }
                    },
                    "extendsType": {
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
                            1869,
                            1870
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 76
                            },
                            "start": {
                              "column": 42,
                              "line": 76
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          1869,
                          1870
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 76
                          },
                          "start": {
                            "column": 42,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1863,
                        1870
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 76
                        },
                        "start": {
                          "column": 36,
                          "line": 76
                        }
                      }
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "range": [
                        1890,
                        1895
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 76
                        },
                        "start": {
                          "column": 63,
                          "line": 76
                        }
                      }
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1877,
                          1887
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "range": [
                                1878,
                                1879
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 76
                                },
                                "start": {
                                  "column": 51,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              1878,
                              1879
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 76
                              },
                              "start": {
                                "column": 51,
                                "line": 76
                              }
                            }
                          },
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                1881,
                                1884
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 76
                                },
                                "start": {
                                  "column": 54,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              1881,
                              1886
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 76
                              },
                              "start": {
                                "column": 54,
                                "line": 76
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 76
                          },
                          "start": {
                            "column": 50,
                            "line": 76
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cast",
                        "optional": false,
                        "range": [
                          1873,
                          1877
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 76
                          },
                          "start": {
                            "column": 46,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1873,
                        1887
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 76
                        },
                        "start": {
                          "column": 46,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1843,
                      1895
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 76
                      },
                      "start": {
                        "column": 16,
                        "line": 76
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "range": [
                        1897,
                        1899
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 76
                        },
                        "start": {
                          "column": 70,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1897,
                      1899
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 76
                      },
                      "start": {
                        "column": 70,
                        "line": 76
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 76
                  },
                  "start": {
                    "column": 15,
                    "line": 76
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reverse",
                "optional": false,
                "range": [
                  1835,
                  1842
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 76
                  },
                  "start": {
                    "column": 8,
                    "line": 76
                  }
                }
              },
              "range": [
                1835,
                1900
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 76
                },
                "start": {
                  "column": 8,
                  "line": 76
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 75
                },
                "start": {
                  "column": 15,
                  "line": 75
                }
              },
              "range": [
                1788,
                1824
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
                        1800,
                        1803
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 75
                        },
                        "start": {
                          "column": 27,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1800,
                      1805
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 75
                      },
                      "start": {
                        "column": 27,
                        "line": 75
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      1789,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 75
                      },
                      "start": {
                        "column": 16,
                        "line": 75
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1789,
                    1805
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 75
                    },
                    "start": {
                      "column": 16,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1818,
                        1821
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 75
                        },
                        "start": {
                          "column": 45,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1818,
                      1823
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 75
                      },
                      "start": {
                        "column": 45,
                        "line": 75
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "range": [
                      1807,
                      1809
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 75
                      },
                      "start": {
                        "column": 34,
                        "line": 75
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1807,
                    1823
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 75
                    },
                    "start": {
                      "column": 34,
                      "line": 75
                    }
                  }
                }
              ]
            },
            "range": [
              1777,
              1901
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Append",
              "optional": false,
              "range": [
                1912,
                1918
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 78
                },
                "start": {
                  "column": 9,
                  "line": 78
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1955,
                  1963
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
                        1956,
                        1957
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 79
                        },
                        "start": {
                          "column": 15,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1956,
                      1957
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 79
                      },
                      "start": {
                        "column": 15,
                        "line": 79
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
                          "name": "E",
                          "optional": false,
                          "range": [
                            1960,
                            1961
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 79
                            },
                            "start": {
                              "column": 19,
                              "line": 79
                            }
                          }
                        },
                        "range": [
                          1960,
                          1961
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 79
                          },
                          "start": {
                            "column": 19,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "range": [
                      1959,
                      1962
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 79
                      },
                      "start": {
                        "column": 18,
                        "line": 79
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 79
                  },
                  "start": {
                    "column": 14,
                    "line": 79
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Concat",
                "optional": false,
                "range": [
                  1949,
                  1955
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 79
                  },
                  "start": {
                    "column": 8,
                    "line": 79
                  }
                }
              },
              "range": [
                1949,
                1963
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 79
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 78
                },
                "start": {
                  "column": 15,
                  "line": 78
                }
              },
              "range": [
                1918,
                1938
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      1919,
                      1920
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 78
                      },
                      "start": {
                        "column": 16,
                        "line": 78
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1919,
                    1920
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 78
                    },
                    "start": {
                      "column": 16,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1932,
                        1935
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 78
                        },
                        "start": {
                          "column": 29,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      1932,
                      1937
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 78
                      },
                      "start": {
                        "column": 29,
                        "line": 78
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
                      1922,
                      1923
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 78
                      },
                      "start": {
                        "column": 19,
                        "line": 78
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1922,
                    1937
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 78
                    },
                    "start": {
                      "column": 19,
                      "line": 78
                    }
                  }
                }
              ]
            },
            "range": [
              1907,
              1964
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ValueOfRecord",
              "optional": false,
              "range": [
                1975,
                1988
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 81
                },
                "start": {
                  "column": 9,
                  "line": 81
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
                  "name": "R",
                  "optional": false,
                  "range": [
                    1994,
                    1995
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 81
                    },
                    "start": {
                      "column": 28,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1994,
                  1995
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 81
                  },
                  "start": {
                    "column": 28,
                    "line": 81
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2010,
                    2024
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2011,
                        2014
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 81
                        },
                        "start": {
                          "column": 45,
                          "line": 81
                        }
                      }
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            2022,
                            2023
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 81
                            },
                            "start": {
                              "column": 56,
                              "line": 81
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          2022,
                          2023
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 81
                          },
                          "start": {
                            "column": 56,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        2016,
                        2023
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 81
                        },
                        "start": {
                          "column": 50,
                          "line": 81
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 81
                    },
                    "start": {
                      "column": 44,
                      "line": 81
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    2004,
                    2010
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 81
                    },
                    "start": {
                      "column": 38,
                      "line": 81
                    }
                  }
                },
                "range": [
                  2004,
                  2024
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 81
                  },
                  "start": {
                    "column": 38,
                    "line": 81
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  2031,
                  2036
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 81
                  },
                  "start": {
                    "column": 65,
                    "line": 81
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
                    2027,
                    2028
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 81
                    },
                    "start": {
                      "column": 61,
                      "line": 81
                    }
                  }
                },
                "range": [
                  2027,
                  2028
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 81
                  },
                  "start": {
                    "column": 61,
                    "line": 81
                  }
                }
              },
              "range": [
                1994,
                2036
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 81
                },
                "start": {
                  "column": 28,
                  "line": 81
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 81
                },
                "start": {
                  "column": 22,
                  "line": 81
                }
              },
              "range": [
                1988,
                1991
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      1989,
                      1990
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 81
                      },
                      "start": {
                        "column": 23,
                        "line": 81
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1989,
                    1990
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 81
                    },
                    "start": {
                      "column": 23,
                      "line": 81
                    }
                  }
                }
              ]
            },
            "range": [
              1970,
              2037
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          }
        ],
        "range": [
          229,
          2039
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 82
          },
          "start": {
            "column": 24,
            "line": 4
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          223,
          228
        ],
        "decorators": [],
        "name": "Tools",
        "optional": false,
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "kind": "namespace",
      "range": [
        205,
        2039
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              2067,
              2117
            ],
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Placeholder",
                "optional": false,
                "range": [
                  2079,
                  2090
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 85
                  },
                  "start": {
                    "column": 16,
                    "line": 85
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
                      "name": "__placeholder",
                      "optional": false,
                      "range": [
                        2095,
                        2108
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 85
                        },
                        "start": {
                          "column": 32,
                          "line": 85
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
                          "column": 51,
                          "line": 85
                        },
                        "start": {
                          "column": 45,
                          "line": 85
                        }
                      },
                      "range": [
                        2108,
                        2114
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          2110,
                          2114
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 85
                          },
                          "start": {
                            "column": 47,
                            "line": 85
                          }
                        }
                      }
                    },
                    "range": [
                      2095,
                      2114
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 85
                      },
                      "start": {
                        "column": 32,
                        "line": 85
                      }
                    }
                  }
                ],
                "range": [
                  2093,
                  2116
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 85
                  },
                  "start": {
                    "column": 30,
                    "line": 85
                  }
                }
              },
              "range": [
                2074,
                2117
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 85
                },
                "start": {
                  "column": 11,
                  "line": 85
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 54,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          2061,
          2119
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 20,
            "line": 84
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          2059,
          2060
        ],
        "decorators": [],
        "name": "R",
        "optional": false,
        "loc": {
          "end": {
            "column": 19,
            "line": 84
          },
          "start": {
            "column": 18,
            "line": 84
          }
        }
      },
      "kind": "namespace",
      "range": [
        2041,
        2119
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapOf",
              "optional": false,
              "range": [
                2156,
                2161
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 89
                },
                "start": {
                  "column": 9,
                  "line": 89
                }
              }
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2255,
                      2258
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
                            2256,
                            2257
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 90
                            },
                            "start": {
                              "column": 21,
                              "line": 90
                            }
                          }
                        },
                        "range": [
                          2256,
                          2257
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 90
                          },
                          "start": {
                            "column": 21,
                            "line": 90
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 90
                      },
                      "start": {
                        "column": 20,
                        "line": 90
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "range": [
                        2246,
                        2251
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 90
                        },
                        "start": {
                          "column": 11,
                          "line": 90
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pos",
                      "optional": false,
                      "range": [
                        2252,
                        2255
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 90
                        },
                        "start": {
                          "column": 17,
                          "line": 90
                        }
                      }
                    },
                    "range": [
                      2246,
                      2255
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 90
                      },
                      "start": {
                        "column": 11,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    2246,
                    2258
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 90
                    },
                    "start": {
                      "column": 11,
                      "line": 90
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      2243,
                      2245
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    2243,
                    2245
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                "range": [
                  2243,
                  2259
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 90
                  },
                  "start": {
                    "column": 8,
                    "line": 90
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      2268,
                      2269
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 90
                      },
                      "start": {
                        "column": 33,
                        "line": 90
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Placeholder",
                    "optional": false,
                    "range": [
                      2270,
                      2281
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 90
                      },
                      "start": {
                        "column": 35,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    2268,
                    2281
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 90
                    },
                    "start": {
                      "column": 33,
                      "line": 90
                    }
                  }
                },
                "range": [
                  2268,
                  2281
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 90
                  },
                  "start": {
                    "column": 33,
                    "line": 90
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TN",
                  "optional": false,
                  "range": [
                    2337,
                    2339
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 92
                    },
                    "start": {
                      "column": 10,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2337,
                  2339
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 92
                  },
                  "start": {
                    "column": 10,
                    "line": 92
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2304,
                    2326
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            2317,
                            2320
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
                                  2318,
                                  2319
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 91
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 91
                                  }
                                }
                              },
                              "range": [
                                2318,
                                2319
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 91
                                },
                                "start": {
                                  "column": 36,
                                  "line": 91
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 91
                            },
                            "start": {
                              "column": 35,
                              "line": 91
                            }
                          }
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tools",
                            "optional": false,
                            "range": [
                              2308,
                              2313
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 91
                              },
                              "start": {
                                "column": 26,
                                "line": 91
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pos",
                            "optional": false,
                            "range": [
                              2314,
                              2317
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 91
                              },
                              "start": {
                                "column": 32,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2308,
                            2317
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 91
                            },
                            "start": {
                              "column": 26,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          2308,
                          2320
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 91
                          },
                          "start": {
                            "column": 26,
                            "line": 91
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "range": [
                            2305,
                            2307
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 91
                            },
                            "start": {
                              "column": 23,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          2305,
                          2307
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 91
                          },
                          "start": {
                            "column": 23,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        2305,
                        2321
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 91
                        },
                        "start": {
                          "column": 23,
                          "line": 91
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TN",
                        "optional": false,
                        "range": [
                          2323,
                          2325
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 91
                          },
                          "start": {
                            "column": 41,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        2323,
                        2325
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 91
                        },
                        "start": {
                          "column": 41,
                          "line": 91
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 91
                    },
                    "start": {
                      "column": 22,
                      "line": 91
                    }
                  }
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tools",
                    "optional": false,
                    "range": [
                      2292,
                      2297
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 91
                      },
                      "start": {
                        "column": 10,
                        "line": 91
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Append",
                    "optional": false,
                    "range": [
                      2298,
                      2304
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 91
                      },
                      "start": {
                        "column": 16,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    2292,
                    2304
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 91
                    },
                    "start": {
                      "column": 10,
                      "line": 91
                    }
                  }
                },
                "range": [
                  2292,
                  2326
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 91
                  },
                  "start": {
                    "column": 10,
                    "line": 91
                  }
                }
              },
              "range": [
                2243,
                2339
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 92
                },
                "start": {
                  "column": 8,
                  "line": 90
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 85,
                  "line": 89
                },
                "start": {
                  "column": 14,
                  "line": 89
                }
              },
              "range": [
                2161,
                2232
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
                        2173,
                        2176
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 89
                        },
                        "start": {
                          "column": 26,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      2173,
                      2178
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 89
                      },
                      "start": {
                        "column": 26,
                        "line": 89
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      2162,
                      2164
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 89
                      },
                      "start": {
                        "column": 15,
                        "line": 89
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2162,
                    2178
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 89
                    },
                    "start": {
                      "column": 15,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2191,
                        2194
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 89
                        },
                        "start": {
                          "column": 44,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      2191,
                      2196
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 89
                      },
                      "start": {
                        "column": 44,
                        "line": 89
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "range": [
                      2180,
                      2182
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 89
                      },
                      "start": {
                        "column": 33,
                        "line": 89
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2180,
                    2196
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 89
                    },
                    "start": {
                      "column": 33,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2209,
                        2212
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 89
                        },
                        "start": {
                          "column": 62,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      2209,
                      2214
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 89
                      },
                      "start": {
                        "column": 62,
                        "line": 89
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "range": [
                      2198,
                      2200
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 89
                      },
                      "start": {
                        "column": 51,
                        "line": 89
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2198,
                    2214
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 89
                    },
                    "start": {
                      "column": 51,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2226,
                        2229
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 89
                        },
                        "start": {
                          "column": 79,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      2226,
                      2231
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 89
                      },
                      "start": {
                        "column": 79,
                        "line": 89
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
                      2216,
                      2217
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 89
                      },
                      "start": {
                        "column": 69,
                        "line": 89
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2216,
                    2231
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 89
                    },
                    "start": {
                      "column": 69,
                      "line": 89
                    }
                  }
                }
              ]
            },
            "range": [
              2151,
              2340
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                2450,
                2674
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      2460,
                      2461
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 95
                      },
                      "start": {
                        "column": 8,
                        "line": 95
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
                        "column": 109,
                        "line": 95
                      },
                      "start": {
                        "column": 9,
                        "line": 95
                      }
                    },
                    "range": [
                      2461,
                      2561
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2469,
                          2561
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "range": [
                                2470,
                                2472
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 95
                                },
                                "start": {
                                  "column": 18,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              2470,
                              2472
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 95
                              },
                              "start": {
                                "column": 18,
                                "line": 95
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T2",
                              "optional": false,
                              "range": [
                                2474,
                                2476
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 95
                                },
                                "start": {
                                  "column": 22,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              2474,
                              2476
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 95
                              },
                              "start": {
                                "column": 22,
                                "line": 95
                              }
                            }
                          },
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2483,
                                  2498
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T1",
                                      "optional": false,
                                      "range": [
                                        2484,
                                        2486
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 95
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 95
                                        }
                                      }
                                    },
                                    "range": [
                                      2484,
                                      2486
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 95
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T2",
                                      "optional": false,
                                      "range": [
                                        2488,
                                        2490
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 95
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 95
                                        }
                                      }
                                    },
                                    "range": [
                                      2488,
                                      2490
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 95
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TN",
                                      "optional": false,
                                      "range": [
                                        2492,
                                        2494
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 95
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 95
                                        }
                                      }
                                    },
                                    "range": [
                                      2492,
                                      2494
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 95
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "range": [
                                        2496,
                                        2497
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 95
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 95
                                        }
                                      }
                                    },
                                    "range": [
                                      2496,
                                      2497
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 95
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 95
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "GapOf",
                                "optional": false,
                                "range": [
                                  2478,
                                  2483
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 95
                                  }
                                }
                              },
                              "range": [
                                2478,
                                2498
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 95
                                },
                                "start": {
                                  "column": 26,
                                  "line": 95
                                }
                              }
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "range": [
                                    2513,
                                    2514
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 95
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  2513,
                                  2514
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 95
                                  }
                                }
                              },
                              "range": [
                                2507,
                                2514
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 95
                                },
                                "start": {
                                  "column": 55,
                                  "line": 95
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                2540,
                                2545
                              ],
                              "loc": {
                                "end": {
                                  "column": 93,
                                  "line": 95
                                },
                                "start": {
                                  "column": 88,
                                  "line": 95
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2527,
                                  2537
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "G",
                                      "optional": false,
                                      "range": [
                                        2528,
                                        2529
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 77,
                                          "line": 95
                                        },
                                        "start": {
                                          "column": 76,
                                          "line": 95
                                        }
                                      }
                                    },
                                    "range": [
                                      2528,
                                      2529
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 77,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 76,
                                        "line": 95
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        2531,
                                        2534
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 82,
                                          "line": 95
                                        },
                                        "start": {
                                          "column": 79,
                                          "line": 95
                                        }
                                      }
                                    },
                                    "range": [
                                      2531,
                                      2536
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 84,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 79,
                                        "line": 95
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 95
                                  }
                                }
                              },
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "range": [
                                    2517,
                                    2522
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 65,
                                      "line": 95
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Cast",
                                  "optional": false,
                                  "range": [
                                    2523,
                                    2527
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 71,
                                      "line": 95
                                    }
                                  }
                                },
                                "range": [
                                  2517,
                                  2527
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 95
                                  }
                                }
                              },
                              "range": [
                                2517,
                                2537
                              ],
                              "loc": {
                                "end": {
                                  "column": 85,
                                  "line": 95
                                },
                                "start": {
                                  "column": 65,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              2478,
                              2545
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 95
                              },
                              "start": {
                                "column": 26,
                                "line": 95
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                2557,
                                2560
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
                                      2558,
                                      2559
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 107,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 106,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "range": [
                                    2558,
                                    2559
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 107,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 106,
                                      "line": 95
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 108,
                                  "line": 95
                                },
                                "start": {
                                  "column": 105,
                                  "line": 95
                                }
                              }
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tools",
                                "optional": false,
                                "range": [
                                  2547,
                                  2552
                                ],
                                "loc": {
                                  "end": {
                                    "column": 100,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 95,
                                    "line": 95
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "range": [
                                  2553,
                                  2557
                                ],
                                "loc": {
                                  "end": {
                                    "column": 105,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 101,
                                    "line": 95
                                  }
                                }
                              },
                              "range": [
                                2547,
                                2557
                              ],
                              "loc": {
                                "end": {
                                  "column": 105,
                                  "line": 95
                                },
                                "start": {
                                  "column": 95,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              2547,
                              2560
                            ],
                            "loc": {
                              "end": {
                                "column": 108,
                                "line": 95
                              },
                              "start": {
                                "column": 95,
                                "line": 95
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 109,
                            "line": 95
                          },
                          "start": {
                            "column": 17,
                            "line": 95
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GapsOf",
                        "optional": false,
                        "range": [
                          2463,
                          2469
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 95
                          },
                          "start": {
                            "column": 11,
                            "line": 95
                          }
                        }
                      },
                      "range": [
                        2463,
                        2561
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 95
                        },
                        "start": {
                          "column": 11,
                          "line": 95
                        }
                      }
                    }
                  },
                  "range": [
                    2460,
                    2562
                  ],
                  "loc": {
                    "end": {
                      "column": 110,
                      "line": 95
                    },
                    "start": {
                      "column": 8,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2571,
                      2572
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 96
                      },
                      "start": {
                        "column": 8,
                        "line": 96
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
                        "column": 104,
                        "line": 96
                      },
                      "start": {
                        "column": 9,
                        "line": 96
                      }
                    },
                    "range": [
                      2572,
                      2667
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2586,
                          2667
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "range": [
                                2587,
                                2589
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 96
                                },
                                "start": {
                                  "column": 24,
                                  "line": 96
                                }
                              }
                            },
                            "range": [
                              2587,
                              2589
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 96
                              },
                              "start": {
                                "column": 24,
                                "line": 96
                              }
                            }
                          },
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2601,
                                  2619
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        2611,
                                        2614
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
                                              2612,
                                              2613
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 50,
                                                "line": 96
                                              },
                                              "start": {
                                                "column": 49,
                                                "line": 96
                                              }
                                            }
                                          },
                                          "range": [
                                            2612,
                                            2613
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 50,
                                              "line": 96
                                            },
                                            "start": {
                                              "column": 49,
                                              "line": 96
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 96
                                        },
                                        "start": {
                                          "column": 48,
                                          "line": 96
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tools",
                                        "optional": false,
                                        "range": [
                                          2602,
                                          2607
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 44,
                                            "line": 96
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 96
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Pos",
                                        "optional": false,
                                        "range": [
                                          2608,
                                          2611
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 96
                                          },
                                          "start": {
                                            "column": 45,
                                            "line": 96
                                          }
                                        }
                                      },
                                      "range": [
                                        2602,
                                        2611
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 96
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 96
                                        }
                                      }
                                    },
                                    "range": [
                                      2602,
                                      2614
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 96
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T2",
                                      "optional": false,
                                      "range": [
                                        2616,
                                        2618
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 55,
                                          "line": 96
                                        },
                                        "start": {
                                          "column": 53,
                                          "line": 96
                                        }
                                      }
                                    },
                                    "range": [
                                      2616,
                                      2618
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 53,
                                        "line": 96
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 96
                                  }
                                }
                              },
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "range": [
                                    2591,
                                    2596
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 96
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Drop",
                                  "optional": false,
                                  "range": [
                                    2597,
                                    2601
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 96
                                    }
                                  }
                                },
                                "range": [
                                  2591,
                                  2601
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 96
                                  }
                                }
                              },
                              "range": [
                                2591,
                                2619
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 96
                                },
                                "start": {
                                  "column": 28,
                                  "line": 96
                                }
                              }
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "D",
                                  "optional": false,
                                  "range": [
                                    2634,
                                    2635
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 72,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 71,
                                      "line": 96
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  2634,
                                  2635
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 71,
                                    "line": 96
                                  }
                                }
                              },
                              "range": [
                                2628,
                                2635
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 96
                                },
                                "start": {
                                  "column": 65,
                                  "line": 96
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                2661,
                                2666
                              ],
                              "loc": {
                                "end": {
                                  "column": 103,
                                  "line": 96
                                },
                                "start": {
                                  "column": 98,
                                  "line": 96
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2648,
                                  2658
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
                                        2649,
                                        2650
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 87,
                                          "line": 96
                                        },
                                        "start": {
                                          "column": 86,
                                          "line": 96
                                        }
                                      }
                                    },
                                    "range": [
                                      2649,
                                      2650
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 87,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 86,
                                        "line": 96
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        2652,
                                        2655
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 92,
                                          "line": 96
                                        },
                                        "start": {
                                          "column": 89,
                                          "line": 96
                                        }
                                      }
                                    },
                                    "range": [
                                      2652,
                                      2657
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 94,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 89,
                                        "line": 96
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 95,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 85,
                                    "line": 96
                                  }
                                }
                              },
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "range": [
                                    2638,
                                    2643
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 80,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 75,
                                      "line": 96
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Cast",
                                  "optional": false,
                                  "range": [
                                    2644,
                                    2648
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 81,
                                      "line": 96
                                    }
                                  }
                                },
                                "range": [
                                  2638,
                                  2648
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 96
                                  }
                                }
                              },
                              "range": [
                                2638,
                                2658
                              ],
                              "loc": {
                                "end": {
                                  "column": 95,
                                  "line": 96
                                },
                                "start": {
                                  "column": 75,
                                  "line": 96
                                }
                              }
                            },
                            "range": [
                              2591,
                              2666
                            ],
                            "loc": {
                              "end": {
                                "column": 103,
                                "line": 96
                              },
                              "start": {
                                "column": 28,
                                "line": 96
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 104,
                            "line": 96
                          },
                          "start": {
                            "column": 23,
                            "line": 96
                          }
                        }
                      },
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tools",
                          "optional": false,
                          "range": [
                            2574,
                            2579
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 96
                            },
                            "start": {
                              "column": 11,
                              "line": 96
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Concat",
                          "optional": false,
                          "range": [
                            2580,
                            2586
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 96
                            },
                            "start": {
                              "column": 17,
                              "line": 96
                            }
                          }
                        },
                        "range": [
                          2574,
                          2586
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 96
                          },
                          "start": {
                            "column": 11,
                            "line": 96
                          }
                        }
                      },
                      "range": [
                        2574,
                        2667
                      ],
                      "loc": {
                        "end": {
                          "column": 104,
                          "line": 96
                        },
                        "start": {
                          "column": 11,
                          "line": 96
                        }
                      }
                    }
                  },
                  "range": [
                    2571,
                    2668
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 96
                    },
                    "start": {
                      "column": 8,
                      "line": 96
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 97
                },
                "start": {
                  "column": 108,
                  "line": 94
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapsOfWorker",
              "optional": false,
              "range": [
                2356,
                2368
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 94
                },
                "start": {
                  "column": 14,
                  "line": 94
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 107,
                  "line": 94
                },
                "start": {
                  "column": 26,
                  "line": 94
                }
              },
              "range": [
                2368,
                2449
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
                        2380,
                        2383
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 94
                        },
                        "start": {
                          "column": 38,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2380,
                      2385
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 94
                      },
                      "start": {
                        "column": 38,
                        "line": 94
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      2369,
                      2371
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 94
                      },
                      "start": {
                        "column": 27,
                        "line": 94
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2369,
                    2385
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 94
                    },
                    "start": {
                      "column": 27,
                      "line": 94
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2398,
                        2401
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 94
                        },
                        "start": {
                          "column": 56,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2398,
                      2403
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 94
                      },
                      "start": {
                        "column": 56,
                        "line": 94
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "range": [
                      2387,
                      2389
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 94
                      },
                      "start": {
                        "column": 45,
                        "line": 94
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2387,
                    2403
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 94
                    },
                    "start": {
                      "column": 45,
                      "line": 94
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2416,
                        2419
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 94
                        },
                        "start": {
                          "column": 74,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2416,
                      2421
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 94
                      },
                      "start": {
                        "column": 74,
                        "line": 94
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      2424,
                      2426
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 94
                      },
                      "start": {
                        "column": 82,
                        "line": 94
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "range": [
                      2405,
                      2407
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 94
                      },
                      "start": {
                        "column": 63,
                        "line": 94
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2405,
                    2426
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 94
                    },
                    "start": {
                      "column": 63,
                      "line": 94
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2438,
                        2441
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 94
                        },
                        "start": {
                          "column": 96,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2438,
                      2443
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 94
                      },
                      "start": {
                        "column": 96,
                        "line": 94
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      2446,
                      2448
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 94
                      },
                      "start": {
                        "column": 104,
                        "line": 94
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
                      2428,
                      2429
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 94
                      },
                      "start": {
                        "column": 86,
                        "line": 94
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2428,
                    2448
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 94
                    },
                    "start": {
                      "column": 86,
                      "line": 94
                    }
                  }
                }
              ]
            },
            "range": [
              2346,
              2674
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapsOf",
              "optional": false,
              "range": [
                2684,
                2690
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 98
                },
                "start": {
                  "column": 9,
                  "line": 98
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2820,
                      2823
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
                            2821,
                            2822
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 99
                            },
                            "start": {
                              "column": 18,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          2821,
                          2822
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 99
                          },
                          "start": {
                            "column": 18,
                            "line": 99
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 99
                      },
                      "start": {
                        "column": 17,
                        "line": 99
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "range": [
                        2811,
                        2816
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 99
                        },
                        "start": {
                          "column": 8,
                          "line": 99
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pos",
                      "optional": false,
                      "range": [
                        2817,
                        2820
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 99
                        },
                        "start": {
                          "column": 14,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2811,
                      2820
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 99
                      },
                      "start": {
                        "column": 8,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    2811,
                    2823
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 99
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2844,
                      2848
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "range": [
                            2845,
                            2847
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 99
                            },
                            "start": {
                              "column": 42,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          2845,
                          2847
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 99
                          },
                          "start": {
                            "column": 42,
                            "line": 99
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 99
                      },
                      "start": {
                        "column": 41,
                        "line": 99
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "range": [
                        2832,
                        2837
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 99
                        },
                        "start": {
                          "column": 29,
                          "line": 99
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Length",
                      "optional": false,
                      "range": [
                        2838,
                        2844
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 99
                        },
                        "start": {
                          "column": 35,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2832,
                      2844
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 99
                      },
                      "start": {
                        "column": 29,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    2832,
                    2848
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 99
                    },
                    "start": {
                      "column": 29,
                      "line": 99
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      2871,
                      2872
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 101
                      },
                      "start": {
                        "column": 10,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    2871,
                    2872
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 101
                    },
                    "start": {
                      "column": 10,
                      "line": 101
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2859,
                      2860
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 100
                      },
                      "start": {
                        "column": 10,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    2859,
                    2860
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 100
                    },
                    "start": {
                      "column": 10,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2811,
                  2872
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 101
                  },
                  "start": {
                    "column": 8,
                    "line": 99
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2786,
                    2801
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "range": [
                          2787,
                          2789
                        ],
                        "loc": {
                          "end": {
                            "column": 114,
                            "line": 98
                          },
                          "start": {
                            "column": 112,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        2787,
                        2789
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 98
                        },
                        "start": {
                          "column": 112,
                          "line": 98
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "range": [
                          2791,
                          2793
                        ],
                        "loc": {
                          "end": {
                            "column": 118,
                            "line": 98
                          },
                          "start": {
                            "column": 116,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        2791,
                        2793
                      ],
                      "loc": {
                        "end": {
                          "column": 118,
                          "line": 98
                        },
                        "start": {
                          "column": 116,
                          "line": 98
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TN",
                        "optional": false,
                        "range": [
                          2795,
                          2797
                        ],
                        "loc": {
                          "end": {
                            "column": 122,
                            "line": 98
                          },
                          "start": {
                            "column": 120,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        2795,
                        2797
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 98
                        },
                        "start": {
                          "column": 120,
                          "line": 98
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          2799,
                          2800
                        ],
                        "loc": {
                          "end": {
                            "column": 125,
                            "line": 98
                          },
                          "start": {
                            "column": 124,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        2799,
                        2800
                      ],
                      "loc": {
                        "end": {
                          "column": 125,
                          "line": 98
                        },
                        "start": {
                          "column": 124,
                          "line": 98
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 126,
                      "line": 98
                    },
                    "start": {
                      "column": 111,
                      "line": 98
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GapsOfWorker",
                  "optional": false,
                  "range": [
                    2774,
                    2786
                  ],
                  "loc": {
                    "end": {
                      "column": 111,
                      "line": 98
                    },
                    "start": {
                      "column": 99,
                      "line": 98
                    }
                  }
                },
                "range": [
                  2774,
                  2801
                ],
                "loc": {
                  "end": {
                    "column": 126,
                    "line": 98
                  },
                  "start": {
                    "column": 99,
                    "line": 98
                  }
                }
              },
              "range": [
                2774,
                2878
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 99,
                  "line": 98
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 96,
                  "line": 98
                },
                "start": {
                  "column": 15,
                  "line": 98
                }
              },
              "range": [
                2690,
                2771
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
                        2702,
                        2705
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 98
                        },
                        "start": {
                          "column": 27,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2702,
                      2707
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 98
                      },
                      "start": {
                        "column": 27,
                        "line": 98
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      2691,
                      2693
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 98
                      },
                      "start": {
                        "column": 16,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2691,
                    2707
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 98
                    },
                    "start": {
                      "column": 16,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2720,
                        2723
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 98
                        },
                        "start": {
                          "column": 45,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2720,
                      2725
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 98
                      },
                      "start": {
                        "column": 45,
                        "line": 98
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "range": [
                      2709,
                      2711
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 98
                      },
                      "start": {
                        "column": 34,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2709,
                    2725
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 98
                    },
                    "start": {
                      "column": 34,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2738,
                        2741
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 98
                        },
                        "start": {
                          "column": 63,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2738,
                      2743
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 98
                      },
                      "start": {
                        "column": 63,
                        "line": 98
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      2746,
                      2748
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 98
                      },
                      "start": {
                        "column": 71,
                        "line": 98
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "range": [
                      2727,
                      2729
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 98
                      },
                      "start": {
                        "column": 52,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2727,
                    2748
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 98
                    },
                    "start": {
                      "column": 52,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2760,
                        2763
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 98
                        },
                        "start": {
                          "column": 85,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2760,
                      2765
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 98
                      },
                      "start": {
                        "column": 85,
                        "line": 98
                      }
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      2768,
                      2770
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 98
                      },
                      "start": {
                        "column": 93,
                        "line": 98
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
                      2750,
                      2751
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 98
                      },
                      "start": {
                        "column": 75,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2750,
                    2770
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 98
                    },
                    "start": {
                      "column": 75,
                      "line": 98
                    }
                  }
                }
              ]
            },
            "range": [
              2679,
              2879
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PartialGaps",
              "optional": false,
              "range": [
                2890,
                2901
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 104
                },
                "start": {
                  "column": 9,
                  "line": 104
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
                      2943,
                      2944
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 105
                      },
                      "start": {
                        "column": 20,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    2943,
                    2944
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 105
                    },
                    "start": {
                      "column": 20,
                      "line": 105
                    }
                  }
                },
                "range": [
                  2937,
                  2944
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 105
                  },
                  "start": {
                    "column": 14,
                    "line": 105
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  2932,
                  2933
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 105
                  },
                  "start": {
                    "column": 9,
                    "line": 105
                  }
                }
              },
              "nameType": null,
              "optional": true,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          2950,
                          2951
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 105
                          },
                          "start": {
                            "column": 27,
                            "line": 105
                          }
                        }
                      },
                      "range": [
                        2950,
                        2951
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 105
                        },
                        "start": {
                          "column": 27,
                          "line": 105
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
                          2948,
                          2949
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 105
                          },
                          "start": {
                            "column": 25,
                            "line": 105
                          }
                        }
                      },
                      "range": [
                        2948,
                        2949
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 105
                        },
                        "start": {
                          "column": 25,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2948,
                      2952
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 105
                      },
                      "start": {
                        "column": 25,
                        "line": 105
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "range": [
                          2955,
                          2956
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 105
                          },
                          "start": {
                            "column": 32,
                            "line": 105
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Placeholder",
                        "optional": false,
                        "range": [
                          2957,
                          2968
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 105
                          },
                          "start": {
                            "column": 34,
                            "line": 105
                          }
                        }
                      },
                      "range": [
                        2955,
                        2968
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 105
                        },
                        "start": {
                          "column": 32,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2955,
                      2968
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 105
                      },
                      "start": {
                        "column": 32,
                        "line": 105
                      }
                    }
                  }
                ],
                "range": [
                  2948,
                  2968
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 105
                  },
                  "start": {
                    "column": 25,
                    "line": 105
                  }
                }
              },
              "range": [
                2921,
                2974
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 106
                },
                "start": {
                  "column": 40,
                  "line": 104
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 104
                },
                "start": {
                  "column": 20,
                  "line": 104
                }
              },
              "range": [
                2901,
                2918
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
                        2912,
                        2915
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 104
                        },
                        "start": {
                          "column": 31,
                          "line": 104
                        }
                      }
                    },
                    "range": [
                      2912,
                      2917
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 104
                      },
                      "start": {
                        "column": 31,
                        "line": 104
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
                      2902,
                      2903
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 104
                      },
                      "start": {
                        "column": 21,
                        "line": 104
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2902,
                    2917
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 104
                    },
                    "start": {
                      "column": 21,
                      "line": 104
                    }
                  }
                }
              ]
            },
            "range": [
              2885,
              2975
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CleanedGaps",
              "optional": false,
              "range": [
                2986,
                2997
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 108
                },
                "start": {
                  "column": 9,
                  "line": 108
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
                      3039,
                      3040
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 109
                      },
                      "start": {
                        "column": 20,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3039,
                    3040
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 109
                    },
                    "start": {
                      "column": 20,
                      "line": 109
                    }
                  }
                },
                "range": [
                  3033,
                  3040
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 109
                  },
                  "start": {
                    "column": 14,
                    "line": 109
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  3028,
                  3029
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 109
                  },
                  "start": {
                    "column": 9,
                    "line": 109
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3054,
                    3060
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
                            3057,
                            3058
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 109
                            },
                            "start": {
                              "column": 38,
                              "line": 109
                            }
                          }
                        },
                        "range": [
                          3057,
                          3058
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 109
                          },
                          "start": {
                            "column": 38,
                            "line": 109
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
                            3055,
                            3056
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 109
                            },
                            "start": {
                              "column": 36,
                              "line": 109
                            }
                          }
                        },
                        "range": [
                          3055,
                          3056
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 109
                          },
                          "start": {
                            "column": 36,
                            "line": 109
                          }
                        }
                      },
                      "range": [
                        3055,
                        3059
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 109
                        },
                        "start": {
                          "column": 36,
                          "line": 109
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 109
                    },
                    "start": {
                      "column": 35,
                      "line": 109
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "range": [
                    3043,
                    3054
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 109
                    },
                    "start": {
                      "column": 24,
                      "line": 109
                    }
                  }
                },
                "range": [
                  3043,
                  3060
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 109
                  },
                  "start": {
                    "column": 24,
                    "line": 109
                  }
                }
              },
              "range": [
                3017,
                3066
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 110
                },
                "start": {
                  "column": 40,
                  "line": 108
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 108
                },
                "start": {
                  "column": 20,
                  "line": 108
                }
              },
              "range": [
                2997,
                3014
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
                        3008,
                        3011
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 108
                        },
                        "start": {
                          "column": 31,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      3008,
                      3013
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 108
                      },
                      "start": {
                        "column": 31,
                        "line": 108
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
                      2998,
                      2999
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 108
                      },
                      "start": {
                        "column": 21,
                        "line": 108
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2998,
                    3013
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 108
                    },
                    "start": {
                      "column": 21,
                      "line": 108
                    }
                  }
                }
              ]
            },
            "range": [
              2981,
              3067
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Gaps",
              "optional": false,
              "range": [
                3078,
                3082
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 112
                },
                "start": {
                  "column": 9,
                  "line": 112
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3113,
                  3129
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3125,
                        3128
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
                              3126,
                              3127
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 112
                              },
                              "start": {
                                "column": 57,
                                "line": 112
                              }
                            }
                          },
                          "range": [
                            3126,
                            3127
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 112
                            },
                            "start": {
                              "column": 57,
                              "line": 112
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 112
                        },
                        "start": {
                          "column": 56,
                          "line": 112
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PartialGaps",
                      "optional": false,
                      "range": [
                        3114,
                        3125
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 112
                        },
                        "start": {
                          "column": 45,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      3114,
                      3128
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 112
                      },
                      "start": {
                        "column": 45,
                        "line": 112
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 112
                  },
                  "start": {
                    "column": 44,
                    "line": 112
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CleanedGaps",
                "optional": false,
                "range": [
                  3102,
                  3113
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 112
                  },
                  "start": {
                    "column": 33,
                    "line": 112
                  }
                }
              },
              "range": [
                3102,
                3129
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 112
                },
                "start": {
                  "column": 33,
                  "line": 112
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 112
                },
                "start": {
                  "column": 13,
                  "line": 112
                }
              },
              "range": [
                3082,
                3099
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
                        3093,
                        3096
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 112
                        },
                        "start": {
                          "column": 24,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      3093,
                      3098
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 112
                      },
                      "start": {
                        "column": 24,
                        "line": 112
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
                      3083,
                      3084
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 112
                      },
                      "start": {
                        "column": 14,
                        "line": 112
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3083,
                    3098
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 112
                    },
                    "start": {
                      "column": 14,
                      "line": 112
                    }
                  }
                }
              ]
            },
            "range": [
              3073,
              3130
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 112
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Curry",
              "optional": false,
              "range": [
                3141,
                3146
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 114
                },
                "start": {
                  "column": 9,
                  "line": 114
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
                      3213,
                      3217
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 115
                      },
                      "start": {
                        "column": 29,
                        "line": 115
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
                        "line": 115
                      },
                      "start": {
                        "column": 33,
                        "line": 115
                      }
                    },
                    "range": [
                      3217,
                      3272
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3229,
                          3272
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3240,
                                3264
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
                                      3241,
                                      3242
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 115
                                      },
                                      "start": {
                                        "column": 57,
                                        "line": 115
                                      }
                                    }
                                  },
                                  "range": [
                                    3241,
                                    3242
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 115
                                    },
                                    "start": {
                                      "column": 57,
                                      "line": 115
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      3248,
                                      3263
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "range": [
                                            3259,
                                            3262
                                          ],
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "F",
                                                "optional": false,
                                                "range": [
                                                  3260,
                                                  3261
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 77,
                                                    "line": 115
                                                  },
                                                  "start": {
                                                    "column": 76,
                                                    "line": 115
                                                  }
                                                }
                                              },
                                              "range": [
                                                3260,
                                                3261
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 77,
                                                  "line": 115
                                                },
                                                "start": {
                                                  "column": 76,
                                                  "line": 115
                                                }
                                              }
                                            }
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 78,
                                              "line": 115
                                            },
                                            "start": {
                                              "column": 75,
                                              "line": 115
                                            }
                                          }
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Parameters",
                                          "optional": false,
                                          "range": [
                                            3249,
                                            3259
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 75,
                                              "line": 115
                                            },
                                            "start": {
                                              "column": 65,
                                              "line": 115
                                            }
                                          }
                                        },
                                        "range": [
                                          3249,
                                          3262
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 78,
                                            "line": 115
                                          },
                                          "start": {
                                            "column": 65,
                                            "line": 115
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 79,
                                        "line": 115
                                      },
                                      "start": {
                                        "column": 64,
                                        "line": 115
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Gaps",
                                    "optional": false,
                                    "range": [
                                      3244,
                                      3248
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 64,
                                        "line": 115
                                      },
                                      "start": {
                                        "column": 60,
                                        "line": 115
                                      }
                                    }
                                  },
                                  "range": [
                                    3244,
                                    3263
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 79,
                                      "line": 115
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 115
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 115
                                },
                                "start": {
                                  "column": 56,
                                  "line": 115
                                }
                              }
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tools",
                                "optional": false,
                                "range": [
                                  3230,
                                  3235
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 115
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 115
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Cast",
                                "optional": false,
                                "range": [
                                  3236,
                                  3240
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 115
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 115
                                  }
                                }
                              },
                              "range": [
                                3230,
                                3240
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 115
                                },
                                "start": {
                                  "column": 46,
                                  "line": 115
                                }
                              }
                            },
                            "range": [
                              3230,
                              3264
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 115
                              },
                              "start": {
                                "column": 46,
                                "line": 115
                              }
                            }
                          },
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                3266,
                                3269
                              ],
                              "loc": {
                                "end": {
                                  "column": 85,
                                  "line": 115
                                },
                                "start": {
                                  "column": 82,
                                  "line": 115
                                }
                              }
                            },
                            "range": [
                              3266,
                              3271
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 115
                              },
                              "start": {
                                "column": 82,
                                "line": 115
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 115
                          },
                          "start": {
                            "column": 45,
                            "line": 115
                          }
                        }
                      },
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tools",
                          "optional": false,
                          "range": [
                            3219,
                            3224
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 115
                            },
                            "start": {
                              "column": 35,
                              "line": 115
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Cast",
                          "optional": false,
                          "range": [
                            3225,
                            3229
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 115
                            },
                            "start": {
                              "column": 41,
                              "line": 115
                            }
                          }
                        },
                        "range": [
                          3219,
                          3229
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 115
                          },
                          "start": {
                            "column": 35,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        3219,
                        3272
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 115
                        },
                        "start": {
                          "column": 35,
                          "line": 115
                        }
                      }
                    }
                  },
                  "range": [
                    3210,
                    3272
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 115
                    },
                    "start": {
                      "column": 26,
                      "line": 115
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 118
                  },
                  "start": {
                    "column": 90,
                    "line": 115
                  }
                },
                "range": [
                  3274,
                  3486
                ],
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3295,
                        3313
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
                              3296,
                              3297
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 116
                              },
                              "start": {
                                "column": 19,
                                "line": 116
                              }
                            }
                          },
                          "range": [
                            3296,
                            3297
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 116
                            },
                            "start": {
                              "column": 19,
                              "line": 116
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              3309,
                              3312
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "range": [
                                    3310,
                                    3311
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 116
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 116
                                    }
                                  }
                                },
                                "range": [
                                  3310,
                                  3311
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 116
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 116
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 116
                              },
                              "start": {
                                "column": 32,
                                "line": 116
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Parameters",
                            "optional": false,
                            "range": [
                              3299,
                              3309
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 116
                              },
                              "start": {
                                "column": 22,
                                "line": 116
                              }
                            }
                          },
                          "range": [
                            3299,
                            3312
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 116
                            },
                            "start": {
                              "column": 22,
                              "line": 116
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 116
                        },
                        "start": {
                          "column": 18,
                          "line": 116
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GapsOf",
                      "optional": false,
                      "range": [
                        3289,
                        3295
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 116
                        },
                        "start": {
                          "column": 12,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3289,
                      3313
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 116
                      },
                      "start": {
                        "column": 12,
                        "line": 116
                      }
                    }
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          3323,
                          3326
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 116
                          },
                          "start": {
                            "column": 46,
                            "line": 116
                          }
                        }
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "range": [
                              3331,
                              3334
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 116
                              },
                              "start": {
                                "column": 54,
                                "line": 116
                              }
                            }
                          },
                          "range": [
                            3331,
                            3336
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 116
                            },
                            "start": {
                              "column": 54,
                              "line": 116
                            }
                          }
                        },
                        "range": [
                          3328,
                          3336
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 116
                          },
                          "start": {
                            "column": 51,
                            "line": 116
                          }
                        }
                      }
                    ],
                    "range": [
                      3322,
                      3337
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 116
                      },
                      "start": {
                        "column": 45,
                        "line": 116
                      }
                    }
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3483,
                        3486
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "range": [
                              3484,
                              3485
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 118
                              },
                              "start": {
                                "column": 25,
                                "line": 118
                              }
                            }
                          },
                          "range": [
                            3484,
                            3485
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 118
                            },
                            "start": {
                              "column": 25,
                              "line": 118
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 118
                        },
                        "start": {
                          "column": 24,
                          "line": 118
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "range": [
                        3473,
                        3483
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 118
                        },
                        "start": {
                          "column": 14,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      3473,
                      3486
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 118
                      },
                      "start": {
                        "column": 14,
                        "line": 118
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3357,
                        3458
                      ],
                      "params": [
                        {
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
                                  3362,
                                  3366
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 117
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 101,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 117
                                  }
                                },
                                "range": [
                                  3366,
                                  3439
                                ],
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        3374,
                                        3392
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
                                              3375,
                                              3376
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 38,
                                                "line": 117
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 117
                                              }
                                            }
                                          },
                                          "range": [
                                            3375,
                                            3376
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 117
                                            },
                                            "start": {
                                              "column": 37,
                                              "line": 117
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "range": [
                                              3388,
                                              3391
                                            ],
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "F",
                                                  "optional": false,
                                                  "range": [
                                                    3389,
                                                    3390
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 52,
                                                      "line": 117
                                                    },
                                                    "start": {
                                                      "column": 51,
                                                      "line": 117
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  3389,
                                                  3390
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 52,
                                                    "line": 117
                                                  },
                                                  "start": {
                                                    "column": 51,
                                                    "line": 117
                                                  }
                                                }
                                              }
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 53,
                                                "line": 117
                                              },
                                              "start": {
                                                "column": 50,
                                                "line": 117
                                              }
                                            }
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Parameters",
                                            "optional": false,
                                            "range": [
                                              3378,
                                              3388
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 50,
                                                "line": 117
                                              },
                                              "start": {
                                                "column": 40,
                                                "line": 117
                                              }
                                            }
                                          },
                                          "range": [
                                            3378,
                                            3391
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 53,
                                              "line": 117
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 117
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 54,
                                          "line": 117
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 117
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "GapsOf",
                                      "optional": false,
                                      "range": [
                                        3368,
                                        3374
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 117
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 117
                                        }
                                      }
                                    },
                                    "range": [
                                      3368,
                                      3392
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 117
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 117
                                      }
                                    }
                                  },
                                  "extendsType": {
                                    "type": "TSInferType",
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "const": false,
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "G",
                                        "optional": false,
                                        "range": [
                                          3407,
                                          3408
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 70,
                                            "line": 117
                                          },
                                          "start": {
                                            "column": 69,
                                            "line": 117
                                          }
                                        }
                                      },
                                      "out": false,
                                      "range": [
                                        3407,
                                        3408
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 70,
                                          "line": 117
                                        },
                                        "start": {
                                          "column": 69,
                                          "line": 117
                                        }
                                      }
                                    },
                                    "range": [
                                      3401,
                                      3408
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 117
                                      },
                                      "start": {
                                        "column": 63,
                                        "line": 117
                                      }
                                    }
                                  },
                                  "falseType": {
                                    "type": "TSNeverKeyword",
                                    "range": [
                                      3434,
                                      3439
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 101,
                                        "line": 117
                                      },
                                      "start": {
                                        "column": 96,
                                        "line": 117
                                      }
                                    }
                                  },
                                  "trueType": {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        3421,
                                        3431
                                      ],
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "G",
                                            "optional": false,
                                            "range": [
                                              3422,
                                              3423
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 85,
                                                "line": 117
                                              },
                                              "start": {
                                                "column": 84,
                                                "line": 117
                                              }
                                            }
                                          },
                                          "range": [
                                            3422,
                                            3423
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 85,
                                              "line": 117
                                            },
                                            "start": {
                                              "column": 84,
                                              "line": 117
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSArrayType",
                                          "elementType": {
                                            "type": "TSAnyKeyword",
                                            "range": [
                                              3425,
                                              3428
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 90,
                                                "line": 117
                                              },
                                              "start": {
                                                "column": 87,
                                                "line": 117
                                              }
                                            }
                                          },
                                          "range": [
                                            3425,
                                            3430
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 92,
                                              "line": 117
                                            },
                                            "start": {
                                              "column": 87,
                                              "line": 117
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 93,
                                          "line": 117
                                        },
                                        "start": {
                                          "column": 83,
                                          "line": 117
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tools",
                                        "optional": false,
                                        "range": [
                                          3411,
                                          3416
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 78,
                                            "line": 117
                                          },
                                          "start": {
                                            "column": 73,
                                            "line": 117
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Cast",
                                        "optional": false,
                                        "range": [
                                          3417,
                                          3421
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 83,
                                            "line": 117
                                          },
                                          "start": {
                                            "column": 79,
                                            "line": 117
                                          }
                                        }
                                      },
                                      "range": [
                                        3411,
                                        3421
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 83,
                                          "line": 117
                                        },
                                        "start": {
                                          "column": 73,
                                          "line": 117
                                        }
                                      }
                                    },
                                    "range": [
                                      3411,
                                      3431
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 93,
                                        "line": 117
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 117
                                      }
                                    }
                                  },
                                  "range": [
                                    3368,
                                    3439
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 101,
                                      "line": 117
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 117
                                    }
                                  }
                                }
                              },
                              "range": [
                                3359,
                                3439
                              ],
                              "loc": {
                                "end": {
                                  "column": 101,
                                  "line": 117
                                },
                                "start": {
                                  "column": 21,
                                  "line": 117
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 119,
                                "line": 117
                              },
                              "start": {
                                "column": 103,
                                "line": 117
                              }
                            },
                            "range": [
                              3441,
                              3457
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  3454,
                                  3457
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "range": [
                                        3455,
                                        3456
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 118,
                                          "line": 117
                                        },
                                        "start": {
                                          "column": 117,
                                          "line": 117
                                        }
                                      }
                                    },
                                    "range": [
                                      3455,
                                      3456
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 118,
                                        "line": 117
                                      },
                                      "start": {
                                        "column": 117,
                                        "line": 117
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 119,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 116,
                                    "line": 117
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReturnType",
                                "optional": false,
                                "range": [
                                  3444,
                                  3454
                                ],
                                "loc": {
                                  "end": {
                                    "column": 116,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 106,
                                    "line": 117
                                  }
                                }
                              },
                              "range": [
                                3444,
                                3457
                              ],
                              "loc": {
                                "end": {
                                  "column": 119,
                                  "line": 117
                                },
                                "start": {
                                  "column": 106,
                                  "line": 117
                                }
                              }
                            }
                          },
                          "range": [
                            3358,
                            3457
                          ],
                          "loc": {
                            "end": {
                              "column": 119,
                              "line": 117
                            },
                            "start": {
                              "column": 20,
                              "line": 117
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 120,
                          "line": 117
                        },
                        "start": {
                          "column": 19,
                          "line": 117
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Curry",
                      "optional": false,
                      "range": [
                        3352,
                        3357
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 117
                        },
                        "start": {
                          "column": 14,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      3352,
                      3458
                    ],
                    "loc": {
                      "end": {
                        "column": 120,
                        "line": 117
                      },
                      "start": {
                        "column": 14,
                        "line": 117
                      }
                    }
                  },
                  "range": [
                    3289,
                    3486
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 118
                    },
                    "start": {
                      "column": 12,
                      "line": 116
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 115
                  },
                  "start": {
                    "column": 8,
                    "line": 115
                  }
                },
                "range": [
                  3192,
                  3209
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
                          3203,
                          3206
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 115
                          },
                          "start": {
                            "column": 19,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        3203,
                        3208
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 115
                        },
                        "start": {
                          "column": 19,
                          "line": 115
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
                        3193,
                        3194
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 115
                        },
                        "start": {
                          "column": 9,
                          "line": 115
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3193,
                      3208
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 115
                      },
                      "start": {
                        "column": 9,
                        "line": 115
                      }
                    }
                  }
                ]
              },
              "range": [
                3192,
                3486
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 118
                },
                "start": {
                  "column": 8,
                  "line": 115
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 114
                },
                "start": {
                  "column": 14,
                  "line": 114
                }
              },
              "range": [
                3146,
                3181
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
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
                            3162,
                            3166
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 114
                            },
                            "start": {
                              "column": 30,
                              "line": 114
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 114
                            },
                            "start": {
                              "column": 34,
                              "line": 114
                            }
                          },
                          "range": [
                            3166,
                            3171
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              3168,
                              3171
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 114
                              },
                              "start": {
                                "column": 36,
                                "line": 114
                              }
                            }
                          }
                        },
                        "range": [
                          3159,
                          3171
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 114
                          },
                          "start": {
                            "column": 27,
                            "line": 114
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 114
                        },
                        "start": {
                          "column": 41,
                          "line": 114
                        }
                      },
                      "range": [
                        3173,
                        3179
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          3176,
                          3179
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 114
                          },
                          "start": {
                            "column": 44,
                            "line": 114
                          }
                        }
                      }
                    },
                    "range": [
                      3158,
                      3179
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 114
                      },
                      "start": {
                        "column": 26,
                        "line": 114
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "range": [
                      3147,
                      3148
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 114
                      },
                      "start": {
                        "column": 15,
                        "line": 114
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3147,
                    3180
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 114
                    },
                    "start": {
                      "column": 15,
                      "line": 114
                    }
                  }
                }
              ]
            },
            "range": [
              3136,
              3487
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          }
        ],
        "range": [
          2145,
          3489
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 24,
            "line": 88
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          2139,
          2144
        ],
        "decorators": [],
        "name": "Curry",
        "optional": false,
        "loc": {
          "end": {
            "column": 23,
            "line": 88
          },
          "start": {
            "column": 18,
            "line": 88
          }
        }
      },
      "kind": "namespace",
      "range": [
        2121,
        3489
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 120
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
