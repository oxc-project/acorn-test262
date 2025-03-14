__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    6019
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Falsy",
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
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                13,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
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
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "range": [
                25,
                27
              ],
              "bigint": "0",
              "raw": "0n",
              "value": null,
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            "range": [
              25,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                30,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            },
            "range": [
              30,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          },
          {
            "type": "TSNullKeyword",
            "range": [
              35,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              42,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 42,
                "line": 1
              }
            }
          }
        ],
        "range": [
          13,
          51
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        52
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "isFalsy",
        "optional": false,
        "range": [
          71,
          78
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            },
            "range": [
              84,
              93
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                86,
                93
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            }
          },
          "range": [
            79,
            93
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 56,
            "line": 3
          },
          "start": {
            "column": 40,
            "line": 3
          }
        },
        "range": [
          94,
          110
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              96,
              101
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 3
              },
              "start": {
                "column": 51,
                "line": 3
              }
            },
            "range": [
              105,
              110
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Falsy",
                "optional": false,
                "range": [
                  105,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 3
                  },
                  "start": {
                    "column": 51,
                    "line": 3
                  }
                }
              },
              "range": [
                105,
                110
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 3
                },
                "start": {
                  "column": 51,
                  "line": 3
                }
              }
            }
          },
          "range": [
            96,
            110
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        }
      },
      "range": [
        54,
        111
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      190,
                      191
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
                  "range": [
                    190,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                180,
                221
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    176,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "range": [
                  168,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                168,
                178
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              164,
              221
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          158,
          223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 45,
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
        "name": "fx1",
        "optional": false,
        "range": [
          122,
          125
        ],
        "loc": {
          "end": {
            "column": 12,
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
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            },
            "range": [
              127,
              156
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    129,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    138,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    147,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 5
                    },
                    "start": {
                      "column": 34,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                129,
                156
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            }
          },
          "range": [
            126,
            156
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        }
      ],
      "range": [
        113,
        223
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      291,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    291,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                281,
                325
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    277,
                    278
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "range": [
                  269,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                269,
                279
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              265,
              325
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          259,
          327
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 34,
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
        "name": "fx2",
        "optional": false,
        "range": [
          234,
          237
        ],
        "loc": {
          "end": {
            "column": 12,
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
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 17,
                "line": 11
              }
            },
            "range": [
              242,
              257
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      244,
                      245
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
                  },
                  "range": [
                    244,
                    245
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
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    248,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                244,
                257
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            }
          },
          "range": [
            241,
            257
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        },
        "range": [
          237,
          240
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
                238,
                239
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
            "out": false,
            "range": [
              238,
              239
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
          }
        ]
      },
      "range": [
        225,
        327
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      407,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    407,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                397,
                434
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    393,
                    394
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "range": [
                  385,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                385,
                395
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "range": [
              381,
              434
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          375,
          436
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 46,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx3",
        "optional": false,
        "range": [
          338,
          341
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
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
                "column": 44,
                "line": 17
              },
              "start": {
                "column": 41,
                "line": 17
              }
            },
            "range": [
              370,
              373
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  372,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 17
                  },
                  "start": {
                    "column": 43,
                    "line": 17
                  }
                }
              },
              "range": [
                372,
                373
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 17
                },
                "start": {
                  "column": 43,
                  "line": 17
                }
              }
            }
          },
          "range": [
            369,
            373
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 17
            },
            "start": {
              "column": 40,
              "line": 17
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 17
          }
        },
        "range": [
          341,
          368
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
                    352,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 17
                    },
                    "start": {
                      "column": 23,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    361,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 17
                    },
                    "start": {
                      "column": 32,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                352,
                367
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 17
                },
                "start": {
                  "column": 23,
                  "line": 17
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
                342,
                343
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              342,
              367
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 17
              },
              "start": {
                "column": 13,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        329,
        436
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 17
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
        "name": "isA",
        "optional": false,
        "range": [
          455,
          458
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 23
          },
          "start": {
            "column": 17,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 24,
                "line": 23
              }
            },
            "range": [
              462,
              471
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                464,
                471
              ],
              "loc": {
                "end": {
                  "column": 33,
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
            459,
            471
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 23
            },
            "start": {
              "column": 21,
              "line": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 23
          },
          "start": {
            "column": 34,
            "line": 23
          }
        },
        "range": [
          472,
          504
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "range": [
              474,
              477
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 36,
                "line": 23
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 23
              },
              "start": {
                "column": 43,
                "line": 23
              }
            },
            "range": [
              481,
              504
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          483,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 23
                          },
                          "start": {
                            "column": 45,
                            "line": 23
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
                            "column": 53,
                            "line": 23
                          },
                          "start": {
                            "column": 46,
                            "line": 23
                          }
                        },
                        "range": [
                          484,
                          491
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              486,
                              491
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 23
                              },
                              "start": {
                                "column": 48,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            486,
                            491
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 23
                            },
                            "start": {
                              "column": 48,
                              "line": 23
                            }
                          }
                        }
                      },
                      "range": [
                        483,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 23
                        },
                        "start": {
                          "column": 45,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    481,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 23
                    },
                    "start": {
                      "column": 43,
                      "line": 23
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          498,
                          499
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 23
                          },
                          "start": {
                            "column": 60,
                            "line": 23
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
                            "column": 64,
                            "line": 23
                          },
                          "start": {
                            "column": 61,
                            "line": 23
                          }
                        },
                        "range": [
                          499,
                          502
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              501,
                              502
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 23
                              },
                              "start": {
                                "column": 63,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            501,
                            502
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 23
                            },
                            "start": {
                              "column": 63,
                              "line": 23
                            }
                          }
                        }
                      },
                      "range": [
                        498,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 23
                        },
                        "start": {
                          "column": 60,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    496,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 23
                    },
                    "start": {
                      "column": 58,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                481,
                504
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 23
                },
                "start": {
                  "column": 43,
                  "line": 23
                }
              }
            }
          },
          "range": [
            474,
            504
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 23
            },
            "start": {
              "column": 36,
              "line": 23
            }
          }
        }
      },
      "range": [
        438,
        505
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      570,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    570,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                560,
                593
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 18,
                  "line": 26
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    554,
                    557
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "range": [
                  550,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                550,
                558
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "range": [
              546,
              593
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          540,
          595
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 33,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx4",
        "optional": false,
        "range": [
          516,
          519
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            },
            "range": [
              523,
              538
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      527,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 25
                      },
                      "start": {
                        "column": 20,
                        "line": 25
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
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 21,
                        "line": 25
                      }
                    },
                    "range": [
                      528,
                      536
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        530,
                        536
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 25
                        },
                        "start": {
                          "column": 23,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    527,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 25
                    },
                    "start": {
                      "column": 20,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                525,
                538
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 25
                },
                "start": {
                  "column": 18,
                  "line": 25
                }
              }
            }
          },
          "range": [
            520,
            538
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 25
            },
            "start": {
              "column": 13,
              "line": 25
            }
          }
        }
      ],
      "range": [
        507,
        595
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          613,
          626
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
              "name": "x",
              "optional": false,
              "range": [
                615,
                616
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 31
                },
                "start": {
                  "column": 18,
                  "line": 31
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
                  "column": 27,
                  "line": 31
                },
                "start": {
                  "column": 19,
                  "line": 31
                }
              },
              "range": [
                616,
                624
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  618,
                  624
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 31
                  },
                  "start": {
                    "column": 21,
                    "line": 31
                  }
                }
              }
            },
            "value": null,
            "range": [
              615,
              624
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 31
              },
              "start": {
                "column": 18,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 31
          },
          "start": {
            "column": 16,
            "line": 31
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          611,
          612
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 31
          },
          "start": {
            "column": 14,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        597,
        626
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          654,
          668
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
              "name": "xs",
              "optional": false,
              "range": [
                656,
                658
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 32
                },
                "start": {
                  "column": 29,
                  "line": 32
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
                  "column": 39,
                  "line": 32
                },
                "start": {
                  "column": 31,
                  "line": 32
                }
              },
              "range": [
                658,
                666
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  660,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 32
                  },
                  "start": {
                    "column": 33,
                    "line": 32
                  }
                }
              }
            },
            "value": null,
            "range": [
              656,
              666
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 32
              },
              "start": {
                "column": 29,
                "line": 32
              }
            }
          }
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
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XS",
        "optional": false,
        "range": [
          641,
          643
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 32
          },
          "start": {
            "column": 14,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          652,
          653
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 32
          },
          "start": {
            "column": 25,
            "line": 32
          }
        }
      },
      "range": [
        627,
        668
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          686,
          699
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
              "name": "y",
              "optional": false,
              "range": [
                688,
                689
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 34
                },
                "start": {
                  "column": 18,
                  "line": 34
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
                  "column": 27,
                  "line": 34
                },
                "start": {
                  "column": 19,
                  "line": 34
                }
              },
              "range": [
                689,
                697
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  691,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 34
                  },
                  "start": {
                    "column": 21,
                    "line": 34
                  }
                }
              }
            },
            "value": null,
            "range": [
              688,
              697
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 34
              },
              "start": {
                "column": 18,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 34
          },
          "start": {
            "column": 16,
            "line": 34
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "range": [
          684,
          685
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 34
          },
          "start": {
            "column": 14,
            "line": 34
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        670,
        699
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          727,
          741
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
              "name": "ys",
              "optional": false,
              "range": [
                729,
                731
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 35
                },
                "start": {
                  "column": 29,
                  "line": 35
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
                  "column": 39,
                  "line": 35
                },
                "start": {
                  "column": 31,
                  "line": 35
                }
              },
              "range": [
                731,
                739
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  733,
                  739
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 35
                  },
                  "start": {
                    "column": 33,
                    "line": 35
                  }
                }
              }
            },
            "value": null,
            "range": [
              729,
              739
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 35
              },
              "start": {
                "column": 29,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 35
          },
          "start": {
            "column": 27,
            "line": 35
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "YS",
        "optional": false,
        "range": [
          714,
          716
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 35
          },
          "start": {
            "column": 14,
            "line": 35
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "range": [
          725,
          726
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 35
          },
          "start": {
            "column": 25,
            "line": 35
          }
        }
      },
      "range": [
        700,
        741
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
        "name": "isXSorY",
        "optional": false,
        "range": [
          760,
          767
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 37
          },
          "start": {
            "column": 17,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 37
              },
              "start": {
                "column": 28,
                "line": 37
              }
            },
            "range": [
              771,
              780
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                773,
                780
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 37
                },
                "start": {
                  "column": 30,
                  "line": 37
                }
              }
            }
          },
          "range": [
            768,
            780
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 37
            },
            "start": {
              "column": 25,
              "line": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 37
          },
          "start": {
            "column": 38,
            "line": 37
          }
        },
        "range": [
          781,
          796
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "range": [
              783,
              786
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 37
              },
              "start": {
                "column": 40,
                "line": 37
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 37
              },
              "start": {
                "column": 47,
                "line": 37
              }
            },
            "range": [
              790,
              796
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "XS",
                    "optional": false,
                    "range": [
                      790,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 37
                      },
                      "start": {
                        "column": 47,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    790,
                    792
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 37
                    },
                    "start": {
                      "column": 47,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "range": [
                      795,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 37
                      },
                      "start": {
                        "column": 52,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    795,
                    796
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 37
                    },
                    "start": {
                      "column": 52,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                790,
                796
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 37
                },
                "start": {
                  "column": 47,
                  "line": 37
                }
              }
            }
          },
          "range": [
            783,
            796
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 37
            },
            "start": {
              "column": 40,
              "line": 37
            }
          }
        }
      },
      "range": [
        743,
        797
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      901,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    901,
                    905
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                891,
                923
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 26,
                  "line": 40
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  873,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  888,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 40
                  },
                  "start": {
                    "column": 23,
                    "line": 40
                  }
                }
              },
              "range": [
                873,
                889
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "range": [
              869,
              923
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      956,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    956,
                    960
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                946,
                978
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 22,
                  "line": 43
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    940,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 43
                    },
                    "start": {
                      "column": 16,
                      "line": 43
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isXSorY",
                "optional": false,
                "range": [
                  932,
                  939
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 43
                  },
                  "start": {
                    "column": 8,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "range": [
                932,
                944
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 43
                },
                "start": {
                  "column": 8,
                  "line": 43
                }
              }
            },
            "range": [
              928,
              978
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          863,
          980
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 64,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx5",
        "optional": false,
        "range": [
          808,
          811
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 39
              },
              "start": {
                "column": 29,
                "line": 39
              }
            },
            "range": [
              828,
              836
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      830,
                      831
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 39
                      },
                      "start": {
                        "column": 31,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    830,
                    831
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 39
                    },
                    "start": {
                      "column": 31,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "YS",
                    "optional": false,
                    "range": [
                      834,
                      836
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 39
                      },
                      "start": {
                        "column": 35,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    834,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 39
                    },
                    "start": {
                      "column": 35,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                830,
                836
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 39
                },
                "start": {
                  "column": 31,
                  "line": 39
                }
              }
            }
          },
          "range": [
            825,
            836
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 39
            },
            "start": {
              "column": 26,
              "line": 39
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 39
              },
              "start": {
                "column": 40,
                "line": 39
              }
            },
            "range": [
              839,
              861
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "XS",
                    "optional": false,
                    "range": [
                      848,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 39
                      },
                      "start": {
                        "column": 49,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    841,
                    850
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 39
                    },
                    "start": {
                      "column": 42,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "range": [
                      860,
                      861
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 39
                      },
                      "start": {
                        "column": 61,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    853,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 39
                    },
                    "start": {
                      "column": 54,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                841,
                861
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 39
                },
                "start": {
                  "column": 42,
                  "line": 39
                }
              }
            }
          },
          "range": [
            838,
            861
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 39
            },
            "start": {
              "column": 39,
              "line": 39
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 39
          },
          "start": {
            "column": 12,
            "line": 39
          }
        },
        "range": [
          811,
          824
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
                "name": "X",
                "optional": false,
                "range": [
                  822,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 39
                  },
                  "start": {
                    "column": 23,
                    "line": 39
                  }
                }
              },
              "range": [
                822,
                823
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 39
                },
                "start": {
                  "column": 23,
                  "line": 39
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
                812,
                813
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 39
                },
                "start": {
                  "column": 13,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              812,
              823
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 39
              },
              "start": {
                "column": 13,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        799,
        980
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 39
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
        "name": "isEmptyStrOrUndefined",
        "optional": false,
        "range": [
          1021,
          1042
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 50
          },
          "start": {
            "column": 17,
            "line": 50
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixed",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 50
              },
              "start": {
                "column": 44,
                "line": 50
              }
            },
            "range": [
              1048,
              1053
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1050,
                1053
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 50
                },
                "start": {
                  "column": 46,
                  "line": 50
                }
              }
            }
          },
          "range": [
            1043,
            1053
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 50
            },
            "start": {
              "column": 39,
              "line": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 50
          },
          "start": {
            "column": 50,
            "line": 50
          }
        },
        "range": [
          1054,
          1079
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "range": [
              1056,
              1061
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 50
              },
              "start": {
                "column": 52,
                "line": 50
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 50
              },
              "start": {
                "column": 61,
                "line": 50
              }
            },
            "range": [
              1065,
              1079
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      1065,
                      1067
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 50
                      },
                      "start": {
                        "column": 61,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1065,
                    1067
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 50
                    },
                    "start": {
                      "column": 61,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1070,
                    1079
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 50
                    },
                    "start": {
                      "column": 66,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                1065,
                1079
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 50
                },
                "start": {
                  "column": 61,
                  "line": 50
                }
              }
            }
          },
          "range": [
            1056,
            1079
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 50
            },
            "start": {
              "column": 52,
              "line": 50
            }
          }
        }
      },
      "range": [
        1004,
        1080
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      1165,
                      1166
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1165,
                    1167
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            1283,
                            1284
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 59
                            },
                            "start": {
                              "column": 12,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1283,
                          1285
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 59
                          },
                          "start": {
                            "column": 12,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "range": [
                      1269,
                      1302
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 13,
                        "line": 58
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
                          "name": "s",
                          "optional": false,
                          "range": [
                            1229,
                            1230
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 56
                            },
                            "start": {
                              "column": 12,
                              "line": 56
                            }
                          }
                        },
                        "range": [
                          1229,
                          1231
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 56
                          },
                          "start": {
                            "column": 12,
                            "line": 56
                          }
                        }
                      }
                    ],
                    "range": [
                      1215,
                      1255
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 28,
                        "line": 55
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        1199,
                        1200
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        1204,
                        1213
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 55
                        },
                        "start": {
                          "column": 17,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1199,
                      1213
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 55
                      },
                      "start": {
                        "column": 12,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1195,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                1155,
                1308
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 34,
                  "line": 53
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "range": [
                    1151,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 53
                    },
                    "start": {
                      "column": 30,
                      "line": 53
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isEmptyStrOrUndefined",
                "optional": false,
                "range": [
                  1129,
                  1150
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 53
                  },
                  "start": {
                    "column": 8,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "range": [
                1129,
                1153
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 53
                },
                "start": {
                  "column": 8,
                  "line": 53
                }
              }
            },
            "range": [
              1125,
              1308
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          1119,
          1310
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 37,
            "line": 52
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx10",
        "optional": false,
        "range": [
          1091,
          1095
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 52
          },
          "start": {
            "column": 9,
            "line": 52
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 52
              },
              "start": {
                "column": 15,
                "line": 52
              }
            },
            "range": [
              1097,
              1117
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1099,
                    1105
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 52
                    },
                    "start": {
                      "column": 17,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1108,
                    1117
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 52
                    },
                    "start": {
                      "column": 26,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                1099,
                1117
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 52
                },
                "start": {
                  "column": 17,
                  "line": 52
                }
              }
            }
          },
          "range": [
            1096,
            1117
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 52
            },
            "start": {
              "column": 14,
              "line": 52
            }
          }
        }
      ],
      "range": [
        1082,
        1310
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 52
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
          1387,
          1390
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 66
          },
          "start": {
            "column": 53,
            "line": 66
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
          1343,
          1345
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 66
          },
          "start": {
            "column": 9,
            "line": 66
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
                "column": 18,
                "line": 66
              },
              "start": {
                "column": 13,
                "line": 66
              }
            },
            "range": [
              1347,
              1352
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1349,
                1352
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 66
                },
                "start": {
                  "column": 15,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1346,
            1352
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 66
            },
            "start": {
              "column": 12,
              "line": 66
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 66
          },
          "start": {
            "column": 19,
            "line": 66
          }
        },
        "range": [
          1353,
          1386
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              1363,
              1364
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 66
              },
              "start": {
                "column": 29,
                "line": 66
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 66
              },
              "start": {
                "column": 34,
                "line": 66
              }
            },
            "range": [
              1368,
              1386
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1368,
                    1374
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 66
                    },
                    "start": {
                      "column": 34,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1377,
                    1386
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 66
                    },
                    "start": {
                      "column": 43,
                      "line": 66
                    }
                  }
                }
              ],
              "range": [
                1368,
                1386
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 66
                },
                "start": {
                  "column": 34,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1355,
            1386
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 66
            },
            "start": {
              "column": 21,
              "line": 66
            }
          }
        }
      },
      "range": [
        1334,
        1390
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 67
                },
                "start": {
                  "column": 6,
                  "line": 67
                }
              },
              "range": [
                1397,
                1426
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1399,
                      1405
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1408,
                      1414
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 67
                      },
                      "start": {
                        "column": 17,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      1417,
                      1426
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 67
                      },
                      "start": {
                        "column": 26,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  1399,
                  1426
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 67
                  },
                  "start": {
                    "column": 8,
                    "line": 67
                  }
                }
              }
            },
            "range": [
              1395,
              1426
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          "init": null,
          "range": [
            1395,
            1426
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 67
            },
            "start": {
              "column": 4,
              "line": 67
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1391,
        1427
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            "name": "v1",
            "optional": false,
            "range": [
              1431,
              1433
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 3,
                "line": 68
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
            1428,
            1430
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 68
            },
            "start": {
              "column": 0,
              "line": 68
            }
          }
        },
        "optional": false,
        "range": [
          1428,
          1434
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        1428,
        1435
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "v1",
        "optional": false,
        "range": [
          1436,
          1438
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1436,
        1439
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
          1512,
          1515
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 71
          },
          "start": {
            "column": 48,
            "line": 71
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
          1473,
          1475
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 71
          },
          "start": {
            "column": 9,
            "line": 71
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
                "column": 18,
                "line": 71
              },
              "start": {
                "column": 13,
                "line": 71
              }
            },
            "range": [
              1477,
              1482
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1479,
                1482
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 71
                },
                "start": {
                  "column": 15,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1476,
            1482
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 71
            },
            "start": {
              "column": 12,
              "line": 71
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 71
          },
          "start": {
            "column": 19,
            "line": 71
          }
        },
        "range": [
          1483,
          1511
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              1493,
              1494
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 71
              },
              "start": {
                "column": 29,
                "line": 71
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 71
              },
              "start": {
                "column": 34,
                "line": 71
              }
            },
            "range": [
              1498,
              1511
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "6",
                    "value": 6,
                    "range": [
                      1498,
                      1499
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 71
                      },
                      "start": {
                        "column": 34,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1498,
                    1499
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 71
                    },
                    "start": {
                      "column": 34,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1502,
                    1511
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 71
                    },
                    "start": {
                      "column": 38,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                1498,
                1511
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 71
                },
                "start": {
                  "column": 34,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1485,
            1511
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 71
            },
            "start": {
              "column": 21,
              "line": 71
            }
          }
        }
      },
      "range": [
        1464,
        1515
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 72
                },
                "start": {
                  "column": 6,
                  "line": 72
                }
              },
              "range": [
                1522,
                1551
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1524,
                      1530
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1533,
                      1539
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 72
                      },
                      "start": {
                        "column": 17,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      1542,
                      1551
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 72
                      },
                      "start": {
                        "column": 26,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  1524,
                  1551
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1520,
              1551
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          "init": null,
          "range": [
            1520,
            1551
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 72
            },
            "start": {
              "column": 4,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1516,
        1552
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
            "name": "v2",
            "optional": false,
            "range": [
              1556,
              1558
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 3,
                "line": 73
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
            1553,
            1555
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
            }
          }
        },
        "optional": false,
        "range": [
          1553,
          1559
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        1553,
        1560
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "v2",
        "optional": false,
        "range": [
          1561,
          1563
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 74
          }
        }
      },
      "range": [
        1561,
        1564
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
        "name": "isEmptyString",
        "optional": false,
        "range": [
          1612,
          1625
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 78
          },
          "start": {
            "column": 17,
            "line": 78
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 78
              },
              "start": {
                "column": 36,
                "line": 78
              }
            },
            "range": [
              1631,
              1639
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1633,
                1639
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 78
                },
                "start": {
                  "column": 38,
                  "line": 78
                }
              }
            }
          },
          "range": [
            1626,
            1639
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 78
            },
            "start": {
              "column": 31,
              "line": 78
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 78
          },
          "start": {
            "column": 45,
            "line": 78
          }
        },
        "range": [
          1640,
          1653
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              1642,
              1647
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 78
              },
              "start": {
                "column": 47,
                "line": 78
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 78
              },
              "start": {
                "column": 56,
                "line": 78
              }
            },
            "range": [
              1651,
              1653
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  1651,
                  1653
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 78
                  },
                  "start": {
                    "column": 56,
                    "line": 78
                  }
                }
              },
              "range": [
                1651,
                1653
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 78
                },
                "start": {
                  "column": 56,
                  "line": 78
                }
              }
            }
          },
          "range": [
            1642,
            1653
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 78
            },
            "start": {
              "column": 47,
              "line": 78
            }
          }
        }
      },
      "range": [
        1595,
        1654
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
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
        "name": "isMaybeEmptyString",
        "optional": false,
        "range": [
          1672,
          1690
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 79
          },
          "start": {
            "column": 17,
            "line": 79
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 79
              },
              "start": {
                "column": 41,
                "line": 79
              }
            },
            "range": [
              1696,
              1723
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1698,
                    1704
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 79
                    },
                    "start": {
                      "column": 43,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    1707,
                    1711
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 79
                    },
                    "start": {
                      "column": 52,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1714,
                    1723
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 79
                    },
                    "start": {
                      "column": 59,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                1698,
                1723
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 79
                },
                "start": {
                  "column": 43,
                  "line": 79
                }
              }
            }
          },
          "range": [
            1691,
            1723
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 79
            },
            "start": {
              "column": 36,
              "line": 79
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 101,
            "line": 79
          },
          "start": {
            "column": 69,
            "line": 79
          }
        },
        "range": [
          1724,
          1756
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              1726,
              1731
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 79
              },
              "start": {
                "column": 71,
                "line": 79
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 101,
                "line": 79
              },
              "start": {
                "column": 80,
                "line": 79
              }
            },
            "range": [
              1735,
              1756
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      1735,
                      1737
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 79
                      },
                      "start": {
                        "column": 80,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1735,
                    1737
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 79
                    },
                    "start": {
                      "column": 80,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    1740,
                    1744
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 79
                    },
                    "start": {
                      "column": 85,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1747,
                    1756
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 79
                    },
                    "start": {
                      "column": 92,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                1735,
                1756
              ],
              "loc": {
                "end": {
                  "column": 101,
                  "line": 79
                },
                "start": {
                  "column": 80,
                  "line": 79
                }
              }
            }
          },
          "range": [
            1726,
            1756
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 79
            },
            "start": {
              "column": 71,
              "line": 79
            }
          }
        }
      },
      "range": [
        1655,
        1757
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
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
        "name": "isZero",
        "optional": false,
        "range": [
          1776,
          1782
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 81
          },
          "start": {
            "column": 17,
            "line": 81
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 81
              },
              "start": {
                "column": 29,
                "line": 81
              }
            },
            "range": [
              1788,
              1796
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1790,
                1796
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 81
                },
                "start": {
                  "column": 31,
                  "line": 81
                }
              }
            }
          },
          "range": [
            1783,
            1796
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 81
            },
            "start": {
              "column": 24,
              "line": 81
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 81
          },
          "start": {
            "column": 38,
            "line": 81
          }
        },
        "range": [
          1797,
          1809
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              1799,
              1804
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 81
              },
              "start": {
                "column": 40,
                "line": 81
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 81
              },
              "start": {
                "column": 49,
                "line": 81
              }
            },
            "range": [
              1808,
              1809
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1808,
                  1809
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 81
                  },
                  "start": {
                    "column": 49,
                    "line": 81
                  }
                }
              },
              "range": [
                1808,
                1809
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 81
                },
                "start": {
                  "column": 49,
                  "line": 81
                }
              }
            }
          },
          "range": [
            1799,
            1809
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 81
            },
            "start": {
              "column": 40,
              "line": 81
            }
          }
        }
      },
      "range": [
        1759,
        1810
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
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
        "name": "isMaybeZero",
        "optional": false,
        "range": [
          1828,
          1839
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 82
          },
          "start": {
            "column": 17,
            "line": 82
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 82
              },
              "start": {
                "column": 34,
                "line": 82
              }
            },
            "range": [
              1845,
              1872
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1847,
                    1853
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 82
                    },
                    "start": {
                      "column": 36,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    1856,
                    1860
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 82
                    },
                    "start": {
                      "column": 45,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1863,
                    1872
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 82
                    },
                    "start": {
                      "column": 52,
                      "line": 82
                    }
                  }
                }
              ],
              "range": [
                1847,
                1872
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 82
                },
                "start": {
                  "column": 36,
                  "line": 82
                }
              }
            }
          },
          "range": [
            1840,
            1872
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 82
            },
            "start": {
              "column": 29,
              "line": 82
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 93,
            "line": 82
          },
          "start": {
            "column": 62,
            "line": 82
          }
        },
        "range": [
          1873,
          1904
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              1875,
              1880
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 82
              },
              "start": {
                "column": 64,
                "line": 82
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 93,
                "line": 82
              },
              "start": {
                "column": 73,
                "line": 82
              }
            },
            "range": [
              1884,
              1904
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1884,
                      1885
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 82
                      },
                      "start": {
                        "column": 73,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1884,
                    1885
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 82
                    },
                    "start": {
                      "column": 73,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    1888,
                    1892
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 82
                    },
                    "start": {
                      "column": 77,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1895,
                    1904
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 82
                    },
                    "start": {
                      "column": 84,
                      "line": 82
                    }
                  }
                }
              ],
              "range": [
                1884,
                1904
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 82
                },
                "start": {
                  "column": 73,
                  "line": 82
                }
              }
            }
          },
          "range": [
            1875,
            1904
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 82
            },
            "start": {
              "column": 64,
              "line": 82
            }
          }
        }
      },
      "range": [
        1811,
        1905
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
        "name": "isEmptyArray",
        "optional": false,
        "range": [
          1924,
          1936
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 84
          },
          "start": {
            "column": 17,
            "line": 84
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 84
              },
              "start": {
                "column": 38,
                "line": 84
              }
            },
            "range": [
              1945,
              1950
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
                    1947,
                    1948
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 84
                    },
                    "start": {
                      "column": 40,
                      "line": 84
                    }
                  }
                },
                "range": [
                  1947,
                  1948
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 84
                  },
                  "start": {
                    "column": 40,
                    "line": 84
                  }
                }
              },
              "range": [
                1947,
                1950
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 84
                },
                "start": {
                  "column": 40,
                  "line": 84
                }
              }
            }
          },
          "range": [
            1940,
            1950
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 84
            },
            "start": {
              "column": 33,
              "line": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 84
          },
          "start": {
            "column": 44,
            "line": 84
          }
        },
        "range": [
          1951,
          1964
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              1953,
              1958
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 84
              },
              "start": {
                "column": 46,
                "line": 84
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 84
              },
              "start": {
                "column": 55,
                "line": 84
              }
            },
            "range": [
              1962,
              1964
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [],
              "range": [
                1962,
                1964
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 84
                },
                "start": {
                  "column": 55,
                  "line": 84
                }
              }
            }
          },
          "range": [
            1953,
            1964
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 84
            },
            "start": {
              "column": 46,
              "line": 84
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 84
          },
          "start": {
            "column": 29,
            "line": 84
          }
        },
        "range": [
          1936,
          1939
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
                1937,
                1938
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 84
                },
                "start": {
                  "column": 30,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              1937,
              1938
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 84
              },
              "start": {
                "column": 30,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        1907,
        1965
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
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
        "name": "isMaybeEmptyArray",
        "optional": false,
        "range": [
          1983,
          2000
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 85
          },
          "start": {
            "column": 17,
            "line": 85
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 85
              },
              "start": {
                "column": 43,
                "line": 85
              }
            },
            "range": [
              2009,
              2033
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        2011,
                        2012
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 85
                        },
                        "start": {
                          "column": 45,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      2011,
                      2012
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 85
                      },
                      "start": {
                        "column": 45,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    2011,
                    2014
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 85
                    },
                    "start": {
                      "column": 45,
                      "line": 85
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    2017,
                    2021
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 85
                    },
                    "start": {
                      "column": 51,
                      "line": 85
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    2024,
                    2033
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 85
                    },
                    "start": {
                      "column": 58,
                      "line": 85
                    }
                  }
                }
              ],
              "range": [
                2011,
                2033
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 85
                },
                "start": {
                  "column": 45,
                  "line": 85
                }
              }
            }
          },
          "range": [
            2004,
            2033
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 85
            },
            "start": {
              "column": 38,
              "line": 85
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 100,
            "line": 85
          },
          "start": {
            "column": 68,
            "line": 85
          }
        },
        "range": [
          2034,
          2066
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              2036,
              2041
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 85
              },
              "start": {
                "column": 70,
                "line": 85
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 100,
                "line": 85
              },
              "start": {
                "column": 79,
                "line": 85
              }
            },
            "range": [
              2045,
              2066
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "range": [
                    2045,
                    2047
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 85
                    },
                    "start": {
                      "column": 79,
                      "line": 85
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    2050,
                    2054
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 85
                    },
                    "start": {
                      "column": 84,
                      "line": 85
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    2057,
                    2066
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 85
                    },
                    "start": {
                      "column": 91,
                      "line": 85
                    }
                  }
                }
              ],
              "range": [
                2045,
                2066
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 85
                },
                "start": {
                  "column": 79,
                  "line": 85
                }
              }
            }
          },
          "range": [
            2036,
            2066
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 85
            },
            "start": {
              "column": 70,
              "line": 85
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 85
          },
          "start": {
            "column": 34,
            "line": 85
          }
        },
        "range": [
          2000,
          2003
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
                2001,
                2002
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 85
                },
                "start": {
                  "column": 35,
                  "line": 85
                }
              }
            },
            "out": false,
            "range": [
              2001,
              2002
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 85
              },
              "start": {
                "column": 35,
                "line": 85
              }
            }
          }
        ]
      },
      "range": [
        1966,
        2067
      ],
      "loc": {
        "end": {
          "column": 101,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
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
            "name": "TEST_CASES",
            "optional": false,
            "range": [
              2075,
              2085
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 87
              },
              "start": {
                "column": 6,
                "line": 87
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2214,
                                2219
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 93
                                },
                                "start": {
                                  "column": 12,
                                  "line": 93
                                }
                              }
                            },
                            "range": [
                              2214,
                              2220
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 93
                              },
                              "start": {
                                "column": 12,
                                "line": 93
                              }
                            }
                          }
                        ],
                        "range": [
                          2200,
                          2241
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 94
                          },
                          "start": {
                            "column": 13,
                            "line": 92
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2163,
                                2168
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 90
                                },
                                "start": {
                                  "column": 12,
                                  "line": 90
                                }
                              }
                            },
                            "range": [
                              2163,
                              2169
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 90
                              },
                              "start": {
                                "column": 12,
                                "line": 90
                              }
                            }
                          }
                        ],
                        "range": [
                          2149,
                          2186
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 91
                          },
                          "start": {
                            "column": 34,
                            "line": 89
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              2141,
                              2146
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 89
                              },
                              "start": {
                                "column": 26,
                                "line": 89
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isEmptyString",
                          "optional": false,
                          "range": [
                            2127,
                            2140
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 89
                            },
                            "start": {
                              "column": 12,
                              "line": 89
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2127,
                          2147
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 89
                          },
                          "start": {
                            "column": 12,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        2123,
                        2241
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 94
                        },
                        "start": {
                          "column": 8,
                          "line": 89
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "range": [
                                2346,
                                2351
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 99
                                },
                                "start": {
                                  "column": 12,
                                  "line": 99
                                }
                              }
                            },
                            "range": [
                              2346,
                              2352
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 99
                              },
                              "start": {
                                "column": 12,
                                "line": 99
                              }
                            }
                          }
                        ],
                        "range": [
                          2332,
                          2373
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 100
                          },
                          "start": {
                            "column": 13,
                            "line": 98
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2295,
                                2300
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 96
                                },
                                "start": {
                                  "column": 12,
                                  "line": 96
                                }
                              }
                            },
                            "range": [
                              2295,
                              2301
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 96
                              },
                              "start": {
                                "column": 12,
                                "line": 96
                              }
                            }
                          }
                        ],
                        "range": [
                          2281,
                          2318
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 97
                          },
                          "start": {
                            "column": 39,
                            "line": 95
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              2273,
                              2278
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 95
                              },
                              "start": {
                                "column": 31,
                                "line": 95
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "range": [
                            2254,
                            2272
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 95
                            },
                            "start": {
                              "column": 12,
                              "line": 95
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2254,
                          2279
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 95
                          },
                          "start": {
                            "column": 12,
                            "line": 95
                          }
                        }
                      },
                      "range": [
                        2250,
                        2373
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 100
                        },
                        "start": {
                          "column": 8,
                          "line": 95
                        }
                      }
                    }
                  ],
                  "range": [
                    2113,
                    2379
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 101
                    },
                    "start": {
                      "column": 23,
                      "line": 88
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 88
                        },
                        "start": {
                          "column": 10,
                          "line": 88
                        }
                      },
                      "range": [
                        2100,
                        2108
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2102,
                          2108
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 88
                          },
                          "start": {
                            "column": 12,
                            "line": 88
                          }
                        }
                      }
                    },
                    "range": [
                      2095,
                      2108
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 88
                      },
                      "start": {
                        "column": 5,
                        "line": 88
                      }
                    }
                  }
                ],
                "range": [
                  2094,
                  2379
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 101
                  },
                  "start": {
                    "column": 4,
                    "line": 88
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2523,
                                2528
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 107
                                },
                                "start": {
                                  "column": 12,
                                  "line": 107
                                }
                              }
                            },
                            "range": [
                              2523,
                              2529
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 107
                              },
                              "start": {
                                "column": 12,
                                "line": 107
                              }
                            }
                          }
                        ],
                        "range": [
                          2509,
                          2550
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 108
                          },
                          "start": {
                            "column": 13,
                            "line": 106
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2460,
                                2465
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 104
                                },
                                "start": {
                                  "column": 12,
                                  "line": 104
                                }
                              }
                            },
                            "range": [
                              2460,
                              2466
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 104
                              },
                              "start": {
                                "column": 12,
                                "line": 104
                              }
                            }
                          }
                        ],
                        "range": [
                          2446,
                          2495
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 105
                          },
                          "start": {
                            "column": 39,
                            "line": 103
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              2438,
                              2443
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 103
                              },
                              "start": {
                                "column": 31,
                                "line": 103
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "range": [
                            2419,
                            2437
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 103
                            },
                            "start": {
                              "column": 12,
                              "line": 103
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2419,
                          2444
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 103
                          },
                          "start": {
                            "column": 12,
                            "line": 103
                          }
                        }
                      },
                      "range": [
                        2415,
                        2550
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 108
                        },
                        "start": {
                          "column": 8,
                          "line": 103
                        }
                      }
                    }
                  ],
                  "range": [
                    2405,
                    2556
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 109
                    },
                    "start": {
                      "column": 24,
                      "line": 102
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
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 102
                        },
                        "start": {
                          "column": 11,
                          "line": 102
                        }
                      },
                      "range": [
                        2392,
                        2400
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2394,
                          2400
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 102
                          },
                          "start": {
                            "column": 13,
                            "line": 102
                          }
                        }
                      }
                    },
                    "range": [
                      2386,
                      2400
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 102
                      },
                      "start": {
                        "column": 5,
                        "line": 102
                      }
                    }
                  }
                ],
                "range": [
                  2385,
                  2556
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 102
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2674,
                                2679
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 115
                                },
                                "start": {
                                  "column": 12,
                                  "line": 115
                                }
                              }
                            },
                            "range": [
                              2674,
                              2680
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 115
                              },
                              "start": {
                                "column": 12,
                                "line": 115
                              }
                            }
                          }
                        ],
                        "range": [
                          2660,
                          2701
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 116
                          },
                          "start": {
                            "column": 13,
                            "line": 114
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2624,
                                2629
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 112
                                },
                                "start": {
                                  "column": 12,
                                  "line": 112
                                }
                              }
                            },
                            "range": [
                              2624,
                              2630
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 112
                              },
                              "start": {
                                "column": 12,
                                "line": 112
                              }
                            }
                          }
                        ],
                        "range": [
                          2610,
                          2646
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 113
                          },
                          "start": {
                            "column": 27,
                            "line": 111
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              2602,
                              2607
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 111
                              },
                              "start": {
                                "column": 19,
                                "line": 111
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isZero",
                          "optional": false,
                          "range": [
                            2595,
                            2601
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 111
                            },
                            "start": {
                              "column": 12,
                              "line": 111
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2595,
                          2608
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 111
                          },
                          "start": {
                            "column": 12,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        2591,
                        2701
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 116
                        },
                        "start": {
                          "column": 8,
                          "line": 111
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "range": [
                                2797,
                                2802
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 121
                                },
                                "start": {
                                  "column": 12,
                                  "line": 121
                                }
                              }
                            },
                            "range": [
                              2797,
                              2803
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
                        "range": [
                          2783,
                          2824
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 122
                          },
                          "start": {
                            "column": 13,
                            "line": 120
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2748,
                                2753
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 118
                                },
                                "start": {
                                  "column": 12,
                                  "line": 118
                                }
                              }
                            },
                            "range": [
                              2748,
                              2754
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 118
                              },
                              "start": {
                                "column": 12,
                                "line": 118
                              }
                            }
                          }
                        ],
                        "range": [
                          2734,
                          2769
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 119
                          },
                          "start": {
                            "column": 32,
                            "line": 117
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              2726,
                              2731
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 117
                              },
                              "start": {
                                "column": 24,
                                "line": 117
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "range": [
                            2714,
                            2725
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 117
                            },
                            "start": {
                              "column": 12,
                              "line": 117
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2714,
                          2732
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 117
                          },
                          "start": {
                            "column": 12,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        2710,
                        2824
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 122
                        },
                        "start": {
                          "column": 8,
                          "line": 117
                        }
                      }
                    }
                  ],
                  "range": [
                    2581,
                    2830
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 123
                    },
                    "start": {
                      "column": 23,
                      "line": 110
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 110
                        },
                        "start": {
                          "column": 10,
                          "line": 110
                        }
                      },
                      "range": [
                        2568,
                        2576
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2570,
                          2576
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 110
                          },
                          "start": {
                            "column": 12,
                            "line": 110
                          }
                        }
                      }
                    },
                    "range": [
                      2563,
                      2576
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 110
                      },
                      "start": {
                        "column": 5,
                        "line": 110
                      }
                    }
                  }
                ],
                "range": [
                  2562,
                  2830
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 123
                  },
                  "start": {
                    "column": 4,
                    "line": 110
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2966,
                                2971
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 129
                                },
                                "start": {
                                  "column": 12,
                                  "line": 129
                                }
                              }
                            },
                            "range": [
                              2966,
                              2972
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 129
                              },
                              "start": {
                                "column": 12,
                                "line": 129
                              }
                            }
                          }
                        ],
                        "range": [
                          2952,
                          2993
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 130
                          },
                          "start": {
                            "column": 13,
                            "line": 128
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2904,
                                2909
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 126
                                },
                                "start": {
                                  "column": 12,
                                  "line": 126
                                }
                              }
                            },
                            "range": [
                              2904,
                              2910
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 126
                              },
                              "start": {
                                "column": 12,
                                "line": 126
                              }
                            }
                          }
                        ],
                        "range": [
                          2890,
                          2938
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 127
                          },
                          "start": {
                            "column": 32,
                            "line": 125
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              2882,
                              2887
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 125
                              },
                              "start": {
                                "column": 24,
                                "line": 125
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "range": [
                            2870,
                            2881
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 125
                            },
                            "start": {
                              "column": 12,
                              "line": 125
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2870,
                          2888
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 125
                          },
                          "start": {
                            "column": 12,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2866,
                        2993
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 130
                        },
                        "start": {
                          "column": 8,
                          "line": 125
                        }
                      }
                    }
                  ],
                  "range": [
                    2856,
                    2999
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 131
                    },
                    "start": {
                      "column": 24,
                      "line": 124
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
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 124
                        },
                        "start": {
                          "column": 11,
                          "line": 124
                        }
                      },
                      "range": [
                        2843,
                        2851
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2845,
                          2851
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 124
                          },
                          "start": {
                            "column": 13,
                            "line": 124
                          }
                        }
                      }
                    },
                    "range": [
                      2837,
                      2851
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 124
                      },
                      "start": {
                        "column": 5,
                        "line": 124
                      }
                    }
                  }
                ],
                "range": [
                  2836,
                  2999
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 131
                  },
                  "start": {
                    "column": 4,
                    "line": 124
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                3126,
                                3131
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 137
                                },
                                "start": {
                                  "column": 12,
                                  "line": 137
                                }
                              }
                            },
                            "range": [
                              3126,
                              3132
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 137
                              },
                              "start": {
                                "column": 12,
                                "line": 137
                              }
                            }
                          }
                        ],
                        "range": [
                          3112,
                          3155
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 138
                          },
                          "start": {
                            "column": 13,
                            "line": 136
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                3075,
                                3080
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 134
                                },
                                "start": {
                                  "column": 12,
                                  "line": 134
                                }
                              }
                            },
                            "range": [
                              3075,
                              3081
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 134
                              },
                              "start": {
                                "column": 12,
                                "line": 134
                              }
                            }
                          }
                        ],
                        "range": [
                          3061,
                          3098
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 135
                          },
                          "start": {
                            "column": 33,
                            "line": 133
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              3053,
                              3058
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 133
                              },
                              "start": {
                                "column": 25,
                                "line": 133
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isEmptyArray",
                          "optional": false,
                          "range": [
                            3040,
                            3052
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 133
                            },
                            "start": {
                              "column": 12,
                              "line": 133
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          3040,
                          3059
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 133
                          },
                          "start": {
                            "column": 12,
                            "line": 133
                          }
                        }
                      },
                      "range": [
                        3036,
                        3155
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 138
                        },
                        "start": {
                          "column": 8,
                          "line": 133
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "range": [
                                3259,
                                3264
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 143
                                },
                                "start": {
                                  "column": 12,
                                  "line": 143
                                }
                              }
                            },
                            "range": [
                              3259,
                              3265
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 143
                              },
                              "start": {
                                "column": 12,
                                "line": 143
                              }
                            }
                          }
                        ],
                        "range": [
                          3245,
                          3288
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 144
                          },
                          "start": {
                            "column": 13,
                            "line": 142
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                3208,
                                3213
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 140
                                },
                                "start": {
                                  "column": 12,
                                  "line": 140
                                }
                              }
                            },
                            "range": [
                              3208,
                              3214
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 140
                              },
                              "start": {
                                "column": 12,
                                "line": 140
                              }
                            }
                          }
                        ],
                        "range": [
                          3194,
                          3231
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 141
                          },
                          "start": {
                            "column": 38,
                            "line": 139
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              3186,
                              3191
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 139
                              },
                              "start": {
                                "column": 30,
                                "line": 139
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "range": [
                            3168,
                            3185
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 139
                            },
                            "start": {
                              "column": 12,
                              "line": 139
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          3168,
                          3192
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 139
                          },
                          "start": {
                            "column": 12,
                            "line": 139
                          }
                        }
                      },
                      "range": [
                        3164,
                        3288
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 144
                        },
                        "start": {
                          "column": 8,
                          "line": 139
                        }
                      }
                    }
                  ],
                  "range": [
                    3026,
                    3294
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 145
                    },
                    "start": {
                      "column": 25,
                      "line": 132
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 132
                        },
                        "start": {
                          "column": 10,
                          "line": 132
                        }
                      },
                      "range": [
                        3011,
                        3021
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            3013,
                            3019
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 132
                            },
                            "start": {
                              "column": 12,
                              "line": 132
                            }
                          }
                        },
                        "range": [
                          3013,
                          3021
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 132
                          },
                          "start": {
                            "column": 12,
                            "line": 132
                          }
                        }
                      }
                    },
                    "range": [
                      3006,
                      3021
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 132
                      },
                      "start": {
                        "column": 5,
                        "line": 132
                      }
                    }
                  }
                ],
                "range": [
                  3005,
                  3294
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 145
                  },
                  "start": {
                    "column": 4,
                    "line": 132
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                3439,
                                3444
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 151
                                },
                                "start": {
                                  "column": 12,
                                  "line": 151
                                }
                              }
                            },
                            "range": [
                              3439,
                              3445
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 151
                              },
                              "start": {
                                "column": 12,
                                "line": 151
                              }
                            }
                          }
                        ],
                        "range": [
                          3425,
                          3468
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 152
                          },
                          "start": {
                            "column": 13,
                            "line": 150
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                3376,
                                3381
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 148
                                },
                                "start": {
                                  "column": 12,
                                  "line": 148
                                }
                              }
                            },
                            "range": [
                              3376,
                              3382
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 148
                              },
                              "start": {
                                "column": 12,
                                "line": 148
                              }
                            }
                          }
                        ],
                        "range": [
                          3362,
                          3411
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 149
                          },
                          "start": {
                            "column": 38,
                            "line": 147
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              3354,
                              3359
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 147
                              },
                              "start": {
                                "column": 30,
                                "line": 147
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "range": [
                            3336,
                            3353
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 147
                            },
                            "start": {
                              "column": 12,
                              "line": 147
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          3336,
                          3360
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 147
                          },
                          "start": {
                            "column": 12,
                            "line": 147
                          }
                        }
                      },
                      "range": [
                        3332,
                        3468
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 152
                        },
                        "start": {
                          "column": 8,
                          "line": 147
                        }
                      }
                    }
                  ],
                  "range": [
                    3322,
                    3474
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 153
                    },
                    "start": {
                      "column": 26,
                      "line": 146
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
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 146
                        },
                        "start": {
                          "column": 11,
                          "line": 146
                        }
                      },
                      "range": [
                        3307,
                        3317
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            3309,
                            3315
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 146
                            },
                            "start": {
                              "column": 13,
                              "line": 146
                            }
                          }
                        },
                        "range": [
                          3309,
                          3317
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 146
                          },
                          "start": {
                            "column": 13,
                            "line": 146
                          }
                        }
                      }
                    },
                    "range": [
                      3301,
                      3317
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 146
                      },
                      "start": {
                        "column": 5,
                        "line": 146
                      }
                    }
                  }
                ],
                "range": [
                  3300,
                  3474
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 153
                  },
                  "start": {
                    "column": 4,
                    "line": 146
                  }
                }
              }
            ],
            "range": [
              2088,
              3477
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 154
              },
              "start": {
                "column": 19,
                "line": 87
              }
            }
          },
          "range": [
            2075,
            3477
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 154
            },
            "start": {
              "column": 6,
              "line": 87
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2069,
        3478
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 154
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyString",
        "optional": false,
        "range": [
          3507,
          3518
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 158
          },
          "start": {
            "column": 5,
            "line": 158
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
              "raw": "''",
              "value": "",
              "range": [
                3521,
                3523
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 158
                },
                "start": {
                  "column": 19,
                  "line": 158
                }
              }
            },
            "range": [
              3521,
              3523
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 158
              },
              "start": {
                "column": 19,
                "line": 158
              }
            }
          },
          {
            "type": "TSNullKeyword",
            "range": [
              3526,
              3530
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 158
              },
              "start": {
                "column": 24,
                "line": 158
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              3533,
              3542
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 158
              },
              "start": {
                "column": 31,
                "line": 158
              }
            }
          }
        ],
        "range": [
          3521,
          3542
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 158
          },
          "start": {
            "column": 19,
            "line": 158
          }
        }
      },
      "range": [
        3502,
        3543
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 158
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
                    "name": "value",
                    "optional": false,
                    "range": [
                      3626,
                      3631
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 161
                      },
                      "start": {
                        "column": 11,
                        "line": 161
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      3636,
                      3638
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 161
                      },
                      "start": {
                        "column": 21,
                        "line": 161
                      }
                    }
                  },
                  "range": [
                    3626,
                    3638
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 161
                    },
                    "start": {
                      "column": 11,
                      "line": 161
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      3642,
                      3647
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 161
                      },
                      "start": {
                        "column": 27,
                        "line": 161
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      3652,
                      3656
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 161
                      },
                      "start": {
                        "column": 37,
                        "line": 161
                      }
                    }
                  },
                  "range": [
                    3642,
                    3656
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 161
                    },
                    "start": {
                      "column": 27,
                      "line": 161
                    }
                  }
                },
                "range": [
                  3626,
                  3656
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 161
                  },
                  "start": {
                    "column": 11,
                    "line": 161
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    3660,
                    3665
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 161
                    },
                    "start": {
                      "column": 45,
                      "line": 161
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    3670,
                    3679
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 161
                    },
                    "start": {
                      "column": 55,
                      "line": 161
                    }
                  }
                },
                "range": [
                  3660,
                  3679
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 161
                  },
                  "start": {
                    "column": 45,
                    "line": 161
                  }
                }
              },
              "range": [
                3626,
                3679
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 161
                },
                "start": {
                  "column": 11,
                  "line": 161
                }
              }
            },
            "range": [
              3619,
              3680
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          }
        ],
        "range": [
          3613,
          3682
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 162
          },
          "start": {
            "column": 68,
            "line": 160
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "range": [
          3554,
          3561
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 160
          },
          "start": {
            "column": 9,
            "line": 160
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 160
              },
              "start": {
                "column": 22,
                "line": 160
              }
            },
            "range": [
              3567,
              3589
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3569,
                    3575
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 160
                    },
                    "start": {
                      "column": 24,
                      "line": 160
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EmptyString",
                    "optional": false,
                    "range": [
                      3578,
                      3589
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 160
                      },
                      "start": {
                        "column": 33,
                        "line": 160
                      }
                    }
                  },
                  "range": [
                    3578,
                    3589
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 160
                    },
                    "start": {
                      "column": 33,
                      "line": 160
                    }
                  }
                }
              ],
              "range": [
                3569,
                3589
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 160
                },
                "start": {
                  "column": 24,
                  "line": 160
                }
              }
            }
          },
          "range": [
            3562,
            3589
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 160
            },
            "start": {
              "column": 17,
              "line": 160
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 67,
            "line": 160
          },
          "start": {
            "column": 45,
            "line": 160
          }
        },
        "range": [
          3590,
          3612
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              3592,
              3597
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 160
              },
              "start": {
                "column": 47,
                "line": 160
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 160
              },
              "start": {
                "column": 56,
                "line": 160
              }
            },
            "range": [
              3601,
              3612
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EmptyString",
                "optional": false,
                "range": [
                  3601,
                  3612
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 160
                  },
                  "start": {
                    "column": 56,
                    "line": 160
                  }
                }
              },
              "range": [
                3601,
                3612
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 160
                },
                "start": {
                  "column": 56,
                  "line": 160
                }
              }
            }
          },
          "range": [
            3592,
            3612
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 160
            },
            "start": {
              "column": 47,
              "line": 160
            }
          }
        }
      },
      "range": [
        3545,
        3682
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 160
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 164
                },
                "start": {
                  "column": 8,
                  "line": 164
                }
              },
              "range": [
                3692,
                3719
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      3694,
                      3700
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 164
                      },
                      "start": {
                        "column": 10,
                        "line": 164
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      3703,
                      3707
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 164
                      },
                      "start": {
                        "column": 19,
                        "line": 164
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      3710,
                      3719
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 164
                      },
                      "start": {
                        "column": 26,
                        "line": 164
                      }
                    }
                  }
                ],
                "range": [
                  3694,
                  3719
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 164
                  },
                  "start": {
                    "column": 10,
                    "line": 164
                  }
                }
              }
            },
            "range": [
              3688,
              3719
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 164
              },
              "start": {
                "column": 4,
                "line": 164
              }
            }
          },
          "init": null,
          "range": [
            3688,
            3719
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 164
            },
            "start": {
              "column": 4,
              "line": 164
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3684,
        3720
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 164
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                3747,
                3751
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 167
                },
                "start": {
                  "column": 4,
                  "line": 167
                }
              }
            },
            "range": [
              3747,
              3752
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 167
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          }
        ],
        "range": [
          3741,
          3770
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 168
          },
          "start": {
            "column": 19,
            "line": 166
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              3734,
              3738
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 166
              },
              "start": {
                "column": 12,
                "line": 166
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "range": [
            3726,
            3733
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 166
            },
            "start": {
              "column": 4,
              "line": 166
            }
          }
        },
        "optional": false,
        "range": [
          3726,
          3739
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 166
          },
          "start": {
            "column": 4,
            "line": 166
          }
        }
      },
      "range": [
        3722,
        3770
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 168
        },
        "start": {
          "column": 0,
          "line": 166
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
        "name": "assert",
        "optional": false,
        "range": [
          3811,
          3817
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 172
          },
          "start": {
            "column": 17,
            "line": 172
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 172
              },
              "start": {
                "column": 32,
                "line": 172
              }
            },
            "range": [
              3826,
              3831
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                3828,
                3831
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 172
                },
                "start": {
                  "column": 34,
                  "line": 172
                }
              }
            }
          },
          "range": [
            3821,
            3831
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 172
            },
            "start": {
              "column": 27,
              "line": 172
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 172
          },
          "start": {
            "column": 38,
            "line": 172
          }
        },
        "range": [
          3832,
          3852
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              3842,
              3847
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 172
              },
              "start": {
                "column": 48,
                "line": 172
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 172
              },
              "start": {
                "column": 57,
                "line": 172
              }
            },
            "range": [
              3851,
              3852
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3851,
                  3852
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 172
                  },
                  "start": {
                    "column": 57,
                    "line": 172
                  }
                }
              },
              "range": [
                3851,
                3852
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 172
                },
                "start": {
                  "column": 57,
                  "line": 172
                }
              }
            }
          },
          "range": [
            3834,
            3852
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 172
            },
            "start": {
              "column": 40,
              "line": 172
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 172
          },
          "start": {
            "column": 23,
            "line": 172
          }
        },
        "range": [
          3817,
          3820
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
                3818,
                3819
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 172
                },
                "start": {
                  "column": 24,
                  "line": 172
                }
              }
            },
            "out": false,
            "range": [
              3818,
              3819
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 172
              },
              "start": {
                "column": 24,
                "line": 172
              }
            }
          }
        ]
      },
      "range": [
        3794,
        3852
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 172
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    3926,
                    3929
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 175
                    },
                    "start": {
                      "column": 23,
                      "line": 175
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "range": [
                  3907,
                  3913
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 175
                  },
                  "start": {
                    "column": 4,
                    "line": 175
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3913,
                  3925
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            3914,
                            3915
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 175
                            },
                            "start": {
                              "column": 11,
                              "line": 175
                            }
                          }
                        },
                        "range": [
                          3914,
                          3915
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 175
                          },
                          "start": {
                            "column": 11,
                            "line": 175
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          3918,
                          3924
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 175
                          },
                          "start": {
                            "column": 15,
                            "line": 175
                          }
                        }
                      }
                    ],
                    "range": [
                      3914,
                      3924
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 175
                      },
                      "start": {
                        "column": 11,
                        "line": 175
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 175
                  },
                  "start": {
                    "column": 10,
                    "line": 175
                  }
                }
              },
              "range": [
                3907,
                3930
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 175
                },
                "start": {
                  "column": 4,
                  "line": 175
                }
              }
            },
            "range": [
              3907,
              3931
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 175
              },
              "start": {
                "column": 4,
                "line": 175
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                3936,
                3939
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 176
                },
                "start": {
                  "column": 4,
                  "line": 176
                }
              }
            },
            "range": [
              3936,
              3940
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 176
              },
              "start": {
                "column": 4,
                "line": 176
              }
            }
          }
        ],
        "range": [
          3901,
          3957
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 177
          },
          "start": {
            "column": 47,
            "line": 174
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          3863,
          3868
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 174
          },
          "start": {
            "column": 9,
            "line": 174
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 174
              },
              "start": {
                "column": 18,
                "line": 174
              }
            },
            "range": [
              3872,
              3899
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    3874,
                    3880
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 174
                    },
                    "start": {
                      "column": 20,
                      "line": 174
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3883,
                    3889
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 174
                    },
                    "start": {
                      "column": 29,
                      "line": 174
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    3892,
                    3899
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 174
                    },
                    "start": {
                      "column": 38,
                      "line": 174
                    }
                  }
                }
              ],
              "range": [
                3874,
                3899
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 174
                },
                "start": {
                  "column": 20,
                  "line": 174
                }
              }
            }
          },
          "range": [
            3869,
            3899
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 174
            },
            "start": {
              "column": 15,
              "line": 174
            }
          }
        }
      ],
      "range": [
        3854,
        3957
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 177
        },
        "start": {
          "column": 0,
          "line": 174
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
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4045,
                      4046
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 182
                      },
                      "start": {
                        "column": 15,
                        "line": 182
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    4038,
                    4046
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 182
                    },
                    "start": {
                      "column": 8,
                      "line": 182
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    4051,
                    4059
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 182
                    },
                    "start": {
                      "column": 21,
                      "line": 182
                    }
                  }
                },
                "range": [
                  4038,
                  4059
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 182
                  },
                  "start": {
                    "column": 8,
                    "line": 182
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
                    4063,
                    4064
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 182
                    },
                    "start": {
                      "column": 33,
                      "line": 182
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4069,
                    4070
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 182
                    },
                    "start": {
                      "column": 39,
                      "line": 182
                    }
                  }
                },
                "range": [
                  4063,
                  4070
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 182
                  },
                  "start": {
                    "column": 33,
                    "line": 182
                  }
                }
              },
              "range": [
                4038,
                4070
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 182
                },
                "start": {
                  "column": 8,
                  "line": 182
                }
              }
            },
            "range": [
              4031,
              4071
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 182
              },
              "start": {
                "column": 1,
                "line": 182
              }
            }
          }
        ],
        "range": [
          4028,
          4073
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 183
          },
          "start": {
            "column": 47,
            "line": 181
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check1",
        "optional": false,
        "range": [
          3990,
          3996
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 181
          },
          "start": {
            "column": 9,
            "line": 181
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
                "column": 26,
                "line": 181
              },
              "start": {
                "column": 17,
                "line": 181
              }
            },
            "range": [
              3998,
              4007
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4000,
                4007
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 181
                },
                "start": {
                  "column": 19,
                  "line": 181
                }
              }
            }
          },
          "range": [
            3997,
            4007
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 181
            },
            "start": {
              "column": 16,
              "line": 181
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 181
          },
          "start": {
            "column": 27,
            "line": 181
          }
        },
        "range": [
          4008,
          4027
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              4010,
              4011
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 181
              },
              "start": {
                "column": 29,
                "line": 181
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 181
              },
              "start": {
                "column": 35,
                "line": 181
              }
            },
            "range": [
              4016,
              4026
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4016,
                    4022
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 181
                    },
                    "start": {
                      "column": 35,
                      "line": 181
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      4025,
                      4026
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 181
                      },
                      "start": {
                        "column": 44,
                        "line": 181
                      }
                    }
                  },
                  "range": [
                    4025,
                    4026
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 181
                    },
                    "start": {
                      "column": 44,
                      "line": 181
                    }
                  }
                }
              ],
              "range": [
                4016,
                4026
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 181
                },
                "start": {
                  "column": 35,
                  "line": 181
                }
              }
            }
          },
          "range": [
            4010,
            4027
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 181
            },
            "start": {
              "column": 29,
              "line": 181
            }
          }
        }
      },
      "range": [
        3981,
        4073
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 183
        },
        "start": {
          "column": 0,
          "line": 181
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
                    4133,
                    4134
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 186
                    },
                    "start": {
                      "column": 8,
                      "line": 186
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    4139,
                    4146
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 186
                    },
                    "start": {
                      "column": 14,
                      "line": 186
                    }
                  }
                },
                "range": [
                  4133,
                  4146
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 186
                  },
                  "start": {
                    "column": 8,
                    "line": 186
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
                    4150,
                    4151
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 186
                    },
                    "start": {
                      "column": 25,
                      "line": 186
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4156,
                    4157
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 186
                    },
                    "start": {
                      "column": 31,
                      "line": 186
                    }
                  }
                },
                "range": [
                  4150,
                  4157
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 186
                  },
                  "start": {
                    "column": 25,
                    "line": 186
                  }
                }
              },
              "range": [
                4133,
                4157
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 186
                },
                "start": {
                  "column": 8,
                  "line": 186
                }
              }
            },
            "range": [
              4126,
              4158
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 186
              },
              "start": {
                "column": 1,
                "line": 186
              }
            }
          }
        ],
        "range": [
          4123,
          4160
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 187
          },
          "start": {
            "column": 48,
            "line": 185
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check2",
        "optional": false,
        "range": [
          4084,
          4090
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 185
          },
          "start": {
            "column": 9,
            "line": 185
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
                "column": 26,
                "line": 185
              },
              "start": {
                "column": 17,
                "line": 185
              }
            },
            "range": [
              4092,
              4101
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4094,
                4101
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 185
                },
                "start": {
                  "column": 19,
                  "line": 185
                }
              }
            }
          },
          "range": [
            4091,
            4101
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 185
            },
            "start": {
              "column": 16,
              "line": 185
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 185
          },
          "start": {
            "column": 27,
            "line": 185
          }
        },
        "range": [
          4102,
          4122
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              4104,
              4105
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 185
              },
              "start": {
                "column": 29,
                "line": 185
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 185
              },
              "start": {
                "column": 35,
                "line": 185
              }
            },
            "range": [
              4110,
              4121
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      4110,
                      4117
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 185
                      },
                      "start": {
                        "column": 35,
                        "line": 185
                      }
                    }
                  },
                  "range": [
                    4110,
                    4117
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 185
                    },
                    "start": {
                      "column": 35,
                      "line": 185
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      4120,
                      4121
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 185
                      },
                      "start": {
                        "column": 45,
                        "line": 185
                      }
                    }
                  },
                  "range": [
                    4120,
                    4121
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 185
                    },
                    "start": {
                      "column": 45,
                      "line": 185
                    }
                  }
                }
              ],
              "range": [
                4110,
                4121
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 185
                },
                "start": {
                  "column": 35,
                  "line": 185
                }
              }
            }
          },
          "range": [
            4104,
            4122
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 185
            },
            "start": {
              "column": 29,
              "line": 185
            }
          }
        }
      },
      "range": [
        4075,
        4160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 187
        },
        "start": {
          "column": 0,
          "line": 185
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4234,
                      4235
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 191
                      },
                      "start": {
                        "column": 2,
                        "line": 191
                      }
                    }
                  },
                  "range": [
                    4234,
                    4236
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 191
                    },
                    "start": {
                      "column": 2,
                      "line": 191
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            4289,
                            4290
                          ],
                          "loc": {
                            "end": {
                              "column": 4,
                              "line": 193
                            },
                            "start": {
                              "column": 3,
                              "line": 193
                            }
                          }
                        },
                        "range": [
                          4289,
                          4291
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 193
                          },
                          "start": {
                            "column": 3,
                            "line": 193
                          }
                        }
                      }
                    ],
                    "range": [
                      4284,
                      4311
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 194
                      },
                      "start": {
                        "column": 32,
                        "line": 192
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
                          4258,
                          4259
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 192
                          },
                          "start": {
                            "column": 6,
                            "line": 192
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          4264,
                          4271
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 192
                          },
                          "start": {
                            "column": 12,
                            "line": 192
                          }
                        }
                      },
                      "range": [
                        4258,
                        4271
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 192
                        },
                        "start": {
                          "column": 6,
                          "line": 192
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
                          4275,
                          4276
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 192
                          },
                          "start": {
                            "column": 23,
                            "line": 192
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          4281,
                          4282
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 192
                          },
                          "start": {
                            "column": 29,
                            "line": 192
                          }
                        }
                      },
                      "range": [
                        4275,
                        4282
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 192
                        },
                        "start": {
                          "column": 23,
                          "line": 192
                        }
                      }
                    },
                    "range": [
                      4258,
                      4282
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 192
                      },
                      "start": {
                        "column": 6,
                        "line": 192
                      }
                    }
                  },
                  "range": [
                    4254,
                    4311
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 194
                    },
                    "start": {
                      "column": 2,
                      "line": 192
                    }
                  }
                }
              ],
              "range": [
                4230,
                4314
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 195
                },
                "start": {
                  "column": 39,
                  "line": 190
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
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4203,
                      4204
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 190
                      },
                      "start": {
                        "column": 12,
                        "line": 190
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    4196,
                    4204
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 190
                    },
                    "start": {
                      "column": 5,
                      "line": 190
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    4209,
                    4217
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 190
                    },
                    "start": {
                      "column": 18,
                      "line": 190
                    }
                  }
                },
                "range": [
                  4196,
                  4217
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 190
                  },
                  "start": {
                    "column": 5,
                    "line": 190
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
                    4221,
                    4222
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 190
                    },
                    "start": {
                      "column": 30,
                      "line": 190
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4227,
                    4228
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 190
                    },
                    "start": {
                      "column": 36,
                      "line": 190
                    }
                  }
                },
                "range": [
                  4221,
                  4228
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 190
                  },
                  "start": {
                    "column": 30,
                    "line": 190
                  }
                }
              },
              "range": [
                4196,
                4228
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 190
                },
                "start": {
                  "column": 5,
                  "line": 190
                }
              }
            },
            "range": [
              4192,
              4314
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 195
              },
              "start": {
                "column": 1,
                "line": 190
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4335,
                      4336
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 197
                      },
                      "start": {
                        "column": 2,
                        "line": 197
                      }
                    }
                  },
                  "range": [
                    4335,
                    4337
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 197
                    },
                    "start": {
                      "column": 2,
                      "line": 197
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            4375,
                            4376
                          ],
                          "loc": {
                            "end": {
                              "column": 4,
                              "line": 199
                            },
                            "start": {
                              "column": 3,
                              "line": 199
                            }
                          }
                        },
                        "range": [
                          4375,
                          4377
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 199
                          },
                          "start": {
                            "column": 3,
                            "line": 199
                          }
                        }
                      }
                    ],
                    "range": [
                      4370,
                      4397
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 200
                      },
                      "start": {
                        "column": 17,
                        "line": 198
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          4366,
                          4367
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 198
                          },
                          "start": {
                            "column": 13,
                            "line": 198
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "check2",
                      "optional": false,
                      "range": [
                        4359,
                        4365
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 198
                        },
                        "start": {
                          "column": 6,
                          "line": 198
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      4359,
                      4368
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 198
                      },
                      "start": {
                        "column": 6,
                        "line": 198
                      }
                    }
                  },
                  "range": [
                    4355,
                    4397
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 200
                    },
                    "start": {
                      "column": 2,
                      "line": 198
                    }
                  }
                }
              ],
              "range": [
                4331,
                4400
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 201
                },
                "start": {
                  "column": 16,
                  "line": 196
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    4327,
                    4328
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 196
                    },
                    "start": {
                      "column": 12,
                      "line": 196
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "check1",
                "optional": false,
                "range": [
                  4320,
                  4326
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 196
                  },
                  "start": {
                    "column": 5,
                    "line": 196
                  }
                }
              },
              "optional": false,
              "range": [
                4320,
                4329
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 196
                },
                "start": {
                  "column": 5,
                  "line": 196
                }
              }
            },
            "range": [
              4316,
              4400
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 201
              },
              "start": {
                "column": 1,
                "line": 196
              }
            }
          }
        ],
        "range": [
          4189,
          4402
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 202
          },
          "start": {
            "column": 27,
            "line": 189
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "range": [
          4171,
          4176
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 189
          },
          "start": {
            "column": 9,
            "line": 189
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
                "column": 25,
                "line": 189
              },
              "start": {
                "column": 16,
                "line": 189
              }
            },
            "range": [
              4178,
              4187
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4180,
                4187
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 189
                },
                "start": {
                  "column": 18,
                  "line": 189
                }
              }
            }
          },
          "range": [
            4177,
            4187
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 189
            },
            "start": {
              "column": 15,
              "line": 189
            }
          }
        }
      ],
      "range": [
        4162,
        4402
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 202
        },
        "start": {
          "column": 0,
          "line": 189
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
          4530,
          4532
        ],
        "loc": {
          "end": {
            "column": 106,
            "line": 206
          },
          "start": {
            "column": 104,
            "line": 206
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertRelationIsNullOrStringArray",
        "optional": false,
        "range": [
          4435,
          4468
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 206
          },
          "start": {
            "column": 9,
            "line": 206
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 206
              },
              "start": {
                "column": 44,
                "line": 206
              }
            },
            "range": [
              4470,
              4498
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          4473,
                          4479
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 206
                          },
                          "start": {
                            "column": 47,
                            "line": 206
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          4482,
                          4488
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 206
                          },
                          "start": {
                            "column": 56,
                            "line": 206
                          }
                        }
                      }
                    ],
                    "range": [
                      4473,
                      4488
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 206
                      },
                      "start": {
                        "column": 47,
                        "line": 206
                      }
                    }
                  },
                  "range": [
                    4472,
                    4491
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 206
                    },
                    "start": {
                      "column": 46,
                      "line": 206
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    4494,
                    4498
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 206
                    },
                    "start": {
                      "column": 68,
                      "line": 206
                    }
                  }
                }
              ],
              "range": [
                4472,
                4498
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 206
                },
                "start": {
                  "column": 46,
                  "line": 206
                }
              }
            }
          },
          "range": [
            4469,
            4498
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 206
            },
            "start": {
              "column": 43,
              "line": 206
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 103,
            "line": 206
          },
          "start": {
            "column": 73,
            "line": 206
          }
        },
        "range": [
          4499,
          4529
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "range": [
              4509,
              4510
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 206
              },
              "start": {
                "column": 83,
                "line": 206
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 103,
                "line": 206
              },
              "start": {
                "column": 88,
                "line": 206
              }
            },
            "range": [
              4514,
              4529
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      4514,
                      4520
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 206
                      },
                      "start": {
                        "column": 88,
                        "line": 206
                      }
                    }
                  },
                  "range": [
                    4514,
                    4522
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 206
                    },
                    "start": {
                      "column": 88,
                      "line": 206
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    4525,
                    4529
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 206
                    },
                    "start": {
                      "column": 99,
                      "line": 206
                    }
                  }
                }
              ],
              "range": [
                4514,
                4529
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 206
                },
                "start": {
                  "column": 88,
                  "line": 206
                }
              }
            }
          },
          "range": [
            4501,
            4529
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 206
            },
            "start": {
              "column": 75,
              "line": 206
            }
          }
        }
      },
      "range": [
        4426,
        4532
      ],
      "loc": {
        "end": {
          "column": 106,
          "line": 206
        },
        "start": {
          "column": 0,
          "line": 206
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    4620,
                    4623
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 209
                    },
                    "start": {
                      "column": 38,
                      "line": 209
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertRelationIsNullOrStringArray",
                "optional": false,
                "range": [
                  4586,
                  4619
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 209
                  },
                  "start": {
                    "column": 4,
                    "line": 209
                  }
                }
              },
              "optional": false,
              "range": [
                4586,
                4624
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 209
                },
                "start": {
                  "column": 4,
                  "line": 209
                }
              }
            },
            "range": [
              4586,
              4625
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 209
              },
              "start": {
                "column": 4,
                "line": 209
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                4630,
                4633
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 210
                },
                "start": {
                  "column": 4,
                  "line": 210
                }
              }
            },
            "range": [
              4630,
              4634
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 210
              },
              "start": {
                "column": 4,
                "line": 210
              }
            }
          }
        ],
        "range": [
          4580,
          4656
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 211
          },
          "start": {
            "column": 46,
            "line": 208
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1x",
        "optional": false,
        "range": [
          4543,
          4546
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 208
              },
              "start": {
                "column": 16,
                "line": 208
              }
            },
            "range": [
              4550,
              4578
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          4553,
                          4559
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 208
                          },
                          "start": {
                            "column": 19,
                            "line": 208
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          4562,
                          4568
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 208
                          },
                          "start": {
                            "column": 28,
                            "line": 208
                          }
                        }
                      }
                    ],
                    "range": [
                      4553,
                      4568
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 208
                      },
                      "start": {
                        "column": 19,
                        "line": 208
                      }
                    }
                  },
                  "range": [
                    4552,
                    4571
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 208
                    },
                    "start": {
                      "column": 18,
                      "line": 208
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    4574,
                    4578
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 208
                    },
                    "start": {
                      "column": 40,
                      "line": 208
                    }
                  }
                }
              ],
              "range": [
                4552,
                4578
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 208
                },
                "start": {
                  "column": 18,
                  "line": 208
                }
              }
            }
          },
          "range": [
            4547,
            4578
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 208
            },
            "start": {
              "column": 13,
              "line": 208
            }
          }
        }
      ],
      "range": [
        4534,
        4656
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 211
        },
        "start": {
          "column": 0,
          "line": 208
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDiscriminatedUnion",
        "optional": false,
        "range": [
          4685,
          4705
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 215
          },
          "start": {
            "column": 5,
            "line": 215
          }
        }
      },
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    4710,
                    4714
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 215
                    },
                    "start": {
                      "column": 30,
                      "line": 215
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
                      "line": 215
                    },
                    "start": {
                      "column": 34,
                      "line": 215
                    }
                  },
                  "range": [
                    4714,
                    4719
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'A'",
                      "value": "A",
                      "range": [
                        4716,
                        4719
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 215
                        },
                        "start": {
                          "column": 36,
                          "line": 215
                        }
                      }
                    },
                    "range": [
                      4716,
                      4719
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 215
                      },
                      "start": {
                        "column": 36,
                        "line": 215
                      }
                    }
                  }
                },
                "range": [
                  4710,
                  4720
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 215
                  },
                  "start": {
                    "column": 30,
                    "line": 215
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aProp",
                  "optional": false,
                  "range": [
                    4721,
                    4726
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 215
                    },
                    "start": {
                      "column": 41,
                      "line": 215
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
                      "column": 54,
                      "line": 215
                    },
                    "start": {
                      "column": 46,
                      "line": 215
                    }
                  },
                  "range": [
                    4726,
                    4734
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      4728,
                      4734
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 215
                      },
                      "start": {
                        "column": 48,
                        "line": 215
                      }
                    }
                  }
                },
                "range": [
                  4721,
                  4734
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 215
                  },
                  "start": {
                    "column": 41,
                    "line": 215
                  }
                }
              }
            ],
            "range": [
              4708,
              4736
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 215
              },
              "start": {
                "column": 28,
                "line": 215
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    4741,
                    4745
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 215
                    },
                    "start": {
                      "column": 61,
                      "line": 215
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
                      "column": 70,
                      "line": 215
                    },
                    "start": {
                      "column": 65,
                      "line": 215
                    }
                  },
                  "range": [
                    4745,
                    4750
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'B'",
                      "value": "B",
                      "range": [
                        4747,
                        4750
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 215
                        },
                        "start": {
                          "column": 67,
                          "line": 215
                        }
                      }
                    },
                    "range": [
                      4747,
                      4750
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 215
                      },
                      "start": {
                        "column": 67,
                        "line": 215
                      }
                    }
                  }
                },
                "range": [
                  4741,
                  4751
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 215
                  },
                  "start": {
                    "column": 61,
                    "line": 215
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bProp",
                  "optional": false,
                  "range": [
                    4752,
                    4757
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 215
                    },
                    "start": {
                      "column": 72,
                      "line": 215
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
                      "column": 85,
                      "line": 215
                    },
                    "start": {
                      "column": 77,
                      "line": 215
                    }
                  },
                  "range": [
                    4757,
                    4765
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      4759,
                      4765
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 215
                      },
                      "start": {
                        "column": 79,
                        "line": 215
                      }
                    }
                  }
                },
                "range": [
                  4752,
                  4765
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 215
                  },
                  "start": {
                    "column": 72,
                    "line": 215
                  }
                }
              }
            ],
            "range": [
              4739,
              4767
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 215
              },
              "start": {
                "column": 59,
                "line": 215
              }
            }
          }
        ],
        "range": [
          4708,
          4767
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 215
          },
          "start": {
            "column": 28,
            "line": 215
          }
        }
      },
      "range": [
        4680,
        4768
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 215
        },
        "start": {
          "column": 0,
          "line": 215
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
        "name": "isMyDiscriminatedUnion",
        "optional": false,
        "range": [
          4787,
          4809
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 217
          },
          "start": {
            "column": 17,
            "line": 217
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 217
              },
              "start": {
                "column": 44,
                "line": 217
              }
            },
            "range": [
              4814,
              4823
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                4816,
                4823
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 217
                },
                "start": {
                  "column": 46,
                  "line": 217
                }
              }
            }
          },
          "range": [
            4810,
            4823
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 217
            },
            "start": {
              "column": 40,
              "line": 217
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 84,
            "line": 217
          },
          "start": {
            "column": 54,
            "line": 217
          }
        },
        "range": [
          4824,
          4854
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "range": [
              4826,
              4830
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 217
              },
              "start": {
                "column": 56,
                "line": 217
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 84,
                "line": 217
              },
              "start": {
                "column": 64,
                "line": 217
              }
            },
            "range": [
              4834,
              4854
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyDiscriminatedUnion",
                "optional": false,
                "range": [
                  4834,
                  4854
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 217
                  },
                  "start": {
                    "column": 64,
                    "line": 217
                  }
                }
              },
              "range": [
                4834,
                4854
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 217
                },
                "start": {
                  "column": 64,
                  "line": 217
                }
              }
            }
          },
          "range": [
            4826,
            4854
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 217
            },
            "start": {
              "column": 56,
              "line": 217
            }
          }
        }
      },
      "range": [
        4770,
        4855
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 217
        },
        "start": {
          "column": 0,
          "line": 217
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
            "name": "working",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 219
                },
                "start": {
                  "column": 21,
                  "line": 219
                }
              },
              "range": [
                4878,
                4887
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  4880,
                  4887
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 219
                  },
                  "start": {
                    "column": 23,
                    "line": 219
                  }
                }
              }
            },
            "range": [
              4871,
              4887
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 219
              },
              "start": {
                "column": 14,
                "line": 219
              }
            }
          },
          "init": null,
          "range": [
            4871,
            4887
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 219
            },
            "start": {
              "column": 14,
              "line": 219
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        4857,
        4888
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 219
        },
        "start": {
          "column": 0,
          "line": 219
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
            "name": "broken",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 220
                },
                "start": {
                  "column": 20,
                  "line": 220
                }
              },
              "range": [
                4909,
                4942
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4917,
                        4930
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            4918,
                            4924
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 220
                            },
                            "start": {
                              "column": 29,
                              "line": 220
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            4926,
                            4929
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 220
                            },
                            "start": {
                              "column": 37,
                              "line": 220
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 220
                        },
                        "start": {
                          "column": 28,
                          "line": 220
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        4911,
                        4917
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 220
                        },
                        "start": {
                          "column": 22,
                          "line": 220
                        }
                      }
                    },
                    "range": [
                      4911,
                      4930
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 220
                      },
                      "start": {
                        "column": 22,
                        "line": 220
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      4933,
                      4942
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 220
                      },
                      "start": {
                        "column": 44,
                        "line": 220
                      }
                    }
                  }
                ],
                "range": [
                  4911,
                  4942
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 220
                  },
                  "start": {
                    "column": 22,
                    "line": 220
                  }
                }
              }
            },
            "range": [
              4903,
              4942
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 220
              },
              "start": {
                "column": 14,
                "line": 220
              }
            }
          },
          "init": null,
          "range": [
            4903,
            4942
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 220
            },
            "start": {
              "column": 14,
              "line": 220
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        4889,
        4943
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 220
        },
        "start": {
          "column": 0,
          "line": 220
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
            "name": "workingAgain",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 221
                },
                "start": {
                  "column": 26,
                  "line": 221
                }
              },
              "range": [
                4970,
                5013
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4978,
                        4991
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            4979,
                            4985
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 221
                            },
                            "start": {
                              "column": 35,
                              "line": 221
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            4987,
                            4990
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 221
                            },
                            "start": {
                              "column": 43,
                              "line": 221
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 221
                        },
                        "start": {
                          "column": 34,
                          "line": 221
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        4972,
                        4978
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 221
                        },
                        "start": {
                          "column": 28,
                          "line": 221
                        }
                      }
                    },
                    "range": [
                      4972,
                      4991
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 221
                      },
                      "start": {
                        "column": 28,
                        "line": 221
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      4994,
                      5003
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 221
                      },
                      "start": {
                        "column": 50,
                        "line": 221
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      5006,
                      5013
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 221
                      },
                      "start": {
                        "column": 62,
                        "line": 221
                      }
                    }
                  }
                ],
                "range": [
                  4972,
                  5013
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 221
                  },
                  "start": {
                    "column": 28,
                    "line": 221
                  }
                }
              }
            },
            "range": [
              4958,
              5013
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 221
              },
              "start": {
                "column": 14,
                "line": 221
              }
            }
          },
          "init": null,
          "range": [
            4958,
            5013
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 221
            },
            "start": {
              "column": 14,
              "line": 221
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        4944,
        5014
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 221
        },
        "start": {
          "column": 0,
          "line": 221
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "working",
                "optional": false,
                "range": [
                  5039,
                  5046
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 223
                  },
                  "start": {
                    "column": 23,
                    "line": 223
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "range": [
                5016,
                5038
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 223
                },
                "start": {
                  "column": 0,
                  "line": 223
                }
              }
            },
            "optional": false,
            "range": [
              5016,
              5047
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 223
              },
              "start": {
                "column": 0,
                "line": 223
              }
            }
          },
          "right": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "working",
                "optional": false,
                "range": [
                  5051,
                  5058
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 223
                  },
                  "start": {
                    "column": 35,
                    "line": 223
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
                  5059,
                  5063
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 223
                  },
                  "start": {
                    "column": 43,
                    "line": 223
                  }
                }
              },
              "range": [
                5051,
                5063
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 223
                },
                "start": {
                  "column": 35,
                  "line": 223
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "'A'",
              "value": "A",
              "range": [
                5068,
                5071
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 223
                },
                "start": {
                  "column": 52,
                  "line": 223
                }
              }
            },
            "range": [
              5051,
              5071
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 223
              },
              "start": {
                "column": 35,
                "line": 223
              }
            }
          },
          "range": [
            5016,
            5071
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 223
            },
            "start": {
              "column": 0,
              "line": 223
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "working",
            "optional": false,
            "range": [
              5075,
              5082
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 223
              },
              "start": {
                "column": 59,
                "line": 223
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "range": [
              5083,
              5088
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 223
              },
              "start": {
                "column": 67,
                "line": 223
              }
            }
          },
          "range": [
            5075,
            5088
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 223
            },
            "start": {
              "column": 59,
              "line": 223
            }
          }
        },
        "range": [
          5016,
          5088
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 223
          },
          "start": {
            "column": 0,
            "line": 223
          }
        }
      },
      "range": [
        5016,
        5089
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 223
        },
        "start": {
          "column": 0,
          "line": 223
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "broken",
                "optional": false,
                "range": [
                  5113,
                  5119
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 224
                  },
                  "start": {
                    "column": 23,
                    "line": 224
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "range": [
                5090,
                5112
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 224
                },
                "start": {
                  "column": 0,
                  "line": 224
                }
              }
            },
            "optional": false,
            "range": [
              5090,
              5120
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 224
              },
              "start": {
                "column": 0,
                "line": 224
              }
            }
          },
          "right": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "broken",
                "optional": false,
                "range": [
                  5124,
                  5130
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 224
                  },
                  "start": {
                    "column": 34,
                    "line": 224
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
                  5131,
                  5135
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 224
                  },
                  "start": {
                    "column": 41,
                    "line": 224
                  }
                }
              },
              "range": [
                5124,
                5135
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 224
                },
                "start": {
                  "column": 34,
                  "line": 224
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "'A'",
              "value": "A",
              "range": [
                5140,
                5143
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 224
                },
                "start": {
                  "column": 50,
                  "line": 224
                }
              }
            },
            "range": [
              5124,
              5143
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 224
              },
              "start": {
                "column": 34,
                "line": 224
              }
            }
          },
          "range": [
            5090,
            5143
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 224
            },
            "start": {
              "column": 0,
              "line": 224
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "broken",
            "optional": false,
            "range": [
              5147,
              5153
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 224
              },
              "start": {
                "column": 57,
                "line": 224
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "range": [
              5154,
              5159
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 224
              },
              "start": {
                "column": 64,
                "line": 224
              }
            }
          },
          "range": [
            5147,
            5159
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 224
            },
            "start": {
              "column": 57,
              "line": 224
            }
          }
        },
        "range": [
          5090,
          5159
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 224
          },
          "start": {
            "column": 0,
            "line": 224
          }
        }
      },
      "range": [
        5090,
        5160
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 224
        },
        "start": {
          "column": 0,
          "line": 224
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "range": [
                  5184,
                  5196
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 225
                  },
                  "start": {
                    "column": 23,
                    "line": 225
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "range": [
                5161,
                5183
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 225
                },
                "start": {
                  "column": 0,
                  "line": 225
                }
              }
            },
            "optional": false,
            "range": [
              5161,
              5197
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 225
              },
              "start": {
                "column": 0,
                "line": 225
              }
            }
          },
          "right": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "range": [
                  5201,
                  5213
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 225
                  },
                  "start": {
                    "column": 40,
                    "line": 225
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
                  5214,
                  5218
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 225
                  },
                  "start": {
                    "column": 53,
                    "line": 225
                  }
                }
              },
              "range": [
                5201,
                5218
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 225
                },
                "start": {
                  "column": 40,
                  "line": 225
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "'A'",
              "value": "A",
              "range": [
                5223,
                5226
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 225
                },
                "start": {
                  "column": 62,
                  "line": 225
                }
              }
            },
            "range": [
              5201,
              5226
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 225
              },
              "start": {
                "column": 40,
                "line": 225
              }
            }
          },
          "range": [
            5161,
            5226
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 225
            },
            "start": {
              "column": 0,
              "line": 225
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "workingAgain",
            "optional": false,
            "range": [
              5230,
              5242
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 225
              },
              "start": {
                "column": 69,
                "line": 225
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "range": [
              5243,
              5248
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 225
              },
              "start": {
                "column": 82,
                "line": 225
              }
            }
          },
          "range": [
            5230,
            5248
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 225
            },
            "start": {
              "column": 69,
              "line": 225
            }
          }
        },
        "range": [
          5161,
          5248
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 225
          },
          "start": {
            "column": 0,
            "line": 225
          }
        }
      },
      "range": [
        5161,
        5249
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 225
        },
        "start": {
          "column": 0,
          "line": 225
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "range": [
          5278,
          5283
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 229
          },
          "start": {
            "column": 5,
            "line": 229
          }
        }
      },
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    5294,
                    5298
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 230
                    },
                    "start": {
                      "column": 8,
                      "line": 230
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
                      "column": 17,
                      "line": 230
                    },
                    "start": {
                      "column": 12,
                      "line": 230
                    }
                  },
                  "range": [
                    5298,
                    5303
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        5300,
                        5303
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 230
                        },
                        "start": {
                          "column": 14,
                          "line": 230
                        }
                      }
                    },
                    "range": [
                      5300,
                      5303
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 230
                      },
                      "start": {
                        "column": 14,
                        "line": 230
                      }
                    }
                  }
                },
                "range": [
                  5294,
                  5304
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 230
                  },
                  "start": {
                    "column": 8,
                    "line": 230
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "range": [
                    5305,
                    5312
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 230
                    },
                    "start": {
                      "column": 19,
                      "line": 230
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
                      "column": 29,
                      "line": 230
                    },
                    "start": {
                      "column": 26,
                      "line": 230
                    }
                  },
                  "range": [
                    5312,
                    5315
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        5314,
                        5315
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 230
                        },
                        "start": {
                          "column": 28,
                          "line": 230
                        }
                      }
                    },
                    "range": [
                      5314,
                      5315
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 230
                      },
                      "start": {
                        "column": 28,
                        "line": 230
                      }
                    }
                  }
                },
                "range": [
                  5305,
                  5315
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 230
                  },
                  "start": {
                    "column": 19,
                    "line": 230
                  }
                }
              }
            ],
            "range": [
              5292,
              5317
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 230
              },
              "start": {
                "column": 6,
                "line": 230
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    5326,
                    5330
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 231
                    },
                    "start": {
                      "column": 8,
                      "line": 231
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
                      "column": 17,
                      "line": 231
                    },
                    "start": {
                      "column": 12,
                      "line": 231
                    }
                  },
                  "range": [
                    5330,
                    5335
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        5332,
                        5335
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 231
                        },
                        "start": {
                          "column": 14,
                          "line": 231
                        }
                      }
                    },
                    "range": [
                      5332,
                      5335
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 231
                      },
                      "start": {
                        "column": 14,
                        "line": 231
                      }
                    }
                  }
                },
                "range": [
                  5326,
                  5336
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 231
                  },
                  "start": {
                    "column": 8,
                    "line": 231
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "range": [
                    5337,
                    5344
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 231
                    },
                    "start": {
                      "column": 19,
                      "line": 231
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
                      "column": 29,
                      "line": 231
                    },
                    "start": {
                      "column": 26,
                      "line": 231
                    }
                  },
                  "range": [
                    5344,
                    5347
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        5346,
                        5347
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 231
                        },
                        "start": {
                          "column": 28,
                          "line": 231
                        }
                      }
                    },
                    "range": [
                      5346,
                      5347
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 231
                      },
                      "start": {
                        "column": 28,
                        "line": 231
                      }
                    }
                  }
                },
                "range": [
                  5337,
                  5347
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 231
                  },
                  "start": {
                    "column": 19,
                    "line": 231
                  }
                }
              }
            ],
            "range": [
              5324,
              5349
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 231
              },
              "start": {
                "column": 6,
                "line": 231
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    5358,
                    5362
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 232
                    },
                    "start": {
                      "column": 8,
                      "line": 232
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
                      "column": 17,
                      "line": 232
                    },
                    "start": {
                      "column": 12,
                      "line": 232
                    }
                  },
                  "range": [
                    5362,
                    5367
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        5364,
                        5367
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 232
                        },
                        "start": {
                          "column": 14,
                          "line": 232
                        }
                      }
                    },
                    "range": [
                      5364,
                      5367
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 232
                      },
                      "start": {
                        "column": 14,
                        "line": 232
                      }
                    }
                  }
                },
                "range": [
                  5358,
                  5367
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 232
                  },
                  "start": {
                    "column": 8,
                    "line": 232
                  }
                }
              }
            ],
            "range": [
              5356,
              5369
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 232
              },
              "start": {
                "column": 6,
                "line": 232
              }
            }
          }
        ],
        "range": [
          5290,
          5369
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 232
          },
          "start": {
            "column": 4,
            "line": 230
          }
        }
      },
      "range": [
        5273,
        5370
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 232
        },
        "start": {
          "column": 0,
          "line": 229
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
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      5485,
                      5489
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 236
                      },
                      "start": {
                        "column": 15,
                        "line": 236
                      }
                    }
                  },
                  "range": [
                    5478,
                    5490
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                5468,
                5496
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 237
                },
                "start": {
                  "column": 28,
                  "line": 235
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    5448,
                    5453
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 235
                    },
                    "start": {
                      "column": 8,
                      "line": 235
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
                    5454,
                    5458
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 235
                    },
                    "start": {
                      "column": 14,
                      "line": 235
                    }
                  }
                },
                "range": [
                  5448,
                  5458
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 235
                  },
                  "start": {
                    "column": 8,
                    "line": 235
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  5463,
                  5466
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 235
                  },
                  "start": {
                    "column": 23,
                    "line": 235
                  }
                }
              },
              "range": [
                5448,
                5466
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 235
                },
                "start": {
                  "column": 8,
                  "line": 235
                }
              }
            },
            "range": [
              5444,
              5496
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 237
              },
              "start": {
                "column": 4,
                "line": 235
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      5543,
                      5547
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 239
                      },
                      "start": {
                        "column": 15,
                        "line": 239
                      }
                    }
                  },
                  "range": [
                    5536,
                    5548
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 239
                    },
                    "start": {
                      "column": 8,
                      "line": 239
                    }
                  }
                }
              ],
              "range": [
                5526,
                5554
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 240
                },
                "start": {
                  "column": 29,
                  "line": 238
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    5505,
                    5510
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 238
                    },
                    "start": {
                      "column": 8,
                      "line": 238
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "range": [
                    5511,
                    5518
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 238
                    },
                    "start": {
                      "column": 14,
                      "line": 238
                    }
                  }
                },
                "range": [
                  5505,
                  5518
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 238
                  },
                  "start": {
                    "column": 8,
                    "line": 238
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  5523,
                  5524
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 238
                  },
                  "start": {
                    "column": 26,
                    "line": 238
                  }
                }
              },
              "range": [
                5505,
                5524
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 238
                },
                "start": {
                  "column": 8,
                  "line": 238
                }
              }
            },
            "range": [
              5501,
              5554
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 240
              },
              "start": {
                "column": 4,
                "line": 238
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                5566,
                5571
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 241
                },
                "start": {
                  "column": 11,
                  "line": 241
                }
              }
            },
            "range": [
              5559,
              5572
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 241
              },
              "start": {
                "column": 4,
                "line": 241
              }
            }
          }
        ],
        "range": [
          5438,
          5574
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 242
          },
          "start": {
            "column": 66,
            "line": 234
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example1",
        "optional": false,
        "range": [
          5381,
          5389
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 234
          },
          "start": {
            "column": 9,
            "line": 234
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 234
              },
              "start": {
                "column": 23,
                "line": 234
              }
            },
            "range": [
              5395,
              5402
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "range": [
                  5397,
                  5402
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 234
                  },
                  "start": {
                    "column": 25,
                    "line": 234
                  }
                }
              },
              "range": [
                5397,
                5402
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 234
                },
                "start": {
                  "column": 25,
                  "line": 234
                }
              }
            }
          },
          "range": [
            5390,
            5402
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 234
            },
            "start": {
              "column": 18,
              "line": 234
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 234
          },
          "start": {
            "column": 31,
            "line": 234
          }
        },
        "range": [
          5403,
          5437
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
                    "name": "type",
                    "optional": false,
                    "range": [
                      5407,
                      5411
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 234
                      },
                      "start": {
                        "column": 35,
                        "line": 234
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
                        "column": 44,
                        "line": 234
                      },
                      "start": {
                        "column": 39,
                        "line": 234
                      }
                    },
                    "range": [
                      5411,
                      5416
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          5413,
                          5416
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 234
                          },
                          "start": {
                            "column": 41,
                            "line": 234
                          }
                        }
                      },
                      "range": [
                        5413,
                        5416
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 234
                        },
                        "start": {
                          "column": 41,
                          "line": 234
                        }
                      }
                    }
                  },
                  "range": [
                    5407,
                    5417
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 234
                    },
                    "start": {
                      "column": 35,
                      "line": 234
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "range": [
                      5418,
                      5425
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 234
                      },
                      "start": {
                        "column": 46,
                        "line": 234
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
                        "column": 56,
                        "line": 234
                      },
                      "start": {
                        "column": 53,
                        "line": 234
                      }
                    },
                    "range": [
                      5425,
                      5428
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          5427,
                          5428
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 234
                          },
                          "start": {
                            "column": 55,
                            "line": 234
                          }
                        }
                      },
                      "range": [
                        5427,
                        5428
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 234
                        },
                        "start": {
                          "column": 55,
                          "line": 234
                        }
                      }
                    }
                  },
                  "range": [
                    5418,
                    5428
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 234
                    },
                    "start": {
                      "column": 46,
                      "line": 234
                    }
                  }
                }
              ],
              "range": [
                5405,
                5430
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 234
                },
                "start": {
                  "column": 33,
                  "line": 234
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                5433,
                5437
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 234
                },
                "start": {
                  "column": 61,
                  "line": 234
                }
              }
            }
          ],
          "range": [
            5405,
            5437
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 234
            },
            "start": {
              "column": 33,
              "line": 234
            }
          }
        }
      },
      "range": [
        5372,
        5574
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 242
        },
        "start": {
          "column": 0,
          "line": 234
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
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      5689,
                      5693
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 246
                      },
                      "start": {
                        "column": 15,
                        "line": 246
                      }
                    }
                  },
                  "range": [
                    5682,
                    5694
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 246
                    },
                    "start": {
                      "column": 8,
                      "line": 246
                    }
                  }
                }
              ],
              "range": [
                5672,
                5700
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 247
                },
                "start": {
                  "column": 28,
                  "line": 245
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    5652,
                    5657
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 245
                    },
                    "start": {
                      "column": 8,
                      "line": 245
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
                    5658,
                    5662
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 245
                    },
                    "start": {
                      "column": 14,
                      "line": 245
                    }
                  }
                },
                "range": [
                  5652,
                  5662
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 245
                  },
                  "start": {
                    "column": 8,
                    "line": 245
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  5667,
                  5670
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 245
                  },
                  "start": {
                    "column": 23,
                    "line": 245
                  }
                }
              },
              "range": [
                5652,
                5670
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
            "range": [
              5648,
              5700
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 247
              },
              "start": {
                "column": 4,
                "line": 245
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      5769,
                      5773
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 249
                      },
                      "start": {
                        "column": 15,
                        "line": 249
                      }
                    }
                  },
                  "range": [
                    5762,
                    5774
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 249
                    },
                    "start": {
                      "column": 8,
                      "line": 249
                    }
                  }
                }
              ],
              "range": [
                5752,
                5780
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 250
                },
                "start": {
                  "column": 51,
                  "line": 248
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      5709,
                      5714
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 248
                      },
                      "start": {
                        "column": 8,
                        "line": 248
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
                      5715,
                      5719
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 248
                      },
                      "start": {
                        "column": 14,
                        "line": 248
                      }
                    }
                  },
                  "range": [
                    5709,
                    5719
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 248
                    },
                    "start": {
                      "column": 8,
                      "line": 248
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    5724,
                    5727
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 248
                    },
                    "start": {
                      "column": 23,
                      "line": 248
                    }
                  }
                },
                "range": [
                  5709,
                  5727
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 248
                  },
                  "start": {
                    "column": 8,
                    "line": 248
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      5731,
                      5736
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 248
                      },
                      "start": {
                        "column": 30,
                        "line": 248
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "range": [
                      5737,
                      5744
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 248
                      },
                      "start": {
                        "column": 36,
                        "line": 248
                      }
                    }
                  },
                  "range": [
                    5731,
                    5744
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 248
                    },
                    "start": {
                      "column": 30,
                      "line": 248
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    5749,
                    5750
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 248
                    },
                    "start": {
                      "column": 48,
                      "line": 248
                    }
                  }
                },
                "range": [
                  5731,
                  5750
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 248
                  },
                  "start": {
                    "column": 30,
                    "line": 248
                  }
                }
              },
              "range": [
                5709,
                5750
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 248
                },
                "start": {
                  "column": 8,
                  "line": 248
                }
              }
            },
            "range": [
              5705,
              5780
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 250
              },
              "start": {
                "column": 4,
                "line": 248
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                5792,
                5797
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 251
                },
                "start": {
                  "column": 11,
                  "line": 251
                }
              }
            },
            "range": [
              5785,
              5798
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 251
              },
              "start": {
                "column": 4,
                "line": 251
              }
            }
          }
        ],
        "range": [
          5642,
          5800
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 252
          },
          "start": {
            "column": 66,
            "line": 244
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example2",
        "optional": false,
        "range": [
          5585,
          5593
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 244
          },
          "start": {
            "column": 9,
            "line": 244
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 244
              },
              "start": {
                "column": 23,
                "line": 244
              }
            },
            "range": [
              5599,
              5606
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "range": [
                  5601,
                  5606
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 244
                  },
                  "start": {
                    "column": 25,
                    "line": 244
                  }
                }
              },
              "range": [
                5601,
                5606
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 244
                },
                "start": {
                  "column": 25,
                  "line": 244
                }
              }
            }
          },
          "range": [
            5594,
            5606
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 244
            },
            "start": {
              "column": 18,
              "line": 244
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 244
          },
          "start": {
            "column": 31,
            "line": 244
          }
        },
        "range": [
          5607,
          5641
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
                    "name": "type",
                    "optional": false,
                    "range": [
                      5611,
                      5615
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 244
                      },
                      "start": {
                        "column": 35,
                        "line": 244
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
                        "column": 44,
                        "line": 244
                      },
                      "start": {
                        "column": 39,
                        "line": 244
                      }
                    },
                    "range": [
                      5615,
                      5620
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          5617,
                          5620
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 244
                          },
                          "start": {
                            "column": 41,
                            "line": 244
                          }
                        }
                      },
                      "range": [
                        5617,
                        5620
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 244
                        },
                        "start": {
                          "column": 41,
                          "line": 244
                        }
                      }
                    }
                  },
                  "range": [
                    5611,
                    5621
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 244
                    },
                    "start": {
                      "column": 35,
                      "line": 244
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "range": [
                      5622,
                      5629
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 244
                      },
                      "start": {
                        "column": 46,
                        "line": 244
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
                        "column": 56,
                        "line": 244
                      },
                      "start": {
                        "column": 53,
                        "line": 244
                      }
                    },
                    "range": [
                      5629,
                      5632
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          5631,
                          5632
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 244
                          },
                          "start": {
                            "column": 55,
                            "line": 244
                          }
                        }
                      },
                      "range": [
                        5631,
                        5632
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 244
                        },
                        "start": {
                          "column": 55,
                          "line": 244
                        }
                      }
                    }
                  },
                  "range": [
                    5622,
                    5632
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 244
                    },
                    "start": {
                      "column": 46,
                      "line": 244
                    }
                  }
                }
              ],
              "range": [
                5609,
                5634
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 244
                },
                "start": {
                  "column": 33,
                  "line": 244
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                5637,
                5641
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 244
                },
                "start": {
                  "column": 61,
                  "line": 244
                }
              }
            }
          ],
          "range": [
            5609,
            5641
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 244
            },
            "start": {
              "column": 33,
              "line": 244
            }
          }
        }
      },
      "range": [
        5576,
        5800
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 252
        },
        "start": {
          "column": 0,
          "line": 244
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
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      5915,
                      5919
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 256
                      },
                      "start": {
                        "column": 15,
                        "line": 256
                      }
                    }
                  },
                  "range": [
                    5908,
                    5920
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 256
                    },
                    "start": {
                      "column": 8,
                      "line": 256
                    }
                  }
                }
              ],
              "range": [
                5898,
                5926
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 257
                },
                "start": {
                  "column": 28,
                  "line": 255
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    5878,
                    5883
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 255
                    },
                    "start": {
                      "column": 8,
                      "line": 255
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
                    5884,
                    5888
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 255
                    },
                    "start": {
                      "column": 14,
                      "line": 255
                    }
                  }
                },
                "range": [
                  5878,
                  5888
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 255
                  },
                  "start": {
                    "column": 8,
                    "line": 255
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  5893,
                  5896
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 255
                  },
                  "start": {
                    "column": 23,
                    "line": 255
                  }
                }
              },
              "range": [
                5878,
                5896
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 255
                },
                "start": {
                  "column": 8,
                  "line": 255
                }
              }
            },
            "range": [
              5874,
              5926
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 257
              },
              "start": {
                "column": 4,
                "line": 255
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      5987,
                      5991
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 259
                      },
                      "start": {
                        "column": 15,
                        "line": 259
                      }
                    }
                  },
                  "range": [
                    5980,
                    5992
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 259
                    },
                    "start": {
                      "column": 8,
                      "line": 259
                    }
                  }
                }
              ],
              "range": [
                5970,
                5998
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 260
                },
                "start": {
                  "column": 43,
                  "line": 258
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    5935,
                    5940
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 258
                    },
                    "start": {
                      "column": 8,
                      "line": 258
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
                    5941,
                    5945
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 258
                    },
                    "start": {
                      "column": 14,
                      "line": 258
                    }
                  }
                },
                "range": [
                  5935,
                  5945
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 258
                  },
                  "start": {
                    "column": 8,
                    "line": 258
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      5949,
                      5954
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 258
                      },
                      "start": {
                        "column": 22,
                        "line": 258
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "range": [
                      5955,
                      5962
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 258
                      },
                      "start": {
                        "column": 28,
                        "line": 258
                      }
                    }
                  },
                  "range": [
                    5949,
                    5962
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 258
                    },
                    "start": {
                      "column": 22,
                      "line": 258
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    5967,
                    5968
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 258
                    },
                    "start": {
                      "column": 40,
                      "line": 258
                    }
                  }
                },
                "range": [
                  5949,
                  5968
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 258
                  },
                  "start": {
                    "column": 22,
                    "line": 258
                  }
                }
              },
              "range": [
                5935,
                5968
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 258
                },
                "start": {
                  "column": 8,
                  "line": 258
                }
              }
            },
            "range": [
              5931,
              5998
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 260
              },
              "start": {
                "column": 4,
                "line": 258
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                6010,
                6015
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 261
                },
                "start": {
                  "column": 11,
                  "line": 261
                }
              }
            },
            "range": [
              6003,
              6016
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 261
              },
              "start": {
                "column": 4,
                "line": 261
              }
            }
          }
        ],
        "range": [
          5868,
          6018
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 262
          },
          "start": {
            "column": 66,
            "line": 254
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example3",
        "optional": false,
        "range": [
          5811,
          5819
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 254
          },
          "start": {
            "column": 9,
            "line": 254
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 254
              },
              "start": {
                "column": 23,
                "line": 254
              }
            },
            "range": [
              5825,
              5832
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "range": [
                  5827,
                  5832
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 254
                  },
                  "start": {
                    "column": 25,
                    "line": 254
                  }
                }
              },
              "range": [
                5827,
                5832
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 254
                },
                "start": {
                  "column": 25,
                  "line": 254
                }
              }
            }
          },
          "range": [
            5820,
            5832
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 254
            },
            "start": {
              "column": 18,
              "line": 254
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 254
          },
          "start": {
            "column": 31,
            "line": 254
          }
        },
        "range": [
          5833,
          5867
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
                    "name": "type",
                    "optional": false,
                    "range": [
                      5837,
                      5841
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 254
                      },
                      "start": {
                        "column": 35,
                        "line": 254
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
                        "column": 44,
                        "line": 254
                      },
                      "start": {
                        "column": 39,
                        "line": 254
                      }
                    },
                    "range": [
                      5841,
                      5846
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          5843,
                          5846
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 254
                          },
                          "start": {
                            "column": 41,
                            "line": 254
                          }
                        }
                      },
                      "range": [
                        5843,
                        5846
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 254
                        },
                        "start": {
                          "column": 41,
                          "line": 254
                        }
                      }
                    }
                  },
                  "range": [
                    5837,
                    5847
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 254
                    },
                    "start": {
                      "column": 35,
                      "line": 254
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "range": [
                      5848,
                      5855
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 254
                      },
                      "start": {
                        "column": 46,
                        "line": 254
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
                        "column": 56,
                        "line": 254
                      },
                      "start": {
                        "column": 53,
                        "line": 254
                      }
                    },
                    "range": [
                      5855,
                      5858
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          5857,
                          5858
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 254
                          },
                          "start": {
                            "column": 55,
                            "line": 254
                          }
                        }
                      },
                      "range": [
                        5857,
                        5858
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 254
                        },
                        "start": {
                          "column": 55,
                          "line": 254
                        }
                      }
                    }
                  },
                  "range": [
                    5848,
                    5858
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 254
                    },
                    "start": {
                      "column": 46,
                      "line": 254
                    }
                  }
                }
              ],
              "range": [
                5835,
                5860
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 254
                },
                "start": {
                  "column": 33,
                  "line": 254
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                5863,
                5867
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 254
                },
                "start": {
                  "column": 61,
                  "line": 254
                }
              }
            }
          ],
          "range": [
            5835,
            5867
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 254
            },
            "start": {
              "column": 33,
              "line": 254
            }
          }
        }
      },
      "range": [
        5802,
        6018
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 262
        },
        "start": {
          "column": 0,
          "line": 254
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 263
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
