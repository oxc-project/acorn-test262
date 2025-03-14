__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    385
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          39,
          50
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                41,
                45
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 19,
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
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              },
              "range": [
                45,
                48
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    47,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                },
                "range": [
                  47,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              41,
              48
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          32,
          35
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        },
        "range": [
          35,
          38
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
                36,
                37
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              36,
              37
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        50
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "name": "BoxTypes",
        "optional": false,
        "range": [
          56,
          64
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                70,
                85
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          73,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 22,
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
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        },
                        "range": [
                          74,
                          82
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            76,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 25,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        73,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    71,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
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
                  "column": 34,
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
              "name": "Box",
              "optional": false,
              "range": [
                67,
                70
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "range": [
              67,
              85
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                91,
                106
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          94,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 4
                          },
                          "start": {
                            "column": 43,
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
                            "column": 52,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        },
                        "range": [
                          95,
                          103
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            97,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 4
                            },
                            "start": {
                              "column": 46,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        94,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 4
                        },
                        "start": {
                          "column": 43,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    92,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 4
                    },
                    "start": {
                      "column": 41,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 4
                },
                "start": {
                  "column": 40,
                  "line": 4
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "range": [
                88,
                91
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 37,
                  "line": 4
                }
              }
            },
            "range": [
              88,
              106
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 4
              },
              "start": {
                "column": 37,
                "line": 4
              }
            }
          }
        ],
        "range": [
          67,
          106
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "range": [
        51,
        107
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxFactoryFactory",
        "optional": false,
        "range": [
          114,
          131
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TBox",
            "optional": false,
            "range": [
              140,
              144
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 31,
                "line": 6
              }
            }
          },
          "range": [
            140,
            144
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 6
            },
            "start": {
              "column": 31,
              "line": 6
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      163,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 6
                      },
                      "start": {
                        "column": 54,
                        "line": 6
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
                      "column": 55,
                      "line": 6
                    },
                    "start": {
                      "column": 54,
                      "line": 6
                    }
                  }
                },
                "range": [
                  157,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 6
                  },
                  "start": {
                    "column": 48,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 6
              },
              "start": {
                "column": 47,
                "line": 6
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
                "column": 47,
                "line": 6
              },
              "start": {
                "column": 44,
                "line": 6
              }
            }
          },
          "range": [
            153,
            165
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 6
            },
            "start": {
              "column": 44,
              "line": 6
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            215,
            220
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                      176,
                      179
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          178,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        178,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    173,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 3,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                },
                "range": [
                  180,
                  210
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          192,
                          198
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TBox",
                              "optional": false,
                              "range": [
                                193,
                                197
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 7
                                },
                                "start": {
                                  "column": 23,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              193,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 7
                              },
                              "start": {
                                "column": 23,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 7
                          },
                          "start": {
                            "column": 22,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BoxFactory",
                        "optional": false,
                        "range": [
                          182,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        182,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        201,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 7
                        },
                        "start": {
                          "column": 31,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    182,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                172,
                210
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            168,
            212
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 59,
              "line": 6
            }
          }
        },
        "range": [
          140,
          220
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 31,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 6
          },
          "start": {
            "column": 22,
            "line": 6
          }
        },
        "range": [
          131,
          137
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBox",
              "optional": false,
              "range": [
                132,
                136
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              132,
              136
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        109,
        221
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          247,
          265
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBox",
              "optional": false,
              "range": [
                251,
                257
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              },
              "range": [
                259,
                262
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    261,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                },
                "range": [
                  261,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              }
            },
            "static": false,
            "range": [
              251,
              263
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 24,
            "line": 10
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxFactory",
        "optional": false,
        "range": [
          233,
          243
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 10
          }
        },
        "range": [
          243,
          246
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                244,
                245
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              244,
              245
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        223,
        265
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              },
              "range": [
                282,
                311
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    301,
                    311
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BoxTypes",
                        "optional": false,
                        "range": [
                          302,
                          310
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 14
                          },
                          "start": {
                            "column": 35,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        302,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 14
                        },
                        "start": {
                          "column": 35,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 14
                    },
                    "start": {
                      "column": 34,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BoxFactoryFactory",
                  "optional": false,
                  "range": [
                    284,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                },
                "range": [
                  284,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              281,
              311
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 14
              },
              "start": {
                "column": 14,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            281,
            311
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 14
            },
            "start": {
              "column": 14,
              "line": 14
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        267,
        312
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "b",
            "optional": false,
            "range": [
              319,
              320
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              327,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 15
                              },
                              "start": {
                                "column": 14,
                                "line": 15
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
                              330,
                              332
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 15
                              },
                              "start": {
                                "column": 17,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            327,
                            332
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 14,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              334,
                              335
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 15
                              },
                              "start": {
                                "column": 21,
                                "line": 15
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
                              337,
                              339
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 15
                              },
                              "start": {
                                "column": 24,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            334,
                            339
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 15
                            },
                            "start": {
                              "column": 21,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        325,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      323,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 15
                      },
                      "start": {
                        "column": 10,
                        "line": 15
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    323,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getBox",
                  "optional": false,
                  "range": [
                    344,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 31,
                      "line": 15
                    }
                  }
                },
                "range": [
                  323,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                323,
                352
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 15
                },
                "start": {
                  "column": 10,
                  "line": 15
                }
              }
            },
            "range": [
              323,
              352
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 15
              },
              "start": {
                "column": 10,
                "line": 15
              }
            }
          },
          "range": [
            319,
            352
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        313,
        353
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    371,
                    372
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
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      375,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "range": [
                      377,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    375,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  371,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              365,
              382
            ],
            "loc": {
              "end": {
                "column": 19,
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
          361,
          384
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "range": [
          358,
          359
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        354,
        384
      ],
      "loc": {
        "end": {
          "column": 1,
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
