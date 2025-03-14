__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1417
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericConstraint",
        "optional": false,
        "range": [
          5,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "range": [
            47,
            52
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 47,
              "line": 1
            }
          }
        },
        "range": [
          47,
          52
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 1
          },
          "start": {
            "column": 47,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          44
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                37,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                23,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              23,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        53
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 1
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
        "name": "VarianceConstrainedNumber",
        "optional": false,
        "range": [
          60,
          85
        ],
        "loc": {
          "end": {
            "column": 30,
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
            136,
            143
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  137,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              "range": [
                137,
                142
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumericConstraint",
          "optional": false,
          "range": [
            119,
            136
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 2,
              "line": 4
            }
          }
        },
        "range": [
          119,
          143
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 4
          },
          "start": {
            "column": 2,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 3
          },
          "start": {
            "column": 30,
            "line": 3
          }
        },
        "range": [
          85,
          114
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                107,
                113
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            },
            "in": true,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                93,
                98
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            },
            "out": true,
            "range": [
              86,
              113
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        55,
        144
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "vcn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              },
              "range": [
                162,
                192
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    189,
                    192
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          190,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 6
                          },
                          "start": {
                            "column": 44,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        190,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 6
                        },
                        "start": {
                          "column": 44,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 6
                    },
                    "start": {
                      "column": 43,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "range": [
                    164,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                },
                "range": [
                  164,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              158,
              192
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            158,
            192
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        146,
        193
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "vcn12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                211,
                245
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    238,
                    245
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              239,
                              240
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 7
                              },
                              "start": {
                                "column": 45,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            239,
                            240
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 7
                            },
                            "start": {
                              "column": 45,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              243,
                              244
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 7
                              },
                              "start": {
                                "column": 49,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            243,
                            244
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 7
                            },
                            "start": {
                              "column": 49,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        239,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 7
                        },
                        "start": {
                          "column": 45,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 7
                    },
                    "start": {
                      "column": 44,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "range": [
                    213,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "range": [
                  213,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              206,
              245
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            206,
            245
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        194,
        246
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "range": [
            248,
            252
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "range": [
            255,
            260
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        },
        "range": [
          248,
          260
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        248,
        261
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "range": [
            262,
            267
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "range": [
            270,
            274
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 10
            },
            "start": {
              "column": 8,
              "line": 10
            }
          }
        },
        "range": [
          262,
          274
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        262,
        275
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "name": "Unconstrained",
        "optional": false,
        "range": [
          282,
          295
        ],
        "loc": {
          "end": {
            "column": 18,
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
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "range": [
            305,
            310
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 12
            },
            "start": {
              "column": 28,
              "line": 12
            }
          }
        },
        "range": [
          305,
          310
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 12
          },
          "start": {
            "column": 28,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 12
          },
          "start": {
            "column": 18,
            "line": 12
          }
        },
        "range": [
          295,
          302
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                296,
                301
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              296,
              301
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        277,
        311
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "name": "VarianceUnconstrained",
        "optional": false,
        "range": [
          318,
          339
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            369,
            376
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  370,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 14
                  },
                  "start": {
                    "column": 57,
                    "line": 14
                  }
                }
              },
              "range": [
                370,
                375
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 14
                },
                "start": {
                  "column": 57,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 14
            },
            "start": {
              "column": 56,
              "line": 14
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unconstrained",
          "optional": false,
          "range": [
            356,
            369
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 14
            },
            "start": {
              "column": 43,
              "line": 14
            }
          }
        },
        "range": [
          356,
          376
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 14
          },
          "start": {
            "column": 43,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 14
          },
          "start": {
            "column": 26,
            "line": 14
          }
        },
        "range": [
          339,
          353
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": true,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                347,
                352
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              }
            },
            "out": true,
            "range": [
              340,
              352
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 14
              },
              "start": {
                "column": 27,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        313,
        377
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "vu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              },
              "range": [
                394,
                420
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    417,
                    420
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          418,
                          419
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 16
                          },
                          "start": {
                            "column": 39,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        418,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 16
                        },
                        "start": {
                          "column": 39,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 16
                    },
                    "start": {
                      "column": 38,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "range": [
                    396,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                "range": [
                  396,
                  420
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              391,
              420
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            391,
            420
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 16
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        379,
        421
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "vu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              },
              "range": [
                438,
                468
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    461,
                    468
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              462,
                              463
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 17
                              },
                              "start": {
                                "column": 40,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            462,
                            463
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 17
                            },
                            "start": {
                              "column": 40,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              466,
                              467
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 17
                              },
                              "start": {
                                "column": 44,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            466,
                            467
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 17
                            },
                            "start": {
                              "column": 44,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        462,
                        467
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 17
                        },
                        "start": {
                          "column": 40,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 17
                    },
                    "start": {
                      "column": 39,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "range": [
                    440,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 17
                    },
                    "start": {
                      "column": 18,
                      "line": 17
                    }
                  }
                },
                "range": [
                  440,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 46,
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
              434,
              468
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            434,
            468
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        422,
        469
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu1",
          "optional": false,
          "range": [
            471,
            474
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "range": [
            477,
            481
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        },
        "range": [
          471,
          481
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        471,
        482
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "range": [
            483,
            487
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu1",
          "optional": false,
          "range": [
            490,
            493
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 20
            },
            "start": {
              "column": 7,
              "line": 20
            }
          }
        },
        "range": [
          483,
          493
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        483,
        494
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 20
        },
        "start": {
          "column": 0,
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
        "name": "Level3of3Unconstrained",
        "optional": false,
        "range": [
          501,
          523
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "range": [
            533,
            538
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 22
            },
            "start": {
              "column": 37,
              "line": 22
            }
          }
        },
        "range": [
          533,
          538
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 22
          },
          "start": {
            "column": 37,
            "line": 22
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 22
          },
          "start": {
            "column": 27,
            "line": 22
          }
        },
        "range": [
          523,
          530
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                524,
                529
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 22
                },
                "start": {
                  "column": 28,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              524,
              529
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 22
              },
              "start": {
                "column": 28,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        496,
        539
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level2of3Unconstrained",
        "optional": false,
        "range": [
          545,
          567
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            599,
            606
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  600,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 23
                  },
                  "start": {
                    "column": 60,
                    "line": 23
                  }
                }
              },
              "range": [
                600,
                605
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 23
                },
                "start": {
                  "column": 60,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 23
            },
            "start": {
              "column": 59,
              "line": 23
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level3of3Unconstrained",
          "optional": false,
          "range": [
            577,
            599
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 23
            },
            "start": {
              "column": 37,
              "line": 23
            }
          }
        },
        "range": [
          577,
          606
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 23
          },
          "start": {
            "column": 37,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 23
          },
          "start": {
            "column": 27,
            "line": 23
          }
        },
        "range": [
          567,
          574
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                568,
                573
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 28,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              568,
              573
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 28,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        540,
        607
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level1of3Unconstrained",
        "optional": false,
        "range": [
          613,
          635
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            667,
            674
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  668,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 24
                  },
                  "start": {
                    "column": 60,
                    "line": 24
                  }
                }
              },
              "range": [
                668,
                673
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 24
                },
                "start": {
                  "column": 60,
                  "line": 24
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 24
            },
            "start": {
              "column": 59,
              "line": 24
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level2of3Unconstrained",
          "optional": false,
          "range": [
            645,
            667
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 24
            },
            "start": {
              "column": 37,
              "line": 24
            }
          }
        },
        "range": [
          645,
          674
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 24
          },
          "start": {
            "column": 37,
            "line": 24
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 24
          },
          "start": {
            "column": 27,
            "line": 24
          }
        },
        "range": [
          635,
          642
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                636,
                641
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 24
                },
                "start": {
                  "column": 28,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              636,
              641
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 28,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        608,
        675
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceDeepUnconstrained",
        "optional": false,
        "range": [
          682,
          707
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            746,
            753
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  747,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 26
                  },
                  "start": {
                    "column": 70,
                    "line": 26
                  }
                }
              },
              "range": [
                747,
                752
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 26
                },
                "start": {
                  "column": 70,
                  "line": 26
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 26
            },
            "start": {
              "column": 69,
              "line": 26
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level1of3Unconstrained",
          "optional": false,
          "range": [
            724,
            746
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 26
            },
            "start": {
              "column": 47,
              "line": 26
            }
          }
        },
        "range": [
          724,
          753
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 26
          },
          "start": {
            "column": 47,
            "line": 26
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 26
          },
          "start": {
            "column": 30,
            "line": 26
          }
        },
        "range": [
          707,
          721
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": true,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                715,
                720
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 26
                },
                "start": {
                  "column": 38,
                  "line": 26
                }
              }
            },
            "out": true,
            "range": [
              708,
              720
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 26
              },
              "start": {
                "column": 31,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        677,
        754
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "vdu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              },
              "range": [
                772,
                802
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    799,
                    802
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          800,
                          801
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 28
                          },
                          "start": {
                            "column": 44,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        800,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 28
                        },
                        "start": {
                          "column": 44,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 28
                    },
                    "start": {
                      "column": 43,
                      "line": 28
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "range": [
                    774,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 28
                    },
                    "start": {
                      "column": 18,
                      "line": 28
                    }
                  }
                },
                "range": [
                  774,
                  802
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              768,
              802
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 28
              },
              "start": {
                "column": 12,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            768,
            802
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 28
            },
            "start": {
              "column": 12,
              "line": 28
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        756,
        803
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "vdu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 29
                }
              },
              "range": [
                821,
                855
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    848,
                    855
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              849,
                              850
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 29
                              },
                              "start": {
                                "column": 45,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            849,
                            850
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 29
                            },
                            "start": {
                              "column": 45,
                              "line": 29
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              853,
                              854
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 29
                              },
                              "start": {
                                "column": 49,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            853,
                            854
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 29
                            },
                            "start": {
                              "column": 49,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        849,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 29
                        },
                        "start": {
                          "column": 45,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 29
                    },
                    "start": {
                      "column": 44,
                      "line": 29
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "range": [
                    823,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 29
                    },
                    "start": {
                      "column": 19,
                      "line": 29
                    }
                  }
                },
                "range": [
                  823,
                  855
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 29
                  },
                  "start": {
                    "column": 19,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              816,
              855
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 29
              },
              "start": {
                "column": 12,
                "line": 29
              }
            }
          },
          "init": null,
          "range": [
            816,
            855
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 29
            },
            "start": {
              "column": 12,
              "line": 29
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        804,
        856
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "range": [
            858,
            862
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "range": [
            865,
            870
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 31
            },
            "start": {
              "column": 7,
              "line": 31
            }
          }
        },
        "range": [
          858,
          870
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        858,
        871
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "range": [
            872,
            877
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "range": [
            880,
            884
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 32
            },
            "start": {
              "column": 8,
              "line": 32
            }
          }
        },
        "range": [
          872,
          884
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
      "range": [
        872,
        885
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          910,
          929
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                914,
                919
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 35
                },
                "start": {
                  "column": 2,
                  "line": 35
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
                  "line": 35
                },
                "start": {
                  "column": 7,
                  "line": 35
                }
              },
              "range": [
                919,
                926
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "range": [
                    921,
                    926
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 35
                    },
                    "start": {
                      "column": 9,
                      "line": 35
                    }
                  }
                },
                "range": [
                  921,
                  926
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 35
                  },
                  "start": {
                    "column": 9,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              914,
              927
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 35
              },
              "start": {
                "column": 2,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 23,
            "line": 34
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "range": [
          897,
          902
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 34
          },
          "start": {
            "column": 10,
            "line": 34
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 34
          },
          "start": {
            "column": 15,
            "line": 34
          }
        },
        "range": [
          902,
          909
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                903,
                908
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 34
                },
                "start": {
                  "column": 16,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              903,
              908
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 34
              },
              "start": {
                "column": 16,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        887,
        929
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceShape",
        "optional": false,
        "range": [
          936,
          949
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            971,
            978
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  972,
                  977
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 38
                  },
                  "start": {
                    "column": 41,
                    "line": 38
                  }
                }
              },
              "range": [
                972,
                977
              ],
              "loc": {
                "end": {
                  "column": 46,
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
              "column": 47,
              "line": 38
            },
            "start": {
              "column": 40,
              "line": 38
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shape",
          "optional": false,
          "range": [
            966,
            971
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 38
            },
            "start": {
              "column": 35,
              "line": 38
            }
          }
        },
        "range": [
          966,
          978
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 38
          },
          "start": {
            "column": 35,
            "line": 38
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 38
          },
          "start": {
            "column": 18,
            "line": 38
          }
        },
        "range": [
          949,
          963
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": true,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                957,
                962
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 38
                },
                "start": {
                  "column": 26,
                  "line": 38
                }
              }
            },
            "out": true,
            "range": [
              950,
              962
            ],
            "loc": {
              "end": {
                "column": 31,
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
        931,
        979
      ],
      "loc": {
        "end": {
          "column": 48,
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
            "name": "vs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              },
              "range": [
                996,
                1014
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1011,
                    1014
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1012,
                          1013
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 40
                          },
                          "start": {
                            "column": 31,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        1012,
                        1013
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 40
                        },
                        "start": {
                          "column": 31,
                          "line": 40
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 40
                    },
                    "start": {
                      "column": 30,
                      "line": 40
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "range": [
                    998,
                    1011
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 40
                    },
                    "start": {
                      "column": 17,
                      "line": 40
                    }
                  }
                },
                "range": [
                  998,
                  1014
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 40
                  },
                  "start": {
                    "column": 17,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              993,
              1014
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 40
              },
              "start": {
                "column": 12,
                "line": 40
              }
            }
          },
          "init": null,
          "range": [
            993,
            1014
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        981,
        1015
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "vs12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 41
                },
                "start": {
                  "column": 16,
                  "line": 41
                }
              },
              "range": [
                1032,
                1054
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1047,
                    1054
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1048,
                              1049
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 41
                              },
                              "start": {
                                "column": 32,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            1048,
                            1049
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 41
                            },
                            "start": {
                              "column": 32,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              1052,
                              1053
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 41
                              },
                              "start": {
                                "column": 36,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            1052,
                            1053
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 41
                            },
                            "start": {
                              "column": 36,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "range": [
                        1048,
                        1053
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 41
                        },
                        "start": {
                          "column": 32,
                          "line": 41
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 41
                    },
                    "start": {
                      "column": 31,
                      "line": 41
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "range": [
                    1034,
                    1047
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 41
                    },
                    "start": {
                      "column": 18,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1034,
                  1054
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 41
                  },
                  "start": {
                    "column": 18,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              1028,
              1054
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 41
              },
              "start": {
                "column": 12,
                "line": 41
              }
            }
          },
          "init": null,
          "range": [
            1028,
            1054
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 41
            },
            "start": {
              "column": 12,
              "line": 41
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1016,
        1055
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "range": [
            1057,
            1060
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "range": [
            1063,
            1067
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        },
        "range": [
          1057,
          1067
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1057,
        1068
      ],
      "loc": {
        "end": {
          "column": 11,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "range": [
            1069,
            1073
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "range": [
            1076,
            1079
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 44
            },
            "start": {
              "column": 7,
              "line": 44
            }
          }
        },
        "range": [
          1069,
          1079
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1069,
        1080
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1114,
          1133
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                1118,
                1123
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 47
                },
                "start": {
                  "column": 2,
                  "line": 47
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
                  "line": 47
                },
                "start": {
                  "column": 7,
                  "line": 47
                }
              },
              "range": [
                1123,
                1130
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "range": [
                    1125,
                    1130
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 9,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1125,
                  1130
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 47
                  },
                  "start": {
                    "column": 9,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1118,
              1131
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 32,
            "line": 46
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level3of3Shape",
        "optional": false,
        "range": [
          1092,
          1106
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 46
          },
          "start": {
            "column": 10,
            "line": 46
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 46
          },
          "start": {
            "column": 24,
            "line": 46
          }
        },
        "range": [
          1106,
          1113
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                1107,
                1112
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 46
                },
                "start": {
                  "column": 25,
                  "line": 46
                }
              }
            },
            "out": false,
            "range": [
              1107,
              1112
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 46
              },
              "start": {
                "column": 25,
                "line": 46
              }
            }
          }
        ]
      },
      "range": [
        1082,
        1133
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
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
        "name": "Level2of3Shape",
        "optional": false,
        "range": [
          1140,
          1154
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1178,
            1185
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  1179,
                  1184
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 50
                  },
                  "start": {
                    "column": 44,
                    "line": 50
                  }
                }
              },
              "range": [
                1179,
                1184
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 50
                },
                "start": {
                  "column": 44,
                  "line": 50
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 50
            },
            "start": {
              "column": 43,
              "line": 50
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level3of3Shape",
          "optional": false,
          "range": [
            1164,
            1178
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 50
            },
            "start": {
              "column": 29,
              "line": 50
            }
          }
        },
        "range": [
          1164,
          1185
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 50
          },
          "start": {
            "column": 29,
            "line": 50
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 50
          },
          "start": {
            "column": 19,
            "line": 50
          }
        },
        "range": [
          1154,
          1161
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                1155,
                1160
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 50
                },
                "start": {
                  "column": 20,
                  "line": 50
                }
              }
            },
            "out": false,
            "range": [
              1155,
              1160
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 50
              },
              "start": {
                "column": 20,
                "line": 50
              }
            }
          }
        ]
      },
      "range": [
        1135,
        1186
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level1of3Shape",
        "optional": false,
        "range": [
          1192,
          1206
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 51
          },
          "start": {
            "column": 5,
            "line": 51
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1230,
            1237
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  1231,
                  1236
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 51
                  },
                  "start": {
                    "column": 44,
                    "line": 51
                  }
                }
              },
              "range": [
                1231,
                1236
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 51
                },
                "start": {
                  "column": 44,
                  "line": 51
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 51
            },
            "start": {
              "column": 43,
              "line": 51
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level2of3Shape",
          "optional": false,
          "range": [
            1216,
            1230
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 51
            },
            "start": {
              "column": 29,
              "line": 51
            }
          }
        },
        "range": [
          1216,
          1237
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 51
          },
          "start": {
            "column": 29,
            "line": 51
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 51
          },
          "start": {
            "column": 19,
            "line": 51
          }
        },
        "range": [
          1206,
          1213
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                1207,
                1212
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 51
                },
                "start": {
                  "column": 20,
                  "line": 51
                }
              }
            },
            "out": false,
            "range": [
              1207,
              1212
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 51
              },
              "start": {
                "column": 20,
                "line": 51
              }
            }
          }
        ]
      },
      "range": [
        1187,
        1238
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 51
        },
        "start": {
          "column": 0,
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
        "name": "VarianceDeepShape",
        "optional": false,
        "range": [
          1245,
          1262
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 53
          },
          "start": {
            "column": 5,
            "line": 53
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1293,
            1300
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "range": [
                  1294,
                  1299
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 53
                  },
                  "start": {
                    "column": 54,
                    "line": 53
                  }
                }
              },
              "range": [
                1294,
                1299
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 53
                },
                "start": {
                  "column": 54,
                  "line": 53
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 53
            },
            "start": {
              "column": 53,
              "line": 53
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level1of3Shape",
          "optional": false,
          "range": [
            1279,
            1293
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 53
            },
            "start": {
              "column": 39,
              "line": 53
            }
          }
        },
        "range": [
          1279,
          1300
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 53
          },
          "start": {
            "column": 39,
            "line": 53
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 53
          },
          "start": {
            "column": 22,
            "line": 53
          }
        },
        "range": [
          1262,
          1276
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": true,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                1270,
                1275
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 53
                },
                "start": {
                  "column": 30,
                  "line": 53
                }
              }
            },
            "out": true,
            "range": [
              1263,
              1275
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 53
              },
              "start": {
                "column": 23,
                "line": 53
              }
            }
          }
        ]
      },
      "range": [
        1240,
        1301
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "name": "vds1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 55
                },
                "start": {
                  "column": 16,
                  "line": 55
                }
              },
              "range": [
                1319,
                1341
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1338,
                    1341
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1339,
                          1340
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 55
                          },
                          "start": {
                            "column": 36,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1339,
                        1340
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 55
                        },
                        "start": {
                          "column": 36,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 55
                    },
                    "start": {
                      "column": 35,
                      "line": 55
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "range": [
                    1321,
                    1338
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 55
                    },
                    "start": {
                      "column": 18,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1321,
                  1341
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 55
                  },
                  "start": {
                    "column": 18,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1315,
              1341
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 55
              },
              "start": {
                "column": 12,
                "line": 55
              }
            }
          },
          "init": null,
          "range": [
            1315,
            1341
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 55
            },
            "start": {
              "column": 12,
              "line": 55
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1303,
        1342
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "vds12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 56
                },
                "start": {
                  "column": 17,
                  "line": 56
                }
              },
              "range": [
                1360,
                1386
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1379,
                    1386
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1380,
                              1381
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 56
                              },
                              "start": {
                                "column": 37,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            1380,
                            1381
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 56
                            },
                            "start": {
                              "column": 37,
                              "line": 56
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              1384,
                              1385
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 56
                              },
                              "start": {
                                "column": 41,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            1384,
                            1385
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 56
                            },
                            "start": {
                              "column": 41,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        1380,
                        1385
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 56
                        },
                        "start": {
                          "column": 37,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 56
                    },
                    "start": {
                      "column": 36,
                      "line": 56
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "range": [
                    1362,
                    1379
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 56
                    },
                    "start": {
                      "column": 19,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1362,
                  1386
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 56
                  },
                  "start": {
                    "column": 19,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1355,
              1386
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 56
              },
              "start": {
                "column": 12,
                "line": 56
              }
            }
          },
          "init": null,
          "range": [
            1355,
            1386
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 56
            },
            "start": {
              "column": 12,
              "line": 56
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1343,
        1387
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "range": [
            1389,
            1393
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 58
            },
            "start": {
              "column": 0,
              "line": 58
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "range": [
            1396,
            1401
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 58
            },
            "start": {
              "column": 7,
              "line": 58
            }
          }
        },
        "range": [
          1389,
          1401
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 58
          },
          "start": {
            "column": 0,
            "line": 58
          }
        }
      },
      "range": [
        1389,
        1402
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "range": [
            1403,
            1408
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "range": [
            1411,
            1415
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 59
            },
            "start": {
              "column": 8,
              "line": 59
            }
          }
        },
        "range": [
          1403,
          1415
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        1403,
        1416
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 60
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
