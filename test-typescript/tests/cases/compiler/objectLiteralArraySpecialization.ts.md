__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    352
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "range": [
          17,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "initialValues",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            },
            "range": [
              41,
              46
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
                    43,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 43,
                      "line": 1
                    }
                  }
                },
                "range": [
                  43,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              },
              "range": [
                43,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 43,
                  "line": 1
                }
              }
            }
          },
          "range": [
            27,
            46
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 1
          },
          "start": {
            "column": 47,
            "line": 1
          }
        },
        "range": [
          47,
          66
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              63,
              66
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
                    64,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 1
                    },
                    "start": {
                      "column": 64,
                      "line": 1
                    }
                  }
                },
                "range": [
                  64,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 1
                  },
                  "start": {
                    "column": 64,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 1
              },
              "start": {
                "column": 63,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyArrayWrapper",
            "optional": false,
            "range": [
              49,
              63
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 1
              },
              "start": {
                "column": 49,
                "line": 1
              }
            }
          },
          "range": [
            49,
            66
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 1
            },
            "start": {
              "column": 49,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        },
        "range": [
          23,
          26
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
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              24,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        67
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 1
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
          96,
          189
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "range": [
                99,
                110
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialItems",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  },
                  "range": [
                    124,
                    129
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
                          126,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        126,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 3
                        },
                        "start": {
                          "column": 28,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      126,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  111,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              99,
              131
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "range": [
                133,
                144
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 1,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  },
                  "range": [
                    154,
                    179
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                              "column": 29,
                              "line": 4
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          },
                          "range": [
                            158,
                            161
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
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
                                  "column": 29,
                                  "line": 4
                                },
                                "start": {
                                  "column": 28,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              160,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 4
                              },
                              "start": {
                                "column": 28,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          157,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 4
                          },
                          "start": {
                            "column": 25,
                            "line": 4
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
                              "column": 35,
                              "line": 4
                            },
                            "start": {
                              "column": 32,
                              "line": 4
                            }
                          },
                          "range": [
                            164,
                            167
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                166,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 4
                                },
                                "start": {
                                  "column": 34,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              166,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 4
                              },
                              "start": {
                                "column": 34,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          163,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 4
                          },
                          "start": {
                            "column": 31,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 4
                        },
                        "start": {
                          "column": 37,
                          "line": 4
                        }
                      },
                      "range": [
                        169,
                        179
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          172,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 4
                          },
                          "start": {
                            "column": 40,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      156,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  145,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 48,
                  "line": 4
                }
              },
              "range": [
                180,
                186
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  182,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 4
                  },
                  "start": {
                    "column": 50,
                    "line": 4
                  }
                }
              }
            },
            "static": false,
            "range": [
              133,
              187
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 4
              },
              "start": {
                "column": 1,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 28,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyArrayWrapper",
        "optional": false,
        "range": [
          78,
          92
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 24,
            "line": 2
          }
        },
        "range": [
          92,
          95
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
                93,
                94
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              93,
              94
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        68,
        189
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "thing",
            "optional": false,
            "range": [
              194,
              199
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            213,
                            217
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
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"bob\"",
                          "value": "bob",
                          "range": [
                            219,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 6
                            },
                            "start": {
                              "column": 29,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          213,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 23,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "range": [
                            226,
                            228
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 6
                            },
                            "start": {
                              "column": 36,
                              "line": 6
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "24",
                          "value": 24,
                          "range": [
                            230,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 6
                            },
                            "start": {
                              "column": 40,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          226,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 6
                          },
                          "start": {
                            "column": 36,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      211,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
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
                          "name": "name",
                          "optional": false,
                          "range": [
                            238,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 6
                            },
                            "start": {
                              "column": 48,
                              "line": 6
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"doug\"",
                          "value": "doug",
                          "range": [
                            244,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 6
                            },
                            "start": {
                              "column": 54,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          238,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 6
                          },
                          "start": {
                            "column": 48,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "range": [
                            252,
                            254
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 6
                            },
                            "start": {
                              "column": 62,
                              "line": 6
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "32",
                          "value": 32,
                          "range": [
                            256,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 6
                            },
                            "start": {
                              "column": 66,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          252,
                          258
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 6
                          },
                          "start": {
                            "column": 62,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      236,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 6
                      },
                      "start": {
                        "column": 46,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  209,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "range": [
                202,
                208
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              202,
              263
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "range": [
            194,
            263
          ],
          "loc": {
            "end": {
              "column": 73,
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
        190,
        264
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    313,
                    314
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "range": [
                    315,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 7
                    }
                  }
                },
                "range": [
                  313,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"bob\"",
                "value": "bob",
                "range": [
                  324,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
                  }
                }
              },
              "range": [
                313,
                329
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
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
                "name": "x",
                "optional": false,
                "range": [
                  304,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  307,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              303,
              329
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
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
            "name": "thing",
            "optional": false,
            "range": [
              285,
              290
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "range": [
              291,
              302
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "range": [
            285,
            302
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          285,
          330
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        285,
        331
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
