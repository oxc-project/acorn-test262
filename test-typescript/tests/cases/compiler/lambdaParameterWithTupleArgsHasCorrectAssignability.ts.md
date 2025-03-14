__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    587
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTupleItem",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "range": [
          19,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
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
        "name": "MyTuple",
        "optional": false,
        "range": [
          28,
          35
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyTupleItem",
              "optional": false,
              "range": [
                39,
                50
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              39,
              50
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyTupleItem",
                  "optional": false,
                  "range": [
                    55,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 2
                    },
                    "start": {
                      "column": 32,
                      "line": 2
                    }
                  }
                },
                "range": [
                  55,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 2
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              },
              "range": [
                55,
                68
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            },
            "range": [
              52,
              68
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          }
        ],
        "range": [
          38,
          69
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "range": [
        23,
        70
      ],
      "loc": {
        "end": {
          "column": 47,
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
        "name": "GenericFunction",
        "optional": false,
        "range": [
          77,
          92
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "fromArgs",
              "optional": false,
              "range": [
                118,
                126
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 46,
                  "line": 4
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 4
                },
                "start": {
                  "column": 54,
                  "line": 4
                }
              },
              "range": [
                126,
                129
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    128,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 4
                    },
                    "start": {
                      "column": 56,
                      "line": 4
                    }
                  }
                },
                "range": [
                  128,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 4
                  },
                  "start": {
                    "column": 56,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              115,
              129
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 4
              },
              "start": {
                "column": 43,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 66,
              "line": 4
            },
            "start": {
              "column": 59,
              "line": 4
            }
          },
          "range": [
            131,
            138
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              134,
              138
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 4
              },
              "start": {
                "column": 62,
                "line": 4
              }
            }
          }
        },
        "range": [
          114,
          138
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 4
          },
          "start": {
            "column": 42,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 4
          }
        },
        "range": [
          92,
          111
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
                "name": "MyTuple",
                "optional": false,
                "range": [
                  103,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 4
                  }
                }
              },
              "range": [
                103,
                110
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
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
                93,
                94
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              93,
              110
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        72,
        139
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          179,
          224
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
              "name": "from",
              "optional": false,
              "range": [
                185,
                189
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 40,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              },
              "range": [
                189,
                221
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        206,
                        209
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
                              207,
                              208
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 7
                              },
                              "start": {
                                "column": 26,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            207,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 26,
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
                          "column": 25,
                          "line": 7
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GenericFunction",
                      "optional": false,
                      "range": [
                        191,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      191,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      212,
                      221
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
                  191,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              185,
              222
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 38,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericClass",
        "optional": false,
        "range": [
          147,
          159
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 6
          },
          "start": {
            "column": 18,
            "line": 6
          }
        },
        "range": [
          159,
          178
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
                "name": "MyTuple",
                "optional": false,
                "range": [
                  170,
                  177
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
                170,
                177
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                160,
                161
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              160,
              177
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
          }
        ]
      },
      "range": [
        141,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericClass",
                "optional": false,
                "range": [
                  323,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  335,
                  338
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
                        336,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 28,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      336,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 28,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "range": [
                319,
                355
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              312,
              356
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          306,
          358
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 80,
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
        "name": "createClass",
        "optional": false,
        "range": [
          235,
          246
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 10
              },
              "start": {
                "column": 41,
                "line": 10
              }
            },
            "range": [
              267,
              287
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  284,
                  287
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
                        285,
                        286
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 10
                        },
                        "start": {
                          "column": 59,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      285,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 10
                      },
                      "start": {
                        "column": 59,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 10
                  },
                  "start": {
                    "column": 58,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericFunction",
                "optional": false,
                "range": [
                  269,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 10
                  },
                  "start": {
                    "column": 43,
                    "line": 10
                  }
                }
              },
              "range": [
                269,
                287
              ],
              "loc": {
                "end": {
                  "column": 61,
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
            266,
            287
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 10
            },
            "start": {
              "column": 40,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 79,
            "line": 10
          },
          "start": {
            "column": 62,
            "line": 10
          }
        },
        "range": [
          288,
          305
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              302,
              305
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
                    303,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 10
                    },
                    "start": {
                      "column": 77,
                      "line": 10
                    }
                  }
                },
                "range": [
                  303,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 10
                  },
                  "start": {
                    "column": 77,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 10
              },
              "start": {
                "column": 76,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GenericClass",
            "optional": false,
            "range": [
              290,
              302
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 10
              },
              "start": {
                "column": 64,
                "line": 10
              }
            }
          },
          "range": [
            290,
            305
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 10
            },
            "start": {
              "column": 64,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 10
          }
        },
        "range": [
          246,
          265
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
                "name": "MyTuple",
                "optional": false,
                "range": [
                  257,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 10
                  }
                }
              },
              "range": [
                257,
                264
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 31,
                  "line": 10
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
                247,
                248
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
              247,
              264
            ],
            "loc": {
              "end": {
                "column": 38,
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
        226,
        358
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          418,
          421
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 14
          },
          "start": {
            "column": 58,
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
        "name": "consumeClass",
        "optional": false,
        "range": [
          369,
          381
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            },
            "range": [
              383,
              416
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  397,
                  416
                ],
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          399,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 14
                          },
                          "start": {
                            "column": 39,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          407,
                          414
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 14
                          },
                          "start": {
                            "column": 47,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      398,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 14
                      },
                      "start": {
                        "column": 38,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 14
                  },
                  "start": {
                    "column": 37,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericClass",
                "optional": false,
                "range": [
                  385,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "range": [
                385,
                416
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              }
            }
          },
          "range": [
            382,
            416
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 14
            },
            "start": {
              "column": 22,
              "line": 14
            }
          }
        }
      ],
      "range": [
        360,
        421
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "range": [
                          482,
                          485
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 17
                          },
                          "start": {
                            "column": 44,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          486,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 17
                          },
                          "start": {
                            "column": 48,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        482,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 17
                        },
                        "start": {
                          "column": 44,
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
                      "name": "console",
                      "optional": false,
                      "range": [
                        470,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 17
                        },
                        "start": {
                          "column": 32,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        478,
                        481
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 17
                        },
                        "start": {
                          "column": 40,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      470,
                      481
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 17
                      },
                      "start": {
                        "column": 32,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    470,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 17
                    },
                    "start": {
                      "column": 32,
                      "line": 17
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
                    "name": "str",
                    "optional": false,
                    "range": [
                      463,
                      466
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 17
                      },
                      "start": {
                        "column": 25,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  463,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 17
                  },
                  "start": {
                    "column": 25,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createClass",
              "optional": false,
              "range": [
                451,
                462
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              451,
              494
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 17
              },
              "start": {
                "column": 13,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "consumeClass",
          "optional": false,
          "range": [
            438,
            450
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          438,
          495
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        438,
        496
      ],
      "loc": {
        "end": {
          "column": 58,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "range": [
                          572,
                          575
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 20
                          },
                          "start": {
                            "column": 59,
                            "line": 20
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          576,
                          582
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 20
                          },
                          "start": {
                            "column": 63,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        572,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 20
                        },
                        "start": {
                          "column": 59,
                          "line": 20
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
                      "name": "console",
                      "optional": false,
                      "range": [
                        560,
                        567
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 20
                        },
                        "start": {
                          "column": 47,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        568,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 20
                        },
                        "start": {
                          "column": 55,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      560,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 20
                      },
                      "start": {
                        "column": 47,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    560,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 20
                    },
                    "start": {
                      "column": 47,
                      "line": 20
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
                    "name": "str",
                    "optional": false,
                    "range": [
                      539,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 26,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_unused_num",
                    "optional": false,
                    "range": [
                      544,
                      555
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 20
                      },
                      "start": {
                        "column": 31,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  538,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 20
                  },
                  "start": {
                    "column": 25,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createClass",
              "optional": false,
              "range": [
                526,
                537
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              526,
              584
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 20
              },
              "start": {
                "column": 13,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "consumeClass",
          "optional": false,
          "range": [
            513,
            525
          ],
          "loc": {
            "end": {
              "column": 12,
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
          513,
          585
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        513,
        586
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 20
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
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
