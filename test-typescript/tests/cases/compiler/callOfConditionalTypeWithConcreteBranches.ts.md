__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1445
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
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
          "type": "TSNumberKeyword",
          "range": [
            12,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 12,
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
              27,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          "range": [
            27,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            53,
            58
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 1
            },
            "start": {
              "column": 53,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                },
                "range": [
                  33,
                  41
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    35,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                32,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            },
            "range": [
              43,
              50
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                46,
                50
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              }
            }
          },
          "range": [
            31,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          }
        },
        "range": [
          12,
          58
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        },
        "range": [
          6,
          9
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
                7,
                8
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              7,
              8
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 1
              },
              "start": {
                "column": 7,
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
          "column": 59,
          "line": 1
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    157,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  153,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 2,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                153,
                160
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "range": [
              153,
              161
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "range": [
          86,
          163
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          69,
          71
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 18,
                "line": 2
              }
            },
            "range": [
              78,
              84
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  81,
                  84
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
                        82,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 22,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      82,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 22,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "range": [
                  80,
                  81
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
                80,
                84
              ],
              "loc": {
                "end": {
                  "column": 24,
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
            75,
            84
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
            },
            "start": {
              "column": 15,
              "line": 2
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        },
        "range": [
          71,
          74
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
                72,
                73
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
              72,
              73
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
          }
        ]
      },
      "range": [
        60,
        163
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "range": [
                    230,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "range": [
                    232,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  }
                },
                "range": [
                  230,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                230,
                241
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
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
                "name": "m",
                "optional": false,
                "range": [
                  225,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              225,
              241
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            205,
            207
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            207,
            224
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    208,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 3,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    217,
                    223
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
                }
              ],
              "range": [
                208,
                223
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 3,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 8
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        },
        "range": [
          205,
          242
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        205,
        243
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "range": [
                    260,
                    261
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "range": [
                    262,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                "range": [
                  260,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                260,
                271
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
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
                "name": "m",
                "optional": false,
                "range": [
                  255,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              255,
              271
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            244,
            246
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            246,
            254
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                247,
                253
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 3,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 2,
              "line": 9
            }
          }
        },
        "range": [
          244,
          272
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        244,
        273
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractParameters",
        "optional": false,
        "range": [
          363,
          380
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"parameters\"",
            "value": "parameters",
            "range": [
              386,
              398
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 12
              },
              "start": {
                "column": 28,
                "line": 12
              }
            }
          },
          "range": [
            386,
            398
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 12
            },
            "start": {
              "column": 28,
              "line": 12
            }
          }
        },
        "extendsType": {
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
                413,
                414
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 12
                },
                "start": {
                  "column": 55,
                  "line": 12
                }
              }
            },
            "range": [
              413,
              414
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 12
              },
              "start": {
                "column": 55,
                "line": 12
              }
            }
          },
          "range": [
            407,
            414
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 12
            },
            "start": {
              "column": 49,
              "line": 12
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            643,
            645
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"parameters\"",
                  "value": "parameters",
                  "range": [
                    624,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 17
                    },
                    "start": {
                      "column": 16,
                      "line": 17
                    }
                  }
                },
                "range": [
                  624,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 17
                  },
                  "start": {
                    "column": 16,
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
                    622,
                    623
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 17
                    },
                    "start": {
                      "column": 14,
                      "line": 17
                    }
                  }
                },
                "range": [
                  622,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              },
              "range": [
                622,
                637
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "range": [
              616,
              637
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "objectType": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"parameters\"",
                    "value": "parameters",
                    "range": [
                      572,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 16
                      },
                      "start": {
                        "column": 22,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    572,
                    584
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
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
                      570,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 16
                      },
                      "start": {
                        "column": 20,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    570,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                },
                "range": [
                  570,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 16
                  },
                  "start": {
                    "column": 20,
                    "line": 16
                  }
                }
              },
              "range": [
                564,
                585
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 16
                },
                "start": {
                  "column": 14,
                  "line": 16
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                559,
                560
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
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
                    604,
                    605
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 16
                    },
                    "start": {
                      "column": 54,
                      "line": 16
                    }
                  }
                },
                "range": [
                  604,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 16
                  },
                  "start": {
                    "column": 54,
                    "line": 16
                  }
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"parameters\"",
                    "value": "parameters",
                    "range": [
                      590,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 16
                      },
                      "start": {
                        "column": 40,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    590,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 16
                    },
                    "start": {
                      "column": 40,
                      "line": 16
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
                      588,
                      589
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
                  },
                  "range": [
                    588,
                    589
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
                },
                "range": [
                  588,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 16
                  },
                  "start": {
                    "column": 38,
                    "line": 16
                  }
                }
              },
              "range": [
                588,
                606
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 16
                },
                "start": {
                  "column": 38,
                  "line": 16
                }
              }
            },
            "range": [
              548,
              615
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 17
              },
              "start": {
                "column": 5,
                "line": 15
              }
            }
          },
          "range": [
            548,
            638
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 17
            },
            "start": {
              "column": 5,
              "line": 15
            }
          }
        },
        "range": [
          386,
          645
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 18
          },
          "start": {
            "column": 28,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 12
          },
          "start": {
            "column": 22,
            "line": 12
          }
        },
        "range": [
          380,
          383
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
                381,
                382
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              381,
              382
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        358,
        646
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q2",
        "optional": false,
        "range": [
          701,
          703
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "range": [
            709,
            715
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 21
            },
            "start": {
              "column": 13,
              "line": 21
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
              724,
              725
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 21
              },
              "start": {
                "column": 28,
                "line": 21
              }
            }
          },
          "range": [
            724,
            725
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 21
            },
            "start": {
              "column": 28,
              "line": 21
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            764,
            769
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 21
            },
            "start": {
              "column": 68,
              "line": 21
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 21
                  },
                  "start": {
                    "column": 35,
                    "line": 21
                  }
                },
                "range": [
                  731,
                  752
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 21
                          },
                          "start": {
                            "column": 39,
                            "line": 21
                          }
                        },
                        "range": [
                          735,
                          743
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            737,
                            743
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 21
                            },
                            "start": {
                              "column": 41,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        734,
                        743
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 21
                        },
                        "start": {
                          "column": 38,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 21
                      },
                      "start": {
                        "column": 49,
                        "line": 21
                      }
                    },
                    "range": [
                      745,
                      752
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        748,
                        752
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 21
                        },
                        "start": {
                          "column": 52,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    733,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 21
                    },
                    "start": {
                      "column": 37,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                729,
                752
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 21
                },
                "start": {
                  "column": 33,
                  "line": 21
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 21
              },
              "start": {
                "column": 58,
                "line": 21
              }
            },
            "range": [
              754,
              761
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                757,
                761
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 21
                },
                "start": {
                  "column": 61,
                  "line": 21
                }
              }
            }
          },
          "range": [
            728,
            761
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 21
            },
            "start": {
              "column": 32,
              "line": 21
            }
          }
        },
        "range": [
          709,
          769
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        },
        "range": [
          703,
          706
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
                704,
                705
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              704,
              705
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        696,
        770
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                832,
                834
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 31,
                  "line": 23
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useT",
              "optional": false,
              "range": [
                812,
                816
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 23
                    },
                    "start": {
                      "column": 20,
                      "line": 23
                    }
                  },
                  "range": [
                    821,
                    824
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        823,
                        824
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 23
                        },
                        "start": {
                          "column": 22,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      823,
                      824
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 22,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  817,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 23
                  },
                  "start": {
                    "column": 16,
                    "line": 23
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 23
                },
                "start": {
                  "column": 24,
                  "line": 23
                }
              },
              "range": [
                825,
                831
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  827,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 23
                  },
                  "start": {
                    "column": 26,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              803,
              834
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          871,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "useT",
                      "optional": false,
                      "range": [
                        866,
                        870
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      866,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
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
                      "name": "arg",
                      "optional": false,
                      "range": [
                        859,
                        862
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 25
                        },
                        "start": {
                          "column": 6,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    859,
                    875
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 25
                    },
                    "start": {
                      "column": 6,
                      "line": 25
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  855,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 2,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "range": [
                855,
                876
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 25
                },
                "start": {
                  "column": 2,
                  "line": 25
                }
              }
            },
            "range": [
              855,
              877
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          }
        ],
        "range": [
          799,
          879
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 28,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "range": [
          780,
          783
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 19,
                "line": 22
              }
            },
            "range": [
              790,
              797
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  794,
                  797
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
                        795,
                        796
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 22
                        },
                        "start": {
                          "column": 24,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      795,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 24,
                        "line": 22
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 22
                  },
                  "start": {
                    "column": 23,
                    "line": 22
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q2",
                "optional": false,
                "range": [
                  792,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 21,
                    "line": 22
                  }
                }
              },
              "range": [
                792,
                797
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 22
                }
              }
            }
          },
          "range": [
            787,
            797
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 22
            },
            "start": {
              "column": 16,
              "line": 22
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 22
          },
          "start": {
            "column": 12,
            "line": 22
          }
        },
        "range": [
          783,
          786
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
                784,
                785
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              784,
              785
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        771,
        879
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 22
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    949,
                    951
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 28
                    },
                    "start": {
                      "column": 28,
                      "line": 28
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  947,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 28
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                947,
                952
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 26,
                  "line": 28
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
                "name": "m",
                "optional": false,
                "range": [
                  942,
                  943
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 28
                  },
                  "start": {
                    "column": 21,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              942,
              952
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 28
              },
              "start": {
                "column": 21,
                "line": 28
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "range": [
            921,
            924
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            924,
            941
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    925,
                    931
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    934,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                925,
                940
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 28
            },
            "start": {
              "column": 3,
              "line": 28
            }
          }
        },
        "range": [
          921,
          953
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        921,
        954
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    974,
                    976
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 29
                    },
                    "start": {
                      "column": 19,
                      "line": 29
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  972,
                  973
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                972,
                977
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 29
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
                "name": "m",
                "optional": false,
                "range": [
                  967,
                  968
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 29
                  },
                  "start": {
                    "column": 12,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              967,
              977
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 29
              },
              "start": {
                "column": 12,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "range": [
            955,
            958
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            958,
            966
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                959,
                965
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 29
            },
            "start": {
              "column": 3,
              "line": 29
            }
          }
        },
        "range": [
          955,
          978
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        955,
        979
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          1132,
          1133
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "range": [
              1139,
              1140
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 34
              },
              "start": {
                "column": 12,
                "line": 34
              }
            }
          },
          "range": [
            1139,
            1140
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 34
            },
            "start": {
              "column": 12,
              "line": 34
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  1153,
                  1157
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 34
                  },
                  "start": {
                    "column": 26,
                    "line": 34
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 34
                  },
                  "start": {
                    "column": 30,
                    "line": 34
                  }
                },
                "range": [
                  1157,
                  1164
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1159,
                      1162
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 34
                      },
                      "start": {
                        "column": 32,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    1159,
                    1164
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 34
                    },
                    "start": {
                      "column": 32,
                      "line": 34
                    }
                  }
                }
              },
              "range": [
                1150,
                1164
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 34
                },
                "start": {
                  "column": 23,
                  "line": 34
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 34
              },
              "start": {
                "column": 39,
                "line": 34
              }
            },
            "range": [
              1166,
              1172
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1169,
                1172
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 34
                },
                "start": {
                  "column": 42,
                  "line": 34
                }
              }
            }
          },
          "range": [
            1149,
            1172
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 34
            },
            "start": {
              "column": 22,
              "line": 34
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "range": [
              1210,
              1218
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 34
              },
              "start": {
                "column": 83,
                "line": 34
              }
            }
          },
          "range": [
            1210,
            1218
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 34
            },
            "start": {
              "column": 83,
              "line": 34
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  1179,
                  1183
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 34
                  },
                  "start": {
                    "column": 52,
                    "line": 34
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 34
                  },
                  "start": {
                    "column": 56,
                    "line": 34
                  }
                },
                "range": [
                  1183,
                  1198
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1195,
                      1198
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            1196,
                            1197
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 34
                            },
                            "start": {
                              "column": 69,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1196,
                          1197
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 34
                          },
                          "start": {
                            "column": 69,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 34
                      },
                      "start": {
                        "column": 68,
                        "line": 34
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "range": [
                      1185,
                      1195
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 34
                      },
                      "start": {
                        "column": 58,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    1185,
                    1198
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 34
                    },
                    "start": {
                      "column": 58,
                      "line": 34
                    }
                  }
                }
              },
              "range": [
                1176,
                1198
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 34
                },
                "start": {
                  "column": 49,
                  "line": 34
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 80,
                "line": 34
              },
              "start": {
                "column": 73,
                "line": 34
              }
            },
            "range": [
              1200,
              1207
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                1203,
                1207
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 34
                },
                "start": {
                  "column": 76,
                  "line": 34
                }
              }
            }
          },
          "range": [
            1175,
            1207
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 34
            },
            "start": {
              "column": 48,
              "line": 34
            }
          }
        },
        "range": [
          1139,
          1218
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 34
          },
          "start": {
            "column": 12,
            "line": 34
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 34
          },
          "start": {
            "column": 6,
            "line": 34
          }
        },
        "range": [
          1133,
          1136
        ],
        "params": [
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
                1134,
                1135
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 34
                },
                "start": {
                  "column": 7,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              1134,
              1135
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 34
              },
              "start": {
                "column": 7,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        1127,
        1219
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1262,
        1445
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddFirstParameterToFunctions",
          "optional": false,
          "range": [
            1274,
            1302
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 37
            },
            "start": {
              "column": 12,
              "line": 37
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
                "name": "Target",
                "optional": false,
                "range": [
                  1329,
                  1335
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 38
                  },
                  "start": {
                    "column": 14,
                    "line": 38
                  }
                }
              },
              "range": [
                1329,
                1335
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 38
                },
                "start": {
                  "column": 14,
                  "line": 38
                }
              }
            },
            "range": [
              1323,
              1335
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 38
              },
              "start": {
                "column": 8,
                "line": 38
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              1318,
              1319
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 38
              },
              "start": {
                "column": 3,
                "line": 38
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1345,
                    1346
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 38
                    },
                    "start": {
                      "column": 30,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1345,
                  1346
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 38
                  },
                  "start": {
                    "column": 30,
                    "line": 38
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Target",
                  "optional": false,
                  "range": [
                    1338,
                    1344
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 38
                    },
                    "start": {
                      "column": 23,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1338,
                  1344
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 38
                  },
                  "start": {
                    "column": 23,
                    "line": 38
                  }
                }
              },
              "range": [
                1338,
                1347
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 38
                },
                "start": {
                  "column": 23,
                  "line": 38
                }
              }
            },
            "extendsType": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      1360,
                      1364
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 38
                      },
                      "start": {
                        "column": 45,
                        "line": 38
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 38
                      },
                      "start": {
                        "column": 49,
                        "line": 38
                      }
                    },
                    "range": [
                      1364,
                      1371
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1366,
                          1369
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 38
                          },
                          "start": {
                            "column": 51,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        1366,
                        1371
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 38
                        },
                        "start": {
                          "column": 51,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    1357,
                    1371
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 38
                    },
                    "start": {
                      "column": 42,
                      "line": 38
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 38
                  },
                  "start": {
                    "column": 58,
                    "line": 38
                  }
                },
                "range": [
                  1373,
                  1380
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1376,
                    1380
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 38
                    },
                    "start": {
                      "column": 61,
                      "line": 38
                    }
                  }
                }
              },
              "range": [
                1356,
                1380
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 38
                },
                "start": {
                  "column": 41,
                  "line": 38
                }
              }
            },
            "falseType": {
              "type": "TSVoidKeyword",
              "range": [
                1438,
                1442
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "trueType": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      1393,
                      1397
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 39
                      },
                      "start": {
                        "column": 12,
                        "line": 39
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 39
                      },
                      "start": {
                        "column": 16,
                        "line": 39
                      }
                    },
                    "range": [
                      1397,
                      1420
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1409,
                          1420
                        ],
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "range": [
                                  1417,
                                  1418
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 39
                                  }
                                }
                              },
                              "range": [
                                1417,
                                1418
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 39
                                },
                                "start": {
                                  "column": 36,
                                  "line": 39
                                }
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Target",
                                "optional": false,
                                "range": [
                                  1410,
                                  1416
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 39
                                  }
                                }
                              },
                              "range": [
                                1410,
                                1416
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 39
                                },
                                "start": {
                                  "column": 29,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              1410,
                              1419
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 39
                              },
                              "start": {
                                "column": 29,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 39
                          },
                          "start": {
                            "column": 28,
                            "line": 39
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "range": [
                          1399,
                          1409
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 39
                          },
                          "start": {
                            "column": 18,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        1399,
                        1420
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 39
                        },
                        "start": {
                          "column": 18,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    1390,
                    1420
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 39
                    },
                    "start": {
                      "column": 9,
                      "line": 39
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 39
                  },
                  "start": {
                    "column": 41,
                    "line": 39
                  }
                },
                "range": [
                  1422,
                  1429
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1425,
                    1429
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 39
                    },
                    "start": {
                      "column": 44,
                      "line": 39
                    }
                  }
                }
              },
              "range": [
                1389,
                1429
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              }
            },
            "range": [
              1338,
              1442
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 40
              },
              "start": {
                "column": 23,
                "line": 38
              }
            }
          },
          "range": [
            1313,
            1444
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 41
            },
            "start": {
              "column": 51,
              "line": 37
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 48,
              "line": 37
            },
            "start": {
              "column": 40,
              "line": 37
            }
          },
          "range": [
            1302,
            1310
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "range": [
                  1303,
                  1309
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 37
                  },
                  "start": {
                    "column": 41,
                    "line": 37
                  }
                }
              },
              "out": false,
              "range": [
                1303,
                1309
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 37
                },
                "start": {
                  "column": 41,
                  "line": 37
                }
              }
            }
          ]
        },
        "range": [
          1269,
          1445
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 41
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
