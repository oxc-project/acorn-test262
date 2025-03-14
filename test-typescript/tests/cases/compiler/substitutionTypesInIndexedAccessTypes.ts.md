__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    421
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserArgs",
        "optional": false,
        "range": [
          27,
          35
        ],
        "loc": {
          "end": {
            "column": 13,
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
              "name": "select",
              "optional": false,
              "range": [
                42,
                48
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                49,
                58
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  51,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              42,
              58
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          38,
          60
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        22,
        61
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
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
        "name": "Subset",
        "optional": false,
        "range": [
          68,
          74
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 36,
                  "line": 7
                }
              }
            },
            "range": [
              99,
              100
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 36,
                "line": 7
              }
            }
          },
          "range": [
            93,
            100
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 30,
              "line": 7
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            86,
            89
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 23,
              "line": 7
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
              "name": "key",
              "optional": false,
              "range": [
                103,
                106
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 7
                }
              }
            },
            "range": [
              103,
              106
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 40,
                "line": 7
              }
            }
          },
          "extendsType": {
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
                  121,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 7
                  },
                  "start": {
                    "column": 58,
                    "line": 7
                  }
                }
              },
              "range": [
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 7
                },
                "start": {
                  "column": 58,
                  "line": 7
                }
              }
            },
            "range": [
              115,
              122
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 7
              },
              "start": {
                "column": 52,
                "line": 7
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              134,
              139
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 7
              },
              "start": {
                "column": 71,
                "line": 7
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
                "name": "key",
                "optional": false,
                "range": [
                  127,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 7
                  },
                  "start": {
                    "column": 64,
                    "line": 7
                  }
                }
              },
              "range": [
                127,
                130
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 7
                },
                "start": {
                  "column": 64,
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
                  125,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 7
                  },
                  "start": {
                    "column": 62,
                    "line": 7
                  }
                }
              },
              "range": [
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 7
                },
                "start": {
                  "column": 62,
                  "line": 7
                }
              }
            },
            "range": [
              125,
              131
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 7
              },
              "start": {
                "column": 62,
                "line": 7
              }
            }
          },
          "range": [
            103,
            139
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 7
            },
            "start": {
              "column": 40,
              "line": 7
            }
          }
        },
        "range": [
          83,
          141
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        },
        "range": [
          74,
          80
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
                75,
                76
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
            "out": false,
            "range": [
              75,
              76
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              78,
              79
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        63,
        142
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "withBoundary",
        "optional": false,
        "range": [
          161,
          173
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 76,
                "line": 9
              },
              "start": {
                "column": 55,
                "line": 9
              }
            },
            "range": [
              199,
              220
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  207,
                  220
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
                        208,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 9
                        },
                        "start": {
                          "column": 64,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      208,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 9
                      },
                      "start": {
                        "column": 64,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UserArgs",
                      "optional": false,
                      "range": [
                        211,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 9
                        },
                        "start": {
                          "column": 67,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      211,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 9
                      },
                      "start": {
                        "column": 67,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 9
                  },
                  "start": {
                    "column": 63,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Subset",
                "optional": false,
                "range": [
                  201,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 9
                  },
                  "start": {
                    "column": 57,
                    "line": 9
                  }
                }
              },
              "range": [
                201,
                220
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 9
                },
                "start": {
                  "column": 57,
                  "line": 9
                }
              }
            }
          },
          "range": [
            194,
            220
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 9
            },
            "start": {
              "column": 50,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 80,
            "line": 9
          },
          "start": {
            "column": 77,
            "line": 9
          }
        },
        "range": [
          221,
          224
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              223,
              224
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 9
              },
              "start": {
                "column": 79,
                "line": 9
              }
            }
          },
          "range": [
            223,
            224
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 9
            },
            "start": {
              "column": 79,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 9
          },
          "start": {
            "column": 29,
            "line": 9
          }
        },
        "range": [
          173,
          193
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
                "name": "UserArgs",
                "optional": false,
                "range": [
                  184,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 9
                  },
                  "start": {
                    "column": 40,
                    "line": 9
                  }
                }
              },
              "range": [
                184,
                192
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 9
                },
                "start": {
                  "column": 40,
                  "line": 9
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
                174,
                175
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              174,
              192
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 9
              },
              "start": {
                "column": 30,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        144,
        225
      ],
      "loc": {
        "end": {
          "column": 81,
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
        "name": "withoutBoundary",
        "optional": false,
        "range": [
          243,
          258
        ],
        "loc": {
          "end": {
            "column": 32,
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
          "name": "args",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 10
              },
              "start": {
                "column": 58,
                "line": 10
              }
            },
            "range": [
              284,
              287
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  286,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 10
                  },
                  "start": {
                    "column": 60,
                    "line": 10
                  }
                }
              },
              "range": [
                286,
                287
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 10
                },
                "start": {
                  "column": 60,
                  "line": 10
                }
              }
            }
          },
          "range": [
            279,
            287
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 10
            },
            "start": {
              "column": 53,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 10
          },
          "start": {
            "column": 62,
            "line": 10
          }
        },
        "range": [
          288,
          291
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              290,
              291
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 10
              },
              "start": {
                "column": 64,
                "line": 10
              }
            }
          },
          "range": [
            290,
            291
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 10
            },
            "start": {
              "column": 64,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 10
          },
          "start": {
            "column": 32,
            "line": 10
          }
        },
        "range": [
          258,
          278
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
                "name": "UserArgs",
                "optional": false,
                "range": [
                  269,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 10
                  },
                  "start": {
                    "column": 43,
                    "line": 10
                  }
                }
              },
              "range": [
                269,
                277
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 10
                },
                "start": {
                  "column": 43,
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
                259,
                260
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 33,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              259,
              277
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 33,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        226,
        292
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 10
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
            "name": "boundaryResult",
            "optional": false,
            "range": [
              300,
              314
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
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
                      "name": "select",
                      "optional": false,
                      "range": [
                        334,
                        340
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 13
                        },
                        "start": {
                          "column": 2,
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
                      "raw": "true",
                      "value": true,
                      "range": [
                        342,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      334,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 13
                      },
                      "start": {
                        "column": 2,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  330,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 14
                  },
                  "start": {
                    "column": 36,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withBoundary",
              "optional": false,
              "range": [
                317,
                329
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              317,
              350
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          },
          "range": [
            300,
            350
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        294,
        351
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "withoutBoundaryResult",
            "optional": false,
            "range": [
              359,
              380
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
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
                      "name": "select",
                      "optional": false,
                      "range": [
                        403,
                        409
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
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        411,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      403,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 17
                      },
                      "start": {
                        "column": 2,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  399,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 18
                  },
                  "start": {
                    "column": 46,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withoutBoundary",
              "optional": false,
              "range": [
                383,
                398
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              383,
              419
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 18
              },
              "start": {
                "column": 30,
                "line": 16
              }
            }
          },
          "range": [
            359,
            419
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        353,
        420
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
