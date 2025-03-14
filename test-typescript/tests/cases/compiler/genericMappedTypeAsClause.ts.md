__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    803
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                20,
                28
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  22,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              19,
              29
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
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
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                35,
                43
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  37,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              34,
              44
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          13,
          46
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 4
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
        "name": "MappedModel",
        "optional": false,
        "range": [
          54,
          65
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
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "range": [
                109,
                114
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "range": [
              109,
              114
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            103,
            114
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 7
            },
            "start": {
              "column": 10,
              "line": 7
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            98,
            99
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
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                118,
                121
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
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                122,
                125
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                131,
                133
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 7
                },
                "start": {
                  "column": 38,
                  "line": 7
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  121,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              },
              "range": [
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Suffix",
                "optional": false,
                "range": [
                  125,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              },
              "range": [
                125,
                131
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            118,
            133
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 7
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        },
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
                142,
                143
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 7
                },
                "start": {
                  "column": 49,
                  "line": 7
                }
              }
            },
            "range": [
              142,
              143
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 7
              },
              "start": {
                "column": 49,
                "line": 7
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "range": [
                136,
                141
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 7
                },
                "start": {
                  "column": 43,
                  "line": 7
                }
              }
            },
            "range": [
              136,
              141
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 7
              },
              "start": {
                "column": 43,
                "line": 7
              }
            }
          },
          "range": [
            136,
            144
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 7
            },
            "start": {
              "column": 43,
              "line": 7
            }
          }
        },
        "range": [
          91,
          147
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 42,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 6
          },
          "start": {
            "column": 16,
            "line": 6
          }
        },
        "range": [
          65,
          88
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                81,
                87
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Suffix",
              "optional": false,
              "range": [
                66,
                72
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              66,
              87
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        49,
        148
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              },
              "range": [
                160,
                180
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    173,
                    180
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'Foo'",
                        "value": "Foo",
                        "range": [
                          174,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 10
                          },
                          "start": {
                            "column": 24,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        174,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 24,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedModel",
                  "optional": false,
                  "range": [
                    162,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "range": [
                  162,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              156,
              180
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aFoo",
                  "optional": false,
                  "range": [
                    185,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'test'",
                  "value": "test",
                  "range": [
                    191,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 10
                    },
                    "start": {
                      "column": 41,
                      "line": 10
                    }
                  }
                },
                "range": [
                  185,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bFoo",
                  "optional": false,
                  "range": [
                    199,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 10
                    },
                    "start": {
                      "column": 49,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    205,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 10
                    },
                    "start": {
                      "column": 55,
                      "line": 10
                    }
                  }
                },
                "range": [
                  199,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 10
                  },
                  "start": {
                    "column": 49,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              183,
              209
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 10
              },
              "start": {
                "column": 33,
                "line": 10
              }
            }
          },
          "range": [
            156,
            209
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        150,
        210
      ],
      "loc": {
        "end": {
          "column": 60,
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              },
              "range": [
                221,
                241
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    234,
                    241
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'Foo'",
                        "value": "Foo",
                        "range": [
                          235,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 11
                          },
                          "start": {
                            "column": 24,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        235,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 24,
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
                      "column": 23,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedModel",
                  "optional": false,
                  "range": [
                    223,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                },
                "range": [
                  223,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              217,
              241
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bFoo",
                  "optional": false,
                  "range": [
                    246,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 11
                    },
                    "start": {
                      "column": 35,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'bar'",
                  "value": "bar",
                  "range": [
                    252,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 11
                    },
                    "start": {
                      "column": 41,
                      "line": 11
                    }
                  }
                },
                "range": [
                  246,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              244,
              259
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 11
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          },
          "range": [
            217,
            259
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        211,
        260
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    },
                    "range": [
                      318,
                      334
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          331,
                          334
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
                                332,
                                333
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
                            },
                            "range": [
                              332,
                              333
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
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 14
                          },
                          "start": {
                            "column": 25,
                            "line": 14
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "range": [
                          320,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        320,
                        334
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    316,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    337,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 14
                    },
                    "start": {
                      "column": 31,
                      "line": 14
                    }
                  }
                },
                "range": [
                  316,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              310,
              340
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 14
              },
              "start": {
                "column": 4,
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 15
                      }
                    },
                    "range": [
                      363,
                      379
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          376,
                          379
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
                                377,
                                378
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 15
                                },
                                "start": {
                                  "column": 26,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              377,
                              378
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 15
                              },
                              "start": {
                                "column": 26,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 15
                          },
                          "start": {
                            "column": 25,
                            "line": 15
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "range": [
                          365,
                          376
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 15
                          },
                          "start": {
                            "column": 14,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        365,
                        379
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    361,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "'test'",
                  "value": "test",
                  "range": [
                    382,
                    388
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
                  361,
                  388
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
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              355,
              389
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    },
                    "range": [
                      412,
                      428
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          425,
                          428
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
                                426,
                                427
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 16
                                },
                                "start": {
                                  "column": 26,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              426,
                              427
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 16
                              },
                              "start": {
                                "column": 26,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 16
                          },
                          "start": {
                            "column": 25,
                            "line": 16
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "range": [
                          414,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 16
                          },
                          "start": {
                            "column": 14,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        414,
                        428
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    410,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        432,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 16
                        },
                        "start": {
                          "column": 32,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        435,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 16
                        },
                        "start": {
                          "column": 35,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        438,
                        439
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 16
                        },
                        "start": {
                          "column": 38,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    431,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 16
                    },
                    "start": {
                      "column": 31,
                      "line": 16
                    }
                  }
                },
                "range": [
                  410,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              404,
              441
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 16
              },
              "start": {
                "column": 4,
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    },
                    "range": [
                      464,
                      480
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          477,
                          480
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
                                478,
                                479
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 17
                                },
                                "start": {
                                  "column": 26,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              478,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 17
                              },
                              "start": {
                                "column": 26,
                                "line": 17
                              }
                            }
                          }
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "range": [
                          466,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        466,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    462,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    483,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 17
                    },
                    "start": {
                      "column": 31,
                      "line": 17
                    }
                  }
                },
                "range": [
                  462,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
              456,
              489
            ],
            "loc": {
              "end": {
                "column": 37,
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
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    },
                    "range": [
                      512,
                      528
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          525,
                          528
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
                                526,
                                527
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 18
                                },
                                "start": {
                                  "column": 26,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              526,
                              527
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 18
                              },
                              "start": {
                                "column": 26,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 18
                          },
                          "start": {
                            "column": 25,
                            "line": 18
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "range": [
                          514,
                          525
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 18
                          },
                          "start": {
                            "column": 14,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        514,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
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
                    510,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          533,
                          534
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 18
                          },
                          "start": {
                            "column": 33,
                            "line": 18
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "'bar'",
                        "value": "bar",
                        "range": [
                          536,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 18
                          },
                          "start": {
                            "column": 36,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        533,
                        541
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 18
                        },
                        "start": {
                          "column": 33,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          543,
                          544
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 18
                          },
                          "start": {
                            "column": 43,
                            "line": 18
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "42",
                        "value": 42,
                        "range": [
                          546,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 18
                          },
                          "start": {
                            "column": 46,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        543,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
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
                    531,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 18
                    },
                    "start": {
                      "column": 31,
                      "line": 18
                    }
                  }
                },
                "range": [
                  510,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 50,
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
              504,
              551
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
                      }
                    },
                    "range": [
                      574,
                      590
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          587,
                          590
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
                                588,
                                589
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 19
                                },
                                "start": {
                                  "column": 26,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              588,
                              589
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
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
                            "column": 28,
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
                        "name": "MappedModel",
                        "optional": false,
                        "range": [
                          576,
                          587
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 14,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        576,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    572,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    593,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 19
                    },
                    "start": {
                      "column": 31,
                      "line": 19
                    }
                  }
                },
                "range": [
                  572,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              566,
              603
            ],
            "loc": {
              "end": {
                "column": 41,
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
          304,
          615
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 32,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          281,
          283
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 13
          }
        },
        "range": [
          283,
          301
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                294,
                300
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 22,
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
                284,
                285
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              284,
              300
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        272,
        615
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
        "name": "RemapRecord",
        "optional": false,
        "range": [
          644,
          655
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSNeverKeyword",
          "range": [
            690,
            695
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 24
            },
            "start": {
              "column": 51,
              "line": 24
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "range": [
            685,
            686
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 24
            },
            "start": {
              "column": 46,
              "line": 24
            }
          }
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              699,
              700
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 24
              },
              "start": {
                "column": 60,
                "line": 24
              }
            }
          },
          "range": [
            699,
            700
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 24
            },
            "start": {
              "column": 60,
              "line": 24
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "range": [
              703,
              704
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 24
              },
              "start": {
                "column": 64,
                "line": 24
              }
            }
          },
          "range": [
            703,
            704
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 24
            },
            "start": {
              "column": 64,
              "line": 24
            }
          }
        },
        "range": [
          682,
          706
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 24
          },
          "start": {
            "column": 43,
            "line": 24
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 24
          },
          "start": {
            "column": 16,
            "line": 24
          }
        },
        "range": [
          655,
          679
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  672,
                  675
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 33,
                    "line": 24
                  }
                }
              },
              "range": [
                666,
                675
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
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
                656,
                657
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 17,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              656,
              675
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 24
              },
              "start": {
                "column": 17,
                "line": 24
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
              "name": "V",
              "optional": false,
              "range": [
                677,
                678
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 24
                },
                "start": {
                  "column": 38,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              677,
              678
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 24
              },
              "start": {
                "column": 38,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        639,
        706
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          784,
          786
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 79,
            "line": 25
          },
          "start": {
            "column": 77,
            "line": 25
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemapRecord",
            "optional": false,
            "range": [
              766,
              777
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 25
              },
              "start": {
                "column": 59,
                "line": 25
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              777,
              783
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    778,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 25
                    },
                    "start": {
                      "column": 71,
                      "line": 25
                    }
                  }
                },
                "range": [
                  778,
                  779
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 25
                  },
                  "start": {
                    "column": 71,
                    "line": 25
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    781,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 25
                    },
                    "start": {
                      "column": 74,
                      "line": 25
                    }
                  }
                },
                "range": [
                  781,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 25
                  },
                  "start": {
                    "column": 74,
                    "line": 25
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 25
              },
              "start": {
                "column": 70,
                "line": 25
              }
            }
          },
          "range": [
            766,
            783
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 25
            },
            "start": {
              "column": 59,
              "line": 25
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordInterface2",
        "optional": false,
        "range": [
          717,
          733
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 25
          },
          "start": {
            "column": 10,
            "line": 25
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 50,
            "line": 25
          },
          "start": {
            "column": 26,
            "line": 25
          }
        },
        "range": [
          733,
          757
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  750,
                  753
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 25
                  },
                  "start": {
                    "column": 43,
                    "line": 25
                  }
                }
              },
              "range": [
                744,
                753
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 25
                },
                "start": {
                  "column": 37,
                  "line": 25
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
                734,
                735
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 25
                },
                "start": {
                  "column": 27,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              734,
              753
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 25
              },
              "start": {
                "column": 27,
                "line": 25
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
              "name": "V",
              "optional": false,
              "range": [
                755,
                756
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 25
                },
                "start": {
                  "column": 48,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              755,
              756
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 25
              },
              "start": {
                "column": 48,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        707,
        786
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 25
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
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
