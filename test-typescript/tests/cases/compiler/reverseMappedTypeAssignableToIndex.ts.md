__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    37,
    580
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "range": [
          42,
          48
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
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
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 31,
                  "line": 2
                }
              }
            },
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 31,
                "line": 2
              }
            }
          },
          "range": [
            62,
            69
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            57,
            58
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  74,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 37,
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
                    "column": 47,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                },
                "range": [
                  78,
                  84
                ],
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
                        82,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 2
                        },
                        "start": {
                          "column": 45,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      82,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 45,
                        "line": 2
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
                        80,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 2
                        },
                        "start": {
                          "column": 43,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      80,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 2
                      },
                      "start": {
                        "column": 43,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    80,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 2
                    },
                    "start": {
                      "column": 43,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                74,
                84
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 2
                },
                "start": {
                  "column": 37,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            72,
            86
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 2
            },
            "start": {
              "column": 35,
              "line": 2
            }
          }
        },
        "range": [
          54,
          88
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        },
        "range": [
          48,
          51
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
                49,
                50
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              49,
              50
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        37,
        89
      ],
      "loc": {
        "end": {
          "column": 52,
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
        "name": "InferFromMapped",
        "optional": false,
        "range": [
          95,
          110
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
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          "range": [
            116,
            117
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              132,
              141
            ],
            "params": [
              {
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
                      139,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 3
                      },
                      "start": {
                        "column": 49,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    139,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 3
                    },
                    "start": {
                      "column": 49,
                      "line": 3
                    }
                  }
                },
                "range": [
                  133,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 43,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "range": [
              126,
              132
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            }
          },
          "range": [
            126,
            141
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 36,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            148,
            153
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 3
            },
            "start": {
              "column": 58,
              "line": 3
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
              144,
              145
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 3
              },
              "start": {
                "column": 54,
                "line": 3
              }
            }
          },
          "range": [
            144,
            145
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 3
            },
            "start": {
              "column": 54,
              "line": 3
            }
          }
        },
        "range": [
          116,
          153
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 3
          },
          "start": {
            "column": 26,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 3
          }
        },
        "range": [
          110,
          113
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
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 22,
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
              111,
              112
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        90,
        154
      ],
      "loc": {
        "end": {
          "column": 64,
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
        "name": "LiteralType",
        "optional": false,
        "range": [
          289,
          300
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
              "name": "first",
              "optional": false,
              "range": [
                306,
                311
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 8
                },
                "start": {
                  "column": 1,
                  "line": 8
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
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              },
              "range": [
                311,
                320
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"first\"",
                  "value": "first",
                  "range": [
                    313,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "range": [
                  313,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              306,
              321
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 1,
                "line": 8
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "range": [
                323,
                329
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 1,
                  "line": 9
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
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              },
              "range": [
                329,
                339
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"second\"",
                  "value": "second",
                  "range": [
                    331,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                },
                "range": [
                  331,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              323,
              340
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          }
        ],
        "range": [
          303,
          342
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 19,
            "line": 7
          }
        }
      },
      "range": [
        284,
        342
      ],
      "loc": {
        "end": {
          "column": 1,
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
        "name": "MappedLiteralType",
        "optional": false,
        "range": [
          348,
          365
        ],
        "loc": {
          "end": {
            "column": 22,
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
              "name": "first",
              "optional": false,
              "range": [
                371,
                376
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 12
                },
                "start": {
                  "column": 1,
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
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                376,
                395
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        380,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 12
                        },
                        "start": {
                          "column": 10,
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
                          "column": 23,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      },
                      "range": [
                        384,
                        393
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"first\"",
                          "value": "first",
                          "range": [
                            386,
                            393
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 12
                            },
                            "start": {
                              "column": 16,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          386,
                          393
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
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
                      380,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 10,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  378,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              371,
              396
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 12
              },
              "start": {
                "column": 1,
                "line": 12
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "range": [
                398,
                404
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 13
                },
                "start": {
                  "column": 1,
                  "line": 13
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
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              },
              "range": [
                404,
                424
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        408,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 11,
                          "line": 13
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
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      },
                      "range": [
                        412,
                        422
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"second\"",
                          "value": "second",
                          "range": [
                            414,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 13
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          414,
                          422
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 17,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      408,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  406,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              398,
              425
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 1,
                "line": 13
              }
            }
          }
        ],
        "range": [
          368,
          427
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 25,
            "line": 11
          }
        }
      },
      "range": [
        343,
        428
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 14
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
        "name": "Inferred",
        "optional": false,
        "range": [
          435,
          443
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            461,
            480
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappedLiteralType",
                "optional": false,
                "range": [
                  462,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
                  }
                }
              },
              "range": [
                462,
                479
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 16
            },
            "start": {
              "column": 31,
              "line": 16
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferFromMapped",
          "optional": false,
          "range": [
            446,
            461
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 16
            },
            "start": {
              "column": 16,
              "line": 16
            }
          }
        },
        "range": [
          446,
          480
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 16
          }
        }
      },
      "range": [
        430,
        481
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          520,
          525
        ],
        "loc": {
          "end": {
            "column": 10,
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
            "name": "Inferred",
            "optional": false,
            "range": [
              528,
              536
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          },
          "range": [
            528,
            536
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 19
            },
            "start": {
              "column": 13,
              "line": 19
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              551,
              564
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  552,
                  555
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 19
                  },
                  "start": {
                    "column": 37,
                    "line": 19
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  557,
                  563
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 19
                  },
                  "start": {
                    "column": 42,
                    "line": 19
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 19
              },
              "start": {
                "column": 36,
                "line": 19
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              545,
              551
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 30,
                "line": 19
              }
            }
          },
          "range": [
            545,
            564
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 19
            },
            "start": {
              "column": 30,
              "line": 19
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
              574,
              579
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 19
              },
              "start": {
                "column": 59,
                "line": 19
              }
            }
          },
          "range": [
            574,
            579
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 19
            },
            "start": {
              "column": 59,
              "line": 19
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
              567,
              571
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 19
              },
              "start": {
                "column": 52,
                "line": 19
              }
            }
          },
          "range": [
            567,
            571
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 19
            },
            "start": {
              "column": 52,
              "line": 19
            }
          }
        },
        "range": [
          528,
          579
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 19
          }
        }
      },
      "range": [
        515,
        580
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 65,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
