__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    196,
    754
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lower",
        "optional": false,
        "range": [
          201,
          206
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
                226,
                227
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            },
            "range": [
              226,
              227
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 30,
                "line": 5
              }
            }
          },
          "range": [
            220,
            227
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            215,
            216
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 5
            },
            "start": {
              "column": 19,
              "line": 5
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
                232,
                233
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            },
            "range": [
              232,
              233
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 36,
                "line": 5
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
                230,
                231
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "range": [
              230,
              231
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          },
          "range": [
            230,
            234
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 5
            },
            "start": {
              "column": 34,
              "line": 5
            }
          }
        },
        "range": [
          212,
          236
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        },
        "range": [
          206,
          209
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
                207,
                208
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              207,
              208
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        196,
        237
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        239,
        495
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array",
                    "optional": false,
                    "range": [
                      393,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "object",
                      "optional": false,
                      "range": [
                        401,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        408,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 23,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      401,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 16,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    393,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                387,
                413
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "object",
                          "optional": false,
                          "range": [
                            467,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 19
                            },
                            "start": {
                              "column": 4,
                              "line": 19
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            474,
                            477
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 19
                            },
                            "start": {
                              "column": 11,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          467,
                          478
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 19
                          },
                          "start": {
                            "column": 4,
                            "line": 19
                          }
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              482,
                              487
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 19
                              },
                              "start": {
                                "column": 19,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          481,
                          488
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
                      "range": [
                        467,
                        488
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      467,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  461,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            444,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
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
                          "name": "array",
                          "optional": false,
                          "range": [
                            433,
                            438
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 17
                            },
                            "start": {
                              "column": 4,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "range": [
                            439,
                            443
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
                          433,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 17
                          },
                          "start": {
                            "column": 4,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        433,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 4,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      433,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  427,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 16
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "range": [
                  420,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 16
                  },
                  "start": {
                    "column": 6,
                    "line": 16
                  }
                }
              },
              "range": [
                416,
                493
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            383,
            495
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 2,
              "line": 14
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "range": [
            255,
            276
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              },
              "range": [
                331,
                358
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      341,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 18,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    341,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 18,
                      "line": 11
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    336,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "nameType": null,
                "optional": true,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        351,
                        354
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
                              352,
                              353
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 11
                              },
                              "start": {
                                "column": 29,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            352,
                            353
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 29,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 28,
                          "line": 11
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Lower",
                      "optional": false,
                      "range": [
                        346,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      346,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    346,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 11
                    }
                  }
                },
                "range": [
                  333,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              325,
              358
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                365,
                368
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    367,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                },
                "range": [
                  367,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              362,
              368
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              },
              "range": [
                377,
                380
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    379,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "range": [
                  379,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              372,
              380
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 37,
              "line": 7
            }
          },
          "range": [
            276,
            321
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      290,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      299,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      308,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 30,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  290,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
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
                  280,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                280,
                314
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                "name": "T",
                "optional": false,
                "range": [
                  318,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                318,
                319
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          246,
          495
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              },
              "range": [
                514,
                546
              ],
              "typeAnnotation": {
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
                        517,
                        518
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 12,
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
                          "column": 24,
                          "line": 24
                        },
                        "start": {
                          "column": 14,
                          "line": 24
                        }
                      },
                      "range": [
                        519,
                        529
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "range": [
                            521,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 24
                            },
                            "start": {
                              "column": 16,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          521,
                          529
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 24
                          },
                          "start": {
                            "column": 16,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      517,
                      530
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        531,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 26,
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
                          "column": 38,
                          "line": 24
                        },
                        "start": {
                          "column": 28,
                          "line": 24
                        }
                      },
                      "range": [
                        533,
                        543
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            535,
                            541
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 24
                            },
                            "start": {
                              "column": 30,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          535,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 24
                          },
                          "start": {
                            "column": 30,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      531,
                      544
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 24
                      },
                      "start": {
                        "column": 26,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  516,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              511,
              546
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              549,
              551
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 24
              },
              "start": {
                "column": 44,
                "line": 24
              }
            }
          },
          "range": [
            511,
            551
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        505,
        552
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              575,
              578
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 22,
                "line": 25
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'x'",
            "value": "x",
            "range": [
              580,
              583
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 25
              },
              "start": {
                "column": 27,
                "line": 25
              }
            }
          },
          {
            "type": "Literal",
            "raw": "123",
            "value": 123,
            "range": [
              585,
              588
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 25
              },
              "start": {
                "column": 32,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "range": [
            553,
            574
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          553,
          589
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        553,
        590
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              621,
              624
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 26
              },
              "start": {
                "column": 22,
                "line": 26
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'y'",
            "value": "y",
            "range": [
              626,
              629
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 26
              },
              "start": {
                "column": 27,
                "line": 26
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'bar'",
            "value": "bar",
            "range": [
              631,
              636
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 26
              },
              "start": {
                "column": 32,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "range": [
            599,
            620
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          599,
          637
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        599,
        638
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              667,
              670
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'y'",
            "value": "y",
            "range": [
              672,
              675
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 27
              },
              "start": {
                "column": 27,
                "line": 27
              }
            }
          },
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              677,
              679
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 27
              },
              "start": {
                "column": 32,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "range": [
            645,
            666
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          645,
          680
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        645,
        681
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              722,
              725
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 28
              },
              "start": {
                "column": 22,
                "line": 28
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'x'",
            "value": "x",
            "range": [
              727,
              730
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 28
              },
              "start": {
                "column": 27,
                "line": 28
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"no\"",
            "value": "no",
            "range": [
              732,
              736
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 28
              },
              "start": {
                "column": 32,
                "line": 28
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "range": [
            700,
            721
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          700,
          737
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        700,
        738
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 54,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
