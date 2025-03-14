__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    384
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "range": [
          27,
          31
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            40,
            65
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                41,
                47
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    49,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    58,
                    64
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
                }
              ],
              "range": [
                49,
                64
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 18,
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
            34,
            40
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "range": [
          34,
          65
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "range": [
        22,
        66
      ],
      "loc": {
        "end": {
          "column": 44,
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
        "name": "TypeMap",
        "optional": false,
        "range": [
          73,
          80
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  117,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 49,
                    "line": 5
                  }
                }
              },
              "range": [
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 49,
                  "line": 5
                }
              }
            },
            "range": [
              111,
              118
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 43,
                "line": 5
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                109,
                110
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 41,
                  "line": 5
                }
              }
            },
            "range": [
              109,
              110
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 41,
                "line": 5
              }
            }
          },
          "range": [
            109,
            119
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 5
            },
            "start": {
              "column": 41,
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
            102,
            105
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 5
            },
            "start": {
              "column": 34,
              "line": 5
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "range": [
                122,
                128
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 5
                },
                "start": {
                  "column": 54,
                  "line": 5
                }
              }
            },
            {
              "type": "TSBooleanKeyword",
              "range": [
                131,
                138
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 5
                },
                "start": {
                  "column": 63,
                  "line": 5
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                141,
                147
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
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  150,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 5
                  },
                  "start": {
                    "column": 82,
                    "line": 5
                  }
                }
              },
              "range": [
                150,
                158
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 5
                },
                "start": {
                  "column": 82,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            122,
            158
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 5
            },
            "start": {
              "column": 54,
              "line": 5
            }
          }
        },
        "range": [
          99,
          160
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 5
          },
          "start": {
            "column": 31,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        },
        "range": [
          80,
          96
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
                "name": "Enum",
                "optional": false,
                "range": [
                  91,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              },
              "range": [
                91,
                95
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                81,
                82
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              81,
              95
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        68,
        161
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          218,
          383
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setArray2",
              "optional": false,
              "range": [
                224,
                233
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                233,
                381
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "range": [
                          310,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          316,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        310,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      310,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  300,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 80,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 37,
                        "line": 8
                      }
                    },
                    "range": [
                      257,
                      260
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          259,
                          260
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 8
                          },
                          "start": {
                            "column": 39,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        259,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 39,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    256,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 8
                    },
                    "start": {
                      "column": 36,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 8
                      },
                      "start": {
                        "column": 47,
                        "line": 8
                      }
                    },
                    "range": [
                      267,
                      298
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          276,
                          298
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
                                  279,
                                  280
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 59,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                279,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 8
                                },
                                "start": {
                                  "column": 59,
                                  "line": 8
                                }
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  277,
                                  278
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                277,
                                278
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 8
                                },
                                "start": {
                                  "column": 57,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              277,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 8
                              },
                              "start": {
                                "column": 57,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                292,
                                297
                              ],
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    293,
                                    296
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
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
                                  "column": 77,
                                  "line": 8
                                },
                                "start": {
                                  "column": 72,
                                  "line": 8
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ArrayLike",
                              "optional": false,
                              "range": [
                                283,
                                292
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 8
                                },
                                "start": {
                                  "column": 63,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              283,
                              297
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 8
                              },
                              "start": {
                                "column": 63,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 8
                          },
                          "start": {
                            "column": 56,
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
                          269,
                          276
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 8
                          },
                          "start": {
                            "column": 49,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        269,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 8
                        },
                        "start": {
                          "column": 49,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    262,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 8
                    },
                    "start": {
                      "column": 42,
                      "line": 8
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                },
                "range": [
                  233,
                  255
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "range": [
                              252,
                              253
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 8
                              },
                              "start": {
                                "column": 32,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            252,
                            253
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 8
                            },
                            "start": {
                              "column": 32,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          246,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 8
                          },
                          "start": {
                            "column": 26,
                            "line": 8
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            244,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 8
                            },
                            "start": {
                              "column": 24,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          244,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 8
                          },
                          "start": {
                            "column": 24,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        244,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        234,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 14,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      234,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              224,
              381
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 55,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BufferPool",
        "optional": false,
        "range": [
          169,
          179
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 7
          }
        },
        "range": [
          179,
          217
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
                "name": "Enum",
                "optional": false,
                "range": [
                  190,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 7
                  }
                }
              },
              "range": [
                190,
                194
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                180,
                181
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              180,
              194
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  213,
                  216
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        214,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 7
                        },
                        "start": {
                          "column": 51,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      214,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 7
                      },
                      "start": {
                        "column": 51,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "range": [
                  206,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 7
                  },
                  "start": {
                    "column": 43,
                    "line": 7
                  }
                }
              },
              "range": [
                206,
                216
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 7
                },
                "start": {
                  "column": 43,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                196,
                197
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              196,
              216
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        163,
        383
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
