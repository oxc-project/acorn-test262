__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    635
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedA",
        "optional": false,
        "range": [
          62,
          69
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
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "range": [
                74,
                78
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 17,
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
                  "column": 21,
                  "line": 3
                }
              },
              "range": [
                78,
                83
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    80,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
                    }
                  }
                },
                "range": [
                  80,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              74,
              83
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ],
        "range": [
          72,
          85
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        57,
        86
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "name": "TaggedB",
        "optional": false,
        "range": [
          92,
          99
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
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
              "name": "_tag",
              "optional": false,
              "range": [
                104,
                108
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 17,
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
                  "column": 21,
                  "line": 4
                }
              },
              "range": [
                108,
                113
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"b\"",
                  "value": "b",
                  "range": [
                    110,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "range": [
                  110,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              104,
              113
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          }
        ],
        "range": [
          102,
          115
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "range": [
        87,
        116
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "name": "TaggedUnion",
        "optional": false,
        "range": [
          123,
          134
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
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
              "name": "TaggedA",
              "optional": false,
              "range": [
                137,
                144
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "range": [
              137,
              144
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 19,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TaggedB",
              "optional": false,
              "range": [
                147,
                154
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 6
                },
                "start": {
                  "column": 29,
                  "line": 6
                }
              }
            },
            "range": [
              147,
              154
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 6
              },
              "start": {
                "column": 29,
                "line": 6
              }
            }
          }
        ],
        "range": [
          137,
          154
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 6
          }
        }
      },
      "range": [
        118,
        155
      ],
      "loc": {
        "end": {
          "column": 37,
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                164,
                200
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          168,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
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
                            "column": 39,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        },
                        "range": [
                          174,
                          196
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              183,
                              196
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedUnion",
                                  "optional": false,
                                  "range": [
                                    184,
                                    195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  184,
                                  195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 8
                              },
                              "start": {
                                "column": 26,
                                "line": 8
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "range": [
                              176,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            176,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 8
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        168,
                        196
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    166,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  166,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              163,
              200
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              203,
              205
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 8
              },
              "start": {
                "column": 46,
                "line": 8
              }
            }
          },
          "range": [
            163,
            205
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        157,
        206
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    294,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
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
                  "name": "items",
                  "optional": false,
                  "range": [
                    284,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    290,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "range": [
                  284,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                284,
                296
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "range": [
              277,
              297
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "range": [
          273,
          299
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 65,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "range": [
          217,
          220
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 24,
                "line": 10
              }
            },
            "range": [
              232,
              246
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      243,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    243,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                },
                "range": [
                  243,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              "range": [
                234,
                246
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            }
          },
          "range": [
            227,
            246
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 10
            },
            "start": {
              "column": 19,
              "line": 10
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 10
              },
              "start": {
                "column": 41,
                "line": 10
              }
            },
            "range": [
              249,
              271
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 10
                      },
                      "start": {
                        "column": 45,
                        "line": 10
                      }
                    },
                    "range": [
                      253,
                      265
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          262,
                          265
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
                                263,
                                264
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 10
                                },
                                "start": {
                                  "column": 55,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              263,
                              264
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 10
                              },
                              "start": {
                                "column": 55,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 10
                          },
                          "start": {
                            "column": 54,
                            "line": 10
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "range": [
                          255,
                          262
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 10
                          },
                          "start": {
                            "column": 47,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        255,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
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
                    252,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 10
                    },
                    "start": {
                      "column": 44,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 10
                  },
                  "start": {
                    "column": 59,
                    "line": 10
                  }
                },
                "range": [
                  267,
                  271
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      270,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 10
                      },
                      "start": {
                        "column": 62,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    270,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 10
                    },
                    "start": {
                      "column": 62,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                251,
                271
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 10
                },
                "start": {
                  "column": 43,
                  "line": 10
                }
              }
            }
          },
          "range": [
            248,
            271
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 10
            },
            "start": {
              "column": 40,
              "line": 10
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 12,
            "line": 10
          }
        },
        "range": [
          220,
          226
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
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              221,
              222
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
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
              "name": "B",
              "optional": false,
              "range": [
                224,
                225
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              224,
              225
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        208,
        299
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
            "name": "something",
            "optional": false,
            "range": [
              307,
              316
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  323,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 14
                  },
                  "start": {
                    "column": 22,
                    "line": 14
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      388,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 55,
                        "line": 15
                      }
                    }
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "range": [
                            364,
                            365
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 15
                            },
                            "start": {
                              "column": 31,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          361,
                          365
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 15
                          },
                          "start": {
                            "column": 28,
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            367,
                            373
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 15
                            },
                            "start": {
                              "column": 34,
                              "line": 15
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
                            "name": "_",
                            "optional": false,
                            "range": [
                              375,
                              376
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 15
                              },
                              "start": {
                                "column": 42,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "range": [
                              377,
                              383
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 15
                              },
                              "start": {
                                "column": 44,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            375,
                            383
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 15
                            },
                            "start": {
                              "column": 42,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          367,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 15
                          },
                          "start": {
                            "column": 34,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      359,
                      385
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "range": [
                            335,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 15
                            },
                            "start": {
                              "column": 2,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "range": [
                            337,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 15
                            },
                            "start": {
                              "column": 4,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          335,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 15
                          },
                          "start": {
                            "column": 2,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_tag",
                        "optional": false,
                        "range": [
                          344,
                          348
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 15
                          },
                          "start": {
                            "column": 11,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        335,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 15
                        },
                        "start": {
                          "column": 2,
                          "line": 15
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        353,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 20,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      335,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 2,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    335,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 15
                    },
                    "start": {
                      "column": 2,
                      "line": 15
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "range": [
                      327,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  326,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 15
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                319,
                322
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              319,
              395
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 18,
                "line": 14
              }
            }
          },
          "range": [
            307,
            395
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
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
        301,
        396
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
        "name": "test2",
        "optional": false,
        "range": [
          415,
          420
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 18
              },
              "start": {
                "column": 32,
                "line": 18
              }
            },
            "range": [
              430,
              434
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "range": [
                  432,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 34,
                    "line": 18
                  }
                }
              },
              "range": [
                432,
                434
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 18
                },
                "start": {
                  "column": 34,
                  "line": 18
                }
              }
            }
          },
          "range": [
            429,
            434
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 18
            },
            "start": {
              "column": 31,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 18
              },
              "start": {
                "column": 39,
                "line": 18
              }
            },
            "range": [
              437,
              441
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  439,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 18
                  },
                  "start": {
                    "column": 41,
                    "line": 18
                  }
                }
              },
              "range": [
                439,
                441
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 18
                },
                "start": {
                  "column": 41,
                  "line": 18
                }
              }
            }
          },
          "range": [
            436,
            441
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 18
            },
            "start": {
              "column": 38,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 91,
                "line": 18
              },
              "start": {
                "column": 47,
                "line": 18
              }
            },
            "range": [
              445,
              489
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 18
                      },
                      "start": {
                        "column": 55,
                        "line": 18
                      }
                    },
                    "range": [
                      453,
                      480
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              462,
                              466
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "range": [
                                    463,
                                    465
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 67,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 65,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  463,
                                  465
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 18
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 18
                              },
                              "start": {
                                "column": 64,
                                "line": 18
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "range": [
                              455,
                              462
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 18
                              },
                              "start": {
                                "column": 57,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            455,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 18
                            },
                            "start": {
                              "column": 57,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              476,
                              480
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "range": [
                                    477,
                                    479
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 79,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  477,
                                  479
                                ],
                                "loc": {
                                  "end": {
                                    "column": 81,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 79,
                                    "line": 18
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 18
                              },
                              "start": {
                                "column": 78,
                                "line": 18
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "range": [
                              469,
                              476
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 18
                              },
                              "start": {
                                "column": 71,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            469,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 18
                            },
                            "start": {
                              "column": 71,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        455,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 18
                        },
                        "start": {
                          "column": 57,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    448,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 18
                    },
                    "start": {
                      "column": 50,
                      "line": 18
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 18
                  },
                  "start": {
                    "column": 84,
                    "line": 18
                  }
                },
                "range": [
                  482,
                  489
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    485,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 18
                    },
                    "start": {
                      "column": 87,
                      "line": 18
                    }
                  }
                }
              },
              "range": [
                447,
                489
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 18
                },
                "start": {
                  "column": 49,
                  "line": 18
                }
              }
            }
          },
          "range": [
            443,
            489
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 18
            },
            "start": {
              "column": 45,
              "line": 18
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 98,
            "line": 18
          },
          "start": {
            "column": 92,
            "line": 18
          }
        },
        "range": [
          490,
          496
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            492,
            496
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 18
            },
            "start": {
              "column": 94,
              "line": 18
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 18
          },
          "start": {
            "column": 22,
            "line": 18
          }
        },
        "range": [
          420,
          428
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "range": [
                421,
                423
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 18
                },
                "start": {
                  "column": 23,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              421,
              423
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 18
              },
              "start": {
                "column": 23,
                "line": 18
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
              "name": "T2",
              "optional": false,
              "range": [
                425,
                427
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 18
                },
                "start": {
                  "column": 27,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              425,
              427
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 18
              },
              "start": {
                "column": 27,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        398,
        497
      ],
      "loc": {
        "end": {
          "column": 99,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    507,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      513,
                      516
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 14,
                        "line": 20
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "range": [
                        520,
                        525
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 20
                        },
                        "start": {
                          "column": 21,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      520,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 21,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    513,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                },
                "range": [
                  507,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              505,
              527
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    531,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 20
                    },
                    "start": {
                      "column": 32,
                      "line": 20
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "'b'",
                    "value": "b",
                    "range": [
                      537,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 20
                      },
                      "start": {
                        "column": 38,
                        "line": 20
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "range": [
                        544,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 20
                        },
                        "start": {
                          "column": 45,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      544,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 20
                      },
                      "start": {
                        "column": 45,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    537,
                    549
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 20
                    },
                    "start": {
                      "column": 38,
                      "line": 20
                    }
                  }
                },
                "range": [
                  531,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              529,
              551
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 20
              },
              "start": {
                "column": 30,
                "line": 20
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "range": [
                            620,
                            625
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
                        "range": [
                          620,
                          626
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
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
                      614,
                      630
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "range": [
                            598,
                            603
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 22
                            },
                            "start": {
                              "column": 4,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          598,
                          604
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 22
                          },
                          "start": {
                            "column": 4,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "range": [
                      592,
                      608
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 23
                      },
                      "start": {
                        "column": 26,
                        "line": 21
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "range": [
                          572,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 21
                          },
                          "start": {
                            "column": 6,
                            "line": 21
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          578,
                          582
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        572,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 21
                        },
                        "start": {
                          "column": 6,
                          "line": 21
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        587,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 21
                        },
                        "start": {
                          "column": 21,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      572,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 21
                      },
                      "start": {
                        "column": 6,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    568,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 25
                    },
                    "start": {
                      "column": 2,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                564,
                632
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 26
                },
                "start": {
                  "column": 65,
                  "line": 20
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  554,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 20
                  },
                  "start": {
                    "column": 55,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              553,
              632
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 54,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "range": [
            499,
            504
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          499,
          633
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        499,
        634
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
