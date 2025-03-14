__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    497
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          24,
          59
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "comparer",
              "optional": false,
              "range": [
                30,
                38
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  },
                  "range": [
                    44,
                    47
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        46,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 20,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      46,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  39,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              },
              "range": [
                48,
                56
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  50,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              30,
              57
            ],
            "loc": {
              "end": {
                "column": 31,
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
        "name": "Comparable",
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
        59
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      168,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 6
                      },
                      "start": {
                        "column": 43,
                        "line": 6
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    167,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 6
                    },
                    "start": {
                      "column": 42,
                      "line": 6
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    163,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 38,
                      "line": 6
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      151,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      156,
                      160
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
                    151,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
                    }
                  }
                },
                "range": [
                  151,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "range": [
                144,
                170
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  133,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  138,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                }
              },
              "range": [
                133,
                142
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              129,
              170
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  197,
                  198
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
                190,
                199
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  179,
                  180
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
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  184,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              "range": [
                179,
                188
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "range": [
              175,
              199
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    222,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 22,
                      "line": 8
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    211,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comparer",
                  "optional": false,
                  "range": [
                    213,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                "range": [
                  211,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                211,
                224
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              204,
              225
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          123,
          227
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 62,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compare",
        "optional": false,
        "range": [
          70,
          77
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
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
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 43,
                "line": 5
              }
            },
            "range": [
              104,
              107
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  106,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 5
                  },
                  "start": {
                    "column": 45,
                    "line": 5
                  }
                }
              },
              "range": [
                106,
                107
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 45,
                  "line": 5
                }
              }
            }
          },
          "range": [
            103,
            107
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 5
            },
            "start": {
              "column": 42,
              "line": 5
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 5
              },
              "start": {
                "column": 49,
                "line": 5
              }
            },
            "range": [
              110,
              113
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  112,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 5
                  },
                  "start": {
                    "column": 51,
                    "line": 5
                  }
                }
              },
              "range": [
                112,
                113
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 5
                },
                "start": {
                  "column": 51,
                  "line": 5
                }
              }
            }
          },
          "range": [
            109,
            113
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 5
            },
            "start": {
              "column": 48,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 5
          },
          "start": {
            "column": 53,
            "line": 5
          }
        },
        "range": [
          114,
          122
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            116,
            122
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 5
            },
            "start": {
              "column": 55,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        },
        "range": [
          77,
          102
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
                          "column": 39,
                          "line": 5
                        },
                        "start": {
                          "column": 38,
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
                        "column": 39,
                        "line": 5
                      },
                      "start": {
                        "column": 38,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Comparable",
                "optional": false,
                "range": [
                  88,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
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
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
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
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              78,
              101
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 5
              },
              "start": {
                "column": 17,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        61,
        227
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          281,
          385
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                287,
                298
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                298,
                331
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  328,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 12
                  },
                  "start": {
                    "column": 45,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currentValue",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 12
                        },
                        "start": {
                          "column": 35,
                          "line": 12
                        }
                      },
                      "range": [
                        318,
                        326
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          320,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 37,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      306,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 12
                      },
                      "start": {
                        "column": 23,
                        "line": 12
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    299,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              287,
              331
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "localeCompare",
              "optional": false,
              "range": [
                337,
                350
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                350,
                383
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        375,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      368,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  358,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "range": [
                    351,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              }
            },
            "range": [
              337,
              383
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 52,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComparableString",
        "optional": false,
        "range": [
          235,
          251
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Comparable",
            "optional": false,
            "range": [
              263,
              273
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 11
              },
              "start": {
                "column": 34,
                "line": 11
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              273,
              281
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  274,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 11
                  },
                  "start": {
                    "column": 45,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 11
              },
              "start": {
                "column": 44,
                "line": 11
              }
            }
          },
          "range": [
            263,
            281
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 11
            },
            "start": {
              "column": 34,
              "line": 11
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        229,
        385
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 11
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
            "range": [
              391,
              392
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  416,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 19
                  },
                  "start": {
                    "column": 29,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComparableString",
              "optional": false,
              "range": [
                399,
                415
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            },
            "range": [
              395,
              420
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            391,
            420
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        387,
        421
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
              426,
              427
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"b\"",
                "value": "b",
                "range": [
                  451,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 20
                  },
                  "start": {
                    "column": 29,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComparableString",
              "optional": false,
              "range": [
                434,
                450
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "range": [
              430,
              455
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            426,
            455
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        422,
        456
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "c",
            "optional": false,
            "range": [
              461,
              462
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  491,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 21
                  },
                  "start": {
                    "column": 34,
                    "line": 21
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  494,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 37,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "compare",
              "optional": false,
              "range": [
                465,
                472
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                472,
                490
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComparableString",
                    "optional": false,
                    "range": [
                      473,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    473,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 21
                }
              }
            },
            "range": [
              465,
              496
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            461,
            496
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        457,
        497
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 40,
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
