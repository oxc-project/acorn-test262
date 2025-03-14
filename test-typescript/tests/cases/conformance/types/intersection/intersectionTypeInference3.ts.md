__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    325
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nominal",
        "optional": false,
        "range": [
          27,
          34
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "range": [
                64,
                68
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
                }
              }
            },
            "range": [
              64,
              68
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      78,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 4
                      },
                      "start": {
                        "column": 5,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "species",
                    "optional": false,
                    "range": [
                      85,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    78,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
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
                      "column": 26,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  },
                  "range": [
                    93,
                    99
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Kind",
                      "optional": false,
                      "range": [
                        95,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      95,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  77,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              71,
              102
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 49,
                "line": 3
              }
            }
          }
        ],
        "range": [
          64,
          102
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 42,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          34,
          61
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                48,
                54
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Kind",
              "optional": false,
              "range": [
                35,
                39
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              35,
              54
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
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
              "name": "Type",
              "optional": false,
              "range": [
                56,
                60
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              56,
              60
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 34,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        103
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
        "name": "A",
        "optional": false,
        "range": [
          110,
          111
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            121,
            134
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'A'",
                "value": "A",
                "range": [
                  122,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              },
              "range": [
                122,
                125
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                127,
                133
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
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nominal",
          "optional": false,
          "range": [
            114,
            121
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 7
            },
            "start": {
              "column": 9,
              "line": 7
            }
          }
        },
        "range": [
          114,
          134
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "range": [
        105,
        135
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              },
              "range": [
                152,
                160
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    157,
                    160
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          158,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 9
                          },
                          "start": {
                            "column": 21,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        158,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    154,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 9
                    },
                    "start": {
                      "column": 17,
                      "line": 9
                    }
                  }
                },
                "range": [
                  154,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              151,
              160
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
          "init": null,
          "range": [
            151,
            160
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
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        137,
        161
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              },
              "range": [
                177,
                185
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    182,
                    185
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          183,
                          184
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
                      "range": [
                        183,
                        184
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
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    179,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                },
                "range": [
                  179,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              176,
              185
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            176,
            185
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 10
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        162,
        186
      ],
      "loc": {
        "end": {
          "column": 24,
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
            "name": "c1",
            "optional": false,
            "range": [
              194,
              196
            ],
            "loc": {
              "end": {
                "column": 8,
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      231,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 12
                      },
                      "start": {
                        "column": 43,
                        "line": 12
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "range": [
                      220,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 12
                      },
                      "start": {
                        "column": 32,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "range": [
                      226,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 12
                      },
                      "start": {
                        "column": 38,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    220,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 12
                    },
                    "start": {
                      "column": 32,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  220,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 32,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      210,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 22,
                        "line": 12
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "range": [
                      199,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "range": [
                      205,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 17,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    199,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  199,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "concat",
                "optional": false,
                "range": [
                  213,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              "range": [
                199,
                219
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              199,
              234
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          },
          "range": [
            194,
            234
          ],
          "loc": {
            "end": {
              "column": 46,
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
        188,
        235
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
        "name": "from",
        "optional": false,
        "range": [
          272,
          276
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 16
          },
          "start": {
            "column": 26,
            "line": 16
          }
        },
        "range": [
          281,
          286
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
                283,
                284
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 28,
                  "line": 16
                }
              }
            },
            "range": [
              283,
              284
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 28,
                "line": 16
              }
            }
          },
          "range": [
            283,
            286
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 16
            },
            "start": {
              "column": 28,
              "line": 16
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 16
          },
          "start": {
            "column": 21,
            "line": 16
          }
        },
        "range": [
          276,
          279
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
                277,
                278
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 16
                },
                "start": {
                  "column": 22,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              277,
              278
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 16
              },
              "start": {
                "column": 22,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        255,
        287
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              },
              "range": [
                296,
                314
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    311,
                    314
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          312,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 17
                          },
                          "start": {
                            "column": 24,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        312,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 23,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "range": [
                    298,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "range": [
                  298,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              294,
              314
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "from",
              "optional": false,
              "range": [
                317,
                321
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 29,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              317,
              323
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 17
              },
              "start": {
                "column": 29,
                "line": 17
              }
            }
          },
          "range": [
            294,
            323
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        288,
        324
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
