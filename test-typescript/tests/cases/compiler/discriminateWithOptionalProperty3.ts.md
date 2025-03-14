__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    81,
    1039
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "range": [
          86,
          91
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "range": [
              97,
              101
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              104,
              113
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                116,
                117
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            },
            "range": [
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            }
          }
        ],
        "range": [
          97,
          117
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          91,
          94
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
                92,
                93
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              92,
              93
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        81,
        118
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
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
          161,
          188
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
              "name": "originalError",
              "optional": false,
              "range": [
                165,
                178
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
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
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              },
              "range": [
                178,
                185
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "range": [
                    180,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                },
                "range": [
                  180,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              165,
              186
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
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
            "column": 41,
            "line": 5
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GraphQLError",
        "optional": false,
        "range": [
          134,
          146
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Error",
        "optional": false,
        "range": [
          155,
          160
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 5
          }
        }
      },
      "range": [
        120,
        188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          214,
          285
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variableValues",
              "optional": false,
              "range": [
                218,
                232
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
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
                  "column": 66,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              },
              "range": [
                233,
                282
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    240,
                    282
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 10
                                  }
                                },
                                "range": [
                                  261,
                                  269
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    263,
                                    269
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 10
                                    }
                                  }
                                }
                              },
                              "range": [
                                253,
                                269
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 10
                                },
                                "start": {
                                  "column": 37,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "readonly": true,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 10
                              },
                              "start": {
                                "column": 54,
                                "line": 10
                              }
                            },
                            "range": [
                              270,
                              279
                            ],
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "range": [
                                272,
                                279
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 10
                                },
                                "start": {
                                  "column": 56,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            243,
                            279
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 10
                            },
                            "start": {
                              "column": 27,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        241,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 10
                        },
                        "start": {
                          "column": 25,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 10
                    },
                    "start": {
                      "column": 24,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Maybe",
                  "optional": false,
                  "range": [
                    235,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  }
                },
                "range": [
                  235,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              218,
              283
            ],
            "loc": {
              "end": {
                "column": 67,
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
            "column": 24,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExecutionArgs",
        "optional": false,
        "range": [
          200,
          213
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        190,
        285
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          314,
          368
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variableValues",
              "optional": false,
              "range": [
                318,
                332
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 2,
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
                  "column": 49,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              },
              "range": [
                332,
                365
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
                        "name": "variable",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 14
                            },
                            "start": {
                              "column": 29,
                              "line": 14
                            }
                          },
                          "range": [
                            345,
                            353
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              347,
                              353
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 14
                              },
                              "start": {
                                "column": 31,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          337,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
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
                          "column": 47,
                          "line": 14
                        },
                        "start": {
                          "column": 38,
                          "line": 14
                        }
                      },
                      "range": [
                        354,
                        363
                      ],
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          356,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 14
                          },
                          "start": {
                            "column": 40,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      336,
                      363
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 14
                      },
                      "start": {
                        "column": 20,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  334,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              318,
              366
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 27,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExecutionContext",
        "optional": false,
        "range": [
          297,
          313
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        287,
        368
      ],
      "loc": {
        "end": {
          "column": 1,
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
        "name": "CoercedVariableValues",
        "optional": false,
        "range": [
          375,
          396
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "errors",
                  "optional": false,
                  "range": [
                    405,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 18
                    },
                    "start": {
                      "column": 6,
                      "line": 18
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
                      "column": 41,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  },
                  "range": [
                    411,
                    440
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        426,
                        440
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GraphQLError",
                            "optional": false,
                            "range": [
                              427,
                              439
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 18
                              },
                              "start": {
                                "column": 28,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            427,
                            439
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 18
                            },
                            "start": {
                              "column": 28,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 18
                        },
                        "start": {
                          "column": 27,
                          "line": 18
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "range": [
                        413,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 18
                        },
                        "start": {
                          "column": 14,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      413,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  405,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 18
                  },
                  "start": {
                    "column": 6,
                    "line": 18
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coerced",
                  "optional": false,
                  "range": [
                    442,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 18
                    },
                    "start": {
                      "column": 43,
                      "line": 18
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
                      "column": 58,
                      "line": 18
                    },
                    "start": {
                      "column": 51,
                      "line": 18
                    }
                  },
                  "range": [
                    450,
                    457
                  ],
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "range": [
                      452,
                      457
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 18
                      },
                      "start": {
                        "column": 53,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  442,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 18
                  },
                  "start": {
                    "column": 43,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              403,
              459
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coerced",
                  "optional": false,
                  "range": [
                    466,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 19
                    },
                    "start": {
                      "column": 6,
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
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 13,
                      "line": 19
                    }
                  },
                  "range": [
                    473,
                    506
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
                            "name": "variable",
                            "optional": false,
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
                                486,
                                494
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  488,
                                  494
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
                              478,
                              494
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 19
                              },
                              "start": {
                                "column": 18,
                                "line": 19
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
                              "column": 44,
                              "line": 19
                            },
                            "start": {
                              "column": 35,
                              "line": 19
                            }
                          },
                          "range": [
                            495,
                            504
                          ],
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "range": [
                              497,
                              504
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 19
                              },
                              "start": {
                                "column": 37,
                                "line": 19
                              }
                            }
                          }
                        },
                        "range": [
                          477,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 19
                          },
                          "start": {
                            "column": 17,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      475,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  466,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "range": [
                    508,
                    514
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
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 19
                    },
                    "start": {
                      "column": 55,
                      "line": 19
                    }
                  },
                  "range": [
                    515,
                    522
                  ],
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "range": [
                      517,
                      522
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 19
                      },
                      "start": {
                        "column": 57,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  508,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 62,
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
              464,
              524
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          401,
          524
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 19
          },
          "start": {
            "column": 2,
            "line": 18
          }
        }
      },
      "range": [
        370,
        525
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
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
        "name": "getVariableValues",
        "optional": false,
        "range": [
          544,
          561
        ],
        "loc": {
          "end": {
            "column": 34,
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
          "type": "Identifier",
          "decorators": [],
          "name": "inputs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 41,
                "line": 21
              }
            },
            "range": [
              568,
              613
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
                      "name": "variable",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 22
                          },
                          "start": {
                            "column": 20,
                            "line": 22
                          }
                        },
                        "range": [
                          592,
                          600
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            594,
                            600
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 22
                            },
                            "start": {
                              "column": 22,
                              "line": 22
                            }
                          }
                        }
                      },
                      "range": [
                        584,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 22
                      },
                      "start": {
                        "column": 29,
                        "line": 22
                      }
                    },
                    "range": [
                      601,
                      610
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        603,
                        610
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 22
                        },
                        "start": {
                          "column": 31,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    574,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 22
                    },
                    "start": {
                      "column": 2,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                570,
                613
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 23
                },
                "start": {
                  "column": 43,
                  "line": 21
                }
              }
            }
          },
          "range": [
            562,
            613
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 35,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 25,
            "line": 23
          },
          "start": {
            "column": 2,
            "line": 23
          }
        },
        "range": [
          614,
          637
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CoercedVariableValues",
            "optional": false,
            "range": [
              616,
              637
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "range": [
            616,
            637
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      },
      "range": [
        527,
        638
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        640,
        1038
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "variableValues",
                          "optional": false,
                          "range": [
                            764,
                            778
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 28
                            },
                            "start": {
                              "column": 10,
                              "line": 28
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "range": [
                            780,
                            797
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 28
                            },
                            "start": {
                              "column": 26,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          764,
                          797
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 28
                          },
                          "start": {
                            "column": 10,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      762,
                      799
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      802,
                      806
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 28
                      },
                      "start": {
                        "column": 48,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    762,
                    806
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                756,
                807
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 28
                },
                "start": {
                  "column": 2,
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
                    "name": "coercedVariableValues",
                    "optional": false,
                    "range": [
                      817,
                      838
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "init": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "operator": "??",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "range": [
                            859,
                            876
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 30
                            },
                            "start": {
                              "column": 50,
                              "line": 30
                            }
                          }
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            880,
                            882
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 30
                            },
                            "start": {
                              "column": 71,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          859,
                          882
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 30
                          },
                          "start": {
                            "column": 50,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getVariableValues",
                      "optional": false,
                      "range": [
                        841,
                        858
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 30
                        },
                        "start": {
                          "column": 32,
                          "line": 30
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      841,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 30
                      },
                      "start": {
                        "column": 32,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    817,
                    883
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                811,
                884
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 30
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "range": [
                          935,
                          956
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 33
                          },
                          "start": {
                            "column": 11,
                            "line": 33
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "errors",
                        "optional": false,
                        "range": [
                          957,
                          963
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 33
                          },
                          "start": {
                            "column": 33,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        935,
                        963
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 33
                        },
                        "start": {
                          "column": 11,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      928,
                      964
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  922,
                  968
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 34
                  },
                  "start": {
                    "column": 36,
                    "line": 32
                  }
                }
              },
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coercedVariableValues",
                  "optional": false,
                  "range": [
                    892,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 32
                    },
                    "start": {
                      "column": 6,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "range": [
                    914,
                    920
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 32
                    },
                    "start": {
                      "column": 28,
                      "line": 32
                    }
                  }
                },
                "range": [
                  892,
                  920
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 32
                  },
                  "start": {
                    "column": 6,
                    "line": 32
                  }
                }
              },
              "range": [
                888,
                968
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 32
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "variableValues",
                      "optional": false,
                      "range": [
                        985,
                        999
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 37
                        },
                        "start": {
                          "column": 4,
                          "line": 37
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "range": [
                          1001,
                          1022
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 37
                          },
                          "start": {
                            "column": 20,
                            "line": 37
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coerced",
                        "optional": false,
                        "range": [
                          1023,
                          1030
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 37
                          },
                          "start": {
                            "column": 42,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        1001,
                        1030
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 37
                        },
                        "start": {
                          "column": 20,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      985,
                      1030
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 37
                      },
                      "start": {
                        "column": 4,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  979,
                  1035
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 38
                  },
                  "start": {
                    "column": 9,
                    "line": 36
                  }
                }
              },
              "range": [
                972,
                1036
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 38
                },
                "start": {
                  "column": 2,
                  "line": 36
                }
              }
            }
          ],
          "range": [
            752,
            1038
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 39
            },
            "start": {
              "column": 50,
              "line": 27
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "buildExecutionContext",
          "optional": false,
          "range": [
            656,
            677
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 25
            },
            "start": {
              "column": 16,
              "line": 25
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              },
              "range": [
                685,
                700
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExecutionArgs",
                  "optional": false,
                  "range": [
                    687,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "range": [
                  687,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              681,
              700
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 49,
              "line": 27
            },
            "start": {
              "column": 1,
              "line": 27
            }
          },
          "range": [
            703,
            751
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    718,
                    732
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GraphQLError",
                        "optional": false,
                        "range": [
                          719,
                          731
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 27
                          },
                          "start": {
                            "column": 17,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        719,
                        731
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 27
                        },
                        "start": {
                          "column": 17,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 27
                    },
                    "start": {
                      "column": 16,
                      "line": 27
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "range": [
                    705,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 27
                    },
                    "start": {
                      "column": 3,
                      "line": 27
                    }
                  }
                },
                "range": [
                  705,
                  732
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 27
                  },
                  "start": {
                    "column": 3,
                    "line": 27
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExecutionContext",
                  "optional": false,
                  "range": [
                    735,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 27
                    },
                    "start": {
                      "column": 33,
                      "line": 27
                    }
                  }
                },
                "range": [
                  735,
                  751
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 27
                  },
                  "start": {
                    "column": 33,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              705,
              751
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 27
              },
              "start": {
                "column": 3,
                "line": 27
              }
            }
          }
        },
        "range": [
          647,
          1038
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
