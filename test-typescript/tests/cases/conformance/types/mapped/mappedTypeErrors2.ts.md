__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    503
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "range": [
          28,
          30
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              "name": "a",
              "optional": false,
              "range": [
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                40,
                45
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    42,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  42,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              39,
              45
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                50,
                51
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                51,
                56
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    53,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  53,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              50,
              56
            ],
            "loc": {
              "end": {
                "column": 10,
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
          33,
          58
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        23,
        59
      ],
      "loc": {
        "end": {
          "column": 2,
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
        "name": "T1",
        "optional": false,
        "range": [
          66,
          68
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 43,
                  "line": 8
                }
              }
            },
            "range": [
              104,
              105
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 43,
                "line": 8
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "range": [
                101,
                103
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 8
                },
                "start": {
                  "column": 40,
                  "line": 8
                }
              }
            },
            "range": [
              101,
              103
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 8
              },
              "start": {
                "column": 40,
                "line": 8
              }
            }
          },
          "range": [
            101,
            106
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 8
            },
            "start": {
              "column": 40,
              "line": 8
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            94,
            97
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 8
            },
            "start": {
              "column": 33,
              "line": 8
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              109,
              113
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 8
              },
              "start": {
                "column": 48,
                "line": 8
              }
            }
          },
          "range": [
            109,
            113
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 8
            },
            "start": {
              "column": 48,
              "line": 8
            }
          }
        },
        "range": [
          91,
          115
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 8
          },
          "start": {
            "column": 30,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        },
        "range": [
          68,
          88
        ],
        "params": [
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
                  "name": "AB",
                  "optional": false,
                  "range": [
                    85,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 24,
                      "line": 8
                    }
                  }
                },
                "range": [
                  85,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "range": [
                79,
                87
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 8
                },
                "start": {
                  "column": 18,
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
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              69,
              87
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        61,
        116
      ],
      "loc": {
        "end": {
          "column": 55,
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
        "name": "T2",
        "optional": false,
        "range": [
          122,
          124
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
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
            "name": "K",
            "optional": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 9
              },
              "start": {
                "column": 35,
                "line": 9
              }
            }
          },
          "range": [
            152,
            153
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 9
            },
            "start": {
              "column": 35,
              "line": 9
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              148,
              151
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    149,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 32,
                      "line": 9
                    }
                  }
                },
                "range": [
                  149,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 32,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 31,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "range": [
              146,
              148
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 29,
                "line": 9
              }
            }
          },
          "range": [
            146,
            151
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 9
            },
            "start": {
              "column": 29,
              "line": 9
            }
          }
        },
        "range": [
          146,
          154
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 9
          },
          "start": {
            "column": 29,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        },
        "range": [
          124,
          143
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      135,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 18,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    135,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
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
                      139,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 22,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    139,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                135,
                142
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
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
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              125,
              142
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        117,
        155
      ],
      "loc": {
        "end": {
          "column": 38,
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
        "name": "R",
        "optional": false,
        "range": [
          171,
          172
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
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "range": [
                184,
                186
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "range": [
              184,
              186
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 18,
                "line": 11
              }
            }
          },
          "range": [
            178,
            186
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB",
            "optional": false,
            "range": [
              175,
              177
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            175,
            177
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 11
            },
            "start": {
              "column": 9,
              "line": 11
            }
          }
        },
        "range": [
          175,
          187
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "range": [
        166,
        188
      ],
      "loc": {
        "end": {
          "column": 22,
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
        "name": "T3",
        "optional": false,
        "range": [
          201,
          203
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
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              216,
              217
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 20,
                "line": 12
              }
            }
          },
          "range": [
            216,
            217
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 12
            },
            "start": {
              "column": 20,
              "line": 12
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            209,
            212
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 12
            },
            "start": {
              "column": 13,
              "line": 12
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              220,
              224
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 24,
                "line": 12
              }
            }
          },
          "range": [
            220,
            224
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 24,
              "line": 12
            }
          }
        },
        "range": [
          206,
          226
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        196,
        227
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "name": "T4",
        "optional": false,
        "range": [
          233,
          235
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
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              260,
              261
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 13
              },
              "start": {
                "column": 32,
                "line": 13
              }
            }
          },
          "range": [
            260,
            261
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 13
            },
            "start": {
              "column": 32,
              "line": 13
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "range": [
              257,
              259
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 29,
                "line": 13
              }
            }
          },
          "range": [
            257,
            259
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 13
            },
            "start": {
              "column": 29,
              "line": 13
            }
          }
        },
        "range": [
          257,
          262
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 13
          },
          "start": {
            "column": 29,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        },
        "range": [
          235,
          254
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      246,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    246,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
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
                      250,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 22,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    250,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 22,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                246,
                253
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
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
                236,
                237
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              236,
              253
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        228,
        262
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "name": "T5",
        "optional": false,
        "range": [
          278,
          280
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
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
            "name": "S",
            "optional": false,
            "range": [
              333,
              334
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 15
              },
              "start": {
                "column": 60,
                "line": 15
              }
            }
          },
          "range": [
            333,
            334
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 15
            },
            "start": {
              "column": 60,
              "line": 15
            }
          }
        },
        "objectType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  322,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 15
                  },
                  "start": {
                    "column": 49,
                    "line": 15
                  }
                }
              },
              "range": [
                322,
                323
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 15
                },
                "start": {
                  "column": 49,
                  "line": 15
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "range": [
                  319,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 15
                  },
                  "start": {
                    "column": 46,
                    "line": 15
                  }
                }
              },
              "range": [
                319,
                321
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 15
                },
                "start": {
                  "column": 46,
                  "line": 15
                }
              }
            },
            "range": [
              319,
              324
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 15
              },
              "start": {
                "column": 46,
                "line": 15
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "range": [
              312,
              315
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 15
              },
              "start": {
                "column": 39,
                "line": 15
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                327,
                331
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 15
                },
                "start": {
                  "column": 54,
                  "line": 15
                }
              }
            },
            "range": [
              327,
              331
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 15
              },
              "start": {
                "column": 54,
                "line": 15
              }
            }
          },
          "range": [
            310,
            332
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 15
            },
            "start": {
              "column": 37,
              "line": 15
            }
          }
        },
        "range": [
          310,
          335
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 15
          },
          "start": {
            "column": 37,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        },
        "range": [
          280,
          307
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      291,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    291,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 18,
                      "line": 15
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
                      295,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 15
                      },
                      "start": {
                        "column": 22,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    295,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 15
                    },
                    "start": {
                      "column": 22,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'extra'",
                    "value": "extra",
                    "range": [
                      299,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    299,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 15
                    },
                    "start": {
                      "column": 26,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                291,
                306
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
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
                281,
                282
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              281,
              306
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        273,
        336
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 15
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
        "name": "T6",
        "optional": false,
        "range": [
          352,
          354
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
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
              418,
              419
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 17
              },
              "start": {
                "column": 71,
                "line": 17
              }
            }
          },
          "range": [
            418,
            419
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 17
            },
            "start": {
              "column": 71,
              "line": 17
            }
          }
        },
        "objectType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  407,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 17
                  },
                  "start": {
                    "column": 60,
                    "line": 17
                  }
                }
              },
              "range": [
                407,
                408
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 17
                },
                "start": {
                  "column": 60,
                  "line": 17
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "range": [
                  404,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 17
                  },
                  "start": {
                    "column": 57,
                    "line": 17
                  }
                }
              },
              "range": [
                404,
                406
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 17
                },
                "start": {
                  "column": 57,
                  "line": 17
                }
              }
            },
            "range": [
              404,
              409
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 17
              },
              "start": {
                "column": 57,
                "line": 17
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "range": [
              397,
              400
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 17
              },
              "start": {
                "column": 50,
                "line": 17
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                412,
                416
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 17
                },
                "start": {
                  "column": 65,
                  "line": 17
                }
              }
            },
            "range": [
              412,
              416
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 17
              },
              "start": {
                "column": 65,
                "line": 17
              }
            }
          },
          "range": [
            395,
            417
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 17
            },
            "start": {
              "column": 48,
              "line": 17
            }
          }
        },
        "range": [
          395,
          420
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 17
          },
          "start": {
            "column": 48,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 45,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 17
          }
        },
        "range": [
          354,
          392
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      365,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    365,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 18,
                      "line": 17
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
                      369,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 17
                      },
                      "start": {
                        "column": 22,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    369,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                365,
                372
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 17
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
                355,
                356
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              355,
              372
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      384,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 17
                      },
                      "start": {
                        "column": 37,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    384,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 17
                    },
                    "start": {
                      "column": 37,
                      "line": 17
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
                      388,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 17
                      },
                      "start": {
                        "column": 41,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    388,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 17
                    },
                    "start": {
                      "column": 41,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                384,
                391
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 17
                },
                "start": {
                  "column": 37,
                  "line": 17
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
                374,
                375
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 17
                },
                "start": {
                  "column": 27,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              374,
              391
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 17
              },
              "start": {
                "column": 27,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        347,
        421
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "range": [
          437,
          439
        ],
        "loc": {
          "end": {
            "column": 7,
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
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "range": [
              499,
              500
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 19
              },
              "start": {
                "column": 67,
                "line": 19
              }
            }
          },
          "range": [
            499,
            500
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 19
            },
            "start": {
              "column": 67,
              "line": 19
            }
          }
        },
        "objectType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  488,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 19
                  },
                  "start": {
                    "column": 56,
                    "line": 19
                  }
                }
              },
              "range": [
                488,
                489
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 19
                },
                "start": {
                  "column": 56,
                  "line": 19
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "range": [
                  485,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 19
                  },
                  "start": {
                    "column": 53,
                    "line": 19
                  }
                }
              },
              "range": [
                485,
                487
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 19
                },
                "start": {
                  "column": 53,
                  "line": 19
                }
              }
            },
            "range": [
              485,
              490
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 19
              },
              "start": {
                "column": 53,
                "line": 19
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "range": [
              478,
              481
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
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                493,
                497
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 19
                },
                "start": {
                  "column": 61,
                  "line": 19
                }
              }
            },
            "range": [
              493,
              497
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 19
              },
              "start": {
                "column": 61,
                "line": 19
              }
            }
          },
          "range": [
            476,
            498
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 19
            },
            "start": {
              "column": 44,
              "line": 19
            }
          }
        },
        "range": [
          476,
          501
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 19
          },
          "start": {
            "column": 44,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        },
        "range": [
          439,
          473
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      450,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 19
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    450,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 18,
                      "line": 19
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
                      454,
                      457
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 22,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    454,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                450,
                457
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
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
                440,
                441
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              440,
              457
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  469,
                  472
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
              "range": [
                469,
                472
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "range": [
                459,
                460
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 19
                },
                "start": {
                  "column": 27,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              459,
              472
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 19
              },
              "start": {
                "column": 27,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        432,
        502
      ],
      "loc": {
        "end": {
          "column": 70,
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
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
