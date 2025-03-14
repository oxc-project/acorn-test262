__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    437
  ],
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
            "name": "fooProp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              },
              "range": [
                21,
                36
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    30,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 1
                    },
                    "start": {
                      "column": 30,
                      "line": 1
                    }
                  }
                },
                "range": [
                  23,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        37
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "barProp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              },
              "range": [
                59,
                74
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    68,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 30,
                      "line": 2
                    }
                  }
                },
                "range": [
                  61,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              52,
              74
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            52,
            74
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        38,
        75
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BothProps",
        "optional": false,
        "range": [
          82,
          91
        ],
        "loc": {
          "end": {
            "column": 14,
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
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooProp",
              "optional": false,
              "range": [
                101,
                108
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            "range": [
              94,
              108
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "barProp",
              "optional": false,
              "range": [
                118,
                125
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 4
                },
                "start": {
                  "column": 41,
                  "line": 4
                }
              }
            },
            "range": [
              111,
              125
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 4
              },
              "start": {
                "column": 34,
                "line": 4
              }
            }
          }
        ],
        "range": [
          94,
          125
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "range": [
        77,
        126
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        128,
        192
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            152,
            192
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooProp",
                "optional": false,
                "range": [
                  157,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 3,
                    "line": 7
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
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                },
                "range": [
                  165,
                  168
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      167,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    167,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                156,
                169
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "range": [
                  173,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 3,
                    "line": 8
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
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                },
                "range": [
                  181,
                  189
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    183,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                172,
                190
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 24,
              "line": 6
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            145,
            148
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 23,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          },
          "range": [
            148,
            151
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
                  149,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                149,
                150
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          135,
          192
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "range": [
                    246,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      252,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "range": [
                      254,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 18,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    252,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                "range": [
                  246,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              240,
              263
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    },
                    "range": [
                      353,
                      372
                    ],
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fooProp",
                          "optional": false,
                          "range": [
                            364,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 17
                            },
                            "start": {
                              "column": 24,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          357,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 17
                          },
                          "start": {
                            "column": 17,
                            "line": 17
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
                            355,
                            356
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          355,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 17
                          },
                          "start": {
                            "column": 15,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        355,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    350,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      375,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 17
                      },
                      "start": {
                        "column": 35,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "range": [
                      377,
                      384
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
                  "range": [
                    375,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 35,
                      "line": 17
                    }
                  }
                },
                "range": [
                  350,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              344,
              386
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 17
              },
              "start": {
                "column": 4,
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
                  "name": "def2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    },
                    "range": [
                      401,
                      420
                    ],
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "barProp",
                          "optional": false,
                          "range": [
                            412,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 18
                            },
                            "start": {
                              "column": 25,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          405,
                          419
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 18
                          },
                          "start": {
                            "column": 18,
                            "line": 18
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
                            403,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 18
                            },
                            "start": {
                              "column": 16,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          403,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        403,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    397,
                    420
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      423,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 18
                      },
                      "start": {
                        "column": 36,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "barProp",
                    "optional": false,
                    "range": [
                      425,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 38,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    423,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 18
                    },
                    "start": {
                      "column": 36,
                      "line": 18
                    }
                  }
                },
                "range": [
                  397,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              391,
              434
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          234,
          436
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 40,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          203,
          204
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 35,
                "line": 11
              }
            },
            "range": [
              229,
              232
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  231,
                  232
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
                231,
                232
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
            }
          },
          "range": [
            228,
            232
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 11
            },
            "start": {
              "column": 34,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        },
        "range": [
          204,
          227
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
                  218,
                  226
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      219,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 25,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  215,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
                  }
                }
              },
              "range": [
                215,
                226
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
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
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              205,
              226
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        194,
        436
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 11
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
