__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    5433
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isUnknown",
        "optional": false,
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSUnknownKeyword",
          "range": [
            20,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              36,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 36,
                "line": 1
              }
            }
          },
          "range": [
            36,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              47,
              52
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          },
          "range": [
            47,
            52
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 47,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              40,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
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
            44
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        "range": [
          20,
          52
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          17
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
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        53
      ],
      "loc": {
        "end": {
          "column": 53,
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
        "name": "isTrue",
        "optional": false,
        "range": [
          59,
          65
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            84,
            85
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 30,
              "line": 2
            }
          }
        },
        "range": [
          84,
          85
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 2
          },
          "start": {
            "column": 30,
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
            "column": 11,
            "line": 2
          }
        },
        "range": [
          65,
          81
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  76,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                76,
                80
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
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
                66,
                67
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
            "out": false,
            "range": [
              66,
              80
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        54,
        86
      ],
      "loc": {
        "end": {
          "column": 32,
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
        "name": "SomeResponse",
        "optional": false,
        "range": [
          93,
          105
        ],
        "loc": {
          "end": {
            "column": 17,
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
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'yes'",
              "value": "yes",
              "range": [
                108,
                113
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "range": [
              108,
              113
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 20,
                "line": 4
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'no'",
              "value": "no",
              "range": [
                116,
                120
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 4
                }
              }
            },
            "range": [
              116,
              120
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 28,
                "line": 4
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'idk'",
              "value": "idk",
              "range": [
                123,
                128
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 35,
                  "line": 4
                }
              }
            },
            "range": [
              123,
              128
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 35,
                "line": 4
              }
            }
          }
        ],
        "range": [
          108,
          128
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 4
          }
        }
      },
      "range": [
        88,
        129
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 4
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
            "name": "validate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              },
              "range": [
                142,
                172
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
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
                          "line": 5
                        }
                      },
                      "range": [
                        146,
                        155
                      ],
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          148,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      145,
                      155
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 5
                    }
                  },
                  "range": [
                    157,
                    172
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SomeResponse",
                      "optional": false,
                      "range": [
                        160,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 5
                        },
                        "start": {
                          "column": 30,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      160,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 5
                      },
                      "start": {
                        "column": 30,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  144,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              134,
              172
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "'idk'",
                "value": "idk",
                "range": [
                  214,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 5
                  },
                  "start": {
                    "column": 84,
                    "line": 5
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  210,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 5
                  },
                  "start": {
                    "column": 80,
                    "line": 5
                  }
                }
              },
              "test": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      181,
                      182
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
                  "right": {
                    "type": "Literal",
                    "raw": "'yes'",
                    "value": "yes",
                    "range": [
                      187,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 5
                      },
                      "start": {
                        "column": 57,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    181,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 5
                    },
                    "start": {
                      "column": 51,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      196,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 5
                      },
                      "start": {
                        "column": 66,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'no'",
                    "value": "no",
                    "range": [
                      202,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 5
                      },
                      "start": {
                        "column": 72,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    196,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 5
                    },
                    "start": {
                      "column": 66,
                      "line": 5
                    }
                  }
                },
                "range": [
                  181,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 5
                  },
                  "start": {
                    "column": 51,
                    "line": 5
                  }
                }
              },
              "range": [
                180,
                219
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 5
                },
                "start": {
                  "column": 50,
                  "line": 5
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
                  175,
                  176
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
            ],
            "range": [
              175,
              219
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 5
              },
              "start": {
                "column": 45,
                "line": 5
              }
            }
          },
          "range": [
            134,
            219
          ],
          "loc": {
            "end": {
              "column": 89,
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
      "kind": "let",
      "range": [
        130,
        220
      ],
      "loc": {
        "end": {
          "column": 90,
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                241,
                250
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  243,
                  250
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
              }
            },
            "range": [
              240,
              250
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              253,
              262
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
          "range": [
            240,
            262
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        234,
        263
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "symb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              },
              "range": [
                283,
                298
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    292,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 9
                    }
                  }
                },
                "range": [
                  285,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              279,
              298
            ],
            "loc": {
              "end": {
                "column": 33,
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
            279,
            298
          ],
          "loc": {
            "end": {
              "column": 33,
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
        265,
        299
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "symbNonUnique",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              },
              "range": [
                327,
                335
              ],
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "range": [
                  329,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              314,
              335
            ],
            "loc": {
              "end": {
                "column": 35,
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
            314,
            335
          ],
          "loc": {
            "end": {
              "column": 35,
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
        300,
        336
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    363,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 13
                    },
                    "start": {
                      "column": 10,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        378,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 13
                        },
                        "start": {
                          "column": 25,
                          "line": 13
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
                      "name": "u",
                      "optional": false,
                      "range": [
                        367,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        369,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      367,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    367,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
                    }
                  }
                },
                "range": [
                  363,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              357,
              382
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          351,
          384
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 13,
            "line": 12
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            342,
            343
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "5",
          "value": 5,
          "range": [
            348,
            349
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 12
            },
            "start": {
              "column": 10,
              "line": 12
            }
          }
        },
        "range": [
          342,
          349
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 12
          },
          "start": {
            "column": 4,
            "line": 12
          }
        }
      },
      "range": [
        338,
        384
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "someBool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    },
                    "range": [
                      437,
                      446
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        439,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    429,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    449,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 30,
                      "line": 17
                    }
                  }
                },
                "range": [
                  429,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 31,
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
              423,
              451
            ],
            "loc": {
              "end": {
                "column": 32,
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
          417,
          453
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 31,
            "line": 16
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "range": [
              390,
              391
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              396,
              400
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          },
          "range": [
            390,
            400
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "range": [
              404,
              405
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 18,
                "line": 16
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              410,
              415
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 24,
                "line": 16
              }
            }
          },
          "range": [
            404,
            415
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 16
            },
            "start": {
              "column": 18,
              "line": 16
            }
          }
        },
        "range": [
          390,
          415
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        386,
        453
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "undef",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    },
                    "range": [
                      493,
                      504
                    ],
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        495,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 21
                        },
                        "start": {
                          "column": 17,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    488,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 10,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    507,
                    508
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 21
                    },
                    "start": {
                      "column": 29,
                      "line": 21
                    }
                  }
                },
                "range": [
                  488,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              482,
              509
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          476,
          511
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 21,
            "line": 20
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            459,
            460
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            465,
            474
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 20
            },
            "start": {
              "column": 10,
              "line": 20
            }
          }
        },
        "range": [
          459,
          474
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 20
          },
          "start": {
            "column": 4,
            "line": 20
          }
        }
      },
      "range": [
        455,
        511
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "someNull",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    },
                    "range": [
                      549,
                      555
                    ],
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "range": [
                        551,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    541,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    558,
                    559
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
                "range": [
                  541,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              535,
              560
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          529,
          562
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 16,
            "line": 24
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            517,
            518
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            523,
            527
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 24
            },
            "start": {
              "column": 10,
              "line": 24
            }
          }
        },
        "range": [
          517,
          527
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 24
          },
          "start": {
            "column": 4,
            "line": 24
          }
        }
      },
      "range": [
        513,
        562
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "symbolAlias",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 29
                      },
                      "start": {
                        "column": 21,
                        "line": 29
                      }
                    },
                    "range": [
                      603,
                      616
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "symb",
                        "optional": false,
                        "range": [
                          612,
                          616
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 29
                          },
                          "start": {
                            "column": 30,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        605,
                        616
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 29
                        },
                        "start": {
                          "column": 23,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    592,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 29
                    },
                    "start": {
                      "column": 10,
                      "line": 29
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    619,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 29
                    },
                    "start": {
                      "column": 37,
                      "line": 29
                    }
                  }
                },
                "range": [
                  592,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 29
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              586,
              621
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          580,
          623
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 16,
            "line": 28
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            568,
            569
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "symb",
          "optional": false,
          "range": [
            574,
            578
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 28
            },
            "start": {
              "column": 10,
              "line": 28
            }
          }
        },
        "range": [
          568,
          578
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 28
          },
          "start": {
            "column": 4,
            "line": 28
          }
        }
      },
      "range": [
        564,
        623
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                653,
                654
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  663,
                  684
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        673,
                        683
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "range": [
                              681,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 33
                              },
                              "start": {
                                "column": 37,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            674,
                            682
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 33
                            },
                            "start": {
                              "column": 30,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 33
                        },
                        "start": {
                          "column": 29,
                          "line": 33
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        664,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 33
                        },
                        "start": {
                          "column": 20,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      664,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 33
                      },
                      "start": {
                        "column": 20,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 33
                  },
                  "start": {
                    "column": 19,
                    "line": 33
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  657,
                  663
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 33
                  },
                  "start": {
                    "column": 13,
                    "line": 33
                  }
                }
              },
              "range": [
                657,
                684
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 33
                },
                "start": {
                  "column": 13,
                  "line": 33
                }
              }
            },
            "range": [
              648,
              684
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          642,
          686
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "range": [
              631,
              632
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              637,
              639
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 12,
                "line": 32
              }
            }
          },
          "range": [
            631,
            639
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          629,
          640
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 32
          },
          "start": {
            "column": 4,
            "line": 32
          }
        }
      },
      "range": [
        625,
        686
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                713,
                714
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  723,
                  744
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        733,
                        743
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "range": [
                              741,
                              742
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 37
                              },
                              "start": {
                                "column": 37,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            734,
                            742
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 37
                            },
                            "start": {
                              "column": 30,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 37
                        },
                        "start": {
                          "column": 29,
                          "line": 37
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        724,
                        733
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 37
                        },
                        "start": {
                          "column": 20,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      724,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 37
                      },
                      "start": {
                        "column": 20,
                        "line": 37
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 37
                  },
                  "start": {
                    "column": 19,
                    "line": 37
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  717,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 37
                  },
                  "start": {
                    "column": 13,
                    "line": 37
                  }
                }
              },
              "range": [
                717,
                744
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              }
            },
            "range": [
              708,
              744
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          702,
          746
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 14,
            "line": 36
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            692,
            693
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            698,
            700
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 36
            },
            "start": {
              "column": 10,
              "line": 36
            }
          }
        },
        "range": [
          692,
          700
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 36
          },
          "start": {
            "column": 4,
            "line": 36
          }
        }
      },
      "range": [
        688,
        746
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                772,
                773
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 41
                },
                "start": {
                  "column": 9,
                  "line": 41
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  782,
                  803
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        792,
                        802
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "range": [
                              800,
                              801
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 41
                              },
                              "start": {
                                "column": 37,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            793,
                            801
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 41
                            },
                            "start": {
                              "column": 30,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 41
                        },
                        "start": {
                          "column": 29,
                          "line": 41
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        783,
                        792
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 41
                        },
                        "start": {
                          "column": 20,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      783,
                      802
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 41
                      },
                      "start": {
                        "column": 20,
                        "line": 41
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  776,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 41
                  },
                  "start": {
                    "column": 13,
                    "line": 41
                  }
                }
              },
              "range": [
                776,
                803
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 41
                }
              }
            },
            "range": [
              767,
              803
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          761,
          805
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 13,
            "line": 40
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            752,
            753
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            757,
            759
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 40
            },
            "start": {
              "column": 9,
              "line": 40
            }
          }
        },
        "range": [
          752,
          759
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 40
          },
          "start": {
            "column": 4,
            "line": 40
          }
        }
      },
      "range": [
        748,
        805
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                833,
                834
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 45
                },
                "start": {
                  "column": 9,
                  "line": 45
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  843,
                  864
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        853,
                        863
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "range": [
                              861,
                              862
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 45
                              },
                              "start": {
                                "column": 37,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            854,
                            862
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 45
                            },
                            "start": {
                              "column": 30,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 45
                        },
                        "start": {
                          "column": 29,
                          "line": 45
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        844,
                        853
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 45
                        },
                        "start": {
                          "column": 20,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      844,
                      863
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 45
                      },
                      "start": {
                        "column": 20,
                        "line": 45
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 45
                  },
                  "start": {
                    "column": 19,
                    "line": 45
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  837,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 45
                  },
                  "start": {
                    "column": 13,
                    "line": 45
                  }
                }
              },
              "range": [
                837,
                864
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 45
                },
                "start": {
                  "column": 13,
                  "line": 45
                }
              }
            },
            "range": [
              828,
              864
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          822,
          866
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 15,
            "line": 44
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            811,
            812
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            816,
            820
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 44
            },
            "start": {
              "column": 9,
              "line": 44
            }
          }
        },
        "range": [
          811,
          820
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 44
          },
          "start": {
            "column": 4,
            "line": 44
          }
        }
      },
      "range": [
        807,
        866
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                896,
                897
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 49
                },
                "start": {
                  "column": 9,
                  "line": 49
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  906,
                  927
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        916,
                        926
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "range": [
                              924,
                              925
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 49
                              },
                              "start": {
                                "column": 37,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            917,
                            925
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 49
                            },
                            "start": {
                              "column": 30,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 49
                        },
                        "start": {
                          "column": 29,
                          "line": 49
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        907,
                        916
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 49
                        },
                        "start": {
                          "column": 20,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      907,
                      926
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 49
                      },
                      "start": {
                        "column": 20,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 49
                  },
                  "start": {
                    "column": 19,
                    "line": 49
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  900,
                  906
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 49
                  },
                  "start": {
                    "column": 13,
                    "line": 49
                  }
                }
              },
              "range": [
                900,
                927
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 49
                },
                "start": {
                  "column": 13,
                  "line": 49
                }
              }
            },
            "range": [
              891,
              927
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          885,
          929
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 17,
            "line": 48
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            872,
            873
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "range": [
            877,
            883
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 48
            },
            "start": {
              "column": 9,
              "line": 48
            }
          }
        },
        "range": [
          872,
          883
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 48
          },
          "start": {
            "column": 4,
            "line": 48
          }
        }
      },
      "range": [
        868,
        929
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 52
                },
                "start": {
                  "column": 21,
                  "line": 52
                }
              },
              "range": [
                952,
                960
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  954,
                  960
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 52
                  },
                  "start": {
                    "column": 23,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              945,
              960
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 52
              },
              "start": {
                "column": 14,
                "line": 52
              }
            }
          },
          "init": null,
          "range": [
            945,
            960
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 52
            },
            "start": {
              "column": 14,
              "line": 52
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        931,
        961
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "aBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 53
                },
                "start": {
                  "column": 22,
                  "line": 53
                }
              },
              "range": [
                984,
                993
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  986,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 53
                  },
                  "start": {
                    "column": 24,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              976,
              993
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 53
              },
              "start": {
                "column": 14,
                "line": 53
              }
            }
          },
          "init": null,
          "range": [
            976,
            993
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 53
            },
            "start": {
              "column": 14,
              "line": 53
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        962,
        994
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 54
                },
                "start": {
                  "column": 21,
                  "line": 54
                }
              },
              "range": [
                1016,
                1024
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1018,
                  1024
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 54
                  },
                  "start": {
                    "column": 23,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1009,
              1024
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 54
              },
              "start": {
                "column": 14,
                "line": 54
              }
            }
          },
          "init": null,
          "range": [
            1009,
            1024
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 54
            },
            "start": {
              "column": 14,
              "line": 54
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        995,
        1025
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "anObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 55
                },
                "start": {
                  "column": 22,
                  "line": 55
                }
              },
              "range": [
                1048,
                1056
              ],
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "range": [
                  1050,
                  1056
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 55
                  },
                  "start": {
                    "column": 24,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1040,
              1056
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 55
              },
              "start": {
                "column": 14,
                "line": 55
              }
            }
          },
          "init": null,
          "range": [
            1040,
            1056
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 55
            },
            "start": {
              "column": 14,
              "line": 55
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1026,
        1057
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 56
                },
                "start": {
                  "column": 29,
                  "line": 56
                }
              },
              "range": [
                1087,
                1102
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
                        1091,
                        1092
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 56
                        },
                        "start": {
                          "column": 33,
                          "line": 56
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
                          "column": 42,
                          "line": 56
                        },
                        "start": {
                          "column": 34,
                          "line": 56
                        }
                      },
                      "range": [
                        1092,
                        1100
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1094,
                          1100
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 56
                          },
                          "start": {
                            "column": 36,
                            "line": 56
                          }
                        }
                      }
                    },
                    "range": [
                      1091,
                      1100
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 56
                      },
                      "start": {
                        "column": 33,
                        "line": 56
                      }
                    }
                  }
                ],
                "range": [
                  1089,
                  1102
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 56
                  },
                  "start": {
                    "column": 31,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1072,
              1102
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 56
              },
              "start": {
                "column": 14,
                "line": 56
              }
            }
          },
          "init": null,
          "range": [
            1072,
            1102
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 56
            },
            "start": {
              "column": 14,
              "line": 56
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1058,
        1103
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "aUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 57
                },
                "start": {
                  "column": 20,
                  "line": 57
                }
              },
              "range": [
                1124,
                1155
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                            1128,
                            1129
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 57
                            },
                            "start": {
                              "column": 24,
                              "line": 57
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
                              "column": 33,
                              "line": 57
                            },
                            "start": {
                              "column": 25,
                              "line": 57
                            }
                          },
                          "range": [
                            1129,
                            1137
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1131,
                              1137
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 57
                              },
                              "start": {
                                "column": 27,
                                "line": 57
                              }
                            }
                          }
                        },
                        "range": [
                          1128,
                          1137
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 57
                          },
                          "start": {
                            "column": 24,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "range": [
                      1126,
                      1139
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 57
                      },
                      "start": {
                        "column": 22,
                        "line": 57
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1144,
                            1145
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 57
                            },
                            "start": {
                              "column": 40,
                              "line": 57
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
                              "column": 49,
                              "line": 57
                            },
                            "start": {
                              "column": 41,
                              "line": 57
                            }
                          },
                          "range": [
                            1145,
                            1153
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1147,
                              1153
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 57
                              },
                              "start": {
                                "column": 43,
                                "line": 57
                              }
                            }
                          }
                        },
                        "range": [
                          1144,
                          1153
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 57
                          },
                          "start": {
                            "column": 40,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "range": [
                      1142,
                      1155
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 57
                      },
                      "start": {
                        "column": 38,
                        "line": 57
                      }
                    }
                  }
                ],
                "range": [
                  1126,
                  1155
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 57
                  },
                  "start": {
                    "column": 22,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1118,
              1155
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 57
              },
              "start": {
                "column": 14,
                "line": 57
              }
            }
          },
          "init": null,
          "range": [
            1118,
            1155
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 57
            },
            "start": {
              "column": 14,
              "line": 57
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1104,
        1156
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "anIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 58
                },
                "start": {
                  "column": 28,
                  "line": 58
                }
              },
              "range": [
                1185,
                1216
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                            1189,
                            1190
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 58
                            },
                            "start": {
                              "column": 32,
                              "line": 58
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
                              "column": 41,
                              "line": 58
                            },
                            "start": {
                              "column": 33,
                              "line": 58
                            }
                          },
                          "range": [
                            1190,
                            1198
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1192,
                              1198
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 58
                              },
                              "start": {
                                "column": 35,
                                "line": 58
                              }
                            }
                          }
                        },
                        "range": [
                          1189,
                          1198
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 58
                          },
                          "start": {
                            "column": 32,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      1187,
                      1200
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 58
                      },
                      "start": {
                        "column": 30,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1205,
                            1206
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 58
                            },
                            "start": {
                              "column": 48,
                              "line": 58
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
                              "column": 57,
                              "line": 58
                            },
                            "start": {
                              "column": 49,
                              "line": 58
                            }
                          },
                          "range": [
                            1206,
                            1214
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1208,
                              1214
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 58
                              },
                              "start": {
                                "column": 51,
                                "line": 58
                              }
                            }
                          }
                        },
                        "range": [
                          1205,
                          1214
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 58
                          },
                          "start": {
                            "column": 48,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      1203,
                      1216
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 58
                      },
                      "start": {
                        "column": 46,
                        "line": 58
                      }
                    }
                  }
                ],
                "range": [
                  1187,
                  1216
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 58
                  },
                  "start": {
                    "column": 30,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              1171,
              1216
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 58
              },
              "start": {
                "column": 14,
                "line": 58
              }
            }
          },
          "init": null,
          "range": [
            1171,
            1216
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 58
            },
            "start": {
              "column": 14,
              "line": 58
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1157,
        1217
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 59
                },
                "start": {
                  "column": 23,
                  "line": 59
                }
              },
              "range": [
                1241,
                1255
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 59
                    },
                    "start": {
                      "column": 28,
                      "line": 59
                    }
                  },
                  "range": [
                    1246,
                    1255
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1249,
                      1255
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 59
                      },
                      "start": {
                        "column": 31,
                        "line": 59
                      }
                    }
                  }
                },
                "range": [
                  1243,
                  1255
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 59
                  },
                  "start": {
                    "column": 25,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1232,
              1255
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 59
              },
              "start": {
                "column": 14,
                "line": 59
              }
            }
          },
          "init": null,
          "range": [
            1232,
            1255
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 59
            },
            "start": {
              "column": 14,
              "line": 59
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1218,
        1256
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "uString",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 62
                      },
                      "start": {
                        "column": 15,
                        "line": 62
                      }
                    },
                    "range": [
                      1294,
                      1302
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1296,
                        1302
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 62
                        },
                        "start": {
                          "column": 17,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    1287,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    1305,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 62
                    },
                    "start": {
                      "column": 26,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1287,
                  1306
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 62
                  },
                  "start": {
                    "column": 8,
                    "line": 62
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1283,
              1307
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "range": [
          1277,
          1309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 19,
            "line": 61
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1262,
            1263
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 61
            },
            "start": {
              "column": 4,
              "line": 61
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aString",
          "optional": false,
          "range": [
            1268,
            1275
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 61
            },
            "start": {
              "column": 10,
              "line": 61
            }
          }
        },
        "range": [
          1262,
          1275
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 61
          },
          "start": {
            "column": 4,
            "line": 61
          }
        }
      },
      "range": [
        1258,
        1309
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "uString",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 66
                      },
                      "start": {
                        "column": 15,
                        "line": 66
                      }
                    },
                    "range": [
                      1348,
                      1357
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        1350,
                        1357
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 66
                        },
                        "start": {
                          "column": 17,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1341,
                    1357
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    1360,
                    1361
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 66
                    },
                    "start": {
                      "column": 27,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1341,
                  1361
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1337,
              1362
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          1331,
          1364
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 20,
            "line": 65
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1315,
            1316
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 65
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aBoolean",
          "optional": false,
          "range": [
            1321,
            1329
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 65
            },
            "start": {
              "column": 10,
              "line": 65
            }
          }
        },
        "range": [
          1315,
          1329
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 65
          },
          "start": {
            "column": 4,
            "line": 65
          }
        }
      },
      "range": [
        1311,
        1364
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "uNumber",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 70
                      },
                      "start": {
                        "column": 15,
                        "line": 70
                      }
                    },
                    "range": [
                      1402,
                      1410
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1404,
                        1410
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 70
                        },
                        "start": {
                          "column": 17,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1395,
                    1410
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    1413,
                    1414
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 70
                    },
                    "start": {
                      "column": 26,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1395,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1391,
              1415
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          }
        ],
        "range": [
          1385,
          1417
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 19,
            "line": 69
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1370,
            1371
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 69
            },
            "start": {
              "column": 4,
              "line": 69
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aNumber",
          "optional": false,
          "range": [
            1376,
            1383
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 69
            },
            "start": {
              "column": 10,
              "line": 69
            }
          }
        },
        "range": [
          1370,
          1383
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 69
          },
          "start": {
            "column": 4,
            "line": 69
          }
        }
      },
      "range": [
        1366,
        1417
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "uObject",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 74
                      },
                      "start": {
                        "column": 15,
                        "line": 74
                      }
                    },
                    "range": [
                      1456,
                      1464
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        1458,
                        1464
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 74
                        },
                        "start": {
                          "column": 17,
                          "line": 74
                        }
                      }
                    }
                  },
                  "range": [
                    1449,
                    1464
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    1467,
                    1468
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 74
                    },
                    "start": {
                      "column": 26,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1449,
                  1468
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1445,
              1469
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "range": [
          1439,
          1471
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 20,
            "line": 73
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1423,
            1424
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 73
            },
            "start": {
              "column": 4,
              "line": 73
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anObject",
          "optional": false,
          "range": [
            1429,
            1437
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 73
            },
            "start": {
              "column": 10,
              "line": 73
            }
          }
        },
        "range": [
          1423,
          1437
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 73
          },
          "start": {
            "column": 4,
            "line": 73
          }
        }
      },
      "range": [
        1419,
        1471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "uObjectLiteral",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 78
                      },
                      "start": {
                        "column": 22,
                        "line": 78
                      }
                    },
                    "range": [
                      1524,
                      1532
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        1526,
                        1532
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 78
                        },
                        "start": {
                          "column": 24,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    1510,
                    1532
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    1535,
                    1536
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 78
                    },
                    "start": {
                      "column": 33,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1510,
                  1536
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 78
                  },
                  "start": {
                    "column": 8,
                    "line": 78
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1506,
              1537
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          }
        ],
        "range": [
          1500,
          1539
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 27,
            "line": 77
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1477,
            1478
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 77
            },
            "start": {
              "column": 4,
              "line": 77
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anObjectLiteral",
          "optional": false,
          "range": [
            1483,
            1498
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 77
            },
            "start": {
              "column": 10,
              "line": 77
            }
          }
        },
        "range": [
          1477,
          1498
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 77
          },
          "start": {
            "column": 4,
            "line": 77
          }
        }
      },
      "range": [
        1473,
        1539
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionDoesNotNarrow",
              "optional": false,
              "range": [
                1570,
                1588
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 82
                },
                "start": {
                  "column": 9,
                  "line": 82
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1597,
                  1618
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1607,
                        1617
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "range": [
                              1615,
                              1616
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 82
                              },
                              "start": {
                                "column": 54,
                                "line": 82
                              }
                            }
                          },
                          "range": [
                            1608,
                            1616
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 82
                            },
                            "start": {
                              "column": 47,
                              "line": 82
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 82
                        },
                        "start": {
                          "column": 46,
                          "line": 82
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        1598,
                        1607
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 82
                        },
                        "start": {
                          "column": 37,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      1598,
                      1617
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 82
                      },
                      "start": {
                        "column": 37,
                        "line": 82
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 82
                  },
                  "start": {
                    "column": 36,
                    "line": 82
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  1591,
                  1597
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 82
                  },
                  "start": {
                    "column": 30,
                    "line": 82
                  }
                }
              },
              "range": [
                1591,
                1618
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 82
                },
                "start": {
                  "column": 30,
                  "line": 82
                }
              }
            },
            "range": [
              1565,
              1618
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          }
        ],
        "range": [
          1559,
          1620
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 18,
            "line": 81
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1545,
            1546
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 81
            },
            "start": {
              "column": 4,
              "line": 81
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aUnion",
          "optional": false,
          "range": [
            1551,
            1557
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 81
            },
            "start": {
              "column": 10,
              "line": 81
            }
          }
        },
        "range": [
          1545,
          1557
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 81
          },
          "start": {
            "column": 4,
            "line": 81
          }
        }
      },
      "range": [
        1541,
        1620
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectionDoesNotNarrow",
              "optional": false,
              "range": [
                1659,
                1684
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 86
                },
                "start": {
                  "column": 9,
                  "line": 86
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1693,
                  1714
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1703,
                        1713
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "range": [
                              1711,
                              1712
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 86
                              },
                              "start": {
                                "column": 61,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            1704,
                            1712
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 86
                            },
                            "start": {
                              "column": 54,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 86
                        },
                        "start": {
                          "column": 53,
                          "line": 86
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        1694,
                        1703
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 86
                        },
                        "start": {
                          "column": 44,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      1694,
                      1713
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 86
                      },
                      "start": {
                        "column": 44,
                        "line": 86
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 86
                  },
                  "start": {
                    "column": 43,
                    "line": 86
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  1687,
                  1693
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 86
                  },
                  "start": {
                    "column": 37,
                    "line": 86
                  }
                }
              },
              "range": [
                1687,
                1714
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 86
                },
                "start": {
                  "column": 37,
                  "line": 86
                }
              }
            },
            "range": [
              1654,
              1714
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "range": [
          1648,
          1716
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 26,
            "line": 85
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1626,
            1627
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 85
            },
            "start": {
              "column": 4,
              "line": 85
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anIntersection",
          "optional": false,
          "range": [
            1632,
            1646
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 85
            },
            "start": {
              "column": 10,
              "line": 85
            }
          }
        },
        "range": [
          1626,
          1646
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 85
          },
          "start": {
            "column": 4,
            "line": 85
          }
        }
      },
      "range": [
        1622,
        1716
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "uFunction",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 90
                      },
                      "start": {
                        "column": 17,
                        "line": 90
                      }
                    },
                    "range": [
                      1758,
                      1766
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        1760,
                        1766
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 90
                        },
                        "start": {
                          "column": 19,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    1749,
                    1766
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    1769,
                    1770
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 90
                    },
                    "start": {
                      "column": 28,
                      "line": 90
                    }
                  }
                },
                "range": [
                  1749,
                  1770
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 90
                  },
                  "start": {
                    "column": 8,
                    "line": 90
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1745,
              1771
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          }
        ],
        "range": [
          1739,
          1773
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 91
          },
          "start": {
            "column": 21,
            "line": 89
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1722,
            1723
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 89
            },
            "start": {
              "column": 4,
              "line": 89
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aFunction",
          "optional": false,
          "range": [
            1728,
            1737
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 89
            },
            "start": {
              "column": 10,
              "line": 89
            }
          }
        },
        "range": [
          1722,
          1737
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 89
          },
          "start": {
            "column": 4,
            "line": 89
          }
        }
      },
      "range": [
        1718,
        1773
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1791,
          1814
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1797,
                1798
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            "range": [
              1797,
              1798
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                1804,
                1805
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
                }
              }
            },
            "range": [
              1804,
              1805
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                1811,
                1812
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
            "range": [
              1811,
              1812
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 16,
            "line": 93
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberEnum",
        "optional": false,
        "range": [
          1780,
          1790
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 93
          },
          "start": {
            "column": 5,
            "line": 93
          }
        }
      },
      "range": [
        1775,
        1814
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1832,
          1873
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1838,
                1839
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 100
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"A\"",
              "value": "A",
              "range": [
                1842,
                1845
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 100
                },
                "start": {
                  "column": 8,
                  "line": 100
                }
              }
            },
            "range": [
              1838,
              1845
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                1851,
                1852
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 101
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"B\"",
              "value": "B",
              "range": [
                1855,
                1858
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 101
                },
                "start": {
                  "column": 8,
                  "line": 101
                }
              }
            },
            "range": [
              1851,
              1858
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                1864,
                1865
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"C\"",
              "value": "C",
              "range": [
                1868,
                1871
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 102
                },
                "start": {
                  "column": 8,
                  "line": 102
                }
              }
            },
            "range": [
              1864,
              1871
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 103
          },
          "start": {
            "column": 16,
            "line": 99
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringEnum",
        "optional": false,
        "range": [
          1821,
          1831
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 99
          },
          "start": {
            "column": 5,
            "line": 99
          }
        }
      },
      "range": [
        1816,
        1873
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "enumObj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 106
                      },
                      "start": {
                        "column": 15,
                        "line": 106
                      }
                    },
                    "range": [
                      1934,
                      1942
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        1936,
                        1942
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 106
                        },
                        "start": {
                          "column": 17,
                          "line": 106
                        }
                      }
                    }
                  },
                  "range": [
                    1927,
                    1942
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 106
                    },
                    "start": {
                      "column": 8,
                      "line": 106
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    1945,
                    1946
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 106
                    },
                    "start": {
                      "column": 26,
                      "line": 106
                    }
                  }
                },
                "range": [
                  1927,
                  1946
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 106
                  },
                  "start": {
                    "column": 8,
                    "line": 106
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1923,
              1947
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 106
              }
            }
          }
        ],
        "range": [
          1917,
          1949
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 107
          },
          "start": {
            "column": 42,
            "line": 105
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "range": [
              1879,
              1880
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberEnum",
            "optional": false,
            "range": [
              1885,
              1895
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 105
              },
              "start": {
                "column": 10,
                "line": 105
              }
            }
          },
          "range": [
            1879,
            1895
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 105
            },
            "start": {
              "column": 4,
              "line": 105
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "range": [
              1899,
              1900
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 105
              },
              "start": {
                "column": 24,
                "line": 105
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringEnum",
            "optional": false,
            "range": [
              1905,
              1915
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 105
              },
              "start": {
                "column": 30,
                "line": 105
              }
            }
          },
          "range": [
            1899,
            1915
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 105
            },
            "start": {
              "column": 24,
              "line": 105
            }
          }
        },
        "range": [
          1879,
          1915
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 105
          },
          "start": {
            "column": 4,
            "line": 105
          }
        }
      },
      "range": [
        1875,
        1949
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 110
                      },
                      "start": {
                        "column": 9,
                        "line": 110
                      }
                    },
                    "range": [
                      1986,
                      2000
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumberEnum",
                          "optional": false,
                          "range": [
                            1988,
                            1998
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 110
                            },
                            "start": {
                              "column": 11,
                              "line": 110
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1999,
                            2000
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 110
                            },
                            "start": {
                              "column": 22,
                              "line": 110
                            }
                          }
                        },
                        "range": [
                          1988,
                          2000
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 110
                          },
                          "start": {
                            "column": 11,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        1988,
                        2000
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 110
                        },
                        "start": {
                          "column": 11,
                          "line": 110
                        }
                      }
                    }
                  },
                  "range": [
                    1985,
                    2000
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 110
                    },
                    "start": {
                      "column": 8,
                      "line": 110
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    2003,
                    2004
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 110
                    },
                    "start": {
                      "column": 26,
                      "line": 110
                    }
                  }
                },
                "range": [
                  1985,
                  2004
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 110
                  },
                  "start": {
                    "column": 8,
                    "line": 110
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1981,
              2004
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          }
        ],
        "range": [
          1975,
          2006
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 24,
            "line": 109
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            1955,
            1956
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 109
            },
            "start": {
              "column": 4,
              "line": 109
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberEnum",
            "optional": false,
            "range": [
              1961,
              1971
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 109
              },
              "start": {
                "column": 10,
                "line": 109
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              1972,
              1973
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 109
              },
              "start": {
                "column": 21,
                "line": 109
              }
            }
          },
          "range": [
            1961,
            1973
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 109
            },
            "start": {
              "column": 10,
              "line": 109
            }
          }
        },
        "range": [
          1955,
          1973
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 109
          },
          "start": {
            "column": 4,
            "line": 109
          }
        }
      },
      "range": [
        1951,
        2006
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 114
                      },
                      "start": {
                        "column": 9,
                        "line": 114
                      }
                    },
                    "range": [
                      2043,
                      2057
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StringEnum",
                          "optional": false,
                          "range": [
                            2045,
                            2055
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 114
                            },
                            "start": {
                              "column": 11,
                              "line": 114
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            2056,
                            2057
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 114
                            },
                            "start": {
                              "column": 22,
                              "line": 114
                            }
                          }
                        },
                        "range": [
                          2045,
                          2057
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 114
                          },
                          "start": {
                            "column": 11,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        2045,
                        2057
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 114
                        },
                        "start": {
                          "column": 11,
                          "line": 114
                        }
                      }
                    }
                  },
                  "range": [
                    2042,
                    2057
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 114
                    },
                    "start": {
                      "column": 8,
                      "line": 114
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    2060,
                    2061
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 114
                    },
                    "start": {
                      "column": 26,
                      "line": 114
                    }
                  }
                },
                "range": [
                  2042,
                  2061
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 114
                  },
                  "start": {
                    "column": 8,
                    "line": 114
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2038,
              2061
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          }
        ],
        "range": [
          2032,
          2063
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 115
          },
          "start": {
            "column": 24,
            "line": 113
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "range": [
            2012,
            2013
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 113
            },
            "start": {
              "column": 4,
              "line": 113
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringEnum",
            "optional": false,
            "range": [
              2018,
              2028
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 113
              },
              "start": {
                "column": 10,
                "line": 113
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              2029,
              2030
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 113
              },
              "start": {
                "column": 21,
                "line": 113
              }
            }
          },
          "range": [
            2018,
            2030
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 113
            },
            "start": {
              "column": 10,
              "line": 113
            }
          }
        },
        "range": [
          2012,
          2030
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 113
          },
          "start": {
            "column": 4,
            "line": 113
          }
        }
      },
      "range": [
        2008,
        2063
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 113
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
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
                                "column": 33,
                                "line": 120
                              },
                              "start": {
                                "column": 19,
                                "line": 120
                              }
                            },
                            "range": [
                              2166,
                              2180
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "range": [
                                    2168,
                                    2178
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 120
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 120
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    2179,
                                    2180
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 120
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 120
                                    }
                                  }
                                },
                                "range": [
                                  2168,
                                  2180
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 120
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 120
                                  }
                                }
                              },
                              "range": [
                                2168,
                                2180
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 120
                                },
                                "start": {
                                  "column": 21,
                                  "line": 120
                                }
                              }
                            }
                          },
                          "range": [
                            2165,
                            2180
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 120
                            },
                            "start": {
                              "column": 18,
                              "line": 120
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2183,
                            2184
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 120
                            },
                            "start": {
                              "column": 36,
                              "line": 120
                            }
                          }
                        },
                        "range": [
                          2165,
                          2184
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 120
                          },
                          "start": {
                            "column": 18,
                            "line": 120
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2159,
                      2185
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 120
                      },
                      "start": {
                        "column": 12,
                        "line": 120
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2198,
                      2204
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 121
                      },
                      "start": {
                        "column": 12,
                        "line": 121
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "range": [
                      2133,
                      2143
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 119
                      },
                      "start": {
                        "column": 13,
                        "line": 119
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      2144,
                      2145
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 119
                      },
                      "start": {
                        "column": 24,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    2133,
                    2145
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 119
                    },
                    "start": {
                      "column": 13,
                      "line": 119
                    }
                  }
                },
                "range": [
                  2128,
                  2204
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 121
                  },
                  "start": {
                    "column": 8,
                    "line": 119
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
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
                                "column": 33,
                                "line": 123
                              },
                              "start": {
                                "column": 19,
                                "line": 123
                              }
                            },
                            "range": [
                              2251,
                              2265
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "range": [
                                    2253,
                                    2263
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 123
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 123
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    2264,
                                    2265
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 123
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 123
                                    }
                                  }
                                },
                                "range": [
                                  2253,
                                  2265
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 123
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 123
                                  }
                                }
                              },
                              "range": [
                                2253,
                                2265
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 123
                                },
                                "start": {
                                  "column": 21,
                                  "line": 123
                                }
                              }
                            }
                          },
                          "range": [
                            2250,
                            2265
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 123
                            },
                            "start": {
                              "column": 18,
                              "line": 123
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2268,
                            2269
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 123
                            },
                            "start": {
                              "column": 36,
                              "line": 123
                            }
                          }
                        },
                        "range": [
                          2250,
                          2269
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 123
                          },
                          "start": {
                            "column": 18,
                            "line": 123
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2244,
                      2270
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 123
                      },
                      "start": {
                        "column": 12,
                        "line": 123
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2283,
                      2289
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 124
                      },
                      "start": {
                        "column": 12,
                        "line": 124
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "range": [
                      2218,
                      2228
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 122
                      },
                      "start": {
                        "column": 13,
                        "line": 122
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      2229,
                      2230
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 122
                      },
                      "start": {
                        "column": 24,
                        "line": 122
                      }
                    }
                  },
                  "range": [
                    2218,
                    2230
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 122
                    },
                    "start": {
                      "column": 13,
                      "line": 122
                    }
                  }
                },
                "range": [
                  2213,
                  2289
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 124
                  },
                  "start": {
                    "column": 8,
                    "line": 122
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 126
                              },
                              "start": {
                                "column": 19,
                                "line": 126
                              }
                            },
                            "range": [
                              2336,
                              2350
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "range": [
                                    2338,
                                    2348
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 126
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 126
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "range": [
                                    2349,
                                    2350
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 126
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 126
                                    }
                                  }
                                },
                                "range": [
                                  2338,
                                  2350
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 126
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 126
                                  }
                                }
                              },
                              "range": [
                                2338,
                                2350
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 126
                                },
                                "start": {
                                  "column": 21,
                                  "line": 126
                                }
                              }
                            }
                          },
                          "range": [
                            2335,
                            2350
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 126
                            },
                            "start": {
                              "column": 18,
                              "line": 126
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2353,
                            2354
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 126
                            },
                            "start": {
                              "column": 36,
                              "line": 126
                            }
                          }
                        },
                        "range": [
                          2335,
                          2354
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 126
                          },
                          "start": {
                            "column": 18,
                            "line": 126
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2329,
                      2355
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 126
                      },
                      "start": {
                        "column": 12,
                        "line": 126
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2368,
                      2374
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 127
                      },
                      "start": {
                        "column": 12,
                        "line": 127
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "range": [
                      2303,
                      2313
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 125
                      },
                      "start": {
                        "column": 13,
                        "line": 125
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      2314,
                      2315
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 125
                      },
                      "start": {
                        "column": 24,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    2303,
                    2315
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 125
                    },
                    "start": {
                      "column": 13,
                      "line": 125
                    }
                  }
                },
                "range": [
                  2298,
                  2374
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 127
                  },
                  "start": {
                    "column": 8,
                    "line": 125
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2115,
                2116
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 118
                },
                "start": {
                  "column": 12,
                  "line": 118
                }
              }
            },
            "range": [
              2107,
              2380
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "range": [
                2390,
                2393
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 129
                },
                "start": {
                  "column": 9,
                  "line": 129
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2402,
                  2423
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2412,
                        2422
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2420,
                              2421
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 129
                              },
                              "start": {
                                "column": 39,
                                "line": 129
                              }
                            }
                          },
                          "range": [
                            2413,
                            2421
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 129
                            },
                            "start": {
                              "column": 32,
                              "line": 129
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 129
                        },
                        "start": {
                          "column": 31,
                          "line": 129
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        2403,
                        2412
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 129
                        },
                        "start": {
                          "column": 22,
                          "line": 129
                        }
                      }
                    },
                    "range": [
                      2403,
                      2422
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 129
                      },
                      "start": {
                        "column": 22,
                        "line": 129
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 129
                  },
                  "start": {
                    "column": 21,
                    "line": 129
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  2396,
                  2402
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 129
                  },
                  "start": {
                    "column": 15,
                    "line": 129
                  }
                }
              },
              "range": [
                2396,
                2423
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 129
                },
                "start": {
                  "column": 15,
                  "line": 129
                }
              }
            },
            "range": [
              2385,
              2423
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          }
        ],
        "range": [
          2101,
          2425
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 36,
            "line": 117
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestEnum",
        "optional": false,
        "range": [
          2074,
          2088
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 117
          },
          "start": {
            "column": 9,
            "line": 117
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
                "column": 34,
                "line": 117
              },
              "start": {
                "column": 25,
                "line": 117
              }
            },
            "range": [
              2090,
              2099
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                2092,
                2099
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 117
                },
                "start": {
                  "column": 27,
                  "line": 117
                }
              }
            }
          },
          "range": [
            2089,
            2099
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 117
            },
            "start": {
              "column": 24,
              "line": 117
            }
          }
        }
      ],
      "range": [
        2065,
        2425
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 117
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
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
                                "column": 33,
                                "line": 135
                              },
                              "start": {
                                "column": 19,
                                "line": 135
                              }
                            },
                            "range": [
                              2535,
                              2549
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "range": [
                                    2537,
                                    2547
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 135
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 135
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    2548,
                                    2549
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 135
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 135
                                    }
                                  }
                                },
                                "range": [
                                  2537,
                                  2549
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 135
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 135
                                  }
                                }
                              },
                              "range": [
                                2537,
                                2549
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 135
                                },
                                "start": {
                                  "column": 21,
                                  "line": 135
                                }
                              }
                            }
                          },
                          "range": [
                            2534,
                            2549
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 135
                            },
                            "start": {
                              "column": 18,
                              "line": 135
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2552,
                            2553
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 135
                            },
                            "start": {
                              "column": 36,
                              "line": 135
                            }
                          }
                        },
                        "range": [
                          2534,
                          2553
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 135
                          },
                          "start": {
                            "column": 18,
                            "line": 135
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2528,
                      2554
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 135
                      },
                      "start": {
                        "column": 12,
                        "line": 135
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "range": [
                      2502,
                      2512
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 134
                      },
                      "start": {
                        "column": 13,
                        "line": 134
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      2513,
                      2514
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 134
                      },
                      "start": {
                        "column": 24,
                        "line": 134
                      }
                    }
                  },
                  "range": [
                    2502,
                    2514
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 134
                    },
                    "start": {
                      "column": 13,
                      "line": 134
                    }
                  }
                },
                "range": [
                  2497,
                  2554
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 135
                  },
                  "start": {
                    "column": 8,
                    "line": 134
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
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
                                "column": 48,
                                "line": 137
                              },
                              "start": {
                                "column": 19,
                                "line": 137
                              }
                            },
                            "range": [
                              2601,
                              2630
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "range": [
                                        2603,
                                        2613
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 137
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 137
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        2614,
                                        2615
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 137
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 137
                                        }
                                      }
                                    },
                                    "range": [
                                      2603,
                                      2615
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 137
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 137
                                      }
                                    }
                                  },
                                  "range": [
                                    2603,
                                    2615
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 137
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 137
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "range": [
                                        2618,
                                        2628
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 137
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 137
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "range": [
                                        2629,
                                        2630
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 137
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 137
                                        }
                                      }
                                    },
                                    "range": [
                                      2618,
                                      2630
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 137
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 137
                                      }
                                    }
                                  },
                                  "range": [
                                    2618,
                                    2630
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 137
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 137
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2603,
                                2630
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 137
                                },
                                "start": {
                                  "column": 21,
                                  "line": 137
                                }
                              }
                            }
                          },
                          "range": [
                            2600,
                            2630
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 137
                            },
                            "start": {
                              "column": 18,
                              "line": 137
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2633,
                            2634
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 137
                            },
                            "start": {
                              "column": 51,
                              "line": 137
                            }
                          }
                        },
                        "range": [
                          2600,
                          2634
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 137
                          },
                          "start": {
                            "column": 18,
                            "line": 137
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2594,
                      2635
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 137
                      },
                      "start": {
                        "column": 12,
                        "line": 137
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "range": [
                      2568,
                      2578
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 136
                      },
                      "start": {
                        "column": 13,
                        "line": 136
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      2579,
                      2580
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 136
                      },
                      "start": {
                        "column": 24,
                        "line": 136
                      }
                    }
                  },
                  "range": [
                    2568,
                    2580
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 136
                    },
                    "start": {
                      "column": 13,
                      "line": 136
                    }
                  }
                },
                "range": [
                  2563,
                  2635
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 137
                  },
                  "start": {
                    "column": 8,
                    "line": 136
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 139
                              },
                              "start": {
                                "column": 19,
                                "line": 139
                              }
                            },
                            "range": [
                              2682,
                              2726
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "range": [
                                        2684,
                                        2694
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 139
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 139
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        2695,
                                        2696
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 139
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 139
                                        }
                                      }
                                    },
                                    "range": [
                                      2684,
                                      2696
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 139
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 139
                                      }
                                    }
                                  },
                                  "range": [
                                    2684,
                                    2696
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 139
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "range": [
                                        2699,
                                        2709
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 139
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 139
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "range": [
                                        2710,
                                        2711
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 139
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 139
                                        }
                                      }
                                    },
                                    "range": [
                                      2699,
                                      2711
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 139
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 139
                                      }
                                    }
                                  },
                                  "range": [
                                    2699,
                                    2711
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 139
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "range": [
                                        2714,
                                        2724
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 139
                                        },
                                        "start": {
                                          "column": 51,
                                          "line": 139
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "range": [
                                        2725,
                                        2726
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 139
                                        },
                                        "start": {
                                          "column": 62,
                                          "line": 139
                                        }
                                      }
                                    },
                                    "range": [
                                      2714,
                                      2726
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 63,
                                        "line": 139
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 139
                                      }
                                    }
                                  },
                                  "range": [
                                    2714,
                                    2726
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 139
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2684,
                                2726
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 139
                                },
                                "start": {
                                  "column": 21,
                                  "line": 139
                                }
                              }
                            }
                          },
                          "range": [
                            2681,
                            2726
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 139
                            },
                            "start": {
                              "column": 18,
                              "line": 139
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2729,
                            2730
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 139
                            },
                            "start": {
                              "column": 66,
                              "line": 139
                            }
                          }
                        },
                        "range": [
                          2681,
                          2730
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 139
                          },
                          "start": {
                            "column": 18,
                            "line": 139
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2675,
                      2731
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 139
                      },
                      "start": {
                        "column": 12,
                        "line": 139
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
                          "name": "all",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 140
                              },
                              "start": {
                                "column": 21,
                                "line": 140
                              }
                            },
                            "range": [
                              2753,
                              2765
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "StringEnum",
                                "optional": false,
                                "range": [
                                  2755,
                                  2765
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 140
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 140
                                  }
                                }
                              },
                              "range": [
                                2755,
                                2765
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 140
                                },
                                "start": {
                                  "column": 23,
                                  "line": 140
                                }
                              }
                            }
                          },
                          "range": [
                            2750,
                            2765
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 140
                            },
                            "start": {
                              "column": 18,
                              "line": 140
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2768,
                            2769
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 140
                            },
                            "start": {
                              "column": 36,
                              "line": 140
                            }
                          }
                        },
                        "range": [
                          2750,
                          2769
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 140
                          },
                          "start": {
                            "column": 18,
                            "line": 140
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2744,
                      2770
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 140
                      },
                      "start": {
                        "column": 12,
                        "line": 140
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      2783,
                      2790
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 141
                      },
                      "start": {
                        "column": 12,
                        "line": 141
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "range": [
                      2649,
                      2659
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 138
                      },
                      "start": {
                        "column": 13,
                        "line": 138
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      2660,
                      2661
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 138
                      },
                      "start": {
                        "column": 24,
                        "line": 138
                      }
                    }
                  },
                  "range": [
                    2649,
                    2661
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 138
                    },
                    "start": {
                      "column": 13,
                      "line": 138
                    }
                  }
                },
                "range": [
                  2644,
                  2790
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 141
                  },
                  "start": {
                    "column": 8,
                    "line": 138
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2484,
                2485
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 133
                },
                "start": {
                  "column": 12,
                  "line": 133
                }
              }
            },
            "range": [
              2476,
              2796
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "range": [
                2806,
                2809
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 143
                },
                "start": {
                  "column": 9,
                  "line": 143
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2818,
                  2839
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2828,
                        2838
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2836,
                              2837
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 143
                              },
                              "start": {
                                "column": 39,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            2829,
                            2837
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 143
                            },
                            "start": {
                              "column": 32,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 143
                        },
                        "start": {
                          "column": 31,
                          "line": 143
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        2819,
                        2828
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 143
                        },
                        "start": {
                          "column": 22,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      2819,
                      2838
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 143
                      },
                      "start": {
                        "column": 22,
                        "line": 143
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 143
                  },
                  "start": {
                    "column": 21,
                    "line": 143
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  2812,
                  2818
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 143
                  },
                  "start": {
                    "column": 15,
                    "line": 143
                  }
                }
              },
              "range": [
                2812,
                2839
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 143
                },
                "start": {
                  "column": 15,
                  "line": 143
                }
              }
            },
            "range": [
              2801,
              2839
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 143
              },
              "start": {
                "column": 4,
                "line": 143
              }
            }
          }
        ],
        "range": [
          2470,
          2841
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 144
          },
          "start": {
            "column": 43,
            "line": 132
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestCollectEnum",
        "optional": false,
        "range": [
          2436,
          2457
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 132
          },
          "start": {
            "column": 9,
            "line": 132
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
                "column": 41,
                "line": 132
              },
              "start": {
                "column": 32,
                "line": 132
              }
            },
            "range": [
              2459,
              2468
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                2461,
                2468
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 132
                },
                "start": {
                  "column": 34,
                  "line": 132
                }
              }
            }
          },
          "range": [
            2458,
            2468
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 132
            },
            "start": {
              "column": 31,
              "line": 132
            }
          }
        }
      ],
      "range": [
        2427,
        2841
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 144
        },
        "start": {
          "column": 0,
          "line": 132
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 149
                              },
                              "start": {
                                "column": 21,
                                "line": 149
                              }
                            },
                            "range": [
                              2939,
                              2942
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  2941,
                                  2942
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 149
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 149
                                  }
                                }
                              },
                              "range": [
                                2941,
                                2942
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 149
                                },
                                "start": {
                                  "column": 23,
                                  "line": 149
                                }
                              }
                            }
                          },
                          "range": [
                            2936,
                            2942
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 149
                            },
                            "start": {
                              "column": 18,
                              "line": 149
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2945,
                            2946
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 149
                            },
                            "start": {
                              "column": 27,
                              "line": 149
                            }
                          }
                        },
                        "range": [
                          2936,
                          2946
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 149
                          },
                          "start": {
                            "column": 18,
                            "line": 149
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2930,
                      2947
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 149
                      },
                      "start": {
                        "column": 12,
                        "line": 149
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2960,
                      2966
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 150
                      },
                      "start": {
                        "column": 12,
                        "line": 150
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2915,
                    2916
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 148
                    },
                    "start": {
                      "column": 13,
                      "line": 148
                    }
                  }
                },
                "range": [
                  2910,
                  2966
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 150
                  },
                  "start": {
                    "column": 8,
                    "line": 148
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "two",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 152
                              },
                              "start": {
                                "column": 21,
                                "line": 152
                              }
                            },
                            "range": [
                              3004,
                              3007
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  3006,
                                  3007
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 152
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 152
                                  }
                                }
                              },
                              "range": [
                                3006,
                                3007
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 152
                                },
                                "start": {
                                  "column": 23,
                                  "line": 152
                                }
                              }
                            }
                          },
                          "range": [
                            3001,
                            3007
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 152
                            },
                            "start": {
                              "column": 18,
                              "line": 152
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3010,
                            3011
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 152
                            },
                            "start": {
                              "column": 27,
                              "line": 152
                            }
                          }
                        },
                        "range": [
                          3001,
                          3011
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 152
                          },
                          "start": {
                            "column": 18,
                            "line": 152
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      2995,
                      3012
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 152
                      },
                      "start": {
                        "column": 12,
                        "line": 152
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3025,
                      3031
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 153
                      },
                      "start": {
                        "column": 12,
                        "line": 153
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2980,
                    2981
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 151
                    },
                    "start": {
                      "column": 13,
                      "line": 151
                    }
                  }
                },
                "range": [
                  2975,
                  3031
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 153
                  },
                  "start": {
                    "column": 8,
                    "line": 151
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "three",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 155
                              },
                              "start": {
                                "column": 23,
                                "line": 155
                              }
                            },
                            "range": [
                              3071,
                              3074
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "3",
                                "value": 3,
                                "range": [
                                  3073,
                                  3074
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 155
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 155
                                  }
                                }
                              },
                              "range": [
                                3073,
                                3074
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 155
                                },
                                "start": {
                                  "column": 25,
                                  "line": 155
                                }
                              }
                            }
                          },
                          "range": [
                            3066,
                            3074
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 155
                            },
                            "start": {
                              "column": 18,
                              "line": 155
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3077,
                            3078
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 155
                            },
                            "start": {
                              "column": 29,
                              "line": 155
                            }
                          }
                        },
                        "range": [
                          3066,
                          3078
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 155
                          },
                          "start": {
                            "column": 18,
                            "line": 155
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3060,
                      3079
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 155
                      },
                      "start": {
                        "column": 12,
                        "line": 155
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3092,
                      3098
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 156
                      },
                      "start": {
                        "column": 12,
                        "line": 156
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    3045,
                    3046
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 154
                    },
                    "start": {
                      "column": 13,
                      "line": 154
                    }
                  }
                },
                "range": [
                  3040,
                  3098
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 156
                  },
                  "start": {
                    "column": 8,
                    "line": 154
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 158
                              },
                              "start": {
                                "column": 19,
                                "line": 158
                              }
                            },
                            "range": [
                              3137,
                              3143
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "true",
                                "value": true,
                                "range": [
                                  3139,
                                  3143
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 158
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 158
                                  }
                                }
                              },
                              "range": [
                                3139,
                                3143
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 158
                                },
                                "start": {
                                  "column": 21,
                                  "line": 158
                                }
                              }
                            }
                          },
                          "range": [
                            3136,
                            3143
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 158
                            },
                            "start": {
                              "column": 18,
                              "line": 158
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3146,
                            3147
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 158
                            },
                            "start": {
                              "column": 28,
                              "line": 158
                            }
                          }
                        },
                        "range": [
                          3136,
                          3147
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 158
                          },
                          "start": {
                            "column": 18,
                            "line": 158
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3130,
                      3148
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 158
                      },
                      "start": {
                        "column": 12,
                        "line": 158
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3161,
                      3167
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 159
                      },
                      "start": {
                        "column": 12,
                        "line": 159
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    3112,
                    3116
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 157
                    },
                    "start": {
                      "column": 13,
                      "line": 157
                    }
                  }
                },
                "range": [
                  3107,
                  3167
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 159
                  },
                  "start": {
                    "column": 8,
                    "line": 157
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 161
                              },
                              "start": {
                                "column": 19,
                                "line": 161
                              }
                            },
                            "range": [
                              3207,
                              3214
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "false",
                                "value": false,
                                "range": [
                                  3209,
                                  3214
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 161
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 161
                                  }
                                }
                              },
                              "range": [
                                3209,
                                3214
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 161
                                },
                                "start": {
                                  "column": 21,
                                  "line": 161
                                }
                              }
                            }
                          },
                          "range": [
                            3206,
                            3214
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 161
                            },
                            "start": {
                              "column": 18,
                              "line": 161
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3217,
                            3218
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 161
                            },
                            "start": {
                              "column": 29,
                              "line": 161
                            }
                          }
                        },
                        "range": [
                          3206,
                          3218
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 161
                          },
                          "start": {
                            "column": 18,
                            "line": 161
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3200,
                      3219
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 161
                      },
                      "start": {
                        "column": 12,
                        "line": 161
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3232,
                      3238
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 162
                      },
                      "start": {
                        "column": 12,
                        "line": 162
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    3181,
                    3186
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 160
                    },
                    "start": {
                      "column": 13,
                      "line": 160
                    }
                  }
                },
                "range": [
                  3176,
                  3238
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 162
                  },
                  "start": {
                    "column": 8,
                    "line": 160
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
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
                                "column": 24,
                                "line": 164
                              },
                              "start": {
                                "column": 19,
                                "line": 164
                              }
                            },
                            "range": [
                              3276,
                              3281
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"A\"",
                                "value": "A",
                                "range": [
                                  3278,
                                  3281
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 164
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 164
                                  }
                                }
                              },
                              "range": [
                                3278,
                                3281
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 164
                                },
                                "start": {
                                  "column": 21,
                                  "line": 164
                                }
                              }
                            }
                          },
                          "range": [
                            3275,
                            3281
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 164
                            },
                            "start": {
                              "column": 18,
                              "line": 164
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3284,
                            3285
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 164
                            },
                            "start": {
                              "column": 27,
                              "line": 164
                            }
                          }
                        },
                        "range": [
                          3275,
                          3285
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 164
                          },
                          "start": {
                            "column": 18,
                            "line": 164
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3269,
                      3286
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 164
                      },
                      "start": {
                        "column": 12,
                        "line": 164
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3299,
                      3305
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 165
                      },
                      "start": {
                        "column": 12,
                        "line": 165
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    3252,
                    3255
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 163
                    },
                    "start": {
                      "column": 13,
                      "line": 163
                    }
                  }
                },
                "range": [
                  3247,
                  3305
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 165
                  },
                  "start": {
                    "column": 8,
                    "line": 163
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undef",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 167
                              },
                              "start": {
                                "column": 23,
                                "line": 167
                              }
                            },
                            "range": [
                              3353,
                              3364
                            ],
                            "typeAnnotation": {
                              "type": "TSUndefinedKeyword",
                              "range": [
                                3355,
                                3364
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 167
                                },
                                "start": {
                                  "column": 25,
                                  "line": 167
                                }
                              }
                            }
                          },
                          "range": [
                            3348,
                            3364
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 167
                            },
                            "start": {
                              "column": 18,
                              "line": 167
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3367,
                            3368
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 167
                            },
                            "start": {
                              "column": 37,
                              "line": 167
                            }
                          }
                        },
                        "range": [
                          3348,
                          3368
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 167
                          },
                          "start": {
                            "column": 18,
                            "line": 167
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3342,
                      3369
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 167
                      },
                      "start": {
                        "column": 12,
                        "line": 167
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3382,
                      3388
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 168
                      },
                      "start": {
                        "column": 12,
                        "line": 168
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    3319,
                    3328
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 166
                    },
                    "start": {
                      "column": 13,
                      "line": 166
                    }
                  }
                },
                "range": [
                  3314,
                  3388
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 168
                  },
                  "start": {
                    "column": 8,
                    "line": 166
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "llun",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 170
                              },
                              "start": {
                                "column": 22,
                                "line": 170
                              }
                            },
                            "range": [
                              3430,
                              3436
                            ],
                            "typeAnnotation": {
                              "type": "TSNullKeyword",
                              "range": [
                                3432,
                                3436
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 170
                                },
                                "start": {
                                  "column": 24,
                                  "line": 170
                                }
                              }
                            }
                          },
                          "range": [
                            3426,
                            3436
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 170
                            },
                            "start": {
                              "column": 18,
                              "line": 170
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3439,
                            3440
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 170
                            },
                            "start": {
                              "column": 31,
                              "line": 170
                            }
                          }
                        },
                        "range": [
                          3426,
                          3440
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 170
                          },
                          "start": {
                            "column": 18,
                            "line": 170
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3420,
                      3441
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 170
                      },
                      "start": {
                        "column": 12,
                        "line": 170
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3454,
                      3460
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 171
                      },
                      "start": {
                        "column": 12,
                        "line": 171
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    3402,
                    3406
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 169
                    },
                    "start": {
                      "column": 13,
                      "line": 169
                    }
                  }
                },
                "range": [
                  3397,
                  3460
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 171
                  },
                  "start": {
                    "column": 8,
                    "line": 169
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherSymbol",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 173
                              },
                              "start": {
                                "column": 31,
                                "line": 173
                              }
                            },
                            "range": [
                              3511,
                              3524
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symb",
                                "optional": false,
                                "range": [
                                  3520,
                                  3524
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 173
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 173
                                  }
                                }
                              },
                              "range": [
                                3513,
                                3524
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 173
                                },
                                "start": {
                                  "column": 33,
                                  "line": 173
                                }
                              }
                            }
                          },
                          "range": [
                            3498,
                            3524
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 173
                            },
                            "start": {
                              "column": 18,
                              "line": 173
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3527,
                            3528
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 173
                            },
                            "start": {
                              "column": 47,
                              "line": 173
                            }
                          }
                        },
                        "range": [
                          3498,
                          3528
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 173
                          },
                          "start": {
                            "column": 18,
                            "line": 173
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3492,
                      3529
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 173
                      },
                      "start": {
                        "column": 12,
                        "line": 173
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3542,
                      3548
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 174
                      },
                      "start": {
                        "column": 12,
                        "line": 174
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symb",
                  "optional": false,
                  "range": [
                    3474,
                    3478
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 172
                    },
                    "start": {
                      "column": 13,
                      "line": 172
                    }
                  }
                },
                "range": [
                  3469,
                  3548
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 174
                  },
                  "start": {
                    "column": 8,
                    "line": 172
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nonUniqueSymbol",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 176
                              },
                              "start": {
                                "column": 33,
                                "line": 176
                              }
                            },
                            "range": [
                              3610,
                              3618
                            ],
                            "typeAnnotation": {
                              "type": "TSSymbolKeyword",
                              "range": [
                                3612,
                                3618
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 176
                                },
                                "start": {
                                  "column": 35,
                                  "line": 176
                                }
                              }
                            }
                          },
                          "range": [
                            3595,
                            3618
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 176
                            },
                            "start": {
                              "column": 18,
                              "line": 176
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3621,
                            3622
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 176
                            },
                            "start": {
                              "column": 44,
                              "line": 176
                            }
                          }
                        },
                        "range": [
                          3595,
                          3622
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 176
                          },
                          "start": {
                            "column": 18,
                            "line": 176
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3589,
                      3623
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 176
                      },
                      "start": {
                        "column": 12,
                        "line": 176
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3636,
                      3642
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 177
                      },
                      "start": {
                        "column": 12,
                        "line": 177
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symbNonUnique",
                  "optional": false,
                  "range": [
                    3562,
                    3575
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 175
                    },
                    "start": {
                      "column": 13,
                      "line": 175
                    }
                  }
                },
                "range": [
                  3557,
                  3642
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 177
                  },
                  "start": {
                    "column": 8,
                    "line": 175
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2897,
                2898
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 147
                },
                "start": {
                  "column": 12,
                  "line": 147
                }
              }
            },
            "range": [
              2889,
              3648
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 178
              },
              "start": {
                "column": 4,
                "line": 147
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "range": [
                3658,
                3661
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 179
                },
                "start": {
                  "column": 9,
                  "line": 179
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3670,
                  3691
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3680,
                        3690
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              3688,
                              3689
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 179
                              },
                              "start": {
                                "column": 39,
                                "line": 179
                              }
                            }
                          },
                          "range": [
                            3681,
                            3689
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 179
                            },
                            "start": {
                              "column": 32,
                              "line": 179
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 179
                        },
                        "start": {
                          "column": 31,
                          "line": 179
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        3671,
                        3680
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 179
                        },
                        "start": {
                          "column": 22,
                          "line": 179
                        }
                      }
                    },
                    "range": [
                      3671,
                      3690
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 179
                      },
                      "start": {
                        "column": 22,
                        "line": 179
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 179
                  },
                  "start": {
                    "column": 21,
                    "line": 179
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  3664,
                  3670
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 179
                  },
                  "start": {
                    "column": 15,
                    "line": 179
                  }
                }
              },
              "range": [
                3664,
                3691
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 179
                },
                "start": {
                  "column": 15,
                  "line": 179
                }
              }
            },
            "range": [
              3653,
              3691
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 179
              },
              "start": {
                "column": 4,
                "line": 179
              }
            }
          }
        ],
        "range": [
          2883,
          3693
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 180
          },
          "start": {
            "column": 40,
            "line": 146
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestLiterals",
        "optional": false,
        "range": [
          2852,
          2870
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 146
          },
          "start": {
            "column": 9,
            "line": 146
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
                "line": 146
              },
              "start": {
                "column": 29,
                "line": 146
              }
            },
            "range": [
              2872,
              2881
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                2874,
                2881
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 146
                },
                "start": {
                  "column": 31,
                  "line": 146
                }
              }
            }
          },
          "range": [
            2871,
            2881
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 146
            },
            "start": {
              "column": 28,
              "line": 146
            }
          }
        }
      ],
      "range": [
        2843,
        3693
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 180
        },
        "start": {
          "column": 0,
          "line": 146
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    3802,
                    3806
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 184
                    },
                    "start": {
                      "column": 13,
                      "line": 184
                    }
                  }
                },
                "range": [
                  3797,
                  3807
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 184
                  },
                  "start": {
                    "column": 8,
                    "line": 184
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bool",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 186
                              },
                              "start": {
                                "column": 22,
                                "line": 186
                              }
                            },
                            "range": [
                              3850,
                              3859
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                3852,
                                3859
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 186
                                },
                                "start": {
                                  "column": 24,
                                  "line": 186
                                }
                              }
                            }
                          },
                          "range": [
                            3846,
                            3859
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 186
                            },
                            "start": {
                              "column": 18,
                              "line": 186
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3862,
                            3863
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 186
                            },
                            "start": {
                              "column": 34,
                              "line": 186
                            }
                          }
                        },
                        "range": [
                          3846,
                          3863
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 186
                          },
                          "start": {
                            "column": 18,
                            "line": 186
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3840,
                      3864
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 186
                      },
                      "start": {
                        "column": 12,
                        "line": 186
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3877,
                      3883
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 187
                      },
                      "start": {
                        "column": 12,
                        "line": 187
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    3821,
                    3826
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 185
                    },
                    "start": {
                      "column": 13,
                      "line": 185
                    }
                  }
                },
                "range": [
                  3816,
                  3883
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 187
                  },
                  "start": {
                    "column": 8,
                    "line": 185
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 189
                              },
                              "start": {
                                "column": 22,
                                "line": 189
                              }
                            },
                            "range": [
                              3922,
                              3930
                            ],
                            "typeAnnotation": {
                              "type": "TSObjectKeyword",
                              "range": [
                                3924,
                                3930
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 189
                                },
                                "start": {
                                  "column": 24,
                                  "line": 189
                                }
                              }
                            }
                          },
                          "range": [
                            3918,
                            3930
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 189
                            },
                            "start": {
                              "column": 18,
                              "line": 189
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3933,
                            3934
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 189
                            },
                            "start": {
                              "column": 33,
                              "line": 189
                            }
                          }
                        },
                        "range": [
                          3918,
                          3934
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 189
                          },
                          "start": {
                            "column": 18,
                            "line": 189
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3912,
                      3935
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 189
                      },
                      "start": {
                        "column": 12,
                        "line": 189
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3948,
                      3954
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 190
                      },
                      "start": {
                        "column": 12,
                        "line": 190
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    3897,
                    3898
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 188
                    },
                    "start": {
                      "column": 13,
                      "line": 188
                    }
                  }
                },
                "range": [
                  3892,
                  3954
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 190
                  },
                  "start": {
                    "column": 8,
                    "line": 188
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 192
                              },
                              "start": {
                                "column": 22,
                                "line": 192
                              }
                            },
                            "range": [
                              3993,
                              4001
                            ],
                            "typeAnnotation": {
                              "type": "TSObjectKeyword",
                              "range": [
                                3995,
                                4001
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 192
                                },
                                "start": {
                                  "column": 24,
                                  "line": 192
                                }
                              }
                            }
                          },
                          "range": [
                            3989,
                            4001
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 192
                            },
                            "start": {
                              "column": 18,
                              "line": 192
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            4004,
                            4005
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 192
                            },
                            "start": {
                              "column": 33,
                              "line": 192
                            }
                          }
                        },
                        "range": [
                          3989,
                          4005
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 192
                          },
                          "start": {
                            "column": 18,
                            "line": 192
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3983,
                      4006
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 192
                      },
                      "start": {
                        "column": 12,
                        "line": 192
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      4019,
                      4025
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 193
                      },
                      "start": {
                        "column": 12,
                        "line": 193
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    3968,
                    3969
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 191
                    },
                    "start": {
                      "column": 13,
                      "line": 191
                    }
                  }
                },
                "range": [
                  3963,
                  4025
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 193
                  },
                  "start": {
                    "column": 8,
                    "line": 191
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                3784,
                3785
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 183
                },
                "start": {
                  "column": 12,
                  "line": 183
                }
              }
            },
            "range": [
              3776,
              4031
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 194
              },
              "start": {
                "column": 4,
                "line": 183
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "range": [
                4041,
                4044
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 195
                },
                "start": {
                  "column": 9,
                  "line": 195
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4053,
                  4074
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4063,
                        4073
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              4071,
                              4072
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 195
                              },
                              "start": {
                                "column": 39,
                                "line": 195
                              }
                            }
                          },
                          "range": [
                            4064,
                            4072
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 195
                            },
                            "start": {
                              "column": 32,
                              "line": 195
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 195
                        },
                        "start": {
                          "column": 31,
                          "line": 195
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        4054,
                        4063
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 195
                        },
                        "start": {
                          "column": 22,
                          "line": 195
                        }
                      }
                    },
                    "range": [
                      4054,
                      4073
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 195
                      },
                      "start": {
                        "column": 22,
                        "line": 195
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 195
                  },
                  "start": {
                    "column": 21,
                    "line": 195
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  4047,
                  4053
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 195
                  },
                  "start": {
                    "column": 15,
                    "line": 195
                  }
                }
              },
              "range": [
                4047,
                4074
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 195
                },
                "start": {
                  "column": 15,
                  "line": 195
                }
              }
            },
            "range": [
              4036,
              4074
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 195
              },
              "start": {
                "column": 4,
                "line": 195
              }
            }
          }
        ],
        "range": [
          3770,
          4076
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 196
          },
          "start": {
            "column": 75,
            "line": 182
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestObjects",
        "optional": false,
        "range": [
          3704,
          3721
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 182
          },
          "start": {
            "column": 9,
            "line": 182
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
                "column": 37,
                "line": 182
              },
              "start": {
                "column": 28,
                "line": 182
              }
            },
            "range": [
              3723,
              3732
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                3725,
                3732
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 182
                },
                "start": {
                  "column": 30,
                  "line": 182
                }
              }
            }
          },
          "range": [
            3722,
            3732
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 182
            },
            "start": {
              "column": 27,
              "line": 182
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
                "line": 182
              },
              "start": {
                "column": 40,
                "line": 182
              }
            },
            "range": [
              3735,
              3747
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 182
                  },
                  "start": {
                    "column": 45,
                    "line": 182
                  }
                },
                "range": [
                  3740,
                  3747
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3743,
                    3747
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 182
                    },
                    "start": {
                      "column": 48,
                      "line": 182
                    }
                  }
                }
              },
              "range": [
                3737,
                3747
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 182
                },
                "start": {
                  "column": 42,
                  "line": 182
                }
              }
            }
          },
          "range": [
            3734,
            3747
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 182
            },
            "start": {
              "column": 39,
              "line": 182
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 182
              },
              "start": {
                "column": 55,
                "line": 182
              }
            },
            "range": [
              3750,
              3768
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
                    "name": "prop",
                    "optional": false,
                    "range": [
                      3754,
                      3758
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 182
                      },
                      "start": {
                        "column": 59,
                        "line": 182
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
                        "column": 71,
                        "line": 182
                      },
                      "start": {
                        "column": 63,
                        "line": 182
                      }
                    },
                    "range": [
                      3758,
                      3766
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3760,
                        3766
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 182
                        },
                        "start": {
                          "column": 65,
                          "line": 182
                        }
                      }
                    }
                  },
                  "range": [
                    3754,
                    3766
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 182
                    },
                    "start": {
                      "column": 59,
                      "line": 182
                    }
                  }
                }
              ],
              "range": [
                3752,
                3768
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 182
                },
                "start": {
                  "column": 57,
                  "line": 182
                }
              }
            }
          },
          "range": [
            3749,
            3768
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 182
            },
            "start": {
              "column": 54,
              "line": 182
            }
          }
        }
      ],
      "range": [
        3695,
        4076
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 196
        },
        "start": {
          "column": 0,
          "line": 182
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "'yes'",
                  "value": "yes",
                  "range": [
                    4160,
                    4165
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 200
                    },
                    "start": {
                      "column": 13,
                      "line": 200
                    }
                  }
                },
                "range": [
                  4155,
                  4166
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 200
                  },
                  "start": {
                    "column": 8,
                    "line": 200
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "'no'",
                  "value": "no",
                  "range": [
                    4180,
                    4184
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 201
                    },
                    "start": {
                      "column": 13,
                      "line": 201
                    }
                  }
                },
                "range": [
                  4175,
                  4185
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 201
                  },
                  "start": {
                    "column": 8,
                    "line": 201
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4225,
                        4226
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 203
                        },
                        "start": {
                          "column": 19,
                          "line": 203
                        }
                      }
                    },
                    "range": [
                      4218,
                      4227
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 203
                      },
                      "start": {
                        "column": 12,
                        "line": 203
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "'idk'",
                  "value": "idk",
                  "range": [
                    4199,
                    4204
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 202
                    },
                    "start": {
                      "column": 13,
                      "line": 202
                    }
                  }
                },
                "range": [
                  4194,
                  4227
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 203
                  },
                  "start": {
                    "column": 8,
                    "line": 202
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "'unknown response'",
                          "value": "unknown response",
                          "range": [
                            4273,
                            4291
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 205
                            },
                            "start": {
                              "column": 28,
                              "line": 205
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          4267,
                          4272
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 205
                          },
                          "start": {
                            "column": 22,
                            "line": 205
                          }
                        }
                      },
                      "range": [
                        4263,
                        4292
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 205
                        },
                        "start": {
                          "column": 18,
                          "line": 205
                        }
                      }
                    },
                    "range": [
                      4257,
                      4293
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 205
                      },
                      "start": {
                        "column": 12,
                        "line": 205
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  4236,
                  4293
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 205
                  },
                  "start": {
                    "column": 8,
                    "line": 204
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                4142,
                4143
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 199
                },
                "start": {
                  "column": 12,
                  "line": 199
                }
              }
            },
            "range": [
              4134,
              4299
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 206
              },
              "start": {
                "column": 4,
                "line": 199
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "range": [
                4347,
                4350
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 208
                },
                "start": {
                  "column": 9,
                  "line": 208
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4359,
                  4380
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4369,
                        4379
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              4377,
                              4378
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 208
                              },
                              "start": {
                                "column": 39,
                                "line": 208
                              }
                            }
                          },
                          "range": [
                            4370,
                            4378
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 208
                            },
                            "start": {
                              "column": 32,
                              "line": 208
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 208
                        },
                        "start": {
                          "column": 31,
                          "line": 208
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        4360,
                        4369
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 208
                        },
                        "start": {
                          "column": 22,
                          "line": 208
                        }
                      }
                    },
                    "range": [
                      4360,
                      4379
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 208
                      },
                      "start": {
                        "column": 22,
                        "line": 208
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 208
                  },
                  "start": {
                    "column": 21,
                    "line": 208
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  4353,
                  4359
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 208
                  },
                  "start": {
                    "column": 15,
                    "line": 208
                  }
                }
              },
              "range": [
                4353,
                4380
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 208
                },
                "start": {
                  "column": 15,
                  "line": 208
                }
              }
            },
            "range": [
              4342,
              4380
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 208
              },
              "start": {
                "column": 4,
                "line": 208
              }
            }
          }
        ],
        "range": [
          4128,
          4382
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 209
          },
          "start": {
            "column": 50,
            "line": 198
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchResponse",
        "optional": false,
        "range": [
          4087,
          4101
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 198
          },
          "start": {
            "column": 9,
            "line": 198
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
                "column": 34,
                "line": 198
              },
              "start": {
                "column": 25,
                "line": 198
              }
            },
            "range": [
              4103,
              4112
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4105,
                4112
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 198
                },
                "start": {
                  "column": 27,
                  "line": 198
                }
              }
            }
          },
          "range": [
            4102,
            4112
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 198
            },
            "start": {
              "column": 24,
              "line": 198
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 198
          },
          "start": {
            "column": 35,
            "line": 198
          }
        },
        "range": [
          4113,
          4127
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeResponse",
            "optional": false,
            "range": [
              4115,
              4127
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 198
              },
              "start": {
                "column": 37,
                "line": 198
              }
            }
          },
          "range": [
            4115,
            4127
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 198
            },
            "start": {
              "column": 37,
              "line": 198
            }
          }
        }
      },
      "range": [
        4078,
        4382
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 209
        },
        "start": {
          "column": 0,
          "line": 198
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "'yes'",
                  "value": "yes",
                  "range": [
                    4471,
                    4476
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 213
                    },
                    "start": {
                      "column": 13,
                      "line": 213
                    }
                  }
                },
                "range": [
                  4466,
                  4477
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 213
                  },
                  "start": {
                    "column": 8,
                    "line": 213
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "'no'",
                  "value": "no",
                  "range": [
                    4491,
                    4495
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 214
                    },
                    "start": {
                      "column": 13,
                      "line": 214
                    }
                  }
                },
                "range": [
                  4486,
                  4496
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 214
                  },
                  "start": {
                    "column": 8,
                    "line": 214
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4538,
                        4539
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 216
                        },
                        "start": {
                          "column": 19,
                          "line": 216
                        }
                      }
                    },
                    "range": [
                      4531,
                      4540
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 216
                      },
                      "start": {
                        "column": 12,
                        "line": 216
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "'maybe'",
                  "value": "maybe",
                  "range": [
                    4510,
                    4517
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 215
                    },
                    "start": {
                      "column": 13,
                      "line": 215
                    }
                  }
                },
                "range": [
                  4505,
                  4540
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 216
                  },
                  "start": {
                    "column": 8,
                    "line": 215
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "'Can you repeat the question?'",
                          "value": "Can you repeat the question?",
                          "range": [
                            4595,
                            4625
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 218
                            },
                            "start": {
                              "column": 28,
                              "line": 218
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          4589,
                          4594
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 218
                          },
                          "start": {
                            "column": 22,
                            "line": 218
                          }
                        }
                      },
                      "range": [
                        4585,
                        4626
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 218
                        },
                        "start": {
                          "column": 18,
                          "line": 218
                        }
                      }
                    },
                    "range": [
                      4579,
                      4627
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 218
                      },
                      "start": {
                        "column": 12,
                        "line": 218
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  4558,
                  4627
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 218
                  },
                  "start": {
                    "column": 8,
                    "line": 217
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                4453,
                4454
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 212
                },
                "start": {
                  "column": 12,
                  "line": 212
                }
              }
            },
            "range": [
              4445,
              4633
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 219
              },
              "start": {
                "column": 4,
                "line": 212
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "range": [
                4681,
                4684
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 221
                },
                "start": {
                  "column": 9,
                  "line": 221
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4693,
                  4714
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4703,
                        4713
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              4711,
                              4712
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 221
                              },
                              "start": {
                                "column": 39,
                                "line": 221
                              }
                            }
                          },
                          "range": [
                            4704,
                            4712
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 221
                            },
                            "start": {
                              "column": 32,
                              "line": 221
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 221
                        },
                        "start": {
                          "column": 31,
                          "line": 221
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "range": [
                        4694,
                        4703
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 221
                        },
                        "start": {
                          "column": 22,
                          "line": 221
                        }
                      }
                    },
                    "range": [
                      4694,
                      4713
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 221
                      },
                      "start": {
                        "column": 22,
                        "line": 221
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 221
                  },
                  "start": {
                    "column": 21,
                    "line": 221
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "range": [
                  4687,
                  4693
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 221
                  },
                  "start": {
                    "column": 15,
                    "line": 221
                  }
                }
              },
              "range": [
                4687,
                4714
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 221
                },
                "start": {
                  "column": 15,
                  "line": 221
                }
              }
            },
            "range": [
              4676,
              4714
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 221
              },
              "start": {
                "column": 4,
                "line": 221
              }
            }
          }
        ],
        "range": [
          4439,
          4716
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 222
          },
          "start": {
            "column": 55,
            "line": 211
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchResponseWrong",
        "optional": false,
        "range": [
          4393,
          4412
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 211
          },
          "start": {
            "column": 9,
            "line": 211
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
                "column": 39,
                "line": 211
              },
              "start": {
                "column": 30,
                "line": 211
              }
            },
            "range": [
              4414,
              4423
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4416,
                4423
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 211
                },
                "start": {
                  "column": 32,
                  "line": 211
                }
              }
            }
          },
          "range": [
            4413,
            4423
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 211
            },
            "start": {
              "column": 29,
              "line": 211
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 211
          },
          "start": {
            "column": 40,
            "line": 211
          }
        },
        "range": [
          4424,
          4438
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeResponse",
            "optional": false,
            "range": [
              4426,
              4438
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 211
              },
              "start": {
                "column": 42,
                "line": 211
              }
            }
          },
          "range": [
            4426,
            4438
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 211
            },
            "start": {
              "column": 42,
              "line": 211
            }
          }
        }
      },
      "range": [
        4384,
        4716
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 222
        },
        "start": {
          "column": 0,
          "line": 211
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
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        4850,
                        4855
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 228
                        },
                        "start": {
                          "column": 14,
                          "line": 228
                        }
                      }
                    },
                    "range": [
                      4846,
                      4857
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 228
                      },
                      "start": {
                        "column": 10,
                        "line": 228
                      }
                    }
                  },
                  "range": [
                    4840,
                    4858
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 228
                    },
                    "start": {
                      "column": 4,
                      "line": 228
                    }
                  }
                }
              ],
              "range": [
                4834,
                4862
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 229
                },
                "start": {
                  "column": 48,
                  "line": 227
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    4792,
                    4793
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 227
                    },
                    "start": {
                      "column": 6,
                      "line": 227
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    4798,
                    4807
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 227
                    },
                    "start": {
                      "column": 12,
                      "line": 227
                    }
                  }
                },
                "range": [
                  4792,
                  4807
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 227
                  },
                  "start": {
                    "column": 6,
                    "line": 227
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4818,
                      4819
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 227
                      },
                      "start": {
                        "column": 32,
                        "line": 227
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    4811,
                    4819
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 227
                    },
                    "start": {
                      "column": 25,
                      "line": 227
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'string'",
                  "value": "string",
                  "range": [
                    4824,
                    4832
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 227
                    },
                    "start": {
                      "column": 38,
                      "line": 227
                    }
                  }
                },
                "range": [
                  4811,
                  4832
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 227
                  },
                  "start": {
                    "column": 25,
                    "line": 227
                  }
                }
              },
              "range": [
                4792,
                4832
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 227
                },
                "start": {
                  "column": 6,
                  "line": 227
                }
              }
            },
            "range": [
              4788,
              4862
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 229
              },
              "start": {
                "column": 2,
                "line": 227
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                4872,
                4873
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 230
                },
                "start": {
                  "column": 9,
                  "line": 230
                }
              }
            },
            "range": [
              4865,
              4874
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 230
              },
              "start": {
                "column": 2,
                "line": 230
              }
            }
          }
        ],
        "range": [
          4784,
          4876
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 231
          },
          "start": {
            "column": 44,
            "line": 226
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          4749,
          4751
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 226
          },
          "start": {
            "column": 9,
            "line": 226
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
                "column": 22,
                "line": 226
              },
              "start": {
                "column": 13,
                "line": 226
              }
            },
            "range": [
              4753,
              4762
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4755,
                4762
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 226
                },
                "start": {
                  "column": 15,
                  "line": 226
                }
              }
            }
          },
          "range": [
            4752,
            4762
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 226
            },
            "start": {
              "column": 12,
              "line": 226
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 226
          },
          "start": {
            "column": 23,
            "line": 226
          }
        },
        "range": [
          4763,
          4783
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                4765,
                4771
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 226
                },
                "start": {
                  "column": 25,
                  "line": 226
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                4774,
                4783
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 226
                },
                "start": {
                  "column": 34,
                  "line": 226
                }
              }
            }
          ],
          "range": [
            4765,
            4783
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 226
            },
            "start": {
              "column": 25,
              "line": 226
            }
          }
        }
      },
      "range": [
        4740,
        4876
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 231
        },
        "start": {
          "column": 0,
          "line": 226
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
            "alternate": {
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
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 236
                            },
                            "start": {
                              "column": 15,
                              "line": 236
                            }
                          },
                          "range": [
                            4971,
                            4979
                          ],
                          "typeAnnotation": {
                            "type": "TSObjectKeyword",
                            "range": [
                              4973,
                              4979
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 236
                              },
                              "start": {
                                "column": 17,
                                "line": 236
                              }
                            }
                          }
                        },
                        "range": [
                          4970,
                          4979
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 236
                          },
                          "start": {
                            "column": 14,
                            "line": 236
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "range": [
                          4982,
                          4983
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 236
                          },
                          "start": {
                            "column": 26,
                            "line": 236
                          }
                        }
                      },
                      "range": [
                        4970,
                        4983
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 236
                        },
                        "start": {
                          "column": 14,
                          "line": 236
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    4964,
                    4984
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 236
                    },
                    "start": {
                      "column": 8,
                      "line": 236
                    }
                  }
                }
              ],
              "range": [
                4954,
                4990
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 237
                },
                "start": {
                  "column": 9,
                  "line": 235
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                4941,
                4944
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 234
                },
                "start": {
                  "column": 26,
                  "line": 234
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  4923,
                  4924
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 234
                  },
                  "start": {
                    "column": 8,
                    "line": 234
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberEnum",
                "optional": false,
                "range": [
                  4929,
                  4939
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 234
                  },
                  "start": {
                    "column": 14,
                    "line": 234
                  }
                }
              },
              "range": [
                4923,
                4939
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 234
                },
                "start": {
                  "column": 8,
                  "line": 234
                }
              }
            },
            "range": [
              4919,
              4990
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 237
              },
              "start": {
                "column": 4,
                "line": 234
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 241
                            },
                            "start": {
                              "column": 15,
                              "line": 241
                            }
                          },
                          "range": [
                            5050,
                            5064
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NumberEnum",
                                "optional": false,
                                "range": [
                                  5052,
                                  5062
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 241
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 241
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  5063,
                                  5064
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 241
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 241
                                  }
                                }
                              },
                              "range": [
                                5052,
                                5064
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 241
                                },
                                "start": {
                                  "column": 17,
                                  "line": 241
                                }
                              }
                            },
                            "range": [
                              5052,
                              5064
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 241
                              },
                              "start": {
                                "column": 17,
                                "line": 241
                              }
                            }
                          }
                        },
                        "range": [
                          5049,
                          5064
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 241
                          },
                          "start": {
                            "column": 14,
                            "line": 241
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "range": [
                          5067,
                          5068
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 241
                          },
                          "start": {
                            "column": 32,
                            "line": 241
                          }
                        }
                      },
                      "range": [
                        5049,
                        5068
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 241
                        },
                        "start": {
                          "column": 14,
                          "line": 241
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    5043,
                    5069
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 241
                    },
                    "start": {
                      "column": 8,
                      "line": 241
                    }
                  }
                }
              ],
              "range": [
                5033,
                5075
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 242
                },
                "start": {
                  "column": 9,
                  "line": 240
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                5020,
                5023
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 239
                },
                "start": {
                  "column": 28,
                  "line": 239
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  5000,
                  5001
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 239
                  },
                  "start": {
                    "column": 8,
                    "line": 239
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberEnum",
                  "optional": false,
                  "range": [
                    5006,
                    5016
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 239
                    },
                    "start": {
                      "column": 14,
                      "line": 239
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    5017,
                    5018
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 239
                    },
                    "start": {
                      "column": 25,
                      "line": 239
                    }
                  }
                },
                "range": [
                  5006,
                  5018
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 239
                  },
                  "start": {
                    "column": 14,
                    "line": 239
                  }
                }
              },
              "range": [
                5000,
                5018
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 239
                },
                "start": {
                  "column": 8,
                  "line": 239
                }
              }
            },
            "range": [
              4996,
              5075
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 242
              },
              "start": {
                "column": 4,
                "line": 239
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                        "name": "aOrB",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 247
                            },
                            "start": {
                              "column": 18,
                              "line": 247
                            }
                          },
                          "range": [
                            5183,
                            5227
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "range": [
                                      5185,
                                      5195
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 247
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 247
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "range": [
                                      5196,
                                      5197
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 247
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 247
                                      }
                                    }
                                  },
                                  "range": [
                                    5185,
                                    5197
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 247
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 247
                                    }
                                  }
                                },
                                "range": [
                                  5185,
                                  5197
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 247
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 247
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "range": [
                                      5200,
                                      5210
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 247
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 247
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "range": [
                                      5211,
                                      5212
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 247
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 247
                                      }
                                    }
                                  },
                                  "range": [
                                    5200,
                                    5212
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 247
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 247
                                    }
                                  }
                                },
                                "range": [
                                  5200,
                                  5212
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 247
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 247
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringEnum",
                                    "optional": false,
                                    "range": [
                                      5215,
                                      5225
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 247
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 247
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "range": [
                                      5226,
                                      5227
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 62,
                                        "line": 247
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 247
                                      }
                                    }
                                  },
                                  "range": [
                                    5215,
                                    5227
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 247
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 247
                                    }
                                  }
                                },
                                "range": [
                                  5215,
                                  5227
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 247
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 247
                                  }
                                }
                              }
                            ],
                            "range": [
                              5185,
                              5227
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 247
                              },
                              "start": {
                                "column": 20,
                                "line": 247
                              }
                            }
                          }
                        },
                        "range": [
                          5179,
                          5227
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 247
                          },
                          "start": {
                            "column": 14,
                            "line": 247
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "range": [
                          5231,
                          5232
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 247
                          },
                          "start": {
                            "column": 66,
                            "line": 247
                          }
                        }
                      },
                      "range": [
                        5179,
                        5232
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 247
                        },
                        "start": {
                          "column": 14,
                          "line": 247
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    5173,
                    5233
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 247
                    },
                    "start": {
                      "column": 8,
                      "line": 247
                    }
                  }
                }
              ],
              "range": [
                5163,
                5239
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 248
                },
                "start": {
                  "column": 9,
                  "line": 246
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                5150,
                5153
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 245
                },
                "start": {
                  "column": 72,
                  "line": 245
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      5086,
                      5087
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 245
                      },
                      "start": {
                        "column": 8,
                        "line": 245
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberEnum",
                      "optional": false,
                      "range": [
                        5092,
                        5102
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 245
                        },
                        "start": {
                          "column": 14,
                          "line": 245
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        5103,
                        5104
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 245
                        },
                        "start": {
                          "column": 25,
                          "line": 245
                        }
                      }
                    },
                    "range": [
                      5092,
                      5104
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 245
                      },
                      "start": {
                        "column": 14,
                        "line": 245
                      }
                    }
                  },
                  "range": [
                    5086,
                    5104
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 245
                    },
                    "start": {
                      "column": 8,
                      "line": 245
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      5108,
                      5109
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 245
                      },
                      "start": {
                        "column": 30,
                        "line": 245
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberEnum",
                      "optional": false,
                      "range": [
                        5114,
                        5124
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 245
                        },
                        "start": {
                          "column": 36,
                          "line": 245
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        5125,
                        5126
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 245
                        },
                        "start": {
                          "column": 47,
                          "line": 245
                        }
                      }
                    },
                    "range": [
                      5114,
                      5126
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 245
                      },
                      "start": {
                        "column": 36,
                        "line": 245
                      }
                    }
                  },
                  "range": [
                    5108,
                    5126
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 245
                    },
                    "start": {
                      "column": 30,
                      "line": 245
                    }
                  }
                },
                "range": [
                  5086,
                  5126
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 245
                  },
                  "start": {
                    "column": 8,
                    "line": 245
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "range": [
                    5130,
                    5131
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 245
                    },
                    "start": {
                      "column": 52,
                      "line": 245
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "range": [
                      5136,
                      5146
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 245
                      },
                      "start": {
                        "column": 58,
                        "line": 245
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      5147,
                      5148
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 245
                      },
                      "start": {
                        "column": 69,
                        "line": 245
                      }
                    }
                  },
                  "range": [
                    5136,
                    5148
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 245
                    },
                    "start": {
                      "column": 58,
                      "line": 245
                    }
                  }
                },
                "range": [
                  5130,
                  5148
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 245
                  },
                  "start": {
                    "column": 52,
                    "line": 245
                  }
                }
              },
              "range": [
                5086,
                5148
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 245
                },
                "start": {
                  "column": 8,
                  "line": 245
                }
              }
            },
            "range": [
              5082,
              5239
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 248
              },
              "start": {
                "column": 4,
                "line": 245
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                        "name": "aOrB",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 253
                            },
                            "start": {
                              "column": 18,
                              "line": 253
                            }
                          },
                          "range": [
                            5370,
                            5414
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "range": [
                                      5372,
                                      5382
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 253
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 253
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "range": [
                                      5383,
                                      5384
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 253
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 253
                                      }
                                    }
                                  },
                                  "range": [
                                    5372,
                                    5384
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 253
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 253
                                    }
                                  }
                                },
                                "range": [
                                  5372,
                                  5384
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 253
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 253
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "range": [
                                      5387,
                                      5397
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 253
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 253
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "range": [
                                      5398,
                                      5399
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 253
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 253
                                      }
                                    }
                                  },
                                  "range": [
                                    5387,
                                    5399
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 253
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 253
                                    }
                                  }
                                },
                                "range": [
                                  5387,
                                  5399
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 253
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 253
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringEnum",
                                    "optional": false,
                                    "range": [
                                      5402,
                                      5412
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 253
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 253
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "range": [
                                      5413,
                                      5414
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 62,
                                        "line": 253
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 253
                                      }
                                    }
                                  },
                                  "range": [
                                    5402,
                                    5414
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 253
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 253
                                    }
                                  }
                                },
                                "range": [
                                  5402,
                                  5414
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 253
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 253
                                  }
                                }
                              }
                            ],
                            "range": [
                              5372,
                              5414
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 253
                              },
                              "start": {
                                "column": 20,
                                "line": 253
                              }
                            }
                          }
                        },
                        "range": [
                          5366,
                          5414
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 253
                          },
                          "start": {
                            "column": 14,
                            "line": 253
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "range": [
                          5418,
                          5419
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 253
                          },
                          "start": {
                            "column": 66,
                            "line": 253
                          }
                        }
                      },
                      "range": [
                        5366,
                        5419
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 253
                        },
                        "start": {
                          "column": 14,
                          "line": 253
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    5360,
                    5420
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 253
                    },
                    "start": {
                      "column": 8,
                      "line": 253
                    }
                  }
                }
              ],
              "range": [
                5350,
                5426
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 254
                },
                "start": {
                  "column": 9,
                  "line": 252
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                5337,
                5340
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 251
                },
                "start": {
                  "column": 75,
                  "line": 251
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "range": [
                        5272,
                        5273
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 251
                        },
                        "start": {
                          "column": 10,
                          "line": 251
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberEnum",
                        "optional": false,
                        "range": [
                          5278,
                          5288
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 251
                          },
                          "start": {
                            "column": 16,
                            "line": 251
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          5289,
                          5290
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 251
                          },
                          "start": {
                            "column": 27,
                            "line": 251
                          }
                        }
                      },
                      "range": [
                        5278,
                        5290
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 251
                        },
                        "start": {
                          "column": 16,
                          "line": 251
                        }
                      }
                    },
                    "range": [
                      5272,
                      5290
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 251
                      },
                      "start": {
                        "column": 10,
                        "line": 251
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "range": [
                        5294,
                        5295
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 251
                        },
                        "start": {
                          "column": 32,
                          "line": 251
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberEnum",
                        "optional": false,
                        "range": [
                          5300,
                          5310
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 251
                          },
                          "start": {
                            "column": 38,
                            "line": 251
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          5311,
                          5312
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 251
                          },
                          "start": {
                            "column": 49,
                            "line": 251
                          }
                        }
                      },
                      "range": [
                        5300,
                        5312
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 251
                        },
                        "start": {
                          "column": 38,
                          "line": 251
                        }
                      }
                    },
                    "range": [
                      5294,
                      5312
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 251
                      },
                      "start": {
                        "column": 32,
                        "line": 251
                      }
                    }
                  },
                  "range": [
                    5272,
                    5312
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 251
                    },
                    "start": {
                      "column": 10,
                      "line": 251
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      5316,
                      5317
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 251
                      },
                      "start": {
                        "column": 54,
                        "line": 251
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StringEnum",
                      "optional": false,
                      "range": [
                        5322,
                        5332
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 251
                        },
                        "start": {
                          "column": 60,
                          "line": 251
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        5333,
                        5334
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 251
                        },
                        "start": {
                          "column": 71,
                          "line": 251
                        }
                      }
                    },
                    "range": [
                      5322,
                      5334
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 251
                      },
                      "start": {
                        "column": 60,
                        "line": 251
                      }
                    }
                  },
                  "range": [
                    5316,
                    5334
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 251
                    },
                    "start": {
                      "column": 54,
                      "line": 251
                    }
                  }
                },
                "range": [
                  5272,
                  5334
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 251
                  },
                  "start": {
                    "column": 10,
                    "line": 251
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                5270,
                5335
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 251
                },
                "start": {
                  "column": 8,
                  "line": 251
                }
              }
            },
            "range": [
              5266,
              5426
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 254
              },
              "start": {
                "column": 4,
                "line": 251
              }
            }
          }
        ],
        "range": [
          4913,
          5428
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 255
          },
          "start": {
            "column": 35,
            "line": 233
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notNotEquals",
        "optional": false,
        "range": [
          4887,
          4899
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 233
          },
          "start": {
            "column": 9,
            "line": 233
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 233
              },
              "start": {
                "column": 23,
                "line": 233
              }
            },
            "range": [
              4901,
              4910
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4903,
                4910
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 233
                },
                "start": {
                  "column": 25,
                  "line": 233
                }
              }
            }
          },
          "range": [
            4900,
            4910
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 233
            },
            "start": {
              "column": 22,
              "line": 233
            }
          }
        }
      ],
      "range": [
        4878,
        5428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 255
        },
        "start": {
          "column": 0,
          "line": 233
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 260
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
