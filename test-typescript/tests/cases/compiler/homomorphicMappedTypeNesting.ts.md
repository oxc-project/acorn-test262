__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    326
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          27,
          30
        ],
        "loc": {
          "end": {
            "column": 8,
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
              "name": "v",
              "optional": false,
              "range": [
                53,
                54
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
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
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              },
              "range": [
                54,
                57
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    56,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                },
                "range": [
                  56,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              53,
              57
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          }
        ],
        "range": [
          51,
          59
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 29,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 3
          }
        },
        "range": [
          30,
          48
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              31,
              47
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        60
      ],
      "loc": {
        "end": {
          "column": 38,
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
        "name": "Test",
        "optional": false,
        "range": [
          67,
          71
        ],
        "loc": {
          "end": {
            "column": 9,
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
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            94,
            95
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 32,
              "line": 5
            }
          }
        },
        "range": [
          94,
          95
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 32,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          71,
          91
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  82,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "range": [
                82,
                90
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 20,
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
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              72,
              90
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        62,
        95
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "name": "UnboxArray",
        "optional": false,
        "range": [
          102,
          112
        ],
        "loc": {
          "end": {
            "column": 15,
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
                136,
                137
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            },
            "range": [
              136,
              137
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            130,
            137
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 10,
              "line": 8
            }
          }
        },
        "key": {
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
              "column": 6,
              "line": 8
            },
            "start": {
              "column": 5,
              "line": 8
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
                "name": "K",
                "optional": false,
                "range": [
                  142,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
                  }
                }
              },
              "range": [
                142,
                143
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
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
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "range": [
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            },
            "range": [
              140,
              144
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                156,
                165
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
                        163,
                        164
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
                    "out": false,
                    "range": [
                      163,
                      164
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
                    157,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 8
                    },
                    "start": {
                      "column": 37,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 8
                },
                "start": {
                  "column": 36,
                  "line": 8
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "range": [
                153,
                156
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
            "range": [
              153,
              165
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 8
              },
              "start": {
                "column": 33,
                "line": 8
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              172,
              177
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 8
              },
              "start": {
                "column": 52,
                "line": 8
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
                168,
                169
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 8
                },
                "start": {
                  "column": 48,
                  "line": 8
                }
              }
            },
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 8
              },
              "start": {
                "column": 48,
                "line": 8
              }
            }
          },
          "range": [
            140,
            177
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          118,
          180
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        },
        "range": [
          112,
          115
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
                113,
                114
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              113,
              114
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        97,
        181
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
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
        "name": "Identity",
        "optional": false,
        "range": [
          188,
          196
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
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
                216,
                217
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 33,
                  "line": 11
                }
              }
            },
            "range": [
              216,
              217
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          },
          "range": [
            210,
            217
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 11
            },
            "start": {
              "column": 27,
              "line": 11
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            205,
            206
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 22,
              "line": 11
            }
          }
        },
        "nameType": null,
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
                222,
                223
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 39,
                  "line": 11
                }
              }
            },
            "range": [
              222,
              223
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 11
              },
              "start": {
                "column": 39,
                "line": 11
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
                220,
                221
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
                }
              }
            },
            "range": [
              220,
              221
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 37,
                "line": 11
              }
            }
          },
          "range": [
            220,
            224
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 11
            },
            "start": {
              "column": 37,
              "line": 11
            }
          }
        },
        "range": [
          202,
          226
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 11
          },
          "start": {
            "column": 19,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 11
          },
          "start": {
            "column": 13,
            "line": 11
          }
        },
        "range": [
          196,
          199
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
                197,
                198
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              197,
              198
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        183,
        227
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "fnBad",
        "optional": false,
        "range": [
          246,
          251
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 13
          },
          "start": {
            "column": 17,
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
            "name": "args",
            "optional": false,
            "range": [
              285,
              289
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 13
              },
              "start": {
                "column": 56,
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
                "column": 63,
                "line": 13
              },
              "start": {
                "column": 60,
                "line": 13
              }
            },
            "range": [
              289,
              292
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  291,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 13
                  },
                  "start": {
                    "column": 62,
                    "line": 13
                  }
                }
              },
              "range": [
                291,
                292
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 13
                },
                "start": {
                  "column": 62,
                  "line": 13
                }
              }
            }
          },
          "range": [
            282,
            292
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 13
            },
            "start": {
              "column": 53,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 95,
            "line": 13
          },
          "start": {
            "column": 64,
            "line": 13
          }
        },
        "range": [
          293,
          324
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              299,
              324
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    308,
                    323
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          319,
                          322
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
                                320,
                                321
                              ],
                              "loc": {
                                "end": {
                                  "column": 92,
                                  "line": 13
                                },
                                "start": {
                                  "column": 91,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              320,
                              321
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 13
                              },
                              "start": {
                                "column": 91,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 13
                          },
                          "start": {
                            "column": 90,
                            "line": 13
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "UnboxArray",
                        "optional": false,
                        "range": [
                          309,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 13
                          },
                          "start": {
                            "column": 80,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        309,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 13
                        },
                        "start": {
                          "column": 80,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 13
                    },
                    "start": {
                      "column": 79,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Identity",
                  "optional": false,
                  "range": [
                    300,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 13
                    },
                    "start": {
                      "column": 71,
                      "line": 13
                    }
                  }
                },
                "range": [
                  300,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 13
                  },
                  "start": {
                    "column": 71,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 13
              },
              "start": {
                "column": 70,
                "line": 13
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "range": [
              295,
              299
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 13
              },
              "start": {
                "column": 66,
                "line": 13
              }
            }
          },
          "range": [
            295,
            324
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 13
            },
            "start": {
              "column": 66,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 13
          },
          "start": {
            "column": 22,
            "line": 13
          }
        },
        "range": [
          251,
          281
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  267,
                  280
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        271,
                        279
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            272,
                            278
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 13
                            },
                            "start": {
                              "column": 43,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 13
                        },
                        "start": {
                          "column": 42,
                          "line": 13
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "range": [
                        268,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 13
                        },
                        "start": {
                          "column": 39,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      268,
                      279
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 13
                      },
                      "start": {
                        "column": 39,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 13
                  },
                  "start": {
                    "column": 38,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  262,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 13
                  },
                  "start": {
                    "column": 33,
                    "line": 13
                  }
                }
              },
              "range": [
                262,
                280
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
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
                252,
                253
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              252,
              280
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 13
              },
              "start": {
                "column": 23,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        229,
        325
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
