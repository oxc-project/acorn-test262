__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    383
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          24,
          43
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elems",
              "optional": false,
              "range": [
                30,
                35
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                35,
                40
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      37,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    37,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  37,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              30,
              41
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "range": [
          10,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          23
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
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          71,
          104
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              },
              "range": [
                86,
                101
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    98,
                    101
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
                          99,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 5
                          },
                          "start": {
                            "column": 26,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        99,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "range": [
                    88,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "range": [
                  88,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              },
              "range": [
                81,
                84
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
                      82,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    82,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              77,
              102
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 27,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CollectionStatic",
        "optional": false,
        "range": [
          54,
          70
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        44,
        104
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "Collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              },
              "range": [
                129,
                147
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CollectionStatic",
                  "optional": false,
                  "range": [
                    131,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                },
                "range": [
                  131,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 7
                  },
                  "start": {
                    "column": 26,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              119,
              147
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            119,
            147
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        105,
        148
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "ALL",
            "optional": false,
            "range": [
              156,
              159
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"all\"",
            "value": "all",
            "range": [
              162,
              167
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "range": [
            156,
            167
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        150,
        168
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "name": "All",
        "optional": false,
        "range": [
          174,
          177
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ALL",
          "optional": false,
          "range": [
            187,
            190
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 10
            },
            "start": {
              "column": 18,
              "line": 10
            }
          }
        },
        "range": [
          180,
          190
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 10
          }
        }
      },
      "range": [
        169,
        191
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              },
              "range": [
                205,
                222
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    217,
                    222
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "All",
                        "optional": false,
                        "range": [
                          218,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 12
                          },
                          "start": {
                            "column": 25,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        218,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 12
                        },
                        "start": {
                          "column": 25,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 24,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "range": [
                    207,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "range": [
                  207,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              199,
              222
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "range": [
                229,
                239
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 12
                },
                "start": {
                  "column": 36,
                  "line": 12
                }
              }
            },
            "range": [
              225,
              241
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 12
              },
              "start": {
                "column": 32,
                "line": 12
              }
            }
          },
          "range": [
            199,
            241
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 12
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
        193,
        242
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 12
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
            "name": "ANOTHER",
            "optional": false,
            "range": [
              250,
              257
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"another\"",
            "value": "another",
            "range": [
              260,
              269
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 14
              },
              "start": {
                "column": 16,
                "line": 14
              }
            }
          },
          "range": [
            250,
            269
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        244,
        270
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Another",
        "optional": false,
        "range": [
          276,
          283
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANOTHER",
          "optional": false,
          "range": [
            293,
            300
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 15
            },
            "start": {
              "column": 22,
              "line": 15
            }
          }
        },
        "range": [
          286,
          300
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        }
      },
      "range": [
        271,
        301
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "name": "Both",
        "optional": false,
        "range": [
          308,
          312
        ],
        "loc": {
          "end": {
            "column": 9,
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
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Another",
              "optional": false,
              "range": [
                315,
                322
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "range": [
              315,
              322
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "All",
              "optional": false,
              "range": [
                325,
                328
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
              325,
              328
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
          315,
          328
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 17
          }
        }
      },
      "range": [
        303,
        329
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              },
              "range": [
                344,
                362
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    356,
                    362
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Both",
                        "optional": false,
                        "range": [
                          357,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 19
                          },
                          "start": {
                            "column": 26,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        357,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 19
                        },
                        "start": {
                          "column": 26,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 19
                    },
                    "start": {
                      "column": 25,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "range": [
                    346,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                },
                "range": [
                  346,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 31,
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
              337,
              362
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "range": [
                369,
                379
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 19
                },
                "start": {
                  "column": 38,
                  "line": 19
                }
              }
            },
            "range": [
              365,
              381
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 19
              },
              "start": {
                "column": 34,
                "line": 19
              }
            }
          },
          "range": [
            337,
            381
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        331,
        382
      ],
      "loc": {
        "end": {
          "column": 51,
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
      "line": 1
    }
  },
  "hashbang": null
}
```
