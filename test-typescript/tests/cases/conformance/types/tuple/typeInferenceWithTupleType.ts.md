__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    925
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    57,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    60,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                56,
                62
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              49,
              63
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          43,
          65
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 43,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "combine",
        "optional": false,
        "range": [
          9,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
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
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            },
            "range": [
              24,
              27
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          },
          "range": [
            23,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
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
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            },
            "range": [
              30,
              33
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  32,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            }
          },
          "range": [
            29,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 34,
            "line": 1
          }
        },
        "range": [
          34,
          42
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
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
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                }
              },
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  40,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 40,
                    "line": 1
                  }
                }
              },
              "range": [
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            36,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          22
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
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
              "name": "U",
              "optional": false,
              "range": [
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              20,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        65
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "combineResult",
            "optional": false,
            "range": [
              71,
              84
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  95,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 28,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  105,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combine",
              "optional": false,
              "range": [
                87,
                94
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              87,
              108
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            71,
            108
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        67,
        109
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "combineEle1",
            "optional": false,
            "range": [
              114,
              125
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "range": [
                128,
                141
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                142,
                143
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            },
            "range": [
              128,
              144
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 18,
                "line": 6
              }
            }
          },
          "range": [
            114,
            144
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        110,
        145
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "combineEle2",
            "optional": false,
            "range": [
              160,
              171
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "range": [
                174,
                187
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                188,
                189
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            },
            "range": [
              174,
              190
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          "range": [
            160,
            190
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        156,
        191
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              319,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 11
                              },
                              "start": {
                                "column": 17,
                                "line": 11
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              330,
                              339
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 11
                              },
                              "start": {
                                "column": 28,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "range": [
                          318,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      317,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    310,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                300,
                348
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 40,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "range": [
                    268,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
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
                    275,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                },
                "range": [
                  268,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array2",
                  "optional": false,
                  "range": [
                    285,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
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
                    292,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 10
                    },
                    "start": {
                      "column": 32,
                      "line": 10
                    }
                  }
                },
                "range": [
                  285,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 25,
                    "line": 10
                  }
                }
              },
              "range": [
                268,
                298
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              264,
              348
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "name": "length",
                  "optional": false,
                  "range": [
                    357,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "range": [
                      366,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 13
                      },
                      "start": {
                        "column": 17,
                        "line": 13
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
                      373,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 13
                      },
                      "start": {
                        "column": 24,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    366,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 17,
                      "line": 13
                    }
                  }
                },
                "range": [
                  357,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              353,
              380
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                  "name": "zipResult",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 17,
                        "line": 14
                      }
                    },
                    "range": [
                      398,
                      408
                    ],
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  402,
                                  403
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                402,
                                403
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 14
                                },
                                "start": {
                                  "column": 21,
                                  "line": 14
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  405,
                                  406
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                405,
                                406
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 24,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "range": [
                            401,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
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
                        400,
                        408
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    389,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": null,
                "range": [
                  389,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              385,
              409
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array1",
                              "optional": false,
                              "range": [
                                473,
                                479
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 16
                                },
                                "start": {
                                  "column": 24,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "range": [
                                480,
                                481
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 16
                                },
                                "start": {
                                  "column": 31,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              473,
                              482
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 16
                              },
                              "start": {
                                "column": 24,
                                "line": 16
                              }
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array2",
                              "optional": false,
                              "range": [
                                484,
                                490
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 16
                                },
                                "start": {
                                  "column": 35,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "range": [
                                491,
                                492
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 16
                                },
                                "start": {
                                  "column": 42,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              484,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 16
                              },
                              "start": {
                                "column": 35,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          472,
                          494
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 16
                          },
                          "start": {
                            "column": 23,
                            "line": 16
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
                        "name": "zipResult",
                        "optional": false,
                        "range": [
                          457,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
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
                          467,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 16
                          },
                          "start": {
                            "column": 18,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        457,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      457,
                      495
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    457,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                447,
                502
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 37,
                  "line": 15
                }
              }
            },
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      423,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      427,
                      428
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 15
                      },
                      "start": {
                        "column": 17,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    423,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                419,
                428
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  430,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  434,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 24,
                    "line": 15
                  }
                }
              },
              "range": [
                430,
                440
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  444,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 15
                  },
                  "start": {
                    "column": 34,
                    "line": 15
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                442,
                445
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 15
                },
                "start": {
                  "column": 32,
                  "line": 15
                }
              }
            },
            "range": [
              414,
              502
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "range": [
                514,
                523
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              507,
              524
            ],
            "loc": {
              "end": {
                "column": 21,
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
          258,
          526
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 55,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "zip",
        "optional": false,
        "range": [
          212,
          215
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 25,
                "line": 9
              }
            },
            "range": [
              228,
              233
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
                    230,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 9
                    }
                  }
                },
                "range": [
                  230,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                }
              },
              "range": [
                230,
                233
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              }
            }
          },
          "range": [
            222,
            233
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 38,
                "line": 9
              }
            },
            "range": [
              241,
              246
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    243,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 9
                    },
                    "start": {
                      "column": 40,
                      "line": 9
                    }
                  }
                },
                "range": [
                  243,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 40,
                    "line": 9
                  }
                }
              },
              "range": [
                243,
                246
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 40,
                  "line": 9
                }
              }
            }
          },
          "range": [
            235,
            246
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 9
            },
            "start": {
              "column": 32,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 9
          },
          "start": {
            "column": 44,
            "line": 9
          }
        },
        "range": [
          247,
          257
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      251,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 9
                      },
                      "start": {
                        "column": 48,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    251,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 9
                    },
                    "start": {
                      "column": 48,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      254,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 9
                      },
                      "start": {
                        "column": 51,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    254,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 9
                    },
                    "start": {
                      "column": 51,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                250,
                256
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 9
                },
                "start": {
                  "column": 47,
                  "line": 9
                }
              }
            }
          ],
          "range": [
            249,
            257
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 9
            },
            "start": {
              "column": 46,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 12,
            "line": 9
          }
        },
        "range": [
          215,
          221
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
                216,
                217
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              216,
              217
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
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
              "name": "U",
              "optional": false,
              "range": [
                219,
                220
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              219,
              220
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        203,
        526
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
            "name": "zipResult",
            "optional": false,
            "range": [
              532,
              541
            ],
            "loc": {
              "end": {
                "column": 13,
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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      549,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      556,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 21
                      },
                      "start": {
                        "column": 28,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  548,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 21
                  },
                  "start": {
                    "column": 20,
                    "line": 21
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      565,
                      566
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
                  },
                  {
                    "type": "Literal",
                    "raw": "6",
                    "value": 6,
                    "range": [
                      568,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 21
                      },
                      "start": {
                        "column": 40,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  564,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 21
                  },
                  "start": {
                    "column": 36,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "range": [
                544,
                547
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              544,
              571
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 21
              },
              "start": {
                "column": 16,
                "line": 21
              }
            }
          },
          "range": [
            532,
            571
          ],
          "loc": {
            "end": {
              "column": 43,
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
        528,
        572
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "zipResultEle",
            "optional": false,
            "range": [
              577,
              589
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "range": [
                592,
                601
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 22
                },
                "start": {
                  "column": 19,
                  "line": 22
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                602,
                603
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 22
                },
                "start": {
                  "column": 29,
                  "line": 22
                }
              }
            },
            "range": [
              592,
              604
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 22
              },
              "start": {
                "column": 19,
                "line": 22
              }
            }
          },
          "range": [
            577,
            604
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        573,
        605
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "zipResultEleEle",
            "optional": false,
            "range": [
              630,
              645
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "zipResult",
                "optional": false,
                "range": [
                  648,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 23
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  658,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 23
                  },
                  "start": {
                    "column": 32,
                    "line": 23
                  }
                }
              },
              "range": [
                648,
                660
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 23
                },
                "start": {
                  "column": 22,
                  "line": 23
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                661,
                662
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 35,
                  "line": 23
                }
              }
            },
            "range": [
              648,
              663
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 23
              },
              "start": {
                "column": 22,
                "line": 23
              }
            }
          },
          "range": [
            630,
            663
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        626,
        664
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
        "name": "f1",
        "optional": false,
        "range": [
          715,
          717
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 27
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 27
              },
              "start": {
                "column": 34,
                "line": 27
              }
            },
            "range": [
              732,
              746
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "range": [
                        735,
                        737
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 27
                        },
                        "start": {
                          "column": 37,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      735,
                      737
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 27
                      },
                      "start": {
                        "column": 37,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    735,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 27
                    },
                    "start": {
                      "column": 37,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "range": [
                        741,
                        743
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 27
                        },
                        "start": {
                          "column": 43,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      741,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 27
                      },
                      "start": {
                        "column": 43,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    741,
                    745
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 27
                    },
                    "start": {
                      "column": 43,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                734,
                746
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 27
                },
                "start": {
                  "column": 36,
                  "line": 27
                }
              }
            }
          },
          "range": [
            726,
            746
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 27
            },
            "start": {
              "column": 28,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 27
          },
          "start": {
            "column": 49,
            "line": 27
          }
        },
        "range": [
          747,
          751
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "range": [
              749,
              751
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 27
              },
              "start": {
                "column": 51,
                "line": 27
              }
            }
          },
          "range": [
            749,
            751
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 27
            },
            "start": {
              "column": 51,
              "line": 27
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 27
          },
          "start": {
            "column": 19,
            "line": 27
          }
        },
        "range": [
          717,
          725
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
                718,
                720
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 27
                },
                "start": {
                  "column": 20,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              718,
              720
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 27
              },
              "start": {
                "column": 20,
                "line": 27
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
                722,
                724
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 27
                },
                "start": {
                  "column": 24,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              722,
              724
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 27
              },
              "start": {
                "column": 24,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        698,
        752
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
        "name": "f2",
        "optional": false,
        "range": [
          770,
          772
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 28
              },
              "start": {
                "column": 34,
                "line": 28
              }
            },
            "range": [
              787,
              810
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "range": [
                          799,
                          801
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 28
                          },
                          "start": {
                            "column": 46,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        799,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 28
                        },
                        "start": {
                          "column": 46,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      799,
                      803
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 28
                      },
                      "start": {
                        "column": 46,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "range": [
                          805,
                          807
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 28
                          },
                          "start": {
                            "column": 52,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        805,
                        807
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 28
                        },
                        "start": {
                          "column": 52,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      805,
                      809
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 28
                      },
                      "start": {
                        "column": 52,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  798,
                  810
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 28
                  },
                  "start": {
                    "column": 45,
                    "line": 28
                  }
                }
              },
              "range": [
                789,
                810
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
                }
              }
            }
          },
          "range": [
            781,
            810
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 28
            },
            "start": {
              "column": 28,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 28
          },
          "start": {
            "column": 58,
            "line": 28
          }
        },
        "range": [
          811,
          815
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "range": [
              813,
              815
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 28
              },
              "start": {
                "column": 60,
                "line": 28
              }
            }
          },
          "range": [
            813,
            815
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 28
            },
            "start": {
              "column": 60,
              "line": 28
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 28
          },
          "start": {
            "column": 19,
            "line": 28
          }
        },
        "range": [
          772,
          780
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
                773,
                775
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              773,
              775
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 28
              },
              "start": {
                "column": 20,
                "line": 28
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
                777,
                779
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 28
                },
                "start": {
                  "column": 24,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              777,
              779
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 28
              },
              "start": {
                "column": 24,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        753,
        816
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 28
        },
        "start": {
          "column": 0,
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
            "name": "expected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 30
                },
                "start": {
                  "column": 12,
                  "line": 30
                }
              },
              "range": [
                830,
                835
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    832,
                    835
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 30
                    },
                    "start": {
                      "column": 14,
                      "line": 30
                    }
                  }
                },
                "range": [
                  832,
                  835
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              822,
              835
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": null,
          "range": [
            822,
            835
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        818,
        836
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "range": [
            837,
            845
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  851,
                  860
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          865,
                          868
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 31
                          },
                          "start": {
                            "column": 28,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        865,
                        868
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 31
                        },
                        "start": {
                          "column": 28,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      865,
                      870
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 31
                      },
                      "start": {
                        "column": 28,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"b\"",
                        "value": "b",
                        "range": [
                          872,
                          875
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 31
                          },
                          "start": {
                            "column": 35,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        872,
                        875
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 31
                        },
                        "start": {
                          "column": 35,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      872,
                      877
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 31
                      },
                      "start": {
                        "column": 35,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  864,
                  878
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 31
                  },
                  "start": {
                    "column": 27,
                    "line": 31
                  }
                }
              },
              "range": [
                851,
                878
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 31
                },
                "start": {
                  "column": 14,
                  "line": 31
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "range": [
              848,
              850
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 31
              },
              "start": {
                "column": 11,
                "line": 31
              }
            }
          },
          "optional": false,
          "range": [
            848,
            879
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 31
            },
            "start": {
              "column": 11,
              "line": 31
            }
          }
        },
        "range": [
          837,
          879
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        837,
        880
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "range": [
            881,
            889
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  895,
                  904
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 32
                  },
                  "start": {
                    "column": 14,
                    "line": 32
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          909,
                          912
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 32
                          },
                          "start": {
                            "column": 28,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        909,
                        912
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 32
                        },
                        "start": {
                          "column": 28,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      909,
                      914
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 32
                      },
                      "start": {
                        "column": 28,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"b\"",
                        "value": "b",
                        "range": [
                          916,
                          919
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 32
                          },
                          "start": {
                            "column": 35,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        916,
                        919
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 32
                        },
                        "start": {
                          "column": 35,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      916,
                      921
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 32
                      },
                      "start": {
                        "column": 35,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  908,
                  922
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 32
                  },
                  "start": {
                    "column": 27,
                    "line": 32
                  }
                }
              },
              "range": [
                895,
                922
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 32
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "range": [
              892,
              894
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 32
              },
              "start": {
                "column": 11,
                "line": 32
              }
            }
          },
          "optional": false,
          "range": [
            892,
            923
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 32
            },
            "start": {
              "column": 11,
              "line": 32
            }
          }
        },
        "range": [
          881,
          923
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        881,
        924
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
