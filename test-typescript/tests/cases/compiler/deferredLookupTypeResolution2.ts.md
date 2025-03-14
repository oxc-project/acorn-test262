__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    739
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringContains",
        "optional": false,
        "range": [
          27,
          41
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "range": [
              131,
              132
            ],
            "loc": {
              "end": {
                "column": 110,
                "line": 3
              },
              "start": {
                "column": 109,
                "line": 3
              }
            }
          },
          "range": [
            131,
            132
          ],
          "loc": {
            "end": {
              "column": 110,
              "line": 3
            },
            "start": {
              "column": 109,
              "line": 3
            }
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    89,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 3
                    },
                    "start": {
                      "column": 67,
                      "line": 3
                    }
                  }
                },
                "range": [
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 3
                  },
                  "start": {
                    "column": 67,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'true'",
                  "value": "true",
                  "range": [
                    93,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 3
                    },
                    "start": {
                      "column": 71,
                      "line": 3
                    }
                  }
                },
                "range": [
                  93,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 3
                  },
                  "start": {
                    "column": 71,
                    "line": 3
                  }
                }
              },
              "range": [
                81,
                101
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 3
                },
                "start": {
                  "column": 59,
                  "line": 3
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 3
                          },
                          "start": {
                            "column": 88,
                            "line": 3
                          }
                        },
                        "range": [
                          110,
                          118
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            112,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 3
                            },
                            "start": {
                              "column": 90,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        107,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 3
                        },
                        "start": {
                          "column": 85,
                          "line": 3
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
                        "column": 106,
                        "line": 3
                      },
                      "start": {
                        "column": 97,
                        "line": 3
                      }
                    },
                    "range": [
                      119,
                      128
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'false'",
                        "value": "false",
                        "range": [
                          121,
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 106,
                            "line": 3
                          },
                          "start": {
                            "column": 99,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        121,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 3
                        },
                        "start": {
                          "column": 99,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    106,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 3
                    },
                    "start": {
                      "column": 84,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                104,
                129
              ],
              "loc": {
                "end": {
                  "column": 107,
                  "line": 3
                },
                "start": {
                  "column": 82,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            81,
            129
          ],
          "loc": {
            "end": {
              "column": 107,
              "line": 3
            },
            "start": {
              "column": 59,
              "line": 3
            }
          }
        },
        "range": [
          80,
          133
        ],
        "loc": {
          "end": {
            "column": 111,
            "line": 3
          },
          "start": {
            "column": 58,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        },
        "range": [
          41,
          77
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                52,
                58
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
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
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              42,
              58
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                70,
                76
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 3
                },
                "start": {
                  "column": 48,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "range": [
                60,
                61
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              60,
              76
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 3
              },
              "start": {
                "column": 38,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        134
      ],
      "loc": {
        "end": {
          "column": 112,
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
        "name": "ObjectHasKey",
        "optional": false,
        "range": [
          141,
          153
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            191,
            220
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  199,
                  216
                ],
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "range": [
                          206,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 5
                          },
                          "start": {
                            "column": 70,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        206,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 5
                        },
                        "start": {
                          "column": 70,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      200,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 5
                      },
                      "start": {
                        "column": 64,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      209,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 5
                      },
                      "start": {
                        "column": 73,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 5
                  },
                  "start": {
                    "column": 63,
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
                  192,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 5
                  },
                  "start": {
                    "column": 56,
                    "line": 5
                  }
                }
              },
              "range": [
                192,
                216
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 5
                },
                "start": {
                  "column": 56,
                  "line": 5
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "range": [
                  218,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 5
                  },
                  "start": {
                    "column": 82,
                    "line": 5
                  }
                }
              },
              "range": [
                218,
                219
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 5
                },
                "start": {
                  "column": 82,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 5
            },
            "start": {
              "column": 55,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringContains",
          "optional": false,
          "range": [
            177,
            191
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 5
            },
            "start": {
              "column": 41,
              "line": 5
            }
          }
        },
        "range": [
          177,
          220
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 5
          },
          "start": {
            "column": 41,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        },
        "range": [
          153,
          174
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                154,
                155
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              154,
              155
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                167,
                173
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "range": [
                157,
                158
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              157,
              173
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        136,
        221
      ],
      "loc": {
        "end": {
          "column": 85,
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
        "name": "A",
        "optional": false,
        "range": [
          228,
          229
        ],
        "loc": {
          "end": {
            "column": 6,
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            247,
            255
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
                  248,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "range": [
                248,
                249
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'0'",
                "value": "0",
                "range": [
                  251,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              },
              "range": [
                251,
                254
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "range": [
            235,
            247
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        },
        "range": [
          235,
          255
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 7
          },
          "start": {
            "column": 12,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        },
        "range": [
          229,
          232
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
                230,
                231
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              230,
              231
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 7,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        223,
        256
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "name": "B",
        "optional": false,
        "range": [
          263,
          264
        ],
        "loc": {
          "end": {
            "column": 6,
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
            279,
            302
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    281,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 23,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    289,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 31,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                280,
                296
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'1'",
                "value": "1",
                "range": [
                  298,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 9
                  },
                  "start": {
                    "column": 40,
                    "line": 9
                  }
                }
              },
              "range": [
                298,
                301
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 40,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "range": [
            267,
            279
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 9
            },
            "start": {
              "column": 9,
              "line": 9
            }
          }
        },
        "range": [
          267,
          302
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "range": [
        258,
        303
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "name": "C",
        "optional": false,
        "range": [
          320,
          321
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            336,
            359
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    338,
                    344
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
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    346,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 10
                    },
                    "start": {
                      "column": 31,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                337,
                353
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'2'",
                "value": "2",
                "range": [
                  355,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 10
                  },
                  "start": {
                    "column": 40,
                    "line": 10
                  }
                }
              },
              "range": [
                355,
                358
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 10
                },
                "start": {
                  "column": 40,
                  "line": 10
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 10
            },
            "start": {
              "column": 21,
              "line": 10
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "range": [
            324,
            336
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 10
            },
            "start": {
              "column": 9,
              "line": 10
            }
          }
        },
        "range": [
          324,
          359
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "range": [
        315,
        360
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "name": "D",
        "optional": false,
        "range": [
          378,
          379
        ],
        "loc": {
          "end": {
            "column": 6,
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
            383,
            393
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    385,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                384,
                392
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 10,
              "line": 11
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            382,
            383
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
          382,
          393
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "range": [
        373,
        394
      ],
      "loc": {
        "end": {
          "column": 21,
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
        "name": "E",
        "optional": false,
        "range": [
          442,
          443
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              478,
              486
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
                    479,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 42,
                      "line": 14
                    }
                  }
                },
                "range": [
                  479,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'1'",
                  "value": "1",
                  "range": [
                    482,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 14
                    },
                    "start": {
                      "column": 45,
                      "line": 14
                    }
                  }
                },
                "range": [
                  482,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 14
                  },
                  "start": {
                    "column": 45,
                    "line": 14
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 14
              },
              "start": {
                "column": 41,
                "line": 14
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "range": [
              466,
              478
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 14
              },
              "start": {
                "column": 29,
                "line": 14
              }
            }
          },
          "range": [
            466,
            486
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 14
            },
            "start": {
              "column": 29,
              "line": 14
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
                "type": "Identifier",
                "decorators": [],
                "name": "true",
                "optional": false,
                "range": [
                  451,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 14,
                    "line": 14
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
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                },
                "range": [
                  455,
                  463
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'true'",
                    "value": "true",
                    "range": [
                      457,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 14
                      },
                      "start": {
                        "column": 20,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    457,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 20,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                451,
                463
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            449,
            465
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        },
        "range": [
          449,
          487
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        },
        "range": [
          443,
          446
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
                444,
                445
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              444,
              445
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 7,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        437,
        488
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Juxtapose",
        "optional": false,
        "range": [
          495,
          504
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              572,
              580
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
                    573,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 16
                    },
                    "start": {
                      "column": 83,
                      "line": 16
                    }
                  }
                },
                "range": [
                  573,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 16
                  },
                  "start": {
                    "column": 83,
                    "line": 16
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'1'",
                  "value": "1",
                  "range": [
                    576,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 16
                    },
                    "start": {
                      "column": 86,
                      "line": 16
                    }
                  }
                },
                "range": [
                  576,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 16
                  },
                  "start": {
                    "column": 86,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 16
              },
              "start": {
                "column": 82,
                "line": 16
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "range": [
              560,
              572
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 16
              },
              "start": {
                "column": 70,
                "line": 16
              }
            }
          },
          "range": [
            560,
            580
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 16
            },
            "start": {
              "column": 70,
              "line": 16
            }
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "true",
                    "optional": false,
                    "range": [
                      513,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 23,
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
                        "column": 40,
                        "line": 16
                      },
                      "start": {
                        "column": 27,
                        "line": 16
                      }
                    },
                    "range": [
                      517,
                      530
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'otherwise'",
                        "value": "otherwise",
                        "range": [
                          519,
                          530
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 16
                          },
                          "start": {
                            "column": 29,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        519,
                        530
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 16
                        },
                        "start": {
                          "column": 29,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    513,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 16
                    },
                    "start": {
                      "column": 23,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                511,
                532
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 16
                          },
                          "start": {
                            "column": 49,
                            "line": 16
                          }
                        },
                        "range": [
                          539,
                          547
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            541,
                            547
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
                        }
                      },
                      "range": [
                        538,
                        547
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 16
                        },
                        "start": {
                          "column": 48,
                          "line": 16
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
                        "column": 66,
                        "line": 16
                      },
                      "start": {
                        "column": 58,
                        "line": 16
                      }
                    },
                    "range": [
                      548,
                      556
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'true'",
                        "value": "true",
                        "range": [
                          550,
                          556
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 16
                          },
                          "start": {
                            "column": 60,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        550,
                        556
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 16
                        },
                        "start": {
                          "column": 60,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    537,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 16
                    },
                    "start": {
                      "column": 47,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                535,
                558
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 16
                },
                "start": {
                  "column": 45,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            511,
            558
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 16
            },
            "start": {
              "column": 21,
              "line": 16
            }
          }
        },
        "range": [
          510,
          581
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 16
          },
          "start": {
            "column": 20,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 16
          },
          "start": {
            "column": 14,
            "line": 16
          }
        },
        "range": [
          504,
          507
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
                505,
                506
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
            "out": false,
            "range": [
              505,
              506
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
          }
        ]
      },
      "range": [
        490,
        582
      ],
      "loc": {
        "end": {
          "column": 92,
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
        "name": "DeepError",
        "optional": false,
        "range": [
          622,
          631
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              663,
              666
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
                    664,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 19
                    },
                    "start": {
                      "column": 47,
                      "line": 19
                    }
                  }
                },
                "range": [
                  664,
                  665
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 19
                  },
                  "start": {
                    "column": 47,
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
                "column": 46,
                "line": 19
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "range": [
              654,
              663
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 37,
                "line": 19
              }
            }
          },
          "range": [
            654,
            666
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 19
            },
            "start": {
              "column": 37,
              "line": 19
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
                "type": "Identifier",
                "decorators": [],
                "name": "true",
                "optional": false,
                "range": [
                  639,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 19
                  },
                  "start": {
                    "column": 22,
                    "line": 19
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
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 26,
                    "line": 19
                  }
                },
                "range": [
                  643,
                  651
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'true'",
                    "value": "true",
                    "range": [
                      645,
                      651
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 28,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    645,
                    651
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 28,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                639,
                651
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 19
                }
              }
            }
          ],
          "range": [
            637,
            653
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 19
            },
            "start": {
              "column": 20,
              "line": 19
            }
          }
        },
        "range": [
          637,
          667
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 19
          },
          "start": {
            "column": 14,
            "line": 19
          }
        },
        "range": [
          631,
          634
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
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              632,
              633
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 19
              },
              "start": {
                "column": 15,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        617,
        668
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepOK",
        "optional": false,
        "range": [
          675,
          681
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              733,
              736
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
                    734,
                    735
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 21
                    },
                    "start": {
                      "column": 64,
                      "line": 21
                    }
                  }
                },
                "range": [
                  734,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 21
                  },
                  "start": {
                    "column": 64,
                    "line": 21
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 21
              },
              "start": {
                "column": 63,
                "line": 21
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "range": [
              724,
              733
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 21
              },
              "start": {
                "column": 54,
                "line": 21
              }
            }
          },
          "range": [
            724,
            736
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 21
            },
            "start": {
              "column": 54,
              "line": 21
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
                "type": "Identifier",
                "decorators": [],
                "name": "true",
                "optional": false,
                "range": [
                  689,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 19,
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
                    "column": 31,
                    "line": 21
                  },
                  "start": {
                    "column": 23,
                    "line": 21
                  }
                },
                "range": [
                  693,
                  701
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'true'",
                    "value": "true",
                    "range": [
                      695,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 21
                      },
                      "start": {
                        "column": 25,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    695,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 21
                    },
                    "start": {
                      "column": 25,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                689,
                702
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 19,
                  "line": 21
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "otherwise",
                "optional": false,
                "range": [
                  703,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 21
                  },
                  "start": {
                    "column": 33,
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
                    "column": 51,
                    "line": 21
                  },
                  "start": {
                    "column": 42,
                    "line": 21
                  }
                },
                "range": [
                  712,
                  721
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'false'",
                    "value": "false",
                    "range": [
                      714,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 21
                      },
                      "start": {
                        "column": 44,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    714,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 21
                    },
                    "start": {
                      "column": 44,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                703,
                721
              ],
              "loc": {
                "end": {
                  "column": 51,
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
            687,
            723
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 21
            },
            "start": {
              "column": 17,
              "line": 21
            }
          }
        },
        "range": [
          687,
          737
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 11,
            "line": 21
          }
        },
        "range": [
          681,
          684
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
                682,
                683
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              682,
              683
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        670,
        738
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
