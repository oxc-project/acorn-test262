__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    660
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          44,
          97
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "states",
              "optional": false,
              "range": [
                48,
                54
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
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                55,
                94
              ],
              "typeAnnotation": {
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
                              "column": 16,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          },
                          "range": [
                            67,
                            75
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              69,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 5
                              },
                              "start": {
                                "column": 10,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          64,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 5
                          },
                          "start": {
                            "column": 5,
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
                          "column": 30,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      },
                      "range": [
                        76,
                        89
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StateSchema",
                          "optional": false,
                          "range": [
                            78,
                            89
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 5
                            },
                            "start": {
                              "column": 19,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          78,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 5
                          },
                          "start": {
                            "column": 19,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      63,
                      90
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                  57,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              48,
              95
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateSchema",
        "optional": false,
        "range": [
          32,
          43
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        97
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          157,
          184
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "schema",
              "optional": false,
              "range": [
                161,
                167
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                167,
                181
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TStateSchema",
                  "optional": false,
                  "range": [
                    169,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "range": [
                  169,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            },
            "value": null,
            "range": [
              161,
              182
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
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
            "column": 58,
            "line": 9
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateNode",
        "optional": false,
        "range": [
          113,
          122
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 9
          },
          "start": {
            "column": 23,
            "line": 9
          }
        },
        "range": [
          122,
          156
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
                "name": "StateSchema",
                "optional": false,
                "range": [
                  144,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 9
                  },
                  "start": {
                    "column": 45,
                    "line": 9
                  }
                }
              },
              "range": [
                144,
                155
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 9
                },
                "start": {
                  "column": 45,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TStateSchema",
              "optional": false,
              "range": [
                123,
                135
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              123,
              155
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
          }
        ]
      },
      "range": [
        99,
        184
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
        "name": "StateNodesConfig",
        "optional": false,
        "range": [
          191,
          207
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"states\"",
                "value": "states",
                "range": [
                  273,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 14
                  }
                }
              },
              "range": [
                273,
                281
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 14
                },
                "start": {
                  "column": 27,
                  "line": 14
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStateSchema",
                "optional": false,
                "range": [
                  260,
                  272
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
              },
              "range": [
                260,
                272
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
            },
            "range": [
              260,
              282
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 14,
                "line": 14
              }
            }
          },
          "range": [
            254,
            282
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 14
            },
            "start": {
              "column": 8,
              "line": 14
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            249,
            250
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 14
            },
            "start": {
              "column": 3,
              "line": 14
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              294,
              334
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
                      331,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 14
                      },
                      "start": {
                        "column": 85,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    331,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 14
                    },
                    "start": {
                      "column": 85,
                      "line": 14
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      306,
                      330
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"states\"",
                            "value": "states",
                            "range": [
                              320,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 14
                              },
                              "start": {
                                "column": 74,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            320,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 14
                            },
                            "start": {
                              "column": 74,
                              "line": 14
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TStateSchema",
                            "optional": false,
                            "range": [
                              307,
                              319
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 14
                              },
                              "start": {
                                "column": 61,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            307,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 14
                            },
                            "start": {
                              "column": 61,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          307,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 14
                          },
                          "start": {
                            "column": 61,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 14
                      },
                      "start": {
                        "column": 60,
                        "line": 14
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "range": [
                      295,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 14
                      },
                      "start": {
                        "column": 49,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    295,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 14
                    },
                    "start": {
                      "column": 49,
                      "line": 14
                    }
                  }
                },
                "range": [
                  295,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 14
                  },
                  "start": {
                    "column": 49,
                    "line": 14
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 14
              },
              "start": {
                "column": 48,
                "line": 14
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StateNode",
            "optional": false,
            "range": [
              285,
              294
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 14
              },
              "start": {
                "column": 39,
                "line": 14
              }
            }
          },
          "range": [
            285,
            334
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 14
            },
            "start": {
              "column": 39,
              "line": 14
            }
          }
        },
        "range": [
          244,
          337
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 58,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 13
          },
          "start": {
            "column": 21,
            "line": 13
          }
        },
        "range": [
          207,
          241
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
                "name": "StateSchema",
                "optional": false,
                "range": [
                  229,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 13
                  },
                  "start": {
                    "column": 43,
                    "line": 13
                  }
                }
              },
              "range": [
                229,
                240
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 13
                },
                "start": {
                  "column": 43,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TStateSchema",
              "optional": false,
              "range": [
                208,
                220
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              208,
              240
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        186,
        338
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 15
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
        "name": "Ordering",
        "optional": false,
        "range": [
          391,
          399
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
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
              "name": "orderBy",
              "optional": false,
              "range": [
                433,
                440
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              },
              "range": [
                440,
                450
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TOrderBy",
                  "optional": false,
                  "range": [
                    442,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                },
                "range": [
                  442,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              433,
              450
            ],
            "loc": {
              "end": {
                "column": 21,
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
          427,
          452
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 41,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 19
          }
        },
        "range": [
          399,
          424
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                417,
                423
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 31,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "range": [
                400,
                408
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              400,
              423
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        386,
        452
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "range": [
          459,
          464
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
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
              "name": "order",
              "optional": false,
              "range": [
                498,
                503
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
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
                  "column": 30,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              },
              "range": [
                504,
                524
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    514,
                    524
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOrderBy",
                        "optional": false,
                        "range": [
                          515,
                          523
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 24
                          },
                          "start": {
                            "column": 21,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        515,
                        523
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 24
                        },
                        "start": {
                          "column": 21,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 20,
                      "line": 24
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ordering",
                  "optional": false,
                  "range": [
                    506,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                },
                "range": [
                  506,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 12,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              498,
              524
            ],
            "loc": {
              "end": {
                "column": 30,
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
          492,
          526
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 38,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        },
        "range": [
          464,
          489
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                482,
                488
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "range": [
                465,
                473
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              465,
              488
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        454,
        526
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
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryHandler",
        "optional": false,
        "range": [
          533,
          545
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "range": [
          657,
          659
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 30
          },
          "start": {
            "column": 4,
            "line": 30
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 17,
            "line": 27
          }
        },
        "range": [
          545,
          654
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
                  571,
                  581
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TOrderBy",
                      "optional": false,
                      "range": [
                        572,
                        580
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 28
                        },
                        "start": {
                          "column": 25,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      572,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 28
                      },
                      "start": {
                        "column": 25,
                        "line": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Query",
                "optional": false,
                "range": [
                  566,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
                    "line": 28
                  }
                }
              },
              "range": [
                566,
                581
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 28
                },
                "start": {
                  "column": 19,
                  "line": 28
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQuery",
              "optional": false,
              "range": [
                551,
                557
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              551,
              581
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                604,
                610
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 29
                },
                "start": {
                  "column": 21,
                  "line": 29
                }
              }
            },
            "default": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"orderBy\"",
                  "value": "orderBy",
                  "range": [
                    642,
                    651
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 29
                    },
                    "start": {
                      "column": 59,
                      "line": 29
                    }
                  }
                },
                "range": [
                  642,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 29
                  },
                  "start": {
                    "column": 59,
                    "line": 29
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    624,
                    641
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"order\"",
                          "value": "order",
                          "range": [
                            632,
                            639
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 29
                            },
                            "start": {
                              "column": 49,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          632,
                          639
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 29
                          },
                          "start": {
                            "column": 49,
                            "line": 29
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TQuery",
                          "optional": false,
                          "range": [
                            625,
                            631
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 29
                            },
                            "start": {
                              "column": 42,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          625,
                          631
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 29
                          },
                          "start": {
                            "column": 42,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        625,
                        640
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 29
                        },
                        "start": {
                          "column": 42,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 29
                    },
                    "start": {
                      "column": 41,
                      "line": 29
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "range": [
                    613,
                    624
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 29
                    },
                    "start": {
                      "column": 30,
                      "line": 29
                    }
                  }
                },
                "range": [
                  613,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 29
                  },
                  "start": {
                    "column": 30,
                    "line": 29
                  }
                }
              },
              "range": [
                613,
                652
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 29
                },
                "start": {
                  "column": 30,
                  "line": 29
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "range": [
                587,
                595
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              587,
              652
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        528,
        659
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
