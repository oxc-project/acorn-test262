__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    222,
    1344
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "range": [
          227,
          238
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            246,
            254
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "range": [
                  247,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 25,
                    "line": 9
                  }
                }
              },
              "range": [
                247,
                253
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 25,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 9
            },
            "start": {
              "column": 24,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "range": [
            241,
            246
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 9
            }
          }
        },
        "range": [
          241,
          254
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 9
          },
          "start": {
            "column": 19,
            "line": 9
          }
        }
      },
      "range": [
        222,
        254
      ],
      "loc": {
        "end": {
          "column": 32,
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
        "name": "someArray",
        "optional": false,
        "range": [
          260,
          269
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                277,
                285
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "range": [
                      278,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    278,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "range": [
                272,
                277
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "range": [
              272,
              285
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
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSNumberKeyword",
              "range": [
                288,
                294
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 33,
                  "line": 10
                }
              }
            },
            "range": [
              288,
              296
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 10
              },
              "start": {
                "column": 33,
                "line": 10
              }
            }
          }
        ],
        "range": [
          272,
          296
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
      "range": [
        255,
        297
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 10
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
        "name": "stringOrNumArray",
        "optional": false,
        "range": [
          303,
          319
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            327,
            342
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "range": [
                      328,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 11
                      },
                      "start": {
                        "column": 30,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    328,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 11
                    },
                    "start": {
                      "column": 30,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "range": [
                      335,
                      341
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
                  "range": [
                    335,
                    341
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
                }
              ],
              "range": [
                328,
                341
              ],
              "loc": {
                "end": {
                  "column": 43,
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
              "column": 44,
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
          "name": "Array",
          "optional": false,
          "range": [
            322,
            327
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 24,
              "line": 11
            }
          }
        },
        "range": [
          322,
          342
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 11
          },
          "start": {
            "column": 24,
            "line": 11
          }
        }
      },
      "range": [
        298,
        343
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          382,
          385
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 13
          },
          "start": {
            "column": 37,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "range": [
          354,
          356
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              360,
              361
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
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
                "line": 13
              },
              "start": {
                "column": 16,
                "line": 13
              }
            },
            "range": [
              361,
              380
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      364,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      371,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 13
                      },
                      "start": {
                        "column": 26,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  364,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 13
                  },
                  "start": {
                    "column": 19,
                    "line": 13
                  }
                }
              },
              "range": [
                363,
                380
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
                }
              }
            }
          },
          "range": [
            357,
            380
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        }
      ],
      "range": [
        345,
        385
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          404,
          407
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 14
          },
          "start": {
            "column": 18,
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
        "name": "a2",
        "optional": false,
        "range": [
          395,
          397
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              401,
              402
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 15,
                "line": 14
              }
            }
          },
          "decorators": [],
          "optional": false,
          "range": [
            398,
            402
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        }
      ],
      "range": [
        386,
        407
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 14
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
        "body": [],
        "range": [
          441,
          444
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 15
          },
          "start": {
            "column": 33,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "range": [
          417,
          419
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              423,
              424
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 15
              },
              "start": {
                "column": 15,
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
                "column": 31,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            },
            "range": [
              424,
              439
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  431,
                  439
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "range": [
                        432,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 15
                        },
                        "start": {
                          "column": 24,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      432,
                      438
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  }
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
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  426,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 15
                  },
                  "start": {
                    "column": 18,
                    "line": 15
                  }
                }
              },
              "range": [
                426,
                439
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              }
            }
          },
          "range": [
            420,
            439
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "range": [
        408,
        444
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          476,
          479
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 16
          },
          "start": {
            "column": 31,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "range": [
          454,
          456
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              460,
              461
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 16
              },
              "start": {
                "column": 15,
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
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 16,
                "line": 16
              }
            },
            "range": [
              461,
              474
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayString",
                "optional": false,
                "range": [
                  463,
                  474
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                }
              },
              "range": [
                463,
                474
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 18,
                  "line": 16
                }
              }
            }
          },
          "range": [
            457,
            474
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 16
            }
          }
        }
      ],
      "range": [
        445,
        479
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          516,
          519
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 17
          },
          "start": {
            "column": 36,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a5",
        "optional": false,
        "range": [
          489,
          491
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              495,
              496
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            },
            "range": [
              496,
              514
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringOrNumArray",
                "optional": false,
                "range": [
                  498,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              },
              "range": [
                498,
                514
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 17
                }
              }
            }
          },
          "range": [
            492,
            514
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
            }
          }
        }
      ],
      "range": [
        480,
        519
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          547,
          550
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 18
          },
          "start": {
            "column": 27,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a9",
        "optional": false,
        "range": [
          529,
          531
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                533,
                534
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                536,
                537
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        541,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 21,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    540,
                    543
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 20,
                      "line": 18
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                539,
                544
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 18
                }
              }
            }
          ],
          "optional": false,
          "range": [
            532,
            545
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        }
      ],
      "range": [
        520,
        550
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          585,
          588
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 19
          },
          "start": {
            "column": 34,
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
        "name": "a10",
        "optional": false,
        "range": [
          560,
          563
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                565,
                566
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                568,
                569
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              }
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        573,
                        574
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 22,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    572,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 19
                    },
                    "start": {
                      "column": 21,
                      "line": 19
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                571,
                576
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 19
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  581,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 19
                  },
                  "start": {
                    "column": 30,
                    "line": 19
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                578,
                582
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 27,
                  "line": 19
                }
              }
            }
          ],
          "optional": false,
          "range": [
            564,
            583
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 19
            },
            "start": {
              "column": 13,
              "line": 19
            }
          }
        }
      ],
      "range": [
        551,
        588
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 19
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
        "body": [],
        "range": [
          629,
          632
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 20
          },
          "start": {
            "column": 40,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a11",
        "optional": false,
        "range": [
          598,
          601
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                603,
                604
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
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                606,
                607
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                609,
                610
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  615,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 26,
                    "line": 20
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                612,
                616
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 23,
                  "line": 20
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
              }
            },
            "range": [
              617,
              627
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  619,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 20
                  },
                  "start": {
                    "column": 30,
                    "line": 20
                  }
                }
              },
              "range": [
                619,
                627
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              }
            }
          },
          "range": [
            602,
            627
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 20
            },
            "start": {
              "column": 13,
              "line": 20
            }
          }
        }
      ],
      "range": [
        589,
        632
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 20
        },
        "start": {
          "column": 0,
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
            "name": "array",
            "optional": false,
            "range": [
              639,
              644
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  648,
                  649
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  651,
                  652
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 16,
                    "line": 23
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  654,
                  655
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 19,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              647,
              656
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 23
              },
              "start": {
                "column": 12,
                "line": 23
              }
            }
          },
          "range": [
            639,
            656
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        635,
        657
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "array2",
            "optional": false,
            "range": [
              662,
              668
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  672,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  678,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  685,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 24
                  },
                  "start": {
                    "column": 27,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              671,
              693
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 24
              },
              "start": {
                "column": 13,
                "line": 24
              }
            }
          },
          "range": [
            662,
            693
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        658,
        694
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "range": [
                    702,
                    707
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  }
                },
                "range": [
                  699,
                  707
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              698,
              708
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 3,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "range": [
            695,
            697
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          695,
          709
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        695,
        710
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "range": [
                717,
                722
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              }
            },
            "range": [
              714,
              722
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 26
              },
              "start": {
                "column": 3,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "range": [
            711,
            713
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          711,
          723
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        711,
        724
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  730,
                  731
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
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  733,
                  734
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 28
                  },
                  "start": {
                    "column": 7,
                    "line": 28
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"string\"",
                        "value": "string",
                        "range": [
                          738,
                          746
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      737,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 28
                      },
                      "start": {
                        "column": 11,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  736,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 28
                  },
                  "start": {
                    "column": 10,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  750,
                  755
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  757,
                  761
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 28
                  },
                  "start": {
                    "column": 31,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              729,
              762
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 28
              },
              "start": {
                "column": 3,
                "line": 28
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "range": [
            726,
            728
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          726,
          763
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        726,
        764
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  814,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 30
                  },
                  "start": {
                    "column": 5,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  817,
                  818
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
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"string\"",
                        "value": "string",
                        "range": [
                          822,
                          830
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 30
                          },
                          "start": {
                            "column": 13,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "range": [
                      821,
                      831
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 30
                      },
                      "start": {
                        "column": 12,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  820,
                  832
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  834,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 30
                  },
                  "start": {
                    "column": 25,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  841,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 30
                  },
                  "start": {
                    "column": 32,
                    "line": 30
                  }
                }
              }
            ],
            "range": [
              813,
              846
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "range": [
            809,
            812
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          809,
          847
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        809,
        848
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  883,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 31
                  },
                  "start": {
                    "column": 5,
                    "line": 31
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  886,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  889,
                  890
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  892,
                  897
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  899,
                  903
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 31
                  },
                  "start": {
                    "column": 21,
                    "line": 31
                  }
                }
              }
            ],
            "range": [
              882,
              904
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "range": [
            878,
            881
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          878,
          905
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        878,
        906
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  952,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 32
                  },
                  "start": {
                    "column": 5,
                    "line": 32
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  955,
                  956
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "range": [
              951,
              957
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "range": [
            947,
            950
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          947,
          958
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        947,
        959
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1021,
                  1022
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 33
                  },
                  "start": {
                    "column": 5,
                    "line": 33
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  1024,
                  1025
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              1020,
              1026
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "range": [
            1016,
            1019
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "range": [
          1016,
          1027
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        1016,
        1028
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1147,
          1150
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 36
          },
          "start": {
            "column": 27,
            "line": 36
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          1129,
          1132
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 36
          },
          "start": {
            "column": 9,
            "line": 36
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              1139,
              1140
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 36
              },
              "start": {
                "column": 19,
                "line": 36
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 36
              },
              "start": {
                "column": 20,
                "line": 36
              }
            },
            "range": [
              1140,
              1145
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
                    1142,
                    1143
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 36
                    },
                    "start": {
                      "column": 22,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1142,
                  1143
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 36
                  },
                  "start": {
                    "column": 22,
                    "line": 36
                  }
                }
              },
              "range": [
                1142,
                1145
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 36
                },
                "start": {
                  "column": 22,
                  "line": 36
                }
              }
            }
          },
          "range": [
            1136,
            1145
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 36
            },
            "start": {
              "column": 16,
              "line": 36
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 36
          },
          "start": {
            "column": 12,
            "line": 36
          }
        },
        "range": [
          1132,
          1135
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
                1133,
                1134
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              1133,
              1134
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 36
              }
            }
          }
        ]
      },
      "range": [
        1120,
        1150
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              1170,
              1177
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 37
              },
              "start": {
                "column": 19,
                "line": 37
              }
            }
          },
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              1179,
              1180
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 37
              },
              "start": {
                "column": 28,
                "line": 37
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              1182,
              1183
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 37
              },
              "start": {
                "column": 31,
                "line": 37
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
            1151,
            1154
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1154,
            1169
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1155,
                    1161
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 37
                    },
                    "start": {
                      "column": 4,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1162,
                    1168
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 37
                    },
                    "start": {
                      "column": 11,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                1155,
                1168
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 3,
              "line": 37
            }
          }
        },
        "range": [
          1151,
          1184
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        1151,
        1185
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              1190,
              1197
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"world\"",
            "value": "world",
            "range": [
              1199,
              1206
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 38
              },
              "start": {
                "column": 13,
                "line": 38
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
            1186,
            1189
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "optional": false,
        "range": [
          1186,
          1207
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        1186,
        1208
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1217,
          1225
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1219,
                1220
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 40
                },
                "start": {
                  "column": 9,
                  "line": 40
                }
              }
            },
            "range": [
              1219,
              1220
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 40
              },
              "start": {
                "column": 9,
                "line": 40
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1222,
                1223
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 40
                }
              }
            },
            "range": [
              1222,
              1223
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 40
              },
              "start": {
                "column": 12,
                "line": 40
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 40
          },
          "start": {
            "column": 7,
            "line": 40
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          1215,
          1216
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
          }
        }
      },
      "range": [
        1210,
        1225
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1240,
          1248
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1242,
                1243
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 41
                },
                "start": {
                  "column": 16,
                  "line": 41
                }
              }
            },
            "range": [
              1242,
              1243
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 41
              },
              "start": {
                "column": 16,
                "line": 41
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1245,
                1246
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 41
                },
                "start": {
                  "column": 19,
                  "line": 41
                }
              }
            },
            "range": [
              1245,
              1246
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 41
              },
              "start": {
                "column": 19,
                "line": 41
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 41
          },
          "start": {
            "column": 14,
            "line": 41
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "range": [
          1237,
          1239
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 41
          },
          "start": {
            "column": 11,
            "line": 41
          }
        }
      },
      "range": [
        1226,
        1248
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1292,
          1295
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 42
          },
          "start": {
            "column": 43,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          1258,
          1262
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              1284,
              1285
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 42
              },
              "start": {
                "column": 35,
                "line": 42
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
                "line": 42
              },
              "start": {
                "column": 36,
                "line": 42
              }
            },
            "range": [
              1285,
              1290
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
                    1287,
                    1288
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 42
                    },
                    "start": {
                      "column": 38,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1287,
                  1288
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 42
                  },
                  "start": {
                    "column": 38,
                    "line": 42
                  }
                }
              },
              "range": [
                1287,
                1290
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 42
                },
                "start": {
                  "column": 38,
                  "line": 42
                }
              }
            }
          },
          "range": [
            1281,
            1290
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 42
            },
            "start": {
              "column": 32,
              "line": 42
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 42
          },
          "start": {
            "column": 13,
            "line": 42
          }
        },
        "range": [
          1262,
          1280
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
                "name": "Number",
                "optional": false,
                "range": [
                  1273,
                  1279
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 42
                  },
                  "start": {
                    "column": 24,
                    "line": 42
                  }
                }
              },
              "range": [
                1273,
                1279
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 42
                },
                "start": {
                  "column": 24,
                  "line": 42
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
                1263,
                1264
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 42
                },
                "start": {
                  "column": 14,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              1263,
              1279
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 42
              },
              "start": {
                "column": 14,
                "line": 42
              }
            }
          }
        ]
      },
      "range": [
        1249,
        1295
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              1301,
              1302
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 5,
                "line": 43
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              1304,
              1305
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 43
              },
              "start": {
                "column": 8,
                "line": 43
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              1307,
              1308
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 43
              },
              "start": {
                "column": 11,
                "line": 43
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                1310,
                1311
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 43
                },
                "start": {
                  "column": 14,
                  "line": 43
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1312,
                1313
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              }
            },
            "range": [
              1310,
              1313
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 43
              },
              "start": {
                "column": 14,
                "line": 43
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            1296,
            1300
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "optional": false,
        "range": [
          1296,
          1314
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1296,
        1315
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              1321,
              1322
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 44
              },
              "start": {
                "column": 5,
                "line": 44
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              1324,
              1325
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 44
              },
              "start": {
                "column": 8,
                "line": 44
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              1327,
              1328
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 44
              },
              "start": {
                "column": 11,
                "line": 44
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "range": [
                1330,
                1332
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 44
                },
                "start": {
                  "column": 14,
                  "line": 44
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1333,
                1334
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 17,
                  "line": 44
                }
              }
            },
            "range": [
              1330,
              1334
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                1336,
                1337
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 44
                },
                "start": {
                  "column": 20,
                  "line": 44
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1338,
                1339
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 44
                },
                "start": {
                  "column": 22,
                  "line": 44
                }
              }
            },
            "range": [
              1336,
              1339
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 20,
                "line": 44
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            1316,
            1320
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "optional": false,
        "range": [
          1316,
          1340
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1316,
        1341
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 47
    },
    "start": {
      "column": 0,
      "line": 9
    }
  },
  "hashbang": null
}
```
