__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    902
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMappedType",
        "optional": false,
        "range": [
          5,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
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
              "name": "primitive",
              "optional": false,
              "range": [
                46,
                55
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 1,
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
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                55,
                66
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Primitive",
                  "optional": false,
                  "range": [
                    57,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  57,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              46,
              67
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          }
        ],
        "range": [
          43,
          69
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
            "column": 17,
            "line": 1
          }
        },
        "range": [
          17,
          40
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSAnyKeyword",
              "range": [
                36,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 36,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Primitive",
              "optional": false,
              "range": [
                18,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              18,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        70
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
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
        "name": "TupleMapperOld",
        "optional": false,
        "range": [
          77,
          91
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
              "name": "Tuple",
              "optional": false,
              "range": [
                132,
                137
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              132,
              137
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            }
          },
          "range": [
            126,
            137
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 6
            },
            "start": {
              "column": 9,
              "line": 6
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "range": [
            119,
            122
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 2,
              "line": 6
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
                "name": "Key",
                "optional": false,
                "range": [
                  146,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 6
                  }
                }
              },
              "range": [
                146,
                149
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 29,
                  "line": 6
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "range": [
                  140,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              "range": [
                140,
                145
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "range": [
              140,
              150
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSNumberKeyword",
              "range": [
                165,
                171
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 48,
                  "line": 6
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "range": [
                  159,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              "range": [
                159,
                164
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 6
                },
                "start": {
                  "column": 42,
                  "line": 6
                }
              }
            },
            "range": [
              159,
              172
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 6
              },
              "start": {
                "column": 42,
                "line": 6
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              202,
              207
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 6
              },
              "start": {
                "column": 85,
                "line": 6
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                187,
                199
              ],
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "range": [
                        194,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 6
                        },
                        "start": {
                          "column": 77,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      194,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 6
                      },
                      "start": {
                        "column": 77,
                        "line": 6
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "range": [
                        188,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 6
                        },
                        "start": {
                          "column": 71,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      188,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 6
                      },
                      "start": {
                        "column": 71,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    188,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 6
                    },
                    "start": {
                      "column": 71,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 6
                },
                "start": {
                  "column": 70,
                  "line": 6
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyMappedType",
              "optional": false,
              "range": [
                175,
                187
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 6
                },
                "start": {
                  "column": 58,
                  "line": 6
                }
              }
            },
            "range": [
              175,
              199
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 6
              },
              "start": {
                "column": 58,
                "line": 6
              }
            }
          },
          "range": [
            140,
            207
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 6
            },
            "start": {
              "column": 23,
              "line": 6
            }
          }
        },
        "range": [
          115,
          210
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 43,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 5
          }
        },
        "range": [
          91,
          112
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
                  106,
                  109
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
              "range": [
                106,
                111
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "range": [
                92,
                97
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              92,
              111
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        72,
        211
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
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
        "name": "MyMappedTupleOld",
        "optional": false,
        "range": [
          218,
          234
        ],
        "loc": {
          "end": {
            "column": 21,
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
            251,
            269
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    253,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 9
                    },
                    "start": {
                      "column": 40,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    261,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 9
                    },
                    "start": {
                      "column": 48,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                252,
                268
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 9
                },
                "start": {
                  "column": 39,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 9
            },
            "start": {
              "column": 38,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleMapperOld",
          "optional": false,
          "range": [
            237,
            251
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 24,
              "line": 9
            }
          }
        },
        "range": [
          237,
          269
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 9
          },
          "start": {
            "column": 24,
            "line": 9
          }
        }
      },
      "range": [
        213,
        270
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
        "name": "extractPrimitivesOld",
        "optional": false,
        "range": [
          337,
          357
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "mappedTypes",
            "optional": false,
            "range": [
              382,
              393
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 11
              },
              "start": {
                "column": 62,
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
                "column": 96,
                "line": 11
              },
              "start": {
                "column": 73,
                "line": 11
              }
            },
            "range": [
              393,
              416
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  409,
                  416
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "range": [
                        410,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 11
                        },
                        "start": {
                          "column": 90,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      410,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 11
                      },
                      "start": {
                        "column": 90,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 11
                  },
                  "start": {
                    "column": 89,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleMapperOld",
                "optional": false,
                "range": [
                  395,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 11
                  },
                  "start": {
                    "column": 75,
                    "line": 11
                  }
                }
              },
              "range": [
                395,
                416
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 11
                },
                "start": {
                  "column": 75,
                  "line": 11
                }
              }
            }
          },
          "range": [
            379,
            416
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 11
            },
            "start": {
              "column": 59,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 104,
            "line": 11
          },
          "start": {
            "column": 97,
            "line": 11
          }
        },
        "range": [
          417,
          424
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tuple",
            "optional": false,
            "range": [
              419,
              424
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 11
              },
              "start": {
                "column": 99,
                "line": 11
              }
            }
          },
          "range": [
            419,
            424
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 11
            },
            "start": {
              "column": 99,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 11
          },
          "start": {
            "column": 37,
            "line": 11
          }
        },
        "range": [
          357,
          378
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
                  372,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 11
                  },
                  "start": {
                    "column": 52,
                    "line": 11
                  }
                }
              },
              "range": [
                372,
                377
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 11
                },
                "start": {
                  "column": 52,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "range": [
                358,
                363
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              358,
              377
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 11
              },
              "start": {
                "column": 38,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        320,
        425
      ],
      "loc": {
        "end": {
          "column": 105,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "myPrimitiveTupleOld",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 13
                },
                "start": {
                  "column": 25,
                  "line": 13
                }
              },
              "range": [
                452,
                470
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      455,
                      461
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
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      463,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 13
                      },
                      "start": {
                        "column": 36,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  454,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 13
                  },
                  "start": {
                    "column": 27,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              433,
              470
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
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
                      "name": "primitive",
                      "optional": false,
                      "range": [
                        496,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 13
                        },
                        "start": {
                          "column": 69,
                          "line": 13
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        507,
                        509
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 13
                        },
                        "start": {
                          "column": 80,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      496,
                      509
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 13
                      },
                      "start": {
                        "column": 69,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  494,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 13
                  },
                  "start": {
                    "column": 67,
                    "line": 13
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "range": [
                        515,
                        524
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 13
                        },
                        "start": {
                          "column": 88,
                          "line": 13
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
                        526,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 13
                        },
                        "start": {
                          "column": 99,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      515,
                      527
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 13
                      },
                      "start": {
                        "column": 88,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  513,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 13
                  },
                  "start": {
                    "column": 86,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "extractPrimitivesOld",
              "optional": false,
              "range": [
                473,
                493
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 13
                },
                "start": {
                  "column": 46,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              473,
              530
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 13
              },
              "start": {
                "column": 46,
                "line": 13
              }
            }
          },
          "range": [
            433,
            530
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        427,
        531
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleMapperNew",
        "optional": false,
        "range": [
          538,
          552
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
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
              "name": "Tuple",
              "optional": false,
              "range": [
                593,
                598
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              593,
              598
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 15,
                "line": 16
              }
            }
          },
          "range": [
            587,
            598
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 16
            },
            "start": {
              "column": 9,
              "line": 16
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "range": [
            580,
            583
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 16
            },
            "start": {
              "column": 2,
              "line": 16
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              613,
              625
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      620,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 16
                      },
                      "start": {
                        "column": 42,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    620,
                    623
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 16
                    },
                    "start": {
                      "column": 42,
                      "line": 16
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tuple",
                    "optional": false,
                    "range": [
                      614,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 16
                      },
                      "start": {
                        "column": 36,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    614,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 16
                    },
                    "start": {
                      "column": 36,
                      "line": 16
                    }
                  }
                },
                "range": [
                  614,
                  624
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 16
                  },
                  "start": {
                    "column": 36,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 16
              },
              "start": {
                "column": 35,
                "line": 16
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMappedType",
            "optional": false,
            "range": [
              601,
              613
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 23,
                "line": 16
              }
            }
          },
          "range": [
            601,
            625
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 16
            },
            "start": {
              "column": 23,
              "line": 16
            }
          }
        },
        "range": [
          576,
          628
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 43,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 15
          },
          "start": {
            "column": 19,
            "line": 15
          }
        },
        "range": [
          552,
          573
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
                  567,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 15
                  },
                  "start": {
                    "column": 34,
                    "line": 15
                  }
                }
              },
              "range": [
                567,
                572
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 15
                },
                "start": {
                  "column": 34,
                  "line": 15
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "range": [
                553,
                558
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              553,
              572
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        533,
        629
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 17
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
        "name": "MyMappedTupleNew",
        "optional": false,
        "range": [
          636,
          652
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            669,
            687
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    671,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 40,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    679,
                    685
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 19
                    },
                    "start": {
                      "column": 48,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                670,
                686
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 19
                },
                "start": {
                  "column": 39,
                  "line": 19
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 19
            },
            "start": {
              "column": 38,
              "line": 19
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleMapperNew",
          "optional": false,
          "range": [
            655,
            669
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 19
            },
            "start": {
              "column": 24,
              "line": 19
            }
          }
        },
        "range": [
          655,
          687
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 19
          },
          "start": {
            "column": 24,
            "line": 19
          }
        }
      },
      "range": [
        631,
        688
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
        "name": "extractPrimitivesNew",
        "optional": false,
        "range": [
          707,
          727
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "mappedTypes",
            "optional": false,
            "range": [
              752,
              763
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 21
              },
              "start": {
                "column": 62,
                "line": 21
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 96,
                "line": 21
              },
              "start": {
                "column": 73,
                "line": 21
              }
            },
            "range": [
              763,
              786
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  779,
                  786
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "range": [
                        780,
                        785
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 21
                        },
                        "start": {
                          "column": 90,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      780,
                      785
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 21
                      },
                      "start": {
                        "column": 90,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 21
                  },
                  "start": {
                    "column": 89,
                    "line": 21
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleMapperNew",
                "optional": false,
                "range": [
                  765,
                  779
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 21
                  },
                  "start": {
                    "column": 75,
                    "line": 21
                  }
                }
              },
              "range": [
                765,
                786
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 21
                },
                "start": {
                  "column": 75,
                  "line": 21
                }
              }
            }
          },
          "range": [
            749,
            786
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 21
            },
            "start": {
              "column": 59,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 104,
            "line": 21
          },
          "start": {
            "column": 97,
            "line": 21
          }
        },
        "range": [
          787,
          794
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tuple",
            "optional": false,
            "range": [
              789,
              794
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 21
              },
              "start": {
                "column": 99,
                "line": 21
              }
            }
          },
          "range": [
            789,
            794
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 21
            },
            "start": {
              "column": 99,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 21
          },
          "start": {
            "column": 37,
            "line": 21
          }
        },
        "range": [
          727,
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
                    "column": 55,
                    "line": 21
                  },
                  "start": {
                    "column": 52,
                    "line": 21
                  }
                }
              },
              "range": [
                742,
                747
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 21
                },
                "start": {
                  "column": 52,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "range": [
                728,
                733
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 21
                },
                "start": {
                  "column": 38,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              728,
              747
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 21
              },
              "start": {
                "column": 38,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        690,
        795
      ],
      "loc": {
        "end": {
          "column": 105,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "myPrimitiveTupleNew",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 23
                },
                "start": {
                  "column": 25,
                  "line": 23
                }
              },
              "range": [
                822,
                840
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      825,
                      831
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 23
                      },
                      "start": {
                        "column": 28,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      833,
                      839
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 23
                      },
                      "start": {
                        "column": 36,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  824,
                  840
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 23
                  },
                  "start": {
                    "column": 27,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              803,
              840
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
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
                      "name": "primitive",
                      "optional": false,
                      "range": [
                        866,
                        875
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 23
                        },
                        "start": {
                          "column": 69,
                          "line": 23
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        877,
                        879
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 23
                        },
                        "start": {
                          "column": 80,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      866,
                      879
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 23
                      },
                      "start": {
                        "column": 69,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  864,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 23
                  },
                  "start": {
                    "column": 67,
                    "line": 23
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "range": [
                        885,
                        894
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 23
                        },
                        "start": {
                          "column": 88,
                          "line": 23
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
                        896,
                        897
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 23
                        },
                        "start": {
                          "column": 99,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      885,
                      897
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 23
                      },
                      "start": {
                        "column": 88,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  883,
                  899
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 23
                  },
                  "start": {
                    "column": 86,
                    "line": 23
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "extractPrimitivesNew",
              "optional": false,
              "range": [
                843,
                863
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 23
                },
                "start": {
                  "column": 46,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              843,
              900
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 23
              },
              "start": {
                "column": 46,
                "line": 23
              }
            }
          },
          "range": [
            803,
            900
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        797,
        901
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 23
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
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
