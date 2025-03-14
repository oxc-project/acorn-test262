__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    697
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
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "range": [
            149,
            150
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
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
                    94,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  94,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
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
                    103,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "range": [
                  103,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "range": [
                86,
                111
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 10,
                            "line": 5
                          }
                        },
                        "range": [
                          124,
                          132
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            126,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        121,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 7,
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
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    },
                    "range": [
                      133,
                      142
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'false'",
                        "value": "false",
                        "range": [
                          135,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 21,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        135,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    120,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                118,
                144
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            86,
            144
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          80,
          151
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 6
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
        151
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 6
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
          158,
          170
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            208,
            237
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  216,
                  233
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
                          223,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 8
                          },
                          "start": {
                            "column": 70,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        223,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 8
                        },
                        "start": {
                          "column": 70,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      217,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 8
                      },
                      "start": {
                        "column": 64,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      226,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 8
                      },
                      "start": {
                        "column": 73,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 8
                  },
                  "start": {
                    "column": 63,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "range": [
                  209,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 8
                  },
                  "start": {
                    "column": 56,
                    "line": 8
                  }
                }
              },
              "range": [
                209,
                233
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 8
                },
                "start": {
                  "column": 56,
                  "line": 8
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
                  235,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 8
                  },
                  "start": {
                    "column": 82,
                    "line": 8
                  }
                }
              },
              "range": [
                235,
                236
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 8
                },
                "start": {
                  "column": 82,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 8
            },
            "start": {
              "column": 55,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringContains",
          "optional": false,
          "range": [
            194,
            208
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 8
            },
            "start": {
              "column": 41,
              "line": 8
            }
          }
        },
        "range": [
          194,
          237
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 8
          },
          "start": {
            "column": 41,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
          }
        },
        "range": [
          170,
          191
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
                171,
                172
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              171,
              172
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 18,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                184,
                190
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 8
                },
                "start": {
                  "column": 31,
                  "line": 8
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
                174,
                175
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              174,
              190
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        153,
        237
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "First",
        "optional": false,
        "range": [
          244,
          249
        ],
        "loc": {
          "end": {
            "column": 10,
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
            267,
            275
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
                  268,
                  269
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
              "range": [
                268,
                269
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
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'0'",
                "value": "0",
                "range": [
                  271,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 32,
                    "line": 10
                  }
                }
              },
              "range": [
                271,
                274
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 10
                },
                "start": {
                  "column": 32,
                  "line": 10
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 10
            },
            "start": {
              "column": 28,
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
            255,
            267
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 10
            },
            "start": {
              "column": 16,
              "line": 10
            }
          }
        },
        "range": [
          255,
          275
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        },
        "range": [
          249,
          252
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
                250,
                251
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              250,
              251
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        239,
        276
      ],
      "loc": {
        "end": {
          "column": 37,
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
        "name": "T1",
        "optional": false,
        "range": [
          306,
          308
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            323,
            343
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      326,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 25,
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
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 26,
                        "line": 12
                      }
                    },
                    "range": [
                      327,
                      335
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        329,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 12
                        },
                        "start": {
                          "column": 28,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    326,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 25,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                324,
                337
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  339,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 12
                  },
                  "start": {
                    "column": 38,
                    "line": 12
                  }
                }
              },
              "range": [
                339,
                342
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 12
                },
                "start": {
                  "column": 38,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 12
            },
            "start": {
              "column": 22,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "range": [
            311,
            323
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 12
            },
            "start": {
              "column": 10,
              "line": 12
            }
          }
        },
        "range": [
          311,
          343
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        301,
        344
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          361,
          363
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            378,
            398
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      381,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 13
                      },
                      "start": {
                        "column": 25,
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
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 26,
                        "line": 13
                      }
                    },
                    "range": [
                      382,
                      390
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        384,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 13
                        },
                        "start": {
                          "column": 28,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    381,
                    390
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
                }
              ],
              "range": [
                379,
                392
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'b'",
                "value": "b",
                "range": [
                  394,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 13
                  },
                  "start": {
                    "column": 38,
                    "line": 13
                  }
                }
              },
              "range": [
                394,
                397
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 13
                },
                "start": {
                  "column": 38,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 13
            },
            "start": {
              "column": 22,
              "line": 13
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "range": [
            366,
            378
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 13
            },
            "start": {
              "column": 10,
              "line": 13
            }
          }
        },
        "range": [
          366,
          398
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        356,
        399
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
        "name": "f1",
        "optional": false,
        "range": [
          509,
          511
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 17
              },
              "start": {
                "column": 57,
                "line": 17
              }
            },
            "range": [
              549,
              552
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  551,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 17
                  },
                  "start": {
                    "column": 59,
                    "line": 17
                  }
                }
              },
              "range": [
                551,
                552
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 17
                },
                "start": {
                  "column": 59,
                  "line": 17
                }
              }
            }
          },
          "range": [
            548,
            552
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 17
            },
            "start": {
              "column": 56,
              "line": 17
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 17
              },
              "start": {
                "column": 63,
                "line": 17
              }
            },
            "range": [
              555,
              558
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  557,
                  558
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 17
                  },
                  "start": {
                    "column": 65,
                    "line": 17
                  }
                }
              },
              "range": [
                557,
                558
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 17
                },
                "start": {
                  "column": 65,
                  "line": 17
                }
              }
            }
          },
          "range": [
            554,
            558
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 17
            },
            "start": {
              "column": 62,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 90,
            "line": 17
          },
          "start": {
            "column": 67,
            "line": 17
          }
        },
        "range": [
          559,
          582
        ],
        "typeAnnotation": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    569,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 17
                    },
                    "start": {
                      "column": 77,
                      "line": 17
                    }
                  }
                },
                "range": [
                  569,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 17
                  },
                  "start": {
                    "column": 77,
                    "line": 17
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    573,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 17
                    },
                    "start": {
                      "column": 81,
                      "line": 17
                    }
                  }
                },
                "range": [
                  573,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 17
                  },
                  "start": {
                    "column": 81,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              569,
              574
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 17
              },
              "start": {
                "column": 77,
                "line": 17
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              564,
              565
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 17
              },
              "start": {
                "column": 72,
                "line": 17
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              577,
              580
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 17
              },
              "start": {
                "column": 85,
                "line": 17
              }
            }
          },
          "range": [
            561,
            582
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 17
            },
            "start": {
              "column": 69,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 17
          },
          "start": {
            "column": 19,
            "line": 17
          }
        },
        "range": [
          511,
          547
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                522,
                528
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 17
                },
                "start": {
                  "column": 30,
                  "line": 17
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
                512,
                513
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              512,
              528
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 20,
                "line": 17
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                540,
                546
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 17
                },
                "start": {
                  "column": 48,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                530,
                531
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 17
                },
                "start": {
                  "column": 38,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              530,
              546
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 17
              },
              "start": {
                "column": 38,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        492,
        583
      ],
      "loc": {
        "end": {
          "column": 91,
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    637,
                    638
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
                  "type": "Literal",
                  "raw": "'x'",
                  "value": "x",
                  "range": [
                    640,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "range": [
                  634,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                634,
                644
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              627,
              645
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          621,
          647
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 36,
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
        "name": "f2",
        "optional": false,
        "range": [
          594,
          596
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 31,
                "line": 19
              }
            },
            "range": [
              616,
              619
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  618,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 33,
                    "line": 19
                  }
                }
              },
              "range": [
                618,
                619
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 33,
                  "line": 19
                }
              }
            }
          },
          "range": [
            615,
            619
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 19
            },
            "start": {
              "column": 30,
              "line": 19
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 19
          },
          "start": {
            "column": 11,
            "line": 19
          }
        },
        "range": [
          596,
          614
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                607,
                613
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 19
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
                597,
                598
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              597,
              613
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        585,
        647
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    691,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 24
                    },
                    "start": {
                      "column": 14,
                      "line": 24
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "range": [
                  688,
                  690
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "range": [
                688,
                693
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              681,
              694
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          675,
          696
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 26,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          658,
          660
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 23
              }
            },
            "range": [
              662,
              673
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      664,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    664,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'b'",
                    "value": "b",
                    "range": [
                      670,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 23
                      },
                      "start": {
                        "column": 21,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    670,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 23
                    },
                    "start": {
                      "column": 21,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                664,
                673
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              }
            }
          },
          "range": [
            661,
            673
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
            }
          }
        }
      ],
      "range": [
        649,
        696
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
